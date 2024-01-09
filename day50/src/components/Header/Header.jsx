"use client";
import "./Header.css";
import {
  Box,
  Button,
  Icon,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import myImage from "../../../assets/my-image.png";
import Link from "next/link";
import { useSession } from "next-auth/react";
const Header = () => {
  const { data } = useSession();
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white.800", "black.800");
  return (
    <div className="wrapper w-full ">
      <Box
        backdropFilter="auto"
        backdropBlur="5px"
        className="flex justify-between w-screen "
      >
        <nav className="w-[80%] mx-auto">
          <header className="header ">
            <ul className="left-header flex items-center gap-x-[10px]">
              <li>
                <Link href="/" className="flex items-center gap-x-[10px]">
                  <img className="my-logo" src={myImage.src} alt="" />
                  <h3 className="font-black font-medium text-green-400 text-lg">
                    Phạm Tiến Đạt
                  </h3>
                </Link>
              </li>
              <li>
                <Link href={"/blogs"}>
                  <h3 className="font-black font-medium text-green-400 text-lg">
                    Blogs
                  </h3>
                </Link>
              </li>
              <li>
                <Link href={"/contact"}>
                  <h3 className="font-black font-medium text-green-400 text-lg">
                    Contact
                  </h3>
                </Link>
              </li>
              <li>
                <Link href={"/profile"}>
                  <h3 className="font-black font-medium text-green-400 text-lg">
                    Profile
                  </h3>
                </Link>
              </li>
            </ul>
            <ul className="right-header">
              <Link
                href="https://fullstack.edu.vn"
                target="_blank"
                className="f8"
              >
                <img
                  className="logo-f8"
                  src="https://yp.vn/wp-content/uploads/2022/04/f8-icon.7ad2b161d5e80c87e516.png"
                  alt=""
                />
              </Link>
              <Link
                href="https://www.facebook.com/groups/f8official"
                target="_blank"
                className="facebook"
              >
                <i class="fa-brands fa-facebook text-3xl"></i>
              </Link>
              <Link
                href="https://www.youtube.com/c/F8VNOfficial"
                target="_blank"
                className="youtube"
              >
                <i class="fa-brands fa-youtube text-3xl"></i>
              </Link>
              <Link
                href="https://github.com/phamtiendat18"
                target="_blank"
                className="youtube"
              >
                <i class="fa-brands fa-github text-3xl text-gray-500"></i>
              </Link>
              <Link href={"/profile"}>
                {data ? (
                  <img
                    src={data?.user?.image}
                    alt=""
                    className="w-[30px] h-[30px] rounded-full"
                  />
                ) : (
                  <i class="fa-solid fa-user text-2xl"></i>
                )}
              </Link>
              <Button onClick={toggleColorMode} className="w-[50px] " bg="none">
                {colorMode === "light" ? (
                  <i class="fa-solid fa-moon text-lg"></i>
                ) : (
                  <i class="fa-regular fa-sun text-yellow-500 text-lg"></i>
                )}
              </Button>
            </ul>
          </header>
        </nav>
      </Box>
    </div>
  );
};

export default Header;
