"use client";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import "./Header.css";
import {
  Box,
  Button,
  Icon,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import myImage from "../../../assets/my-image.png";
const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white.800", "black.800");
  return (
    <Box backdropFilter="auto" backdropBlur="5px" className="fixed">
      <nav>
        <header className="header">
          <ul className="left-header">
            <a href="/">
              <img className="my-logo" src={myImage.src} alt="" />
              <h3>Home</h3>
            </a>
          </ul>
          <ul className="right-header">
            <a href="https://fullstack.edu.vn" target="_blank" className="f8">
              <img
                className="logo-f8"
                src="https://yp.vn/wp-content/uploads/2022/04/f8-icon.7ad2b161d5e80c87e516.png"
                alt=""
              />
            </a>
            <a
              href="https://www.facebook.com/groups/f8official"
              target="_blank"
              className="facebook"
            >
              Facebook
            </a>
            <a
              href="https://www.youtube.com/c/F8VNOfficial"
              target="_blank"
              className="youtube"
            >
              YouTube
            </a>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? (
                <Icon as={MoonIcon} />
              ) : (
                <Icon as={SunIcon} />
              )}
            </Button>
          </ul>
        </header>
      </nav>
    </Box>
  );
};

export default Header;
