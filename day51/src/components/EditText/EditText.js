"use client";

import { useEffect, useState } from "react";

const EditText = ({ value, onValue }) => {
  const [title, setTitle] = useState(value);
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    document.title = title;
  }, [title]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    onValue(title);
  };
  return (
    <div
      onDoubleClick={() => setIsEditing(true)}
      onBlur={() => {
        setIsEditing(false);
      }}
      className="w-fit"
    >
      {!isEditing ? (
        <div className="w-fit max-w-[300px] h-[50px] border rounded-[5px] bg-green-500 text-white p-[10px] text-center">
          <div className="truncate">{title || value}</div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className=" w-[300px] max-w-[300px] h-[50px] border border-black bg-green-500 rounded-[5px] text-center p-[5px]"
        >
          <input
            type="text"
            value={title || value}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full h-full bg-green-500 border border-white outline-none text-white p-[10px] rounded-[5px]"
          />
        </form>
      )}
    </div>
  );
};

export default EditText;
