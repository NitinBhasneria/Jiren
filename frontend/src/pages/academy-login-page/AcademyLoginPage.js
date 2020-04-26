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

class AcademyLoginPage extends React.Component {
  render() {
    return (
      <div className="card container d-flex text-vertical" style={cardStyle}>
        <img className="card-img-top " src={testLogo} alt="Card logo"></img>
        <div className="card-body">
        <h5 className="card-title text-center">Login</h5>
        <p className="card-text text-center">What's your coaching's name?</p>
        <span className=" form-group row">
        <span>
          <input type="text" className="text-right" placeholder="vibrant"  aria-describedby="basic-addon1"/>.coachboard.com</span>
        </span>
        <div className="text-center"><button type="button" style={nextButton}>Next</button></div>
        </div>
      </div>
    )
  }
}

export default AcademyLoginPage;