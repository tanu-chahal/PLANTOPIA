import React from "react";
import Intro from "../../components/intro/Intro";
import BestSelling from "../../components/bestSelling/BestSelling";
import About from "../../components/about/About";

function Home() {

  return (
    <>
      <Intro/>
      <BestSelling/>
      <About/>
    </>
  );
}

export default Home;
