import type { JSX } from "react";
import { SectionLabel } from "../../../../common/components";

import Style from "./Team.module.css";
import GlobalStyle from "../../../../style/global.style.module.css";
import { teams, type TeamType } from "./mock";

import linkedIn from "../../../../assets/images/linkedin.png";

const TeamCard = ({ info }: { info: TeamType }) => {
  return (
    <div className={Style.card}>
      <div className={Style.linkedIn}>
        <img src={linkedIn} alt="Linkedin" />
      </div>
      <div className={Style.profileWrapper}>
        <div className={Style.profileImgWrapper}>
          <img src={info.profilePic} alt={info.profilePic + " pic"} />
        </div>

        <div className={Style.nameInfoWrapper}>
          <h5> {info.name} </h5>
          <p> {info.role} </p>
        </div>
      </div>
      <hr />
      <p className="mt-4">{info.exp}</p>
    </div>
  );
};

const Team = (): JSX.Element => {
  return (
    <div className={GlobalStyle.wrapper} style={{ marginTop: 50 }}>
      <SectionLabel
        label="Team"
        description="Meet the skilled and experienced team behind our successful digital marketing strategies"
      />
      <div className={Style.teamWrapper}>
        {teams.map((team) => (
          <TeamCard info={team} />
        ))}
      </div>
    </div>
  );
};

export default Team;
