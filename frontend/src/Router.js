//packages import 
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';

// files import 
import { loadUser } from './actions/auth';
import history from  './history';
import rootReducer from './reducers';
import OrganisationLoginPage from "./pages/academy-login-page/AcademyLoginPage";
import MembersLoginPage from './pages/members-login-page/MemberLogininPage.js';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk))
);

class ParentRouter extends React.Component {
  componentDidMount() {
    // store.dispatch(loadUser());
  }
  render(){
    return (
    <Provider store={store}>
      <Router history={history}>
      <Switch>
        {/* <PrivateRoute exact path='/' component={Dashboard} /> */}
        <Route exact path = "/" component = {OrganisationLoginPage}/>
        <Route path = "/academy" component = {MembersLoginPage} />
      </Switch>
      </Router>
    </Provider>
    );
  }
} 
export default ParentRouter;