import React, { useState } from "react";
import Header from "../Header/Header";
import "./Lesson.scss";
import LessonCard from "./LessonCard";
import { COURSES, LESSON_UNITS} from './LessonData';


const Lessons = () => {
  const [selectedLessonId, setSelectedLessonId] = useState('satreasoning');

  return (
    <div className="Teachers row">
      <Header />
      <div className="main">
        <div className="name">
          {COURSES.map(course => (
            <h2 
              className={`Lesson-course-title ${selectedLessonId === course.id && 'bold'}`} id="satSubject" 
              onClick={() => setSelectedLessonId(course.id)}
            >
              {course.title}
            </h2>
          ))}
        </div>
        <div
          className="lessons row">
          {LESSON_UNITS[selectedLessonId].map((cur, index) => (
            <LessonCard
              key={index}
              specific={cur.specific}
              general={cur.general}
              teacher={cur.teacher}
              uni={cur.uni}
              avatar={cur.avatar}
            />
          ))}
        </div>
      </div>
    </div >
  );
};

export default Lessons;