import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col mx-auto  h-auto">
      <div className="flex lg:items-center lg:justify-between flex-col lg:flex-row gap-y-[45px] py-[30px] lg:py-0 px-[15px] sm:px-[30px] md:px-[40px] lg:px-[50px] xl:px-[75px] w-full h-auto lg:h-[380px] bg-gray-800">
        <div className="lg:w-4/12">
          <div className="flex items-center justify-center gap-x-[8px] mb-[30px] text-white text-transform: uppercase  cursor-pointer text-lg lg:text-2xl font-medium ">
            <Link href={"/"} className="">
              <span className="text-orange-600">s</span>travel
            </Link>
          </div>

          <div className="text-center text-gray-200">
            Trải Qua 17 Năm Phát Triển Bền Vững, STravel Đã Ghi Dấu Ấn Của Mình
            Với Thông Điệp “Nâng Tầm Trải Nghiệm Từng Chuyến Đi”
          </div>
        </div>

        <div className="flex justify-center sm:justify-between flex-wrap lg:flex-nowrap gap-y-[60px] gap-x-[90px] sm:gap-x-0 lg:w-7/12">
          <div className="text-center sm:text-left">
            <div className="mb-[18px] text-gray-400 text-xl font-bold select-none">
              Chi Nhánh Chính
            </div>

            <ul className="flex flex-col gap-[10px] text-gray-200">
              <a className="hover:text-orange-400" href="#">
                <li>Hà Nội</li>
              </a>
              <a className="hover:text-orange-400" href="#">
                <li>Ấn Độ</li>
              </a>
              <a className="hover:text-orange-400" href="#">
                <li>Mỹ</li>
              </a>
              <a className="hover:text-orange-400" href="#">
                <li>Nhật Bản</li>
              </a>
              <a className="hover:text-orange-400" href="#">
                <li>Pháp</li>
              </a>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <div className="mb-[18px] text-gray-400 text-xl font-bold select-none">
              Chuyển Hướng
            </div>

            <ul className="flex flex-col gap-[10px] text-gray-200">
              <a className="hover:text-orange-400" href="#">
                <li>Trang chủ</li>
              </a>
              <a className="hover:text-orange-400" href="#">
                <li>Đặt lịch</li>
              </a>
              <a className="hover:text-orange-400" href="#">
                <li>Ưu đãi</li>
              </a>
              <a className="hover:text-orange-400" href="#">
                <li>Dịch vụ</li>
              </a>
              <a className="hover:text-orange-400" href="#">
                <li>Thư viện</li>
              </a>
              <a className="hover:text-orange-400" href="#">
                <li>Đánh giá</li>
              </a>
              <a className="hover:text-orange-400" href="#">
                <li>Liên hệ</li>
              </a>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <div className="mb-[18px] text-gray-400 text-xl font-bold select-none">
              Tương tác
            </div>

            <ul className="flex flex-col gap-[10px] text-gray-200">
              <a className="hover:text-orange-400" href="#">
                <li>Facebook</li>
              </a>
              <a className="hover:text-orange-400" href="#">
                <li>Instagram</li>
              </a>
              <a className="hover:text-orange-400" href="#">
                <li>Twitter</li>
              </a>
              <a className="hover:text-orange-400" href="#">
                <li>Linkedin</li>
              </a>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-evenly sm:justify-between flex-col sm:flex-row sm:px-[30px] md:px-[40px] lg:px-[50px] xl:px-[75px] w-full h-[100px] bg-gray-900">
        <div className="text-gray-400">
          Created By STRAVEL | All Rights Reserved!
        </div>

        <ul className="flex gap-[15px] text-gray-400 cursor-pointer">
          <li className="ease-in duration-200 hover:text-gray-100">
            <i className="fa-brands fa-xl fa-twitter"></i>
          </li>
          <li className="ease-in duration-200 hover:text-gray-100">
            <i className="fa-brands fa-xl fa-linkedin"></i>
          </li>
          <li className="ease-in duration-200 hover:text-gray-100">
            <i className="fa-brands fa-xl fa-facebook"></i>
          </li>
          <li className="ease-in duration-200 hover:text-gray-100">
            <i className="fa-brands fa-xl fa-github"></i>
          </li>
          <li className="ease-in duration-200 hover:text-gray-100">
            <i className="fa-brands fa-xl fa-angellist"></i>
          </li>
          <li className="ease-in duration-200 hover:text-gray-100">
            <i className="fa-brands fa-xl fa-dribbble"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
