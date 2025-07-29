import type { JSX } from "react";
import Style from "./CaseStudies.module.css";
import GlobalStyle from "../../../../style/global.style.module.css";
import { SectionLabel } from "../../../../common/components";
import { BiLinkExternal } from "react-icons/bi";

const CaseStudies = (): JSX.Element => {
  const caseStudies = [
    {
      desc: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
      link: "www.f22labs.com",
    },

    {
      desc: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
      link: "www.f22labs.com",
    },

    {
      desc: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
      link: "www.f22labs.com",
    },
  ];

  return (
    <div className={GlobalStyle.wrapper}>
      <SectionLabel
        label="Case Studies"
        description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      />

      <div className={Style.studieWrapper}>
        {caseStudies.map((studie) => {
          return (
            <div className={Style.study}>
              <p>{studie.desc}</p>

              <a href={studie.link} style={{display : "flex" , alignItems : 'center' , gap : '10px'}}>
                <span> Learn more </span>  <BiLinkExternal />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CaseStudies;
