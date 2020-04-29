import React from "react";
import { Link } from "react-router-dom";
import testLogo from './../../static/images/Group1logo.svg';

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
  constructor(props) {
    super(props);
    this.state = {
      academyName: ''
    }
    this.updateState = this.updateState.bind(this);
  };

  updateState(e) {
    this.setState({academyName: e.target.value});
    console.log(this.state.academyName)
 }

  render() {
    return (
      <div className="card container d-flex text-vertical" style={cardStyle}>
        <img className="card-img-top " src={testLogo} alt="Card logo"></img>
        <div className="card-body">
          <h5 className="card-title text-center">Login</h5>
          <p className="card-text text-center">What's your coaching's name?</p>
          <span className=" form-group row">
          <span>
            <input type="text" className="text-right" 
              placeholder = "name"  aria-describedby="basic-addon1"
              value = {this.state.academyName}
              onChange = {this.updateState}/>
            .coachboard.com</span>
          </span>
          <div className="text-center">
              <Link to={{
                pathname : '/academy',
                state: {
                  academyName : 'Vibrant'
                }
              }}>
                <button type="button" style={nextButton}>Next</button>
              </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default AcademyLoginPage;