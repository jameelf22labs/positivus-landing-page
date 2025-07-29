import type { JSX } from "react";
import GlobalStyle from "../../../../style/global.style.module.css";
import Style from "./Contact.module.css";
import { SectionLabel } from "../../../../common/components";
import ContactUsLogo from "../../../../assets/images/contact-us.png";
import { Button } from "../../../../common/ui";

const ContactUs = (): JSX.Element => {
  return (
    <div className={GlobalStyle.wrapper} style={{ marginTop: 50 }}>
      <SectionLabel
        label="Contact Us"
        description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
      />
      <div className={Style.formWrapper}>
        <div className={Style.formContainer}>
          <div className={Style.formInnerContainer}>
            <div className={Style.checkBoxWrapper}>
              <div>
                <input type="checkbox" /> <span> Say Hi </span>
              </div>
              <div>
                <input type="checkbox" /> <span> Get a Quote </span>
              </div>
            </div>

            <div className={Style.inputField}>
              <label htmlFor="name"> Name </label>
              <input type="text" id="name" placeholder="Name" />
            </div>

            <div className={Style.inputField}>
              <label htmlFor="email">
                Email <span style={{ color: "red" }}> * </span>
              </label>
              <input type="email" id="email" placeholder="Email" />
            </div>

            <div className={`${Style.inputField} ${Style.message}`}>
              <label htmlFor="message">
                Message <span style={{ color: "red" }}> * </span>
              </label>
              <textarea id="message" placeholder="Message" />
            </div>

            <Button className="mt-5" style={{ width: "100%" }}>
              Send Message
            </Button>
          </div>
        </div>

        <div className={Style.bannerContainer}>
          <img src={ContactUsLogo} alt="Contact us" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
