import React from 'react'
import Header from './Header'
import './TeacherPro.scss'
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

const TeacherPro = () => {
    const ID = (window.location.href).split('/')[(window.location.href).split('/').length - 1];

    const teacherImg = () => {
        if (ID === 'anu')
            return (<img className="col l3 m3 teacherImg" alt="anu" src={anu} />)

        if (ID === 'bilguun')
            return (<img className="col l3 m3 teacherImg" alt="bilguun" src={bilguun} />)

        if (ID === 'otgontugs')
            return (<img className="col l3 m3 teacherImg" alt="otgontugs" src={otgontugs} />)

        if (ID === 'sainbilegt')
            return (<img className="col l3 m3 teacherImg" alt="sainbilegt" src={sainbilegt} />)

        if (ID === 'ashid')
            return (<img className="col l3 m3 teacherImg" alt="ashid" src={ashid} />)

        if (ID === 'bayarjargal')
            return (<img className="col l3 m3 teacherImg" alt="bayarjargal" src={bayarjargal} />)

        if (ID === 'ezenbaatar')
            return (<img className="col l3 m3 teacherImg" alt="ezenbaatar" src={ezenbaatar} />)

        if (ID === 'herlen')
            return (<img className="col l3 m3 teacherImg" alt="herlen" src={herlen} />)

        if (ID === 'huslen')
            return (<img className="col l3 m3 teacherImg" alt="huslen" src={huslen} />)

        if (ID === 'javkha')
            return (<img className="col l3 m3 teacherImg" alt="javkha" src={javkha} />)

        if (ID === 'mandah')
            return (<img className="col l3 m3 teacherImg" alt="mandah" src={mandah} />)

        if (ID === 'munguldei')
            return (<img className="col l3 m3 teacherImg" alt="munguldei" src={munguldei} />)

        if (ID === 'namuungoo')
            return (<img className="col l3 m3 teacherImg" alt="namuungoo" src={namuungoo} />)

        if (ID === 'tselmeg')
            return (<img className="col l3 m3 teacherImg" alt="tselmeg" src={tselmeg} />)

        if (ID === 'tsolmon')
            return (<img className="col l3 m3 teacherImg" alt="tsolmon" src={tsolmon} />)
    }

    const teacherImgCircle = () => {
        if (ID === 'anu')
            return (<img className="col l3 m3 teacherImgCircle circle" alt="anu" src={anu} />)

        if (ID === 'bilguun')
            return (<img className="col l3 m3 teacherImgCircle circle" alt="bilguun" src={bilguun} />)

        if (ID === 'otgontugs')
            return (<img className="col l3 m3 teacherImgCircle circle" alt="otgontugs" src={otgontugs} />)

        if (ID === 'sainbilegt')
            return (<img className="col l3 m3 teacherImgCircle circle" alt="sainbilegt" src={sainbilegt} />)

        if (ID === 'ashid')
            return (<img className="col l3 m3 teacherImgCircle circle" alt="ashid" src={ashid} />)

        if (ID === 'bayarjargal')
            return (<img className="col l3 m3 teacherImgCircle circle" alt="bayarjargal" src={bayarjargal} />)

        if (ID === 'ezenbaatar')
            return (<img className="col l3 m3 teacherImgCircle circle" alt="ezenbaatar" src={ezenbaatar} />)

        if (ID === 'herlen')
            return (<img className="col l3 m3 teacherImgCircle circle" alt="herlen" src={herlen} />)

        if (ID === 'huslen')
            return (<img className="col l3 m3 teacherImgCircle circle" alt="huslen" src={huslen} />)

        if (ID === 'javkha')
            return (<img className="col l3 m3 teacherImgCircle circle" alt="javkha" src={javkha} />)

        if (ID === 'mandah')
            return (<img className="col l3 m3 teacherImgCircle circle" alt="mandah" src={mandah} />)

        if (ID === 'munguldei')
            return (<img className="col l3 m3 teacherImgCircle circle" alt="munguldei" src={munguldei} />)

        if (ID === 'namuungoo')
            return (<img className="col l3 m3 teacherImgCircle circle" alt="namuungoo" src={namuungoo} />)

        if (ID === 'tselmeg')
            return (<img className="col l3 m3 teacherImgCircle circle" alt="tselmeg" src={tselmeg} />)

        if (ID === 'tsolmon')
            return (<img className="col l3 m3 teacherImgCircle circle" alt="tsolmon" src={tsolmon} />)
    }

    const teacherInformation = {
        tsolmon: {
            name: 'Цолмон',
            school: 'Тэнцсэн сургууль: MIT ( Massachusetts Institute of Technology )',
            achievement: ['SAT Subject Test Physics оноо: 800',
                'SAT Subject Test Math Level 2 оноо: 800'],
            littleStory: '1-р сургуулийн 12-р ангийн сурагч. Улсын физикийн олимпиадын алт, мөнгө, хүрэл медальтай ба SAT Subject Test Physics-т 800 оноо авсан. SAT Physics заах болно. Физиктээ сайн болохоор найдаж болно оо.',
            lesson: 'Physics',
            Subject: 'sat reasoning',
            lessonPrice: "120'000"
        }
    }

    return (
        <div className="teacherPro row">
            <Header />
            <div className="Information col l10 m10 offset-l1 offset-m1">
                {teacherImg()}
                <h4 className="col l7 offset-l1 m7 offset-m1" style={{ fontWeight: 'bold' }}>
                    {teacherInformation[ID].name}
                </h4>
                <h5 className="col l7 offset-l1 m7 offset-m1">
                    {teacherInformation[ID].school}
                </h5>
                {
                    (teacherInformation[ID].achievement).map((cur, index) => <h5 key={index} className="col l7 offset-l1 m7 offset-m1"> {cur} </h5>)
                }
                <h5 className="col l7 offset-l1">
                    {teacherInformation[ID].littleStory}
                </h5>
            </div>
            <div className="lessonCard col m2 offset-m1 l2 offset-l1 lighten-5 z-depth-1 row">
                <div className="col l8">
                    <h4 style={{ fontWeight: '500',marginBottom: '0', fontSize: '2vw'}}>
                        {teacherInformation[ID].lesson}
                    </h4>
                    <h6 style={{marginTop: '0'}}>
                        {teacherInformation[ID].Subject}
                    </h6>
                    <h6>
                        {teacherInformation[ID].lessonPrice}
                    </h6>
                </div>
                <div className="col l2">
                    {teacherImgCircle()}
                </div>
            </div>
        </div>
    )
}

export default TeacherPro