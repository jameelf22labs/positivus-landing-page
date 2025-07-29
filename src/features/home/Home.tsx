import type { JSX } from "react";
import React from "react";
import Style from "./Home.module.css";
import { Navbar } from "../../layouts";
import {
  CaseStudies,
  ContactUs,
  Customer,
  Footer,
  Hero,
  OurWorkingProcess,
  Service,
  Team,
  Testominals,
} from "./components";

const Home = (): JSX.Element => {
  return (
    <React.Fragment>
      <div className={Style.homeContainer}>
        <Navbar />
        <Hero />
        <Customer />
        <Service />
        <CaseStudies />
        <OurWorkingProcess />
        <Team />
        <Testominals />
        <ContactUs />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Home;
