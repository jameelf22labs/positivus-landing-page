import type { JSX } from "react";
import GlobalStyle from "../../../../style/global.style.module.css";
import Style from "./Testominal.module.css";
import { SectionLabel } from "../../../../common/components";
import { Sliding } from "../../../../common/ui";
import { clientResponse, type ClientResponse } from "./mock";

import Buuble from '../../../../assets/images/bubble.png'

const ClientCard = ({ client }: { client: ClientResponse }): JSX.Element => {
  return (
    <div className={Style.clientCard}>
      <div className={Style.bubbleWrapper}>
        <img src={Buuble} alt="Bubble background" className={Style.bubbleImage} />
        <p className={Style.quoteText}>{client.response}</p>
      </div>
      <div className={Style.clientInfo}>
        <p className={Style.clientName}>{client.name}</p>
        <p className={Style.clientRole}>{client.role}</p>
      </div>
    </div>
  );
};


const Testominals = (): JSX.Element => {
  return (
    <div className={GlobalStyle.wrapper}>
      <SectionLabel
        label="Testimonials"
        description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
      />
      <div className={Style.testominalWrapper}>
        <Sliding
          items={clientResponse}
          renderItem={(client) => <ClientCard client={client} />}
        />
      </div>
    </div>
  );
};

export default Testominals;
