import React from "react";
import Intro from "../../components/intro/Intro";
import BestSelling from "../../components/bestSelling/BestSelling";
import About from "../../components/about/About";
import Categories from "../../components/categories/Categories";
import Reviews from "../../components/reviews/Reviews";
import Footer from "../../components/footer/Footer";

function Home() {

  return (
    <>
      <Intro/>
      <BestSelling/>
      <About/>
      <Categories/>
      <Reviews/>
      <Footer/>
    </>
  );
}

export default Home;
