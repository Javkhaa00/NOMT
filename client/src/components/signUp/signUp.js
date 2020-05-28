import React from 'react'
import './signUp.scss'
import Header from '../Header/Header'
import Check from './check'

const SignUp = () => {
  const registerclicked = () => {
    const resultOfCheck = Check();
    if (resultOfCheck.check === true) {
      document.forms["sign-up"].submit();
    }
  }

  // const worthy = () => {
  //   console.log('passed')
  // }
  return (
    <div className='register-container row'>
      <Header />
      <div className='text-container row col l10 m10 offset-l1 offset-m1'>
        <div className='bold-text'>
          ТАНЫ ИРЭЭДҮЙН ӨӨРТӨӨ ХИЙХ ХӨРӨНГӨ ОРУУЛАЛТ
        </div>
        <div className='text'>Таньд олон давуу тал бий болох болно</div>
      </div>
      <div className="down_button "></div>
  
      <form id="sign-up" className='sign-up-container row' action="/sign-up" method="post" onSubmit={e => e.preventDefault()}>
        <div className='input'>
          <label className='head-text left align'>ОВОГ</label>
          <input
            placeholder='ТАНЫ ОВОГ'
            id='second_name'
            name='second_name'
            type='text'
            className='sign-up-input validate'
          ></input>
        </div>

        <div className='input'>
          <label className='head-text left align'>НЭР</label>
          <input
            placeholder='ТАНЫ НЭР'
            id='first_name'
            name='first_name'
            type='text'
            className='validate sign-up-input'
            required
          ></input>
        </div>

        <div className='input'>
          <label className='head-text left align'>ТӨРСӨН ӨДӨР</label>
          <div className='birth'>
            <input
              placeholder='ОН'
              id='year'
              name='year'
              type='number'
              className='year validate'
              required
            ></input>
            <input
              placeholder='САР'
              id='month'
              name='month'
              type='number'
              className='month validate'
              required
            ></input>
            <input
              placeholder='ӨДӨР'
              id='day'
              name='day'
              type='number'
              className='day validate'
              required
            ></input>
          </div>
        </div>

        <div className='input'>
          <label className='head-text left align required'>СУРГУУЛЬ</label>
          <input
            placeholder='ТАНЫ СУРГУУЛЬ'
            id='school'
            name='school'
            type='text'
            className='sign-up-input validate'
            required
          ></input>
        </div>
        <div className='supp-text'>
          Хэрвээ жилийн чөлөө авсан бол ЖЧА гэж бичнэ үү
        </div>
        <div className='input'>
          <label className='head-text left-align'>АНГИ</label>
          <input
            placeholder='ХЭД ДҮГЭЭР АНГИ'
            id='class'
            name='class'
            type='text'
            className='sign-up-input validate'
            required
          ></input>
        </div>

        <div className='input'>
          <label className='head-text left-align'>УТАСНЫ ДУГААР</label>
          <input
            placeholder='ХХХХХХХХ'
            minLength='8'
            maxLength='8'
            pattern='\d*'
            id='phone_number'
            name='phone_number'
            type='number'
            className='sign-up-input validate'
            required
          ></input>
        </div>

        <div className='input'>
          <label className='head-text left-align'>И-МЭЙЛ</label>
          <input
            placeholder='ЦАХИМ ЩУУДАНГИЙН ХАЯГ'
            id='email'
            name='email'
            type='text'
            className='sign-up-input validate'
            required
          ></input>
        </div>

        <div className='input'>
          <label className='head-text left-align'>НУУЦ ДУГААР</label>
          <input
            placeholder='КОДОО ОРУУЛНА УУ'
            minLength='8'
            id='password'
            name='password'
            type='password'
            className='sign-up-input validate'
            required
            pattern='.+@beststartupever.com'
          ></input>
        </div>

        <div className='bottom'>
          <a href='/sign-in' className='valign-wrapper sign-in' required>
            Нэвтрэх
          </a>
          <button className='btn register' onClick={registerclicked}>
            Бүртгүүлэх
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignUp
