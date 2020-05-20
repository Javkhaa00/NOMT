import React from "react";
import "./App.css";
import FrontPage from "./components/FrontPage";
import Footer from "./components/Footer/footer";
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link
} from "react-router-dom";
import Register from "./components/register/Register";
import Teachers from "./components/TeachersList/Teachers";
import TeacherPro from "./components/TeacherProfile/TeacherPro";
import Lesson from "./components/Lessons/Lesson";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/teachers">
          <Teachers />
        </Route>
        <Route path="/teacher">
          <TeacherPro />
        </Route>
        <Route path="/lesson">
          <Lesson />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/">
          <FrontPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
