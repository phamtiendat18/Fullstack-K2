"use client";

import { useRouter } from "next/navigation";

const MindmapItem = ({ name, des, time, id }) => {
  const router = useRouter();
  const handleEdit = () => {
    return router.push(`/mindmap/${id}`);
  };
  const handleDelete = async () => {
    const api = `https://mindmapdb.onrender.com/api/v1/mindmap/${id}`;
    const response = await fetch(api, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return (
    <div className="grid grid-cols-4 shadow-md border rounded-[10px] p-[10px]">
      <div className="flex items-center justify-center">
        <input type="checkbox" className="w-[15px]" />
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col">
          <h3 className="text-lg font-medium">{name}</h3>
          <p>{des}</p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <h3>{time}</h3>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex gap-[5px]">
          <button onClick={handleEdit}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button onClick={handleDelete}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MindmapItem;
