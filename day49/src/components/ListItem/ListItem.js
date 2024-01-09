import Item from "../Item/Item";

const itemsApi = `https://api-pages.vercel.app/api/v1/pages`;
const getListItem = async () => {
  const response = await fetch(itemsApi);
  const data = await response.json();
  return data;
};
const ListItem = async () => {
  const data = await getListItem();
  return (
    <section>
      <h1 className="text-center mb-10">
        <span className="px-2 py-1 bg-orange-200 rounded-md text-orange-400 text-4xl font-medium mr-1">
          Ư
        </span>
        <span className="px-2 py-1 bg-orange-200 rounded-md text-orange-400 text-4xl font-medium mr-3">
          U
        </span>
        <span className="px-2 py-1 bg-orange-200 rounded-md text-orange-400 text-4xl font-medium mr-1">
          Đ
        </span>
        <span className="px-2 py-1 bg-orange-200 rounded-md text-orange-400 text-4xl font-medium mr-1">
          Ã
        </span>
        <span className="px-2 py-1 bg-orange-200 rounded-md text-orange-400 text-4xl font-medium mr-1">
          I
        </span>
      </h1>
      <div className="w-full flex flex-wrap justify-center items-center gap-[20px] shadow-md rounded-md py-10 mb-10 ">
        {data.map(({ id, destinationBox, home }, index) => {
          return index < 6 ? (
            <Item
              key={id}
              src={destinationBox[0].src}
              name={home.name}
              content={home.content}
              price={30000000}
              time={"Chuyến đi dành cho gia đình 3N/2Đ"}
              defaultPrice={50000000}
            />
          ) : (
            ""
          );
        })}
      </div>
    </section>
  );
};

export default ListItem;
