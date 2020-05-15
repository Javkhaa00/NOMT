import React from 'react'
import teacher1 from './image/Rectangle 6.png'

const Teacher = (cin) => {

    const name = cin.name;
    const lesson = cin.lesson;
    const university = cin.university;
    
    return (
        <div className="card col l3 m3 offset-l1 offset-m1">
            <div className="card-image">
                <img alt="teacher1" src={teacher1} />
                <a href="/" className="btn-floating halfway-fab waves-effect waves-light blue"><i className="material-icons">add</i></a>
                <a href="/" className="btn-floating halfway-fab waves-effect waves-light blue"><i className="material-icons">add</i></a>
            </div>
            <div className="card-content">
                <h4 style={{ fontWeight: "bold" }}>{name}</h4>
                <h5>{lesson}</h5>
                <h6>{university}</h6>
            </div>
        </div>
    )
}

export default Teacher