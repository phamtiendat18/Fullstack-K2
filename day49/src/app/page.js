import Carousel from "@/components/Carousel/Carousel";
import Header from "@/components/Header";
import ListItem from "@/components/ListItem/ListItem";
import Offers from "@/components/Offers/Offers";
import ReviewerSlider from "@/components/ReviewerSlider/ReviewerSlider";
import Services from "@/components/Services/Services";
import SpecialOffer from "@/components/SpecialOffer/SpecialOffer";

const Home = () => {
  return (
    <main>
      <Carousel />
      <div className="w-[80%] mx-auto">
        <Offers />
        <SpecialOffer />
        <ListItem />
        <Services />
        <ReviewerSlider />
      </div>
    </main>
  );
};

export default Home;
