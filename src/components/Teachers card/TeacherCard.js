import React from 'react'
import anu from '../assets/teachers/anu.png'
import bilguun from '../assets/teachers/bilguun.png'
import otgontugs from '../assets/teachers/otgontugs.png'
import sainbilegt from '../assets/teachers/sainbilegt.png'
import ashid from '../assets/teachers/ashid.png'
import bayarjargal from '../assets/teachers/bayarjargal.png'
import ezenbaatar from '../assets/teachers/ezenbaatar.png'
import herlen from '../assets/teachers/herlen.png'
import huslen from '../assets/teachers/huslen.png'
// import javkha from '../assets/teachers/javkha.png'
import javkhaa from '../assets/teachers/javkhaa1.png'
import mandah from '../assets/teachers/mandah.png'
import munguldei from '../assets/teachers/munguldei.png'
import namuungoo from '../assets/teachers/namuungoo.png'
import tselmeg from '../assets/teachers/tselmeg.png'
import tsolmon from '../assets/teachers/tsolmon.png'
import './TeacherCard.scss'


const TeacherCard = (cin) => {

    const name = cin.name;
    const lesson = cin.lesson;
    const image = cin.image;

    const teacherIntro = () => {
        if (image === 'anu')
            return (<img className="teacherProfilePicture" alt="anu" src={anu} />)

        if (image === 'bilguun')
            return (<img className="teacherProfilePicture" alt="bilguun" src={bilguun} />)

        if (image === 'otgontugs')
            return (<img className="teacherProfilePicture" alt="otgontugs" src={otgontugs} />)

        if (image === 'sainbilegt')
            return (<img className="teacherProfilePicture" alt="sainbilegt" src={sainbilegt} />)

        if (image === 'ashid')
            return (<img className="teacherProfilePicture" alt="ashid" src={ashid} />)

        if (image === 'bayarjargal')
            return (<img className="teacherProfilePicture" alt="bayarjargal" src={bayarjargal} />)

        if (image === 'ezenbaatar')
            return (<img className="teacherProfilePicture" alt="ezenbaatar" src={ezenbaatar} />)

        if (image === 'herlen')
            return (<img className="teacherProfilePicture" alt="herlen" src={herlen} />)

        if (image === 'huslen')
            return (<img className="teacherProfilePicture" alt="huslen" src={huslen} />)

        if (image === 'javkha')
            return (<img className="teacherProfilePicture" alt="javkha" src={javkhaa} />)

        if (image === 'mandah')
            return (<img className="teacherProfilePicture" alt="mandah" src={mandah} />)

        if (image === 'munguldei')
            return (<img className="teacherProfilePicture" alt="munguldei" src={munguldei} />)

        if (image === 'namuungoo')
            return (<img className="teacherProfilePicture" alt="namuungoo" src={namuungoo} />)

        if (image === 'tselmeg')
            return (<img className="teacherProfilePicture" alt="tselmeg" src={tselmeg} />)

        if (image === 'tsolmon')
            return (<img className="teacherProfilePicture" alt="tsolmon" src={tsolmon} />)       
    }

    const onclick = () => {
        window.location.href='/teacher/' + image;
    }
    return (
        <div className="card" onClick={onclick}>
            <div className="card-image">
                {
                    teacherIntro()
                }
            </div>
            <div className="card-content">
                <h4 style={{ fontWeight: "bold", fontSize: '2.1vw' }}>{name}</h4>
                <h5 style={{fontSize: '1.4vw' }}>{lesson}</h5>
            </div>
        </div>
    )
}

export default TeacherCard