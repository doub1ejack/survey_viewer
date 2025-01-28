const position = { x: 0, y: 0 };
const edgeType = "smoothstep";

/*
export const initialNodes = [
  {
    id: "5efba79f-a52c-47a2-a0ce-e9bd94c45952",
    data: {
      label: "start",
    },
  },
  {
    id: "cb6c9ecf-eeb9-414a-a534-a191ee6ea7b8",
    data: {
      label: "COFFEE_POPULARITY",
    },
  },
  {
    id: "515dfcd0-8d43-4aef-9519-3ebc3312ef71",
    data: {
      label: "COFFEE_SIZE",
    },
  },
  {
    id: "b75b5392-af2d-48ad-b5ee-0f85c0cfab35",
    data: {
      label: "COFFEE_TYPE",
    },
  },
  {
    id: "c3d33dad-d727-4e89-be5d-d16e7a0352c0",
    data: {
      label: "End dialog",
    },
  },
  {
    id: "881ecd1c-782f-42c1-b2f9-1a0674537931",
    data: {
      label: "Get Intent",
    },
  },
  {
    id: "ed6c4115-2a7e-485a-9c88-b06c6af0281e",
    data: {
      label: "Get Order Details",
    },
  },
  {
    id: "5dfa1418-0836-42ab-8151-3a455e72090e",
    data: {
      label: "Intent Mapper",
    },
  },
  {
    id: "fc84dd7b-f207-4770-8e3d-7058bbc81951",
    data: {
      label: "Message",
    },
  },
  {
    id: "560288e5-0af2-4d0c-b677-9397e4207848",
    data: {
      label: "STUB—IGNORE ME",
    },
  },
  {
    id: "cfee3c5d-4f8c-499f-9234-bdc258c56efe",
    data: {
      label: "Wrap Up",
    },
  },
];

export const initialEdges = [
  {
    id: "edge0",
    source: "5efba79f-a52c-47a2-a0ce-e9bd94c45952",
    target: "fc84dd7b-f207-4770-8e3d-7058bbc81951",
  },
  {
    id: "edge1",
    source: "fc84dd7b-f207-4770-8e3d-7058bbc81951",
    target: "881ecd1c-782f-42c1-b2f9-1a0674537931",
  },
  {
    id: "edge2",
    source: "881ecd1c-782f-42c1-b2f9-1a0674537931",
    target: "5dfa1418-0836-42ab-8151-3a455e72090e",
  },
  {
    id: "edge3",
    source: "5dfa1418-0836-42ab-8151-3a455e72090e",
    target: "881ecd1c-782f-42c1-b2f9-1a0674537931",
  },
  {
    id: "edge4",
    source: "5dfa1418-0836-42ab-8151-3a455e72090e",
    target: "ed6c4115-2a7e-485a-9c88-b06c6af0281e",
  },
  {
    id: "edge5",
    source: "5dfa1418-0836-42ab-8151-3a455e72090e",
    target: "560288e5-0af2-4d0c-b677-9397e4207848",
  },
  {
    id: "edge6",
    source: "ed6c4115-2a7e-485a-9c88-b06c6af0281e",
    target: "515dfcd0-8d43-4aef-9519-3ebc3312ef71",
  },
  {
    id: "edge7",
    source: "ed6c4115-2a7e-485a-9c88-b06c6af0281e",
    target: "b75b5392-af2d-48ad-b5ee-0f85c0cfab35",
  },
  {
    id: "edge8",
    source: "ed6c4115-2a7e-485a-9c88-b06c6af0281e",
    target: "cb6c9ecf-eeb9-414a-a534-a191ee6ea7b8",
  },
  {
    id: "edge9",
    source: "ed6c4115-2a7e-485a-9c88-b06c6af0281e",
    target: "cfee3c5d-4f8c-499f-9234-bdc258c56efe",
  },
  {
    id: "edge10",
    source: "515dfcd0-8d43-4aef-9519-3ebc3312ef71",
    target: "ed6c4115-2a7e-485a-9c88-b06c6af0281e",
  },
  {
    id: "edge11",
    source: "b75b5392-af2d-48ad-b5ee-0f85c0cfab35",
    target: "ed6c4115-2a7e-485a-9c88-b06c6af0281e",
  },
  {
    id: "edge12",
    source: "cfee3c5d-4f8c-499f-9234-bdc258c56efe",
    target: "c3d33dad-d727-4e89-be5d-d16e7a0352c0",
  },
];
*/
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
  { id: "intro-q2", source: "intro", target: "q2", label: "Opt 1" },
  {
    id: "intro-refusal",
    source: "intro",
    target: "refusal",
    label: "Opt 2",
  },
  {
    id: "intro-ineligible",
    source: "intro",
    target: "ineligible",
    label: "Opt 3",
  },
  {
    id: "intro-refusal-4",
    source: "intro",
    target: "refusal",
    label: "Opt 4",
  },
  { id: "intro-q2-default", source: "intro", target: "q2", label: "default" },
  { id: "q1-q2", source: "q1", target: "q2", label: "Opt 1" },
  {
    id: "q1-ineligible",
    source: "q1",
    target: "ineligible",
    label: "Opt 2",
  },
  { id: "q1-q2-default", source: "q1", target: "q2", label: "default" },
  { id: "q2-close", source: "q2", target: "close", label: "Opt 1" },
  {
    id: "q2-online_refusal",
    source: "q2",
    target: "online_refusal",
    label: "Opt 2",
  },
  { id: "q2-close-default", source: "q2", target: "close", label: "default" },
];
