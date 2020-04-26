import React from "react";
import testLogo from './../../static/Group1logo.svg';

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
      username: '',
      password:''
    }
    this.updateState = this.updateState.bind(this);
  };

  updateState(e) {
    this.setState({data: e.target.value});
 }
  render() {
    return (
      <div className="card container d-flex text-vertical" style={cardStyle}>
        <img className="card-img-top " src={testLogo} alt="Card logo"></img>
        <div className="card-body">
        <h5 className="card-title text-center">Vibrant Academy</h5>
        <form>
          <div className=" form-group">
            <label>Username</label>
            <input type="text"  className="form-control"
              placeholder="Username"
              value = {this.state.username} 
              onChange = {this.updateState}/>
          </div>
          <div className=" form-group">
            <label>Password</label>
            <input type="password" className="form-control"
              placeholder="password"
              value = {this.state.password} 
              onChange = {this.updateState}/>
          </div>
        </form>
        <div className="text-center"><button type="button" style={nextButton}>Next</button></div>
        </div>
      </div>
    )
  }
}

export default TeacherLoginPage;