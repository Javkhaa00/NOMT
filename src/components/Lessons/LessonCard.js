import React from "react";
import background from "../assets/littleBC.png";
import anu from "../assets/teachers/anu.png";

const LessonCard = cin => {
  const specific = cin.specific;
  const general = cin.general;
  const teacher = cin.teacher;
  const uni = cin.uni;
  return (
    <div class="">
      <div class="card">
        <div class="card-image">
          <img className="background" src={background} />
          <span class="card-title">Card Title</span>
          <a class="btn-floating halfway-fab waves-effect waves-light red">
            <img class="material-icons" src={anu} />
          </a>
        </div>
        <div class="card-content lessonCardText">
          <p>{specific}</p>
        </div>
      </div>
    </div>
  );
};

export default LessonCard;
