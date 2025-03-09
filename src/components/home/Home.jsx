import "./StyleHome.css";

import ProductCarousel from "./ProductCarousel";
import SectionShowMore from "./SectionShowMore";
import SectionCategories from "./SectionCategories";
import DiscountSection from "./DiscountSection";
import FavSection from "./FavSection";
import BannerCheese from "./BannerCheese";
import CarouselHero from "./CarouselHero";
import { useEffect } from "react";
import Search from "../Search";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="my-5">
      <div className="d-block d-lg-none mb-3 container pt-4">
        <Search />
      </div>
      <CarouselHero />
      <ProductCarousel />
      <SectionShowMore />
      <SectionCategories />
      <BannerCheese />
      <DiscountSection />
      <FavSection />
    </div>
  );
}

export default Home;
