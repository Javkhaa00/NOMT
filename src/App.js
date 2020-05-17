import React from "react";
import "./App.css";
import FrontPage from "./component/FrontPage";
import Footer from "./component/footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Teachers from "./component/Teachers";
import TeacherPro from "./component/TeacherPro";
import Register from "./component/register/Register"

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
        <Route path="/">
          <FrontPage />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
