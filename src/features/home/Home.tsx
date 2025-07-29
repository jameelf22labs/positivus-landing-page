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
} from "./components";

import amazon from "../,,/../../assets/images/amazon.svg";
import dribble from "../,,/../../assets/images/dribble.svg";
import hubspot from "../,,/../../assets/images/hubspot.svg";
import notion from "../,,/../../assets/images/notion.svg";
import netflix from "../,,/../../assets/images/netflix.svg";
import zoom from "../,,/../../assets/images/zoom.svg";

const Home = (): JSX.Element => {
  const customers = React.useMemo(() => {
    return [
      { imageUrl: amazon },
      { imageUrl: dribble },
      { imageUrl: hubspot },
      { imageUrl: notion },
      { imageUrl: netflix },
      { imageUrl: zoom },
    ];
  }, []);
  return (
    <React.Fragment>
      <div className={Style.homeContainer}>
        <Navbar />
        <Hero />
        <Customer customers={customers} />
        <Service />
        <CaseStudies />
        <OurWorkingProcess />
        <Team />
        <ContactUs />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Home;
