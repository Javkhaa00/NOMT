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
            lesson: 'Physics',
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
            name: 'Баясгалан',
            lesson: 'TOFEL-Reading, Listening',
            image: 'bayasgalan'
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
            name: '',
            lesson: '',
            image: ''
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
            name: '',
            lesson: '',
            image: ''
        }
    ]

    const ADMISSIONS = [
        {
            name: 'Сайнбилэгт',
            lesson: 'Japanese Undergraduate',
            image: 'sainbilegt'
        },
        {
            name: 'Намуунгоо',
            lesson: 'U.S. Undergraduate',
            image: 'namuungoo'
        },
        {
            name: 'Эзэнбаатар',
            lesson: 'Mathematics',
            image: 'ezenbaatar'
        },
        {
            name: 'Цэлмэг',
            lesson: 'Writing, Speaking',
            image: 'tselmeg'
        }
    ]
    return (
        <div className="teachers row">
            <Header />
            <div className="row aboutUsTitle">
                <div className="title">
                    <h1 className="center"> MODERN SCHOOL </h1>
                    <h1 className="center"> FOR </h1>
                    <h1 className="center"> MODERN STUDENTS </h1>
                </div>
                <img className="titleImage" alt="teach" src={teach} />
            </div>
            <img alt="down" src={downButton} className="down_button_teachers circle"></img>
            <div className="teacher_cards">
                <h3>ADMISSIONS PROCESS, SAR REASONNING</h3>
                <div className="cardContainer">
                    {
                        ADMISSIONS.map((cur, index) => <TeacherCard key={index} name={cur.name} lesson={cur.lesson} image={cur.image} />)
                    }
                </div>
                <h3>HSK, MONBUSHO</h3>
                <div className="cardContainer">
                    {
                        MONBUSHO.map((cur, index) => <TeacherCard key={index} name={cur.name} lesson={cur.lesson} image={cur.image} />)
                    }
                </div>
                <h3>TOEFL, IELTS</h3>
                <div className="cardContainer">
                    {
                        toefl.map((cur, index) => <TeacherCard key={index} name={cur.name} lesson={cur.lesson} image={cur.image} />)
                    }
                </div>
                <h3>PROGRAMMING, SAT SUBJECTS</h3>
                <div className="cardContainer">
                    {
                        SAT.map((cur, index) => <TeacherCard key={index} name={cur.name} lesson={cur.lesson} image={cur.image} />)
                    }
                </div>
            </div>
            <div className="sofware_intro">
                <img className="sofwareImage" alt="sofwareImage" src={sofwareImage} />
                <div className="sofwareInformation">
                    <h4 className="namesTitle"> Хөгжүүлэлтийн баг: </h4>
                    <h4 className="names">
                        Золбоо /software/
                        Мөнхжавхлан /software/
                        Хонгорзул /software/
                        Батаа /software/
                        Мөнхтулга /design/
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default Teachers