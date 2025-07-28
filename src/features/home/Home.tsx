import type { JSX } from "react";
import React from "react";
import Style from "./Home.module.css";
import { Navbar } from "../../layouts";
import Hero from "./components/hero/Hero";

const Home = (): JSX.Element => {
  return (
    <React.Fragment>
      <div className={Style.homeContainer}>
          <Navbar />
          <Hero />
      </div>
    </React.Fragment>
  );
};

export default Home;
