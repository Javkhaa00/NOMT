import React from 'react'
import Header from '../Header/Header'
import teach from '../assets/teach.png'
import './Teachers.scss'
import downButton from '../assets/icons/arrowDown.png'
import TeacherCard from '../Teachers card/TeacherCard.js'
import sofwareImage from '../assets/Layer_1.png'


const Teachers = () => {
    const MONBUSHO = [
        {
            name: 'Ану',
            lesson: 'HSK Level 1, 2, 3, 4',
            image: 'anu'
        },
        {
            name: 'Сайнбилэгт',
            lesson: 'Physics, JUAP',
            image: 'sainbilegt'
        },
        {
            name: 'Билгүүн',
            lesson: 'Math',
            image: 'bilguun'
        },
        {
            name: 'Отгонтөгс',
            lesson: 'Japan',
            image: 'otgontugs'
        }
    ]

    const toefl = [
        {
            name: 'Хэрлэн',
            lesson: 'TOFEL-Reading, Listening',
            image: 'herlen'
        },
        {
            name: 'Мөнгөлдэй',
            lesson: 'TOFEL-Writing, Speaking',
            image: 'munguldei'
        },
        {
            name: 'Мандах',
            lesson: 'IELTS-Reading, Listening',
            image: 'mandah'
        },
        {
            name: 'Баяржаргал',
            lesson: 'IEALTS-Writing, Speaking',
            image: 'bayarjargal'
        }
    ]

    const SAT = [
        {
            name: 'Мөнхжавхлан',
            lesson: 'HTML, CSS',
            image: 'javkha'
        },
        {
            name: 'Цолмон',
            lesson: 'Physics',
            image: 'tsolmon'
        },
        {
            name: 'Хүслэн',
            lesson: 'Math level 2',
            image: 'huslen'
        },
        {
            name: 'Ашид',
            lesson: 'Chemistry, Biology',
            image: 'ashid'
        }
    ]

    const ADMISSIONS = [
        {
            name: 'Намуунгоо',
            lesson: 'Reading, Listening',
            image: 'namuungoo'
        },
        {
            name: 'Цэлмэг',
            lesson: 'Writing, Speaking',
            image: 'tselmeg'
        },
        {
            name: 'Эзэнбаатар',
            lesson: 'Reading, Listening',
            image: 'ezenbaatar'
        }
    ]
    return (
        <div className="teachers row">
            <Header />
            <div className="col l10 offset-l1 m10 offset-m1 row">
                <div className="title col l6 m6 offset-l1 offset-m1">
                    <h1 className="center"> MODERN SCHOOL </h1>
                    <h1 className="center"> FOR </h1>
                    <h1 className="center"> MODERN STUDENTS </h1>
                </div>
                <img className="titleImage col l5 m5" alt="teach" src={teach} />
            </div>
            <img alt="down" src={downButton} className="down_button circle"></img>
            <div className="teacher_cards col l10 m10 offset-l1 offset-m1">
                <h3 style={{ fontWeight: "bold", fontSize: '2.5vw', marginTop: '4vw' }}>HSK, MONBUSHO</h3>
                <div className="row cardContainer">
                    {
                        MONBUSHO.map((cur, index) => <TeacherCard key={index} name={cur.name} lesson={cur.lesson} image={cur.image} />)
                    }
                </div>
                <h3 style={{ fontWeight: "bold", fontSize: '2.5vw', marginTop: '4vw' }}>TOEFL, IELTS</h3>
                <div className="row cardContainer">
                    {
                        toefl.map((cur, index) => <TeacherCard key={index} name={cur.name} lesson={cur.lesson} image={cur.image} />)
                    }
                </div>
                <h3 style={{ fontWeight: "bold", fontSize: '2.5vw', marginTop: '4vw' }}>PROGRAMMING, SAT SUBJECTS</h3>
                <div className="row cardContainer">
                    {
                        SAT.map((cur, index) => <TeacherCard key={index} name={cur.name} lesson={cur.lesson} image={cur.image} />)
                    }
                </div>
                <h3 style={{ fontWeight: "bold", fontSize: '2.5vw', marginTop: '4vw' }}>ADMISSIONS PROCESS, SAR REASONNING</h3>
                <div className="row cardContainer">
                    {
                        ADMISSIONS.map((cur, index) => <TeacherCard key={index} name={cur.name} lesson={cur.lesson} image={cur.image} />)
                    }
                </div>
            </div>
            <div className="sofware_intro col l10 m10 offset-l1 offset-m1 row">
                <img className="sofwareImage col l5 m5 offset-l1 offset-m1" alt="sofwareImage" src={sofwareImage} />
                <h4 className="center col l6 m6"> Хөгжүүлэлтийн баг: </h4>
                <h4 className="names center col l5 m5 offset-l1 offset-m1">
                    Золбоо /software/
                    Мөнхжавхлан /software/
                    Хонгорзул /software/
                    Мөнхтулга /design/
                </h4>
            </div>
        </div>
    )
}

export default Teachers