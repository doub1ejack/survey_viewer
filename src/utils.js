import dagre from "dagre";

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 175;
const nodeHeight = 35;

/**
 * Arranges nodes and edges in a graph layout using the Dagre library for automatic graph layout.
 *
 * @param {Array} nodes - The array of node objects to be laid out. Each node should have an `id`, `width`, and `height`.
 * @param {Array} edges - The array of edge objects to be laid out. Each edge should have a `source` and `target`.
 * @param {string} [direction="TB"] - The direction of the layout. "TB" for top-to-bottom, "LR" for left-to-right.
 * @returns {Object} An object containing the updated nodes and edges with their new positions.
 *
 * @description
 * This function uses the Dagre library to compute the layout of a directed graph. Dagre is a JavaScript library
 * that makes it easy to lay out directed graphs on the client side. It calculates the position of each node and edge
 * in the graph based on the specified direction, either top-to-bottom (TB) or left-to-right (LR).
 *
 * The function first sets up the graph with the specified direction. It then adds each node and edge to the Dagre graph.
 * After running the Dagre layout algorithm, it updates the position of each node to match the calculated layout,
 * adjusting the position to align with the top-left anchor point used by React Flow.
 */
export const getLayoutedElements = (nodes, edges, direction = "TB") => {
  const isHorizontal = direction === "LR";
  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.targetPosition = isHorizontal ? "left" : "top";
    node.sourcePosition = isHorizontal ? "right" : "bottom";

    // We are shifting the dagre node position (anchor=center center) to the top left
    // so it matches the React Flow node anchor point (top left).
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };

    return node;
  });

  return { nodes, edges };
};