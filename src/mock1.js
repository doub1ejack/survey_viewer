const position = { x: 0, y: 0 };
const edgeType = "smoothstep";

export const initialNodes = [
  { id: "intro", data: { label: "intro" }, position: { x: 0, y: 0 } },
  { id: "q1", data: { label: "Q1" }, position: { x: 0, y: 0 } },
  { id: "q2", data: { label: "Q2" }, position: { x: 0, y: 0 } },
  { id: "close", data: { label: "Close" }, position: { x: 0, y: 0 } },
  {
    id: "online_refusal",
    data: { label: "online_refusal" },
    position: { x: 0, y: 0 },
  },
  { id: "ineligible", data: { label: "ineligible" }, position: { x: 0, y: 0 } },
  { id: "refusal", data: { label: "refusal" }, position: { x: 0, y: 0 } },
];

export const initialEdges = [
  { id: "intro-q2", source: "intro", target: "q2", label: "A1" },
  {
    id: "intro-refusal",
    source: "intro",
    target: "refusal",
    label: "A2",
  },
  {
    id: "intro-ineligible",
    source: "intro",
    target: "ineligible",
    label: "A2",
  },
  {
    id: "intro-refusal-4",
    source: "intro",
    target: "refusal",
    label: "A3",
  },
  { id: "intro-q2-default", source: "intro", target: "q2", label: "A1" },
  { id: "q1-q2", source: "q1", target: "q2", label: "A1" },
  {
    id: "q1-ineligible",
    source: "q1",
    target: "ineligible",
    label: "A2",
  },
  { id: "q1-q2-default", source: "q1", target: "q2", label: "A1" },
  { id: "q2-close", source: "q2", target: "close", label: "A1" },
  {
    id: "q2-online_refusal",
    source: "q2",
    target: "online_refusal",
    label: "A2",
  },
  { id: "q2-close-default", source: "q2", target: "close", label: "A1" },
];
