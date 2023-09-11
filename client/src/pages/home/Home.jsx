import React from "react";
import Intro from "../../components/intro/Intro";
import BestSelling from "../../components/bestSelling/BestSelling";
import About from "../../components/about/About";
import Categories from "../../components/categories/Categories";
import Reviews from "../../components/reviews/Reviews";

function Home() {

  return (
    <>
      <Intro/>
      <BestSelling/>
      <About/>
      <Categories/>
      <Reviews/>
    </>
  );
}

export default Home;
