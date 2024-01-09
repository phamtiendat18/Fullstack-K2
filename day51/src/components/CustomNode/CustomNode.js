import "./CustomNode.css";
import React, { useEffect, useState } from "react";
import { Handle } from "reactflow";

const CustomNode = ({ data }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [note, setNote] = useState(data.label);
  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleChange = (event) => {
    setNote(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    data.label = note;
    setIsEditing(false);
  };

  return (
    <div onDoubleClick={handleDoubleClick}>
      {isEditing ? (
        <form
          onSubmit={handleSubmit}
          className="w-[200px] h-[50px] border border-black bg-green-500 rounded-[5px] text-center p-[5px]"
        >
          {!data?.id ? "" : <Handle type="target" position="top" id="a" />}
          <input
            type="text"
            value={note}
            onBlur={handleBlur}
            onChange={handleChange}
            className="w-full h-full nodrag bg-green-500 border border-white outline-none text-white p-[10px] rounded-[5px]"
          />

          <Handle type="source" position="bottom" id="b" />
        </form>
      ) : (
        <div className="w-[200px] h-[50px] border rounded-[5px] bg-green-500 text-white p-[10px] text-center">
          {!data?.id ? "" : <Handle type="target" position="top" id="a" />}
          <div className="truncate">{note}</div>
          <Handle type="source" position="bottom" id="b" className="" />
        </div>
      )}
    </div>
  );
};
export default CustomNode;
