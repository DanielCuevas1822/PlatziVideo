import React from "react";

import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Categories from "../components/Categories";
import Header from "../components/Header";
import Search from "../components/Search";
import Footer from "../components/Footer";

import "../assets/styles/App.scss";

const App = () => (
  <div className="App">
    <Header />
    <Search />

    <Categories title="Mi Lista">
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />        
      </Carousel>
    </Categories>

    <Categories title="Tendencias">
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Categories>

    <Categories title="Originales de Platzi Video">
      <Carousel>
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Categories>

    <Footer />
  </div>
);

export default App;
