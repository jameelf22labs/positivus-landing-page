import type { JSX, ReactNode } from "react";
import { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import Style from "./Accordion.module.css";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

export interface AccordionItems {
  id: string;
  panelElement: ReactNode;
  contentElement: ReactNode;
}

interface AccordionProps {
  items: AccordionItems[];
}

const CustomAccordion = ({ items }: AccordionProps): JSX.Element => {
  const [expandedId, setExpandedId] = useState<string | false>(false);

  const handleChange =
    (panelId: string) =>
    (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedId(isExpanded ? panelId : false);
    };

  return (
    <div className={Style.accordionContainer}>
      {items.map((item) => {
        const isExpanded = expandedId === item.id;
        return (
          <Accordion
            key={item.id}
            className={`${Style.customAccordion} ${
              isExpanded ? Style.expandedAccordion : Style.collapsedAccordion
            }`}
            expanded={isExpanded}
            onChange={handleChange(item.id)}
            sx={{
              backgroundColor: isExpanded ? "#B9FF66" : "#F3F3F3",
            }}
          >
            <AccordionSummary
              aria-controls={`panel-${item.id}-content`}
              id={item.id}
              className={Style.customSummary}
              expandIcon={
                isExpanded ? (
                  <FaMinusCircle style={{ fontSize: "3rem" }} />
                ) : (
                  <FaPlusCircle style={{ fontSize: "3rem" }} />
                )
              }
            >
              {item.panelElement}
            </AccordionSummary>

            <AccordionDetails className={Style.customDetails}>
              {item.contentElement}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default CustomAccordion;
