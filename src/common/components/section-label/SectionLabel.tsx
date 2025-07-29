import type { JSX } from "react";
import Style from "./SectionLabel.module.css";

interface SectionlabelProps {
  label: string;
  description: string;
}

const SectionLabel = ({
  label,
  description,
}: SectionlabelProps): JSX.Element => {
  return (
    <div className={Style.sectionLabel}>
      <div className={Style.label}>
        <h2>{label}</h2>
      </div>
      <div className={Style.desc}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SectionLabel;
