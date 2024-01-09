const countryNameApi = `https://restcountries.com/v3.1/all`;
const getCountryName = async () => {
  const response = await fetch(countryNameApi);
  const data = await response.json();
  const countryNameData = data?.map((country) => {
    return country.name.common;
  });
  return countryNameData;
};
const Offers = async () => {
  const data = await getCountryName();
  return (
    <section className="w-full py-10 mb-[30px]">
      <h1 className="text-center mb-10">
        <span className="px-2 py-1 bg-orange-200 rounded-md text-orange-400 text-4xl font-medium mr-1">
          T
        </span>
        <span className="px-2 py-1 bg-orange-200 rounded-md text-orange-400 text-4xl font-medium mr-1">
          Ì
        </span>
        <span className="px-2 py-1 bg-orange-200 rounded-md text-orange-400 text-4xl font-medium mr-3">
          M
        </span>
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
      <div className="w-full flex">
        <div className="w-1/2 flex">
          <img
            src="https://code-fullstack-exercise49.vercel.app/images/book-img.svg"
            alt=""
            className="w-full"
          />
        </div>
        <form className="w-1/2 h-fit shadow-md p-10 rounded-md">
          <div className="w-full mb-3">
            <h3 className="font-medium text-xl mb-2">
              Hãy liên hệ với chúng tôi bằng:
            </h3>
            <input
              type="text"
              placeholder="Email hoặc số điện thoại"
              className="px-3 py-2 border-gray-900 border w-full"
            />
          </div>
          <div className="w-full mb-3">
            <h3 className="font-medium text-xl mb-2">Tôi muốn đến:</h3>
            <select name="countries" id="countries" className="w-full">
              <option value="">Việt Nam</option>
              {data.map((countryName, index) => (
                <option key={index}>{countryName}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Địa điểm chính xác"
              className="w-full border border-gray-900 px-3 py-2"
            />
          </div>
          <div className="w-full mb-3">
            <h3 className="font-medium text-xl mb-2">Chúng tôi có:</h3>
            <input
              type="number"
              className="w-full border border-gray-900 px-3 py-2"
              placeholder="Số người"
            />
          </div>
          <div className="w-full mb-3">
            <h3 className="font-medium text-xl mb-2">Bắt đầu từ:</h3>
            <input
              type="date"
              className="w-full border border-gray-900 px-3 py-2"
              placeholder=""
            />
          </div>
          <div className="w-full mb-3">
            <h3 className="font-medium text-xl mb-2">Kết thúc vào:</h3>
            <input
              type="date"
              className="w-full border border-gray-900 px-3 py-2"
              placeholder=""
            />
          </div>
          <button className="capitalize px-6 py-2 bg-orange-400 text-lg text-white">
            Tìm ngay
          </button>
        </form>
      </div>
    </section>
  );
};

export default Offers;
