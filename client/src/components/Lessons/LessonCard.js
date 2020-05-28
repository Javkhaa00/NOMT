import React from "react";
import background from "../assets/card.png";
import anu from "../assets/teachers/anu.png";
// import ashid from "../assets/teachers/ashid.png";
// import bayarjargal from "../assets/teachers/bayarjargal.png";
import bilguun from "../assets/teachers/bilguun.png";
import ezenbaatar from "../assets/teachers/ezenbaatar.png";
import bayasgalan from "../assets/teachers/bayasgalan.png";
import huslen from "../assets/teachers/huslen.png";
import javkhaa from "../assets/teachers/javkhaa.png";
import mandah from "../assets/teachers/mandah.png";
import munguldei from "../assets/teachers/munguldei.png";
import namuungoo from "../assets/teachers/namuungoo.png";
import otgontugs from "../assets/teachers/otgontugs.png";
import sainbilegt from "../assets/teachers/sainbilegt.png";
import tselmeg from "../assets/teachers/tselmeg.png";
import tsolmon from "../assets/teachers/tsolmon.png";

const LessonCard = props => {
  const { specific, general, teacher, uni, avatar } = props;

  const avatarImg = () => {
    if (avatar === "anu") return <img alt="anu" src={anu} />;
    // if (avatar === "ashid") return <img alt="ashid" src={ashid} />;
    // if (avatar === "bayarjargal") return <img alt="bayarjargal" src={bayarjargal} />;
    if (avatar === "bilguun") return <img alt="bilguun" src={bilguun} />;
    if (avatar === "ezenbaatar") return <img alt="ezenbaatar" src={ezenbaatar} />;
    if (avatar === "bayasgalan") return <img alt="bayaslgalan" src={bayasgalan} />;
    if (avatar === "huslen") return <img alt="huslen" src={huslen} />;
    if (avatar === "javkhaa") return <img alt="javkhaa" src={javkhaa} />;
    if (avatar === "mandah") return <img alt="mandah" src={mandah} />;
    if (avatar === "munguldei") return <img alt="munguldei" src={munguldei} />;
    if (avatar === "namuungoo") return <img alt="namuundoo" src={namuungoo} />;
    if (avatar === "otgontugs") return <img alt="otgontugs" src={otgontugs} />;
    if (avatar === "sainbilegt") return <img alt="saibbilegt" src={sainbilegt} />;
    if (avatar === "tselmeg") return <img alt="tselmeg" src={tselmeg} />;
    if (avatar === "tsolmon") return <img alt="tsolmon" src={tsolmon} />;
  };

  return (
    <div className=" col l0 lessonCard">
      <div className="card">
        <div className="card-image">
          <img alt="background" className="background" src={background} />
          <span className="card-title">
            <span className="teacher card-title black-text">{teacher}</span>
            <span className="lesson card-title-1 black-text">{specific}</span>
            <span className="general black-text">{general}</span>
            <span className="uni black-text">{uni}</span>
          </span>
          <a
            href="/#"
            className="avatarImg btn-floating halfway-fab waves-effect waves-light white"
          >
            {avatarImg()}
          </a>
        </div>
        <div className="card-content lessonCardText">
        </div>
      </div>
    </div>
  );
};

export default LessonCard;
