import type { JSX } from "react";
import Style from "./OurWorkingProcess.module.css";
import GlobalStyle from "../../../../style/global.style.module.css";
import { SectionLabel } from "../../../../common/components";
import React from "react";
import type { AccordionItems } from "../../../../common/ui/accordion/CustomAccordion";
import { CustomAccordion } from "../../../../common/ui";
import { nanoid } from "nanoid";

const ProcessAccordionPanel = ({
  label1,
  label2,
}: {
  label1: string;
  label2: string;
}): JSX.Element => {
  return (
    <div className={Style.accordionPanel}>
      <h1> {label1} </h1>
      <p> {label2} </p>
    </div>
  );
};

const ProcessAccodionContent = ({
  description,
}: {
  description: string;
}): JSX.Element => {
  return (
    <div className={Style.accordionContent}>
      <hr />
      <p> {description} </p>
    </div>
  );
};

const OurWorkingProcess = (): JSX.Element => {
  const ourProcess: Array<AccordionItems> = React.useMemo(() => {
    return [
      {
        id: nanoid(),
        panelElement: (
          <ProcessAccordionPanel label1="01" label2="Consultation" />
        ),
        contentElement: (
          <ProcessAccodionContent description="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements." />
        ),
      },
      {
        id: nanoid(),
        panelElement: <ProcessAccordionPanel label1="02" label2="Research" />,
        contentElement: (
          <ProcessAccodionContent description="After the consultation, we will conduct thorough research to identify your target audience, competitors, and industry trends. This will help us develop a comprehensive strategy to achieve your business goals." />
        ),
      },
      {
        id: nanoid(),
        panelElement: (
          <ProcessAccordionPanel label1="03" label2="Implementation" />
        ),
        contentElement: (
          <ProcessAccodionContent description="Once the research is complete, we will begin implementing the strategy. This may include optimizing your website, creating content, and launching marketing campaigns. Our team will work diligently to ensure that all tasks are completed on time and within budget." />
        ),
      },
      {
        id: nanoid(),
        panelElement: (
          <ProcessAccordionPanel label1="04" label2="Optimization" />
        ),
        contentElement: (
          <ProcessAccodionContent description="After the initial implementation, we will continuously monitor and optimize your marketing efforts to ensure maximum results. This may involve adjusting ad campaigns, refining content, and analyzing data to identify areas for improvement." />
        ),
      },
      {
        id: nanoid(),
        panelElement: (
          <ProcessAccordionPanel label1="05" label2="Improvement" />
        ),
        contentElement: (
          <ProcessAccodionContent description="Throughout the process, we will provide regular reports on the performance of your marketing campaigns. This will allow you to track progress, measure success, and make informed decisions about future strategies." />
        ),
      },
      {
        id: nanoid(),
        panelElement: <ProcessAccordionPanel label1="06" label2="Repoting" />,
        contentElement: (
          <ProcessAccodionContent description="Based on the data and insights gathered from the reports, we will make recommendations for further improvement. This may involve refining existing strategies, exploring new opportunities, or adjusting tactics to better align with your business goals." />
        ),
      },
    ];
  }, []);

  return (
    <div className={GlobalStyle.wrapper}>
      <SectionLabel
        label="Our Working Process"
        description="Step-by-Step Guide to Achieving Your Business Goals"
      />
      <div className={Style.accordionWrapper}>
        <CustomAccordion items={ourProcess} />
      </div>
    </div>
  );
};

export default OurWorkingProcess;
