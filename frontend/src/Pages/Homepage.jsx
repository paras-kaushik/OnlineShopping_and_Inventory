import React from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";

import { dressPage1 } from "../Data/dress/page1";
import { kurtaPage1 } from "../Data/Kurta/kurta";
import { mens_kurta } from "../Data/Men/men_kurta";

const Homepage = () => {

  return (
    <div className="">
      <HomeCarousel images={homeCarouselData} />
      <div className="space-y-10 py-20">
      <HomeProductSection data={mens_kurta} section={"Men's Kurta"} />
      </div>
    </div>
  );
};

export default Homepage;
