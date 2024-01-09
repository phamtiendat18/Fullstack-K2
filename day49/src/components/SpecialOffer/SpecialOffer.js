const specialOfferApi = `https://api-pages.vercel.app/api/v1/pages/3`;
const getSpecialOffer = async () => {
  const response = await fetch(specialOfferApi);
  const data = await response.json();
  return data;
};
const SpecialOffer = async () => {
  const specialInfo = await getSpecialOffer();
  return (
    <section className="mb-[30px] py-10">
      <h1 className="text-center mb-10">
        <span className="px-2 py-1 bg-orange-200 rounded-md text-orange-400 text-4xl font-medium mr-1">
          C
        </span>
        <span className="px-2 py-1 bg-orange-200 rounded-md text-orange-400 text-4xl font-medium mr-1">
          H
        </span>
        <span className="px-2 py-1 bg-orange-200 rounded-md text-orange-400 text-4xl font-medium mr-3">
          O
        </span>
        <span className="px-2 py-1 bg-orange-200 rounded-md text-orange-400 text-4xl font-medium mr-1">
          B
        </span>
        <span className="px-2 py-1 bg-orange-200 rounded-md text-orange-400 text-4xl font-medium mr-1">
          Ạ
        </span>
        <span className="px-2 py-1 bg-orange-200 rounded-md text-orange-400 text-4xl font-medium mr-1">
          N
        </span>
      </h1>
      <div className="w-full shadow-md">
        <img
          src={`https://api-pages.vercel.app${specialInfo.destinationBox[3].src}`}
          alt=""
          className="w-full h-[300px]"
        />
        <div className="w-full px-10 py-7 text-lg">
          <h3 className="font-bold text-xl">
            <i class="fa-solid fa-location-dot text-orange-500 mr-2"></i>
            {specialInfo.home.name}
          </h3>
          <p>{specialInfo.home.content}</p>
          <p className="capitalize">Ưu đãi 30.000.000 cho 5 người/3 ngày</p>
          <div className="flex gap-x-[3px] my-2">
            <i class="fa-regular fa-star text-orange-400"></i>
            <i class="fa-regular fa-star text-orange-400"></i>
            <i class="fa-regular fa-star text-orange-400"></i>
            <i class="fa-regular fa-star text-orange-400"></i>
            <i class="fa-regular fa-star text-orange-400"></i>
          </div>
          <button className="px-4 py-2 bg-orange-400 hover:bg-orange-100 hover:text-orange-400 border-orange-400 text-white">
            Đặt ngay
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
