import React, { useCallback, useState, useEffect } from "react";
import ReactFlow, {
  addEdge,
  ConnectionLineType,
  useNodesState,
  useEdgesState,
  MiniMap,
} from "reactflow";
import "reactflow/dist/style.css";
import { getLayoutedElements } from "./utils.js";  // uses dagre for automatic layout
import "./index.css";

// import mock data
import { initialNodes as initialNodes1, initialEdges as initialEdges1 } from "./mock1.js";
import { initialNodes as initialNodes2, initialEdges as initialEdges2 } from "./mock2.js";

// react component
const LayoutFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [highlightedNode, setHighlightedNode] = useState(null);
  const [activeSurvey, setActiveSurvey] = useState("survey1");
  const [activeLayout, setActiveLayout] = useState("TB");

  const loadSurvey = useCallback((nodes, edges, survey) => {
    const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(nodes, edges);
    setNodes([...layoutedNodes]);
    setEdges([...layoutedEdges]);
    setActiveSurvey(survey);
  }, [setNodes, setEdges]);

  useEffect(() => {
    loadSurvey(initialNodes1, initialEdges1, "survey1");
  }, [loadSurvey]);

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
      setActiveLayout(direction);
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
    className: edge.source === highlightedNode || edge.target === highlightedNode
      ? "highlighted-edge"
      : "default-edge",
    animated: edge.source === highlightedNode || edge.target === highlightedNode
      ? true
      : false,
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
        nodesDraggable={true}         // Enable node dragging
        nodesConnectable={false}      // Disable node connecting
      >
        {nodes.length > 10 && <MiniMap />} {/* Show MiniMap for large surveys */}
      </ReactFlow>
      <div className="controls">
        <div className="pair">
          <button
            className={activeLayout === "TB" ? "active" : ""}
            onClick={() => onLayoutButtonClick("TB")}
          >
            Vertical
          </button>
          <button
            className={activeLayout === "LR" ? "active" : ""}
            onClick={() => onLayoutButtonClick("LR")}
          >
            Horizontal
          </button>
        </div>
        <div className="pair">
          <button
            className={activeSurvey === "survey1" ? "active" : ""}
            onClick={() => loadSurvey(initialNodes1, initialEdges1, "survey1")}
          >
            Survey 1
          </button>
          <button
            className={activeSurvey === "survey2" ? "active" : ""}
            onClick={() => loadSurvey(initialNodes2, initialEdges2, "survey2")}
          >
            Survey 2
          </button>
        </div>
      </div>
    </div>
  );
};

export default LayoutFlow;
