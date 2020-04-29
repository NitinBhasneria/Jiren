import React from "react";
import testLogo from './../../static/images/Group1logo.svg';
import axios from 'axios';
import * as constant from './../../static/files/constant';
import { UrlConstructor } from './../../components/UrlConstructor';

var cardStyle = {
  border:'1px solid black',
  width:"400px",
};
var nextButton={
  background: '#D0E6A5',
  border:'1px #D0E6A5 solid',
  textAlign:'center'
}
class TeacherLoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts:{
        username: '',
        password:''
      }
    }
    this.updateState = this.updateState.bind(this);
    this.onLogin = this.onLogin.bind(this);
  };
  componentDidMount(){
    this.getOrganisation();
  }
  updateState(e) {
    this.setState({accounts: e.target.value});
  }

  getOrganisation(){
    //const { organisationdetail } = this.props.location.state;
    const organisationdetail = 'vibrant';
    let url = UrlConstructor(constant.ORGANISATION_URL, `name=${organisationdetail}`);
    return axios.get(url).then((response) => {
      this.setState({organisation:response.data});
    });
  }
  onLogin(){
    console.log(this.state.accounts);
    return axios.post(constant.LOGIN_URL,{
      username:this.state.accounts.username,
      password:this.state.accounts.password
    })
  }

  render() {
    return (
      <div className="card container d-flex text-vertical" style={cardStyle}>
        <img className="card-img-top " src={testLogo} alt="Card logo"></img>
        <div className="card-body">
        <h5 className="card-title text-center">Name</h5>
        <form>
          <div className=" form-group">
            <label>Username</label>
            <input type="text"  className="form-control"
              placeholder="Username"
              value = {this.state.accounts.username} 
              onChange = {this.updateState}/>
          </div>
          <div className=" form-group">
            <label>Password</label>
            <input type="password" className="form-control"
              placeholder="password"
              value = {this.state.accounts.password} 
              onChange = {this.updateState}/>
          </div>
        </form>
        <div className="text-center"><button type="button" style={nextButton} onClick={this.onLogin}>Next</button></div>
        </div>
      </div>
    )
  }
}

export default TeacherLoginPage;