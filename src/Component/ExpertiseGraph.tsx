import React from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  Handle,
  Position,
} from "reactflow";
import { Code, Database, Brain, Cloud, Users, Award } from "lucide-react";
import "reactflow/dist/style.css";

const expertiseCenterId = "expertise-center";

const iconNodes = [
  {
    id: "icon-code",
    type: "iconNode",
    data: { label: "Full-Stack Engineering", icon: <Code className="w-8 h-8 text-red-700" /> },
    position: { x: 0, y: -400 },
  },
  {
    id: "icon-database",
    type: "iconNode",
    data: { label: "Backend & Infrastructure", icon: <Database className="w-8 h-8 text-blue-700" /> },
  position: { x: 400, y: -250 },
  },
  {
    id: "icon-brain",
    type: "iconNode",
    data: { label: "AI & Machine Learning", icon: <Brain className="w-8 h-8 text-purple-700" /> },
  position: { x: 400, y: 250 },
  },
  {
    id: "icon-cloud",
    type: "iconNode",
    data: { label: "DevOps & Observability", icon: <Cloud className="w-8 h-8 text-green-700" /> },
    position: { x: 0, y: 400 },
  },
  {
    id: "icon-users",
    type: "iconNode",
    data: { label: "Leadership & Management", icon: <Users className="w-8 h-8 text-orange-700" /> },
    position: { x: -346, y: 200 },
  },
  {
    id: "icon-award",
    type: "iconNode",
    data: { label: "Testing & Quality", icon: <Award className="w-8 h-8 text-teal-700" /> },
    position: { x: -346, y: -200 },
  },
];

const categoryNodes = [
  {
    id: "cat-fullstack",
    type: "categoryNode",
    data: { label: "Full-Stack Engineering" },
    position: { x: 0, y: -250 },
  },
  {
    id: "cat-backend",
    type: "categoryNode",
    data: { label: "Backend & Infrastructure" },
    position: { x: 225, y: -100 },
  },
  {
    id: "cat-ai",
    type: "categoryNode",
    data: { label: "AI & Machine Learning" },
    position: { x: 225, y: 100 },
  },
  {
    id: "cat-devops",
    type: "categoryNode",
    data: { label: "DevOps & Observability" },
    position: { x: 0, y: 250 },
  },
  {
    id: "cat-leadership",
    type: "categoryNode",
    data: { label: "Leadership & Management" },
    position: { x: -225, y: 100 },
  },
  {
    id: "cat-testing",
    type: "categoryNode",
    data: { label: "Testing & Quality" },
    position: { x: -225, y: -100 },
  },
];

const badgeNodes = [
  // Full-Stack Engineering Badges
  ...["React", "Next.js", "TypeScript", "Nx", "Vite", "Webpack"].map((tech, i, arr) => {
    const angle = (2 * Math.PI * i) / arr.length;
    const radius = 80;
    const center = { x: 0, y: -400 };
    return {
      id: `badge-fullstack-${tech}`,
      type: "badgeNode",
      data: { label: tech, color: "red" },
      position: {
        x: center.x + radius * Math.cos(angle),
        y: center.y + radius * Math.sin(angle),
      },
    };
  }),
  // Backend & Infrastructure Badges
  ...["Python", "FastAPI", "Node.js", "Kubernetes", "AWS", "Terraform", "PostgreSQL"].map((tech, i, arr) => {
    const angle = (2 * Math.PI * i) / arr.length;
  const radius = 90;
    const center = { x: 400, y: -250 };
    return {
      id: `badge-backend-${tech}`,
      type: "badgeNode",
      data: { label: tech, color: "blue" },
      position: {
        x: center.x + radius * Math.cos(angle),
        y: center.y + radius * Math.sin(angle),
      },
    };
  }),
  // AI & Machine Learning Badges
  ...["Transformers", "LangChain", "BERT", "RAG", "Pinecone", "Chroma DB"].map((tech, i, arr) => {
    // Distribute badges evenly in a full circle
    const angle = (2 * Math.PI * i) / arr.length;
    const radius = 100;
    const center = { x: 400, y: 250 };
    return {
      id: `badge-ai-${tech}`,
      type: "badgeNode",
      data: { label: tech, color: "purple" },
      position: {
        x: center.x + radius * Math.cos(angle),
        y: center.y + radius * Math.sin(angle),
      },
    };
  }),
  // DevOps & Observability Badges
  ...["GitLab CI/CD", "Prometheus", "Grafana", "Sentry", "Opsgenie", "Helm"].map((tech, i, arr) => {
    const angle = (2 * Math.PI * i) / arr.length;
    const radius = 80;
    const center = { x: 0, y: 400 };
    return {
      id: `badge-devops-${tech}`,
      type: "badgeNode",
      data: { label: tech, color: "green" },
      position: {
        x: center.x + radius * Math.cos(angle),
        y: center.y + radius * Math.sin(angle),
      },
    };
  }),
  // Leadership & Management Badges
  ...["Architectural Planning", "Cross-team Alignment", "Agile Coaching"].map((tech, i, arr) => {
    const angle = (2 * Math.PI * i) / arr.length;
    const radius = 80;
    const center = { x: -346, y: 200 };
    return {
      id: `badge-leadership-${tech}`,
      type: "badgeNode",
      data: { label: tech, color: "orange" },
      position: {
        x: center.x + radius * Math.cos(angle),
        y: center.y + radius * Math.sin(angle),
      },
    };
  }),
  // Testing & Quality Badges
  ...["Playwright", "Jest", "SAST", "DAST", "TDD", "WebdriverIO"].map((tech, i, arr) => {
    const angle = (2 * Math.PI * i) / arr.length;
    const radius = 80;
    const center = { x: -346, y: -200 };
    return {
      id: `badge-testing-${tech}`,
      type: "badgeNode",
      data: { label: tech, color: "teal" },
      position: {
        x: center.x + radius * Math.cos(angle),
        y: center.y + radius * Math.sin(angle),
      },
    };
  }),
];

