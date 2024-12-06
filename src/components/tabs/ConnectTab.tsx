import React from "react";
import ReactFlow, {
  Controls,
  Panel,
  useNodesState,
  useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css";
import { AnimatedNode } from "../graph/AnimatedNode";
import { AnimatedEdge } from "../graph/AnimatedEdge";

const nodeTypes = {
  custom: AnimatedNode,
};

const edgeTypes = {
  animated: AnimatedEdge,
};

const proOptions = { hideAttribution: true };

const initialNodes = [
  {
    id: "1",
    type: "custom",
    position: { x: 400, y: 200 },
    data: {
      label: "AI in the Modern World",
      type: "Central Topic",
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=ai-world",
    },
  },
  {
    id: "2",
    type: "custom",
    position: { x: 100, y: 100 },
    data: {
      label: "Deep Learning in Healthcare",
      type: "Healthcare",
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=healthcare",
    },
  },
  {
    id: "2a",
    type: "custom",
    position: { x: 0, y: 200 },
    data: {
      label: "AI-Driven Diagnostics",
      type: "Application",
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=diagnostics",
    },
  },
  {
    id: "2b",
    type: "custom",
    position: { x: 50, y: 300 },
    data: {
      label: "Personalized Medicine",
      type: "Application",
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=medicine",
    },
  },
  {
    id: "3",
    type: "custom",
    position: { x: 700, y: 100 },
    data: {
      label: "AI in Creativity",
      type: "Creative",
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=creativity",
    },
  },
  {
    id: "3a",
    type: "custom",
    position: { x: 800, y: 200 },
    data: {
      label: "Generative Art",
      type: "Application",
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=art",
    },
  },
  {
    id: "3b",
    type: "custom",
    position: { x: 750, y: 300 },
    data: {
      label: "AI-Generated Music",
      type: "Application",
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=music",
    },
  },
  {
    id: "4",
    type: "custom",
    position: { x: 400, y: 400 },
    data: {
      label: "Future of Work with AI",
      type: "Future",
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=future-work",
    },
  },
  {
    id: "5",
    type: "custom",
    position: { x: 200, y: 500 },
    data: {
      label: "Automation in Manufacturing",
      type: "Industry",
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=automation",
    },
  },
  {
    id: "6",
    type: "custom",
    position: { x: 600, y: 500 },
    data: {
      label: "AI-Powered Remote Work",
      type: "Tools",
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=remote-work",
    },
  },
  {
    id: "7",
    type: "custom",
    position: { x: 100, y: 600 },
    data: {
      label: "Ethics in AI Development",
      type: "Ethics",
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=ethics",
    },
  },
  {
    id: "8",
    type: "custom",
    position: { x: 300, y: 700 },
    data: {
      label: "Bias and Fairness",
      type: "Challenge",
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=fairness",
    },
  },
  {
    id: "9",
    type: "custom",
    position: { x: 500, y: 700 },
    data: {
      label: "Regulatory Frameworks",
      type: "Policy",
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=regulation",
    },
  },
  {
    id: "10",
    type: "custom",
    position: { x: 700, y: 600 },
    data: {
      label: "AI and Society",
      type: "Impact",
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=society",
    },
  },
];

const initialEdges = [
  // Central node connections
  { id: "e1-2", source: "1", target: "2", type: "animated" },
  { id: "e1-3", source: "1", target: "3", type: "animated" },
  { id: "e1-4", source: "1", target: "4", type: "animated" },

  // Healthcare connections
  { id: "e2-2a", source: "2", target: "2a", type: "animated" },
  { id: "e2-2b", source: "2", target: "2b", type: "animated" },

  // Creativity connections
  { id: "e3-3a", source: "3", target: "3a", type: "animated" },
  { id: "e3-3b", source: "3", target: "3b", type: "animated" },

  // Future of Work connections
  { id: "e4-5", source: "4", target: "5", type: "animated" },
  { id: "e4-6", source: "4", target: "6", type: "animated" },

  // Ethics connections
  { id: "e7-8", source: "7", target: "8", type: "animated" },
  { id: "e7-9", source: "7", target: "9", type: "animated" },

  // Society connections
  { id: "e10-4", source: "10", target: "4", type: "animated" },
  { id: "e10-7", source: "10", target: "7", type: "animated" },
];

export function ConnectTab() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="h-[500px] relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        proOptions={proOptions}
        className="bg-transparent"
        minZoom={0.5}
        maxZoom={1.5}
        defaultViewport={{ x: 0, y: 0, zoom: 0.8 }}
      >
        <Controls className="!bg-[#14151F]/90 !border-white/10" />
        <Panel position="bottom-center" className="bg-transparent">
          <div className="text-sm text-gray-400">
            Drag to explore, scroll to zoom
          </div>
        </Panel>
      </ReactFlow>
    </div>
  );
}
