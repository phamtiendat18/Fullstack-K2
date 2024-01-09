"use client";
import { ReactFlowProvider } from "reactflow";
import AddNodeOnEdgeDrop from "../AddNodeOnEdgeDrop/AddNodeOnEdgeDrop";

const MindMap = () => {
  return (
    <ReactFlowProvider>
      <AddNodeOnEdgeDrop></AddNodeOnEdgeDrop>
    </ReactFlowProvider>
  );
};

export default MindMap;
