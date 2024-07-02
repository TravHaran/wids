import { useState, useEffect } from "react";
import ReactFlow, { MiniMap, Controls, Background } from "reactflow";

import "reactflow/dist/style.css";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "Inbound" } },
  { id: "2", position: { x: 0, y: 200 }, data: { label: "Receiving" } },
  { id: "3", position: { x: 400, y: 200 }, data: { label: "Picking" } },
  { id: "4", position: { x: 400, y: 400 }, data: { label: "Sorting" } },
  { id: "5", position: { x: 800, y: 400 }, data: { label: "Shipping" } },
  { id: "6", position: { x: 800, y: 600 }, data: { label: "Outbound" } },
];
const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3" },
  { id: "e3-4", source: "3", target: "4" },
  { id: "e4-5", source: "4", target: "5" },
  { id: "e5-6", source: "5", target: "6" },
];

export default function Overview() {
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onInit = (rf) => {
    setReactFlowInstance(rf);
  };

  useEffect(() => {
    if (reactFlowInstance && initialNodes?.length) {
      reactFlowInstance.fitView();
    }
  }, [reactFlowInstance, initialNodes?.length]);

  return (
    <div style={{ width: "100%", height: "100%", paddingBottom: "3%" }}>
      <ReactFlow nodes={initialNodes} edges={initialEdges} onInit={onInit}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
