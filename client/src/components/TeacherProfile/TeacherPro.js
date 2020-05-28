import React from 'react'
import Header from '../Header/Header'
import './TeacherPro.scss'
import anu from '../assets/teachers/anu.png'
import bilguun from '../assets/teachers/bilguun.png'
import otgontugs from '../assets/teachers/otgontugs.png'
import sainbilegt from '../assets/teachers/sainbilegt.png'
// import ashid from '../assets/teachers/ashid.png'
// import bayarjargal from '../assets/teachers/bayarjargal.png'
import ezenbaatar from '../assets/teachers/ezenbaatar.png'
import bayasgalan from '../assets/teachers/bayasgalan.png'
import huslen from '../assets/teachers/huslen.png'
import javkha from '../assets/teachers/javkhaa.png'
import mandah from '../assets/teachers/mandah.png'
import munguldei from '../assets/teachers/munguldei.png'
import namuungoo from '../assets/teachers/namuungoo.png'
import tselmeg from '../assets/teachers/tselmeg.png'
import tsolmon from '../assets/teachers/tsolmon.png'

const TeacherPro = () => {
  const ID = window.location.href.split('/')[
    window.location.href.split('/').length - 1
  ]

  const teacherImg = () => {
    if (ID === 'anu')
      return <img className='teacherImg' alt='anu' src={anu} />

    if (ID === 'bilguun')
      return (
        <img className='teacherImg' alt='bilguun' src={bilguun} />
      )

    if (ID === 'otgontugs')
      return (
        <img className='teacherImg' alt='otgontugs' src={otgontugs} />
      )

    if (ID === 'sainbilegt')
      return (
        <img
          className='teacherImg'
          alt='sainbilegt'
          src={sainbilegt}
        />
      )
    if (ID === 'ezenbaatar')
      return (
        <img className='teacherImg' alt='ezenbaatar' src={ezenbaatar} />
      )

    if (ID === 'bayasgalan')
      return (
        <img className='teacherImg' alt='bayasgalan' src={bayasgalan} />
      )

    if (ID === 'huslen')
      return (
        <img className='teacherImg' alt='huslen' src={huslen} />
      )

    if (ID === 'javkha')
      return (
        <img className='teacherImg' alt='javkha' src={javkha} />
      )

    if (ID === 'mandah')
      return (
        <img className=' teacherImg' alt='mandah' src={mandah} />
      )

    if (ID === 'munguldei')
      return (
        <img className=' teacherImg' alt='munguldei' src={munguldei} />
      )

    if (ID === 'namuungoo')
      return (
        <img className='teacherImg' alt='namuungoo' src={namuungoo} />
      )

    if (ID === 'tselmeg')
      return (
        <img className='teacherImg' alt='tselmeg' src={tselmeg} />
      )

    if (ID === 'tsolmon')
      return (
        <img className='teacherImg' alt='tsolmon' src={tsolmon} />
      )
  }
  const teacherInformation = {
    tsolmon: {
      name: 'Цолмон',
      school: 'Тэнцсэн сургууль: MIT ( Massachusetts Institute of Technology )',
      achievement: [
        'SAT Subject Test Physics оноо: 800',
        'SAT Subject Test Math Level 2 оноо: 800'
      ],
      littleStory:
        '1-р сургуулийн 12-р ангийн сурагч. Улсын физикийн олимпиадын алт, мөнгө, хүрэл медальтай ба SAT Subject Test Physics-т 800 оноо авсан. SAT Physics заах болно. Физиктээ сайн болохоор найдаж болно оо.',
      lesson: 'Physics',
      Subject: 'sat reasoning',
      lessonPrice: "120'000"
    }
  }

  return (
    <div className='teacherPro'>
      <Header />
      <div className='Information col l12 m10 offset-l1 offset-m1'>
        <div style={{display: 'flex', flexDirection: "row"}}>
          {teacherImg()}
          <div className='text'>
            <h4 style={{ margin: '0px 0px 15px 0px' }}> {teacherInformation[ID].name} </h4>
            <h5 style={{ margin: '0px 0px 10px 0px' }}> {teacherInformation[ID].school} </h5>
            {teacherInformation[ID].achievement.map((cur, index) => (
              <h5 style={{ margin: 0, display: 'flex', flexDirection:'row'}} key={index}>
                {' '}
                {cur}
                {' '}
              </h5>
            ))}
            <h5 style={{ marginTop: '39px' }}>{teacherInformation[ID].littleStory}</h5>
          </div>
        </div>

        <div className='lesson-card lighten-5 z-depth-1'>
          <h4 style={{ textTransform: "uppercase", margin: '0' }}>{teacherInformation[ID].lesson}</h4>
          <h6 style={{ margin: 0 }} className='subtitle'>{teacherInformation[ID].Subject}</h6>
          <h5 style={{ margin: '12px 170px 0px 0px', fontSize: '19px' }}>{teacherInformation[ID].lessonPrice}</h5>
        </div>

      </div>

    </div>
  )
}

export default TeacherPro
