import type { JSX } from "react";
import Style from "./ServiceCard.module.css";
import type React from "react";
import { LuExternalLink } from "react-icons/lu";

export interface ServiceCardProps {
  header1: string;
  header2: string;
  link: string;
  img: string;
  cardClassName?: string;
  cardStyle?: React.CSSProperties;
  headerClassName?: string;
  headerStyle?: React.CSSProperties;
  linkClassName?: string;
  linkStyle?: React.CSSProperties;
  imgClassName?: string;
  imgStyle?: React.CSSProperties;
}

const ServiceCard = ({
  header1,
  header2,
  link,
  img,
  cardClassName = "",
  cardStyle,
  headerClassName = "",
  headerStyle,
  linkClassName = "",
  linkStyle,
  imgClassName = "",
  imgStyle,
}: ServiceCardProps): JSX.Element => {
  return (
    <div
      className={`${Style.serviceCardContainer} ${cardClassName}`}
      style={cardStyle}
    >
      <div className={Style.headingLink}>
        <h1
          className={`${Style.header} ${headerClassName}`}
          style={headerStyle}
        >
          {header1} <br /> {header2}
        </h1>
        <a
          href={link}
          className={`${Style.link} ${linkClassName}`}
          style={linkStyle}
        >
         <LuExternalLink />  Learn more 
        </a>
      </div>

      <div className={Style.illustration}>
        <img
          src={img}
          alt={`${header1} ${header2}`}
          className={imgClassName}
          style={imgStyle}
        />
      </div>
    </div>
  );
};

export default ServiceCard;
