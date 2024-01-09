"use client";

import { Button, useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import { useRef } from "react";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const ref = useRef();
  const handleMenu = (e) => {
    e.preventDefault();
    // console.log(e.name);
    // e.name = e.name === "menu" ? "close" : "menu";
    ref.current.classList.toggle("left-[0%]");
  };
  return (
    <header className="w-screen bg-neutral-600 px-20 py-5 fixed text-white t-0 l-0 z-30 bg-opacity-70">
      <nav className="flex justify-between">
        <div className="w-[130px] md:w-[200px] flex items-center">
          <div className="text-transform: uppercase  cursor-pointer text-lg lg:text-2xl font-medium ">
            <Link href={"/"} scroll={true}>
              <span className="text-orange-600">s</span>travel
            </Link>
          </div>
        </div>
        <div
          className="navLinks  md:static md:w-auto w-full md:h-auto h-[85vh] flex md:items-center gap-[1.5vw] top-[100%] left-[-100%] px-5 md:py-0 py-5 text-xs lg:text-base"
          ref={ref}
        >
          <ul
            className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8"
            ref={ref}
          >
            <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-orange-400 after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 hover:text-orange-400">
              <a href="#">Trang chủ</a>
            </li>
            <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-orange-400 after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 hover:text-orange-400">
              <a href="#">Đặt lịch</a>
            </li>
            <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-orange-400 after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 hover:text-orange-400">
              <a href="#">Ưu đãi</a>
            </li>
            <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-orange-400 after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 hover:text-orange-400">
              <a href="#">Dịch vụ</a>
            </li>
            <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-orange-400 after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 hover:text-orange-400">
              <a href="#">Thư viện</a>
            </li>
            <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-orange-400 after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 hover:text-orange-400">
              <a href="#">Đánh giá</a>
            </li>
            <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-orange-400 after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 hover:text-orange-400">
              <a href="#">Liên hệ</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            )}
          </Button>
          <button></button>
          <button className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 lg:w-5 lg:h-5 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </button>
          <button onClick={handleMenu} name="menu" className="menu">
            <svg
              name="menu"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-[30px] cursor-pointer md:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
