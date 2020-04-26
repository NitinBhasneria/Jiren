import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import React from 'react'

import AcademyLoginPage from "./pages/academy-login-page/AcademyLoginPage";
import TeacherLoginPage from './pages/teachers-login-page/TeacherLogininPage.js'


class ParentRouter extends React.Component {
  render(){
    return (
      <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {AcademyLoginPage} />
         <Route path = "/academy" component = {TeacherLoginPage} />
      </Route>
   </Router>
    );
  }
}

export default ParentRouter;