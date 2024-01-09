"use client";
import { useMemo, useState } from "react";
import { Handle, Position } from "reactflow";

const handleStyle = { left: 10 };

const TextUpdaterNode = ({ data }) => {
  const [value, setValue] = useState("Công việc mới");
  return (
    <>
      <div>
        <input
          id="text"
          name="text"
          onChange={(e) => setValue(e.target.value)}
          className="nodrag"
          value={value}
        />
      </div>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
};
export default TextUpdaterNode;
