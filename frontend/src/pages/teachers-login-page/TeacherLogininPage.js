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
  render() {
    return (
      <div className="card container d-flex text-vertical" style={cardStyle}>
        <img className="card-img-top " src={testLogo} alt="Card logo"></img>
        <div className="card-body">
        <h5 className="card-title text-center">Vibrant Academy</h5>
        <form>
          <div className=" form-group">
            <label>Username</label>
            <input type="text"  className="form-control" placeholder="Username"/>
          </div>
          <div className=" form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="password"/>
          </div>
        </form>
        <div className="text-center"><button type="button" style={nextButton}>Next</button></div>
        </div>
      </div>
    )
  }
}

export default TeacherLoginPage;