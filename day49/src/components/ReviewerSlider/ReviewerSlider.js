"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./ReviewerSlider.css";

const ReviewerSlider = () => {
  const settings = {
    autoplay: true,
    lazyLoad: "ondemand",
    slidesToShow: 3,
    slidesToScroll: 1,
    // dots: false,
    // nextArrow: null,
    infinity: true,

    autoplaySpeed: 1500,
  };
  return (
    <section className="p-10">
      <Slider {...settings} className="w-full flex items-center">
        <div className="flex items-center w-fit slick-item justify-center shadow-md p-10 shadow-md">
          <img
            src="https://api-pages.vercel.app/images/egypt/pic-1.png"
            alt=""
            className="rounded-full"
          />
          <p className="my-4">Some Text...</p>
          <div className="flex gap-x-[3px] my-2">
            <i class="fa-regular fa-star text-orange-400"></i>
            <i class="fa-regular fa-star text-orange-400"></i>
            <i class="fa-regular fa-star text-orange-400"></i>
            <i class="fa-regular fa-star text-orange-400"></i>
            <i class="fa-regular fa-star text-orange-400"></i>
          </div>
        </div>
        <div className="flex items-center w-fit slick-item justify-center shadow-md p-10">
          <img
            src="https://api-pages.vercel.app/images/egypt/pic-2.png"
            alt=""
            className="rounded-full"
          />
          <p className="my-4">Some Text...</p>
          <div className="flex gap-x-[3px] my-2">
            <i class="fa-regular fa-star text-orange-400"></i>
            <i class="fa-regular fa-star text-orange-400"></i>
            <i class="fa-regular fa-star text-orange-400"></i>
            <i class="fa-regular fa-star text-orange-400"></i>
            <i class="fa-regular fa-star text-orange-400"></i>
          </div>
        </div>
        <div className="flex-column items-center w-fit slick-item justify-center shadow-md p-10">
          <img
            src="https://api-pages.vercel.app/images/egypt/pic-3.png"
            alt=""
            className="rounded-full"
          />
          <p className="my-4">Some Text...</p>
          <div className="flex gap-x-[3px] my-2">
            <i class="fa-regular fa-star text-orange-400"></i>
            <i class="fa-regular fa-star text-orange-400"></i>
            <i class="fa-regular fa-star text-orange-400"></i>
            <i class="fa-regular fa-star text-orange-400"></i>
            <i class="fa-regular fa-star text-orange-400"></i>
          </div>
        </div>
        <div className="flex items-center w-fit slick-item justify-center shadow-md p-10">
          <img
            src="https://api-pages.vercel.app/images/egypt/pic-4.png"
            alt=""
            className="rounded-full"
          />
          <p className="my-4">Some Text...</p>
          <div className="flex gap-x-[3px] my-2">
            <i class="fa-regular fa-star text-orange-400"></i>
            <i class="fa-regular fa-star text-orange-400"></i>
            <i class="fa-regular fa-star text-orange-400"></i>
            <i class="fa-regular fa-star text-orange-400"></i>
            <i class="fa-regular fa-star text-orange-400"></i>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default ReviewerSlider;
