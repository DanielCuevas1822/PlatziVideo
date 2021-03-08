import React, { useState, useEffect } from "react";

import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Categories from "../components/Categories";
import Header from "../components/Header";
import Search from "../components/Search";
import Footer from "../components/Footer";

import useInitialState from "../hooks/useInitialSate";

import "../assets/styles/App.scss";

const API = "http://localhost:3000/initalState";

const Home = () => {
  const initialState = useInitialState(API);
  return (
    <>
      <Search />

      {initialState.mylist.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>
            {initialState.mylist.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carousel>
          {initialState.trends.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title="Originales de Platzi Video">
        <Carousel>
          {initialState.originals.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};

export default Home;