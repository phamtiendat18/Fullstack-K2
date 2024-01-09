import Footer from "@/components/Footer/Footer";
import "./global.css";
import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import { Button, ChakraProvider } from "@chakra-ui/react";

const Home = () => {
  return (
    <ChakraProvider>
      <Header />
      <div className="container">
        <Main />
        <Footer />
      </div>
    </ChakraProvider>
  );
};

export default Home;
