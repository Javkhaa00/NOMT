import React, { useState } from 'react'
import './App.css'
import FrontPage from './components/FrontPage'
import Footer from './components/Footer/footer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Teachers from './components/TeachersList/Teachers'
import TeacherPro from './components/TeacherProfile/TeacherPro'
import Lesson from './components/Lessons/Lesson.jsx'
import SignUp from './components/signUp/signUp.js'
import SignIn from './components/signIn/signIn.js'
import Payment from './components/Payment/Payment'
import DataContext from './components/mainContext'

function App () {
  // fetch()
  const [userInformation, setUserInformation] = useState({
    name: '',
    email: ''
  })

  return (
    <Router>
      <DataContext.Provider value={{ userInformation, setUserInformation }}>
        <Switch>
          <Route path='/teachers'>
            <Teachers />
          </Route>
          <Route path='/teacher'>
            <TeacherPro />
          </Route>
          <Route path='/lesson'>
            <Lesson />
          </Route>
          <Route path='/payment'>
            <Payment />
          </Route>
          <Route path='/sign-up'>
            <SignUp />
          </Route>
          <Route path='/sign-in'>
            <SignIn />
          </Route>
          <Route path='/payment'>
            <Payment />
          </Route>
          <Route exact path='/'>
            <FrontPage />
          </Route>
        </Switch>
        <Footer />
      </DataContext.Provider>
    </Router>
  )
}

export default App
