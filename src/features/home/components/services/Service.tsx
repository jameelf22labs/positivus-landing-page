import type { JSX } from "react";
import React from "react";
import Style from "./Service.module.css";
import GlobalStyle from "../../../../style/global.style.module.css";

import seo from "../../../../assets/images/seo.png";
import ppca from "../../../../assets/images/ppca.png";
import smm from "../../../../assets/images/smm.png";
import em from "../../../../assets/images/em.png";
import aat from "../../../../assets/images/aat.png";
import cc from "../../../../assets/images/cc.png";
import ServiceCard from "./ServiceCard";
import { SectionLabel } from "../../../../common/components";

const Service = (): JSX.Element => {
  const services = React.useMemo(() => {
    return [
      {
        header1: "Search Engine",
        header2: "Optimization",
        img: seo,
        link: "https://www.google.com/",
      },
      {
        header1: "Pay-per-click",
        header2: "advertising",
        img: ppca,
        link: "https://www.google.com/",
      },
      {
        header1: "Social Media",
        header2: "Marketing",
        img: smm,
        link: "https://www.google.com/",
      },
      {
        header1: "Email",
        header2: "Marketing",
        img: em,
        link: "https://www.google.com/",
      },
      {
        header1: "Content",
        header2: "Creation",
        img: aat,
        link: "https://www.google.com/",
      },
      {
        header1: "Analytics and",
        header2: "Tracking",
        img: cc,
        link: "https://www.google.com/",
      },
    ];
  }, []);
  return (
    <React.Fragment>
      <div className={GlobalStyle.wrapper}>
        <SectionLabel
          label="Services"
          description="At our digital marketing agency, we offer a range of services to  help businesses grow and succeed online. These services include"
        />
        <div className={Style.servicesBlock}>
          {services.map((service) => {
            return (
              <ServiceCard
                header1={service.header1}
                header2={service.header2}
                link={service.link}
                img={service.img}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Service;
