import React, { useState } from "react";
import Header from "../Header/Header";
import downButton from "../assets/icons/arrowDown.png";
import study from "../assets/study.png";
import "./Lesson.scss";
import LessonCard from "./LessonCard";

const Lessons = () => {
  const [lessonName, setLessonName] = useState('satreasoning');

  const LessonUnits = {
    satreasoning: [
      {
        specific: "READING",
        general: "SAT REASONING",
        teacher: "ЦЭЛМЭГ",
        uni: "UC Berkeley"
      },
      {
        specific: "WRITING",
        general: "SAT REASONING",
        teacher: "ЦЭЛМЭГ",
        uni: "UC Berkeley"
      },
      {
        specific: "MATH",
        general: "SAT REASONING",
        teacher: "ЭЗЭНБААТАР",
        uni: "KANSAS UNIVERSITY"
      },
      {
        specific: "ESSEY",
        general: "SAT REASONING",
        teacher: "ЦЭЛМЭГ",
        uni: "KANSAS UNIVERSITY"
      }
    ],
    satsubjects: [
      {
        specific: "PHYSICS",
        general: "SAT SUBJECTS",
        teacher: "ЦОЛМОН",
        uni: "MIT"
      },
      {
        specific: "MATH LVL 2",
        general: "SAT SUBJECTS",
        teacher: "ХҮСЛЭН",
        uni: "UC BERKELEY"
      },
      {
        specific: "CHEMISTRY",
        general: "SAT SYBJECTS",
        teacher: "АШИД",
        uni: "CAMBRIDGE"
      },
      {
        specific: "BIOLOGY",
        general: "SAT SUBJECTS",
        teacher: "АШИД",
        uni: "CAMBRIDGE"
      }
    ],
    ieltstoefl: [
      {
        specific: "READING",
        general: "TOEFL",
        teacher: "ХЭРЛЭН",
        uni: "NYU SHANGHAI"
      },
      {
        specific: "LISTENING",
        general: "IELTS",
        teacher: "МАНДАХ",
        uni: "MELBOURNE UNIVERSITY"
      },
      {
        specific: "WRITING",
        general: "IELTS",
        teacher: "БАЯРЖАРГАЛ",
        uni: ""
      },
      {
        specific: "SPEAKING",
        general: "IELTS",
        teacher: "БАЯРЖАРГАЛ",
        uni: ""
      }
    ],
    monbusho: [
      {
        specific: "PHYSICS",
        general: "MONBUSHO",
        teacher: "БАЯРЖАРГАЛ",
        uni: "The university of Tokyo Osaka"
      },
      {
        specific: "MATH",
        general: "MONBUSHO",
        teacher: "САЙНБИЛЭГТ",
        uni: "The university of Tokyo Osaka"
      },
      {
        specific: "CHEMISRTY",
        general: "MONBUSHO",
        teacher: "БИЛГҮҮН",
        uni: ""
      },
      {
        specific: "JAPANESE",
        general: "MONBUSHO",
        teacher: "ОТГОНТӨГС",
        uni: ""
      }
    ],
    hsk: [
      {
        specific: "HSK-1",
        general: "HSK",
        teacher: "АНУ",
        uni: "Tongji Medical University of Hust"
      },
      {
        specific: "HSK-2",
        general: "HSK",
        teacher: "АНУ",
        uni: "Tongji Medical University of Hust"
      },
      {
        specific: "HSK-3",
        general: "HSK",
        teacher: "АНУ",
        uni: "Tongji Medical University of Hust"
      },
      {
        specific: "HSK-4",
        general: "HSK",
        teacher: "АНУ",
        uni: "Tongji Medical University of Hust"
      }
    ],
    undergraduate: [
      {
        specific: "A-P",
        general: "JAPANESE UNDERGRADUATE",
        teacher: "САЙНБИЛЭГТ",
        uni: "The University of Osaka"
      },
      {
        specific: "A-P",
        general: "US UNDERGRADUATE",
        teacher: "НАМУУНГОО",
        uni: "HARVARD"
      }
    ],
    programm: [
      {
        specific: "PHYTON",
        general: "PROGRAMMING",
        teacher: "",
        uni: ""
      },
      {
        specific: "HTML",
        general: "PROGRAMMING",
        teacher: "МӨНХЖАВХЛАН",
        uni: ""
      },
      {
        specific: "CSS",
        general: "PROGRAMMING",
        teacher: "МӨНХЖАВХЛАН",
        uni: ""
      },
      {
        specific: "SASS",
        general: "PROGRAMMING",
        teacher: "ЗОЛБОО",
        uni: ""
      }
    ]
  };

  return (
    <div className="teachers row">
      <Header />
      <div className="col l10 offset-l1 m10 offset-m1 row">
        <div className="lessons_title title col l6 m6 offset-l1 offset-m1">
          <h1>БИЕТ МАТЕРИАЛЫН БУС </h1>
          <h1>ЦАХИМ МАТЕРИАЛЫН </h1>
          <h1>ЭРИН ЗУУН </h1>
        </div>
        <img className="titleImage col l5 m5" alt="study" src={study} />
      </div>
      <img alt="down" src={downButton} className="down_button circle"></img>
      <div className="teacher_cards col l4 m4 ">
        <h2 onClick={() => {setLessonName('satreasoning')}} style={{ fontWeight: "bold", fontSize: "1.5vw", marginTop: "2vw", cursor: "pointer" }}>
          SAT REASONING
        </h2>
        <h2 onClick={() => {setLessonName('satsubjects')}} style={{ fontWeight: "bold", fontSize: "1.5vw", marginTop: "2vw", cursor: "pointer" }}>
          SAT SUBJECTS
        </h2>
        <h2 onClick={() => {setLessonName('ieltstoefl')}} style={{ fontWeight: "bold", fontSize: "1.5vw", marginTop: "2vw", cursor: "pointer" }}>
          IELTS & TOEFL
        </h2>
        <h2 onClick={() => {setLessonName('monbusho')}} style={{ fontWeight: "bold", fontSize: "1.5vw", marginTop: "2vw", cursor: "pointer" }}>
          MONBUSHO
        </h2>
        <h2 onClick={() => {setLessonName('hsk')}} style={{ fontWeight: "bold", fontSize: "1.5vw", marginTop: "2vw", cursor: "pointer" }}>
          HSK
        </h2>
        <h2 onClick={() => {setLessonName('undergraduate')}} style={{ fontWeight: "bold", fontSize: "1.5vw", marginTop: "2vw", cursor: "pointer" }}>
          UNDERGRADUETE APPLICATION PROCESS
        </h2>
        <h2 onClick={() => {setLessonName('programm')}} style={{ fontWeight: "bold", fontSize: "1.5vw", marginTop: "2vw", cursor: "pointer" }}>
          PROGRAMMING & WEB DESIGN
        </h2>
      </div>
      <div className="lessons">
        {
          LessonUnits[lessonName].map((cur,index) => <LessonCard key={index} specific={cur.specific} general={cur.general} teacher={cur.teacher} uni={cur.uni}/>)
        }
      </div>
    </div>
  );
};

export default Lessons;
