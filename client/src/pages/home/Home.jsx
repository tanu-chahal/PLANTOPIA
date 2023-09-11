import React from "react";
import Intro from "../../components/intro/Intro";
import BestSelling from "../../components/bestSelling/BestSelling";
import About from "../../components/about/About";
import Categories from "../../components/categories/Categories";

function Home() {

  return (
    <>
      <Intro/>
      <BestSelling/>
      <About/>
      <Categories/>
    </>
  );
}

export default Home;
