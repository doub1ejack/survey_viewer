import React, { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  ConnectionLineType,
  useNodesState,
  useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css";

import { initialNodes, initialEdges } from "./mock.js";
import { getLayoutedElements } from "./utils.js";  // uses dagre for automatic layout
import "./index.css";


const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
  initialNodes,
  initialEdges
);

// react component
const LayoutFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);
  const [highlightedNode, setHighlightedNode] = useState(null);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          { ...params, type: ConnectionLineType.SmoothStep, animated: true },
          eds
        )
      ),
    []
  );

  // Btns to change layout direction (Top>Bottom or Left>Right)
  const onLayoutButtonClick = useCallback(
    (direction) => {
      const {
        nodes: layoutedNodes,
        edges: layoutedEdges,
      } = getLayoutedElements(nodes, edges, direction);

      setNodes([...layoutedNodes]);
      setEdges([...layoutedEdges]);
    },
    [nodes, edges]
  );

  // Node onClick event
  const onNodeClick = useCallback(
    (event, node) => {
      setHighlightedNode(node.id);
    },
    [setHighlightedNode]
  );

  // Apply CSS class based on whether the edge is connected to the highlighted node
  const highlightedEdges = edges.map((edge) => ({
    ...edge,
    className:
      edge.source === highlightedNode || edge.target === highlightedNode
        ? "highlighted-edge"
        : "default-edge",
  }));

  return (
    <div className="layoutflow">
      <ReactFlow
        nodes={nodes}                 // Array of nodes to be rendered
        edges={highlightedEdges}      // Array of edges to be rendered
        onNodesChange={onNodesChange} // Callback for when nodes change
        onEdgesChange={onEdgesChange} // Callback for when edges change
        onNodeClick={onNodeClick}     // Callback for when a node is clicked
        onConnect={onConnect}         // Callback for when a connection is made
        connectionLineType={ConnectionLineType.SmoothStep} // Type of connection line
        fitView                       // Automatically fit the view to the nodes and edges
      />
      <div className="controls">
        <button onClick={() => onLayoutButtonClick("TB")}>Vertical Layout</button>
        <button onClick={() => onLayoutButtonClick("LR")}>Horizontal Layout</button>
      </div>
    </div>
  );
};

export default LayoutFlow;
