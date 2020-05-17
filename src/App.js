import React from "react";
import "./App.css";
import FrontPage from "./components/FrontPage";
import Footer from "./components/Footer/footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Teachers from "./components/Teachers list/Teachers";
import TeacherPro from "./components/TeacherProfile/TeacherPro";

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
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
