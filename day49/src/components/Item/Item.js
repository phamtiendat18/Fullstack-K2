const imageApi = ` https://api-pages.vercel.app/`;
const Item = ({ src, name, content, price, defaultPrice, time }) => {
  return (
    <div className="w-[30%] shadow-md rounded-md">
      <img
        src={`https://api-pages.vercel.app${src}`}
        alt=""
        className="w-full h-[250px]"
      />
      <div className="w-full py-5 px-3">
        <h3 className="font-bold capitalize text-lg">
          <i class="fa-solid fa-location-dot text-orange-500 mr-2"></i>
          {name}
        </h3>
        <p>{`${name} - ${content}`}</p>
        <div className="flex gap-x-[3px]">
          <i class="fa-regular fa-star text-orange-400"></i>
          <i class="fa-regular fa-star text-orange-400"></i>
          <i class="fa-regular fa-star text-orange-400"></i>
          <i class="fa-regular fa-star text-orange-400"></i>
          <i class="fa-regular fa-star text-orange-400"></i>
        </div>
        <p>{time}</p>
        <p>
          {price} <span className="line-through">{defaultPrice}</span>
        </p>
        <button className="px-4 py-2 bg-orange-400 hover:bg-orange-100 hover:text-orange-400 border-orange-400 text-white">
          Đặt ngay
        </button>
      </div>
    </div>
  );
};

export default Item;