const nodes = [
  {
    id: expertiseCenterId,
    type: "centerNode",
    data: { label: "Expertise" },
    position: { x: 0, y: -120 }, // Moved further up for better centering
  },
  ...iconNodes,
  ...categoryNodes,
  ...badgeNodes,
];

const edges = [
  // Center to categories (solid red)
  ...categoryNodes.map((cat) => ({
    id: `edge-center-cat-${cat.id}`,
    source: expertiseCenterId,
    target: cat.id,
    animated: true,
    style: { stroke: "#e11d48", strokeWidth: 4 },
  })),
  // Categories to icons (solid red)
  ...categoryNodes.map((cat, i) => ({
    id: `edge-cat-icon-${cat.id}`,
    source: cat.id,
    target: iconNodes[i].id,
    animated: true,
    style: { stroke: "#e11d48", strokeWidth: 3 },
  })),
  // Icons to badges (dashed red)
  ...iconNodes.map((icon, i) => {
    let badgeArr = badgeNodes.filter((b) => b.id.startsWith(`badge-${icon.id.split("icon-")[1]}`));
    return badgeArr.map((badge) => ({
      id: `edge-icon-badge-${icon.id}-${badge.id}`,
      source: icon.id,
      target: badge.id,
      animated: false,
      style: { stroke: "#e11d48", strokeWidth: 2, strokeDasharray: "6 4" },
    }));
  }).flat(),
];

const CenterNode = ({ data }) => (
  <div className="bg-transparent text-red-700 font-extrabold text-[2.5rem] w-52 h-52 flex items-center justify-center rounded-full border-2 border-red-700 font-Archivo">
    {data.label}
  </div>
);
const IconNode = ({ data }) => (
  <div className="flex items-center justify-center">{data.icon}</div>
);

const CategoryNode = ({ data }) => (
  <div
    className={`bg-white px-6 py-3 rounded-full shadow-lg border-2 text-lg font-bold text-center text-black ${
      data.label === "Full-Stack Engineering"
        ? "border-red-700"
        : data.label === "Backend & Infrastructure"
        ? "border-blue-700"
        : data.label === "AI & Machine Learning"
        ? "border-purple-700"
        : data.label === "DevOps & Observability"
        ? "border-green-700"
        : data.label === "Leadership & Management"
        ? "border-orange-700"
        : data.label === "Testing & Quality"
        ? "border-teal-700"
        : "border-gray-300"
    }`}
  >
    {data.label}
  </div>
);
const BadgeNode = ({ data }) => (
  <div
    style={{
      backgroundColor:
        data.color === "red"
          ? "#fee2e2"
          : data.color === "blue"
          ? "#dbeafe"
          : data.color === "purple"
          ? "#ede9fe"
          : data.color === "green"
          ? "#d1fae5"
          : data.color === "orange"
          ? "#ffedd5"
          : data.color === "teal"
          ? "#ccfbf1"
          : "#f3f4f6",
      color:
        data.color === "red"
          ? "#be123c"
          : data.color === "blue"
          ? "#1d4ed8"
          : data.color === "purple"
          ? "#7c3aed"
          : data.color === "green"
          ? "#059669"
          : data.color === "orange"
          ? "#ea580c"
          : data.color === "teal"
          ? "#0d9488"
          : "#374151",
      border: `1px solid ${
        data.color === "red"
          ? "#fee2e2"
          : data.color === "blue"
          ? "#dbeafe"
          : data.color === "purple"
          ? "#ede9fe"
          : data.color === "green"
          ? "#d1fae5"
          : data.color === "orange"
          ? "#ffedd5"
          : data.color === "teal"
          ? "#ccfbf1"
          : "#f3f4f6"
      }`,
      boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      borderRadius: "9999px",
      padding: "0.25rem 0.75rem",
      fontSize: "0.875rem",
      fontWeight: 500,
      display: "inline-block",
    }}
  >
    {data.label}
  </div>
);

const nodeTypes = {
  centerNode: CenterNode,
  iconNode: IconNode,
  categoryNode: CategoryNode,
  badgeNode: BadgeNode,
};

export default function ExpertiseGraph() {
  const [rfNodes, setNodes, onNodesChange] = useNodesState(nodes);
  const [rfEdges, setEdges, onEdgesChange] = useEdgesState(edges);

  // Detect mobile device
  const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches;
  // Set initial viewport for ReactFlow
  const initialViewport = isMobile
    ? { x: 0, y: 0, zoom: 0.5 }
    : { x: 0, y: 0, zoom: 1.5 };

  return (
    <div style={{ width: "100%", height: 500 }} className="md:my-24">
      <ReactFlow
        nodes={rfNodes}
        edges={rfEdges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        panOnDrag={false}
        zoomOnScroll={false}
        panOnScroll={false}
        zoomOnDoubleClick={false}
        minZoom={0.3}
        maxZoom={1.5}
        defaultViewport={initialViewport}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="#f3f4f6" gap={16} />
      </ReactFlow>
    </div>
  );
}
