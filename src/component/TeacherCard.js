import React from 'react'
import anu from './image/teachers/anu.png'
import bilguun from './image/teachers/bilguun.png'
import otgontugs from './image/teachers/otgontugs.png'
import sainbilegt from './image/teachers/sainbilegt.png'
import ashid from './image/teachers/ashid.png'
import bayarjargal from './image/teachers/bayarjargal.png'
import ezenbaatar from './image/teachers/ezenbaatar.png'
import herlen from './image/teachers/herlen.png'
import huslen from './image/teachers/huslen.png'
import javkha from './image/teachers/javkha.png'
import mandah from './image/teachers/mandah.png'
import munguldei from './image/teachers/munguldei.png'
import namuungoo from './image/teachers/namuungoo.png'
import tselmeg from './image/teachers/tselmeg.png'
import tsolmon from './image/teachers/tsolmon.png'


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

        if (image === 'ashid')
            return (<img alt="ashid" src={ashid} />)

        if (image === 'bayarjargal')
            return (<img alt="bayarjargal" src={bayarjargal} />)

        if (image === 'ezenbaatar')
            return (<img alt="ezenbaatar" src={ezenbaatar} />)

        if (image === 'herlen')
            return (<img alt="herlen" src={herlen} />)

        if (image === 'huslen')
            return (<img alt="huslen" src={huslen} />)

        if (image === 'javkha')
            return (<img alt="javkha" src={javkha} />)

        if (image === 'mandah')
            return (<img alt="mandah" src={mandah} />)

        if (image === 'munguldei')
            return (<img alt="munguldei" src={munguldei} />)

        if (image === 'namuungoo')
            return (<img alt="namuungoo" src={namuungoo} />)

        if (image === 'tselmeg')
            return (<img alt="tselmeg" src={tselmeg} />)

        if (image === 'tsolmon')
            return (<img alt="tsolmon" src={tsolmon} />)
            
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