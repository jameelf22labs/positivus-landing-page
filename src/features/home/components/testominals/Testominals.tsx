import type { JSX } from "react";
import GlobalStyle from "../../../../style/global.style.module.css";
import Style from "./Testominal.module.css";
import { SectionLabel } from "../../../../common/components";

const Testominals = (): JSX.Element => {
  return <div className={GlobalStyle.wrapper}>
    <SectionLabel label="Testimonials" description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services" />
    <div className={Style.testominalWrapper}></div>
  </div>;
};

export default Testominals;
