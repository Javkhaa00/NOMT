import React, { useContext } from 'react'
import './FrontPage.scss'
import Clock from './assets/icons/clock icon.png'
import Money from './assets/icons/Price icon.png'
import Monitor from './assets/icons/view icon.png'
import Trust from './assets/icons/trusted icon.png'
import Phone from './assets/icons/Group.png'
import Message from './assets/icons/Group (1).png'
import Document from './assets/icons/Group (2).png'
import Book from './assets/icons/Group (3).png'
import school1 from './assets/schools/school1.png'
import school2 from './assets/schools/school2.png'
import school3 from './assets/schools/school3.png'
import school4 from './assets/schools/school4.png'
import school5 from './assets/schools/school5.png'
import school6 from './assets/schools/school6.png'
import school7 from './assets/schools/school7.png'
import school8 from './assets/schools/school8.png'
import downButton from './assets/icons/arrowDown.png'
import Header from './Header/Header.js'
import TeacherCard from './Teachers card/TeacherCard'
import DataContext from './mainContext'
import { Link } from 'react-router-dom'

const FrontPage = () => {
  const { userInformation } = useContext(DataContext)
  // fetch('/')
  //   .then(res => console.log(res));
  console.log(userInformation)
  const teacherInfo = [
    {
      name: 'Ану',
      school: 'Tongji Medical University of Hust',
      image: 'anu'
    },
    {
      name: 'Сайнбилэгт',
      school: 'University of Tokyo',
      image: 'sainbilegt'
    },
    {
      name: 'Намуунгоо',
      school: 'Harvard University',
      image: 'namuungoo'
    },
    {
      name: 'Цолмон',
      school: 'Massachusetts Institute of Technology',
      image: 'tsolmon'
    }
  ]

  return (
    <div className='mainDiv row'>
      <Header />
      <div className='first-text row col l10 m10 offset-l1 offset-m1'>
        <div style={{ width: '613px', marginLeft: '25px' }}>
          <h1 className='inspiration'>
            Таны ирээдүйн өөртөө хийх хөрөнгө оруулалт
          </h1>
          <h5>Залуу сурагчид өөрсдийн амжилтын туршлагаас хуваалцах болно.</h5>
        </div>
        <h1 className='intro col l6 m6 center'>NOMT ONLINE ACADEMY</h1>
      </div>
      <img
        alt='down'
        src={downButton}
        className='down_button_front_page circle'
      ></img>
      <div className='schools row'>
        <div className='col l12 m12 row'>
          <img
            style={{ cursor: 'pointer' }}
            onClick={() => window.open('https://www.berkeley.edu', '_blank')}
            className='col l3 m3'
            alt='school1'
            src={school1}
          />
          <img
            style={{ cursor: 'pointer' }}
            onClick={() => window.open('https://www.cambridge.org', '_blank')}
            className='col l3 m3'
            alt='school2'
            src={school2}
          />
          <img
            style={{ cursor: 'pointer' }}
            onClick={() => window.open('https://www.edu.unideb.hu', '_blank')}
            className='col l3 m3'
            alt='school3'
            src={school3}
          />
          <img
            style={{ cursor: 'pointer' }}
            onClick={() => window.open('https://www.harvard.edu', '_blank')}
            className='col l3 m3'
            alt='school4'
            src={school4}
          />
        </div>
        <div className='col l12 m12 row'>
          <img
            style={{ cursor: 'pointer' }}
            onClick={() => window.open('https://www.unimelb.edu.au/', '_blank')}
            className='col l3 m3'
            alt='school5'
            src={school5}
          />
          <img
            style={{ cursor: 'pointer' }}
            onClick={() => window.open('http://www.mit.edu', '_blank')}
            className='col l3 m3'
            alt='school6'
            src={school6}
          />
          <img
            style={{ cursor: 'pointer' }}
            onClick={() => window.open('https://www.nyu.edu', '_blank')}
            className='col l3 m3'
            alt='school7'
            src={school7}
          />
          <img
            style={{ cursor: 'pointer' }}
            onClick={() =>
              window.open('https://www.u-tokyo.ac.jp/en/', '_blank')
            }
            className='col l3 m3'
            alt='school8'
            src={school8}
          />
        </div>
      </div>
      <div className='advantage-container row'>
        <div className='col l12 m12 row'>
          <div className='advantage col l6 m6'>
            <img className='iconImg' alt='clock' src={Clock} />
            <h3>цаг хэмнэлт</h3>
            <h5>
              Бүх хичээлүүд бичлэгээр хадгалагдсан учир хүссэн сэдвээ алхасах,
              гүйлгэх, ухраан тухтай үзэх боломжтой.
            </h5>
          </div>
          <div className='advantage col l6 m6'>
            <img className='iconImg' alt='clock' src={Money} />
            <h3>Хямд үнэ</h3>
            <h5>
              Бусад танхимийн сургалтууд, тэр бүү хил бусад онлайн сургалтуудтай
              харьцуулашгүй хямд үнэтэй.
            </h5>
          </div>
        </div>
        <div className='col l12 m12 row'>
          <div className='advantage col l6 m6'>
            <img className='iconImg' alt='clock' src={Monitor} />
            <h3>Хэзээ ч, хаанаас ч үзэх</h3>
            <h5>
              Таны худалдан авсан бүхий л хичээлүүд сайт дээр хадгалагдсан байх
              тул гэрээсээ, орон дотроосоо, ширээнийхээ ард, автобусанд гээд
              хүссэн газраасаа өдөр, шөнө, өглөөг ялгалгүй хэзээ ч үзэх
              боломжтой.
            </h5>
          </div>
          <div className='advantage col l6 m6'>
            <img className='iconImg' alt='clock' src={Trust} />
            <h3>чанартай багш нар</h3>
            <h5>
              Манай багш нар зааж буй хичээлийнхээ жинхэнэ шалгалтан дээр төгс
              оноотой буюу 100%-ийн гүйцэтгэлтэй бөгөөд зарим нь тухайн
              хичээлээрээ 1-4 удаагийн ОУ-ын медалтай мэргэшсэн багш нар билээ.
            </h5>
          </div>
        </div>
        <div className='row col l12 m12'>
          <div className='advantage col l6 m6'>
            <img className='iconImg' alt='clock' src={Phone} />
            <h3>Цахим ярилцлага</h3>
            <h5>
              3 хоногт нэг удаа цахим ярилцлага хийнэ. Аль хэдийн хүссэн топ их
              сургуульдаа тэнцэн орсон Япон, Солонгос, Хятад, Унгар, Австраль
              зэрэг улсуудад сурч буй юутнуудтай тэдний хэрхэн элсэн орсон
              талаар хамтдаа аялах болно.
            </h5>
          </div>
          <div className='advantage col l6 m6'>
            <img className='iconImg' alt='clock' src={Message} />
            <h3>Харилцаа, зөвлөгөө</h3>
            <h5>
              Сурагчиддаа тухайн хичээлийнхээ багштайгаа долоо хоног бүр
              ганцаарчилсан хувийн зөвөлгөө авах боломжыг олгоно. Энэ цагаар
              сурагчид багштайгаа хүссэн сэдвийн дор ярилцах боломжтой.
            </h5>
          </div>
        </div>
        <div className='col l12 m12 row'>
          <div className='advantage col l6 m6'>
            <img className='iconImg' alt='clock' src={Document} />
            <h3>Хөтөлбөр</h3>
            <h5>
              Бид мөнгөнд бус ирээдүйн дэлхийн их дээд сургуульд орох зорилготой
              сурагчиддаа анхаарч төвлөрсөн тул маш олон төрлийн багц бэлдсэн
              байгаа.
            </h5>
          </div>
          <div className='advantage col l6 m6'>
            <img className='iconImg' alt='clock' src={Book} />
            <h3>Хичээлүүд</h3>
            <h5>
              Номт онлайн сургалтын төв нь сурагчдын хүсэл, зорилго-д
              нийцүүлхийн тулд топ их сургуульд шаардах нийт 27-н төрлийн хичээл
              зааж байгаа билээ.
            </h5>
          </div>
        </div>
      </div>
      <div className='teacher_cards'>
        <h1
          className='center'
          style={{
            fontWeight: 'bold',
            fontSize: '65px',
            textTransform: 'uppercase',
            marginTop: '0',
            marginBottom: '65px'
          }}
        >
          Багш нар
        </h1>
        <div className='row cardContainer'>
          {teacherInfo.map((cur, index) => (
            <TeacherCard
              key={index}
              name={cur.name}
              school={cur.school}
              image={cur.image}
            />
          ))}
        </div>
        <Link to='/teachers' className='btn frontPageButton' onClick={() => window.scrollTo({top: 0})}>
          <h6>Бүх багш</h6>
        </Link>
      </div>
      <div className='signup row'>
        <h1 className='center'>оюундаа хөрөнгө оруулахад бэлэн үү?</h1>
        <h5 className='center'>Өөрийн ирээдүйгээ гайхалтай болгоорой</h5>
        <Link
          onClick={() => window.scrollTo({top: 0})}
          to='/sign-up'
          className='btn frontPageButton frontPageBottomButton'
        >
          <h6>Бүртгүүлэх</h6>
        </Link>
      </div>
    </div>
  )
}

export default FrontPage
