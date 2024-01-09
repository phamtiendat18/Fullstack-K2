"use client";
import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import Slider from "react-slick";
import Link from "next/link";
const Carousel = () => {
  const ref = useRef();
  const settings = {
    customPaging: function (i) {
      return (
        <div className="custom-dot w-5 h-5 rounded-full focus:bg-slate-100 z-30 bg-white"></div>
      );
    },
    dots: true,
    nextArrow: null,
  };
  //   ref.current.parentElement.parentElement.classList.add("bg-black");

  //   carouselRef.current.slick({ infinity: false });
  //   console.log(carouselRef);
  const handleEnd = (e) => {
    e.target.play();
  };
  return (
    <section className="max-w-screen relative">
      <div className="absolute top-[30%] left-[50%] z-10 -translate-x-[50%] text-center text-white text-xl">
        <h2 className="uppercase text-[2.5rem] p-4">
          Mọi chuyến đi đều đáng giá
        </h2>
        <p className="capitalize p-2">
          Khám phá những vùng đất mới cùng chúng tôi
        </p>
        <p className="capitalize p-2">Những chuyến đi đang chờ đợi bạn</p>
        <button className="bg-orange-400 px-3 py-2">
          <Link href={"#"} className="uppercase text-[1rem]">
            Khám phá ngay
          </Link>
        </button>
      </div>
      <Slider {...settings} className="max-w-screen">
        <div className="block">
          <video
            src="https://code-fullstack-exercise49.vercel.app/videos/vid-1.mp4"
            autoPlay
            muted
            onEnded={handleEnd}
            className="min-w-full h-screen"
          ></video>
        </div>
        <div>
          <video
            src="https://code-fullstack-exercise49.vercel.app/videos/vid-2.mp4"
            autoPlay
            muted
            onEnded={handleEnd}
            className="min-w-full h-screen"
          ></video>
        </div>
        <div>
          <video
            src="https://code-fullstack-exercise49.vercel.app/videos/vid-3.mp4"
            autoPlay
            muted
            onEnded={handleEnd}
            className="min-w-full h-screen"
          ></video>
        </div>
      </Slider>
    </section>
  );
};

export default Carousel;
