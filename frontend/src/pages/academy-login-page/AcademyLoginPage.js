import React from "react";
import { Link, Redirect } from "react-router-dom";
import { browserHistory } from 'react-router'

import testLogo from './../../static/images/Group1logo.svg';
import { loadOrganisation } from './../../actions/organisationAction';
import { connect } from "react-redux";

var cardStyle = {
  border:'1px solid black',
  width:"400px",
};
var nextButton={
  background: '#D0E6A5',
  border:'1px #D0E6A5 solid',
  textAlign:'center'
}

class OrganisationLoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      academyName: ''
    }
    this.updateState = this.updateState.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  };

  updateState(e) {
    this.setState({academyName: e.target.value});
  }
  onSubmit(){
    console.log("clicked");
    // if(this.props.loadOrganisation(this.state.academyName)){
    //   return (<Redirect to='/academy' ></Redirect>) 

    // }
    this.props.history.push("/academy");
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
            <button type="button"
              style={nextButton} 
              onClick={this.onSubmit}>
            Next
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  organisation : state.organisation.organisation
})
OrganisationLoginPage = connect(
  mapStateToProps,
  { loadOrganisation }
)(OrganisationLoginPage);

export default OrganisationLoginPage;