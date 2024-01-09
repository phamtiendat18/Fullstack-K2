"use server";

import ButtonAdd from "@/components/MindmapItem/ButtonAdd";
import MindmapItem from "@/components/MindmapItem/MindmapItem";
import { getSession } from "@auth0/nextjs-auth0";

const Mindmap = async () => {
  const { user } = await getSession();
  // console.log(user);
  // useEffect(() => {

  const api = `https://mindmapdb.onrender.com/api/v1/mindmap/user/${user?.sub} `;
  const response = await fetch(api, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold">Mindmap của tôi</h1>
        <ButtonAdd user={user} />
      </div>
      <div className="flex flex-col gap-[20px] p-[20px]">
        {data.length !== 0 ? (
          data.map((item) => (
            <MindmapItem
              key={item._id}
              name={item?.name}
              des={item?.title}
              time={item?.createdAt}
              id={item?._id}
            />
          ))
        ) : (
          <h2>Chưa có mindmap nào</h2>
        )}
      </div>
    </>
  );
};

export default Mindmap;
