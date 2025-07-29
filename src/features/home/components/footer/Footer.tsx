import type { JSX } from "react";
import GlobalStyle from "../../../../style/global.style.module.css";
import Style from "./Footer.module.css";

import Positivus from "../../../../assets/images/positivus.png";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Button } from "../../../../common/ui";

const Footer = (): JSX.Element => {
  return (
    <div className={GlobalStyle.wrapper} style={{ marginTop: 30 }}>
      <div className={Style.footerWrapper}>
        <div className={Style.footerNavbarWrapper}>
          <div className={Style.productLogo}>
            <img src={Positivus} alt="Positivus Logo" />
          </div>
          <div className={Style.navLinks}>
            <ul>
              <li> About us </li>
              <li> Services </li>
              <li> Use Cases </li>
              <li> Pricing </li>
              <li> Blog </li>
            </ul>
          </div>
          <div className={Style.socialWrapper}>
            <FaLinkedin style={{ width: 30, height: 30 }} />
            <FaFacebook style={{ width: 30, height: 30 }} />
            <FaTwitter style={{ width: 30, height: 30 }} />
          </div>
        </div>
        <div className={Style.contactWrapper}>
          <div className={Style.address}>
            <h4 className={Style.contact}> Contact us: </h4>
            <p> Email: examplemail.com </p>
            <p> Phone: +123 456 789 </p>
            <address>
              Address: 1234 Street Name, City Name, Country Name
            </address>
          </div>
          <div className={Style.emailForm}>
            <div className={Style.emailFormInnerWrapper}>
              <input type="email" placeholder="Email" />
              <Button style={{ backgroundColor: "#b9ff66" , color : 'black' }}>
                Subscribe to news
              </Button>
            </div>
          </div>
        </div>
        <div className={Style.privacyPolicy}>
            <p className="mt-7">© 2023 Positivus. All Rights Reserved.</p>
            <p className="mt-7 underline"> Privacy Policy </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
