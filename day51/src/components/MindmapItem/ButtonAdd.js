"use client";

import { mutate } from "swr";

const Button = ({ user }) => {
  const handleAdd = async () => {
    const data = {
      userId: `${user?.sub}`,
      name: "Mindmap không tên",
      title: "Chưa có title",
      flow: [],
    };
    const api = `https://mindmapdb.onrender.com/api/v1/mindmap`;
    const response = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    mutate(api, response.json(), false);
  };
  return (
    <button
      className="bg-green-500 text-white py-[10px] px-[20px] rounded-[10px] hover:bg-green-700"
      onClick={handleAdd}
    >
      Thêm mới
    </button>
  );
};

export default Button;
