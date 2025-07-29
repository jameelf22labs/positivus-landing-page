import type { JSX } from "react";
import React from "react";
import Style from "./Hero.module.css";
import { Button } from "../../../../common/ui";
import Illustrator from "../../../../assets/images/illustrator.png";

const Hero = (): JSX.Element => {
  return (
    <React.Fragment>
      <div className={`${Style.heroContainer}`}>
        <div className={Style.consultSection}>
          <h1>
            Navigating the <br /> digital landscape <br /> for success
          </h1>

          <p className="text-left">
            Our digital marketing agency helps grow and succeed online through a
            range of services including SEO, PPC, social media marketing, and
            content creation.
          </p>

          <Button className="mt-8"> Book a consultation </Button>
        </div>
        <div className={Style.bannerSection}>
          <img
            src={Illustrator}
            alt="Illustrator Image"
            width="602"
            height="515"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Hero;
