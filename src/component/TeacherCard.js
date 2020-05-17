import React from 'react'
import anu from './image/teachers/anu.png'
import bilguun from './image/teachers/bilguun.png'
import otgontugs from './image/teachers/otgontugs.png'
import sainbilegt from './image/teachers/sainbilegt.png'

const TeacherCard = (cin) => {

    const name = cin.name;
    const lesson = cin.lesson;
    const image = cin.image;
    
    const teacherIntro = () => {
        if (image === 'anu') 
            return (<img alt="anu" src={anu} />)
        
        if (image === 'bilguun') 
            return (<img alt="bilguun" src={bilguun} />)
        
        if (image === 'otgontugs') 
            return (<img alt="otgontugs" src={otgontugs} />)
        
        if (image === 'sainbilegt') 
            return (<img alt="sainbilegt" src={sainbilegt} />)
        
    }
    return (
        <div className="card">
            <div className="card-image">
                {
                    teacherIntro()
                }
            </div>
            <div className="card-content">
                <h4 style={{ fontWeight: "bold" }}>{name}</h4>
                <h5>{lesson}</h5>
            </div>
        </div>
    )
}

export default TeacherCard