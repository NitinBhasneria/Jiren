import React from "react";
import testLogo from './../../static/images/Group1logo.svg';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {  Redirect } from 'react-router-dom';
import { login } from '../../actions/auth';

var cardStyle = {
  border:'1px solid black',
  width:"400px",
};
var nextButton={
  background: '#D0E6A5',
  border:'1px #D0E6A5 solid',
  textAlign:'center'
}
class MembersLoginPage extends React.Component {
  renderField = ({ input, label, type, meta: { touched, error } }) => {
    return (
      <div className={`field ${touched && error ? 'error' : ''}`}>
        <label>{label}</label>
        <input {...input} type={type} />
        {touched && error && (
          <span className='ui pointing red basic label'>{error}</span>
        )}
      </div>
    );
  };

  hiddenField = ({ type, meta: { error } }) => {
    return (
      <div className='field'>
        <input type={type} />
        {error && <div className='ui red message'>{error}</div>}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.login(formValues);
  };

  componentDidMount(){
    // this.getOrganisation();
  }
  

  // getOrganisation(){
  //   //const { organisationdetail } = this.props.location.state;
  //   const organisationdetail = 'vibrant';
  //   let url = UrlConstructor(constant.ORGANISATION_URL, `name=${organisationdetail}`);
  //   return axios.get(url).then((response) => {
  //     this.setState({organisation:response.data});
  //   });
  // }

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to='/' />;
    }
    return (
      <div className="card container d-flex text-vertical" style={cardStyle}>
        <img className="card-img-top " src={testLogo} alt="Card logo"></img>
        <div className="card-body">
        <h5 className="card-title text-center">Name</h5>
        <div className='ui container'>
        <div className='ui segment'>
          <form
            onSubmit={this.props.handleSubmit(this.onSubmit)}
            className='ui form'
          >
            <Field
              name='username'
              type='text'
              component={this.renderField}
              label='Username'
            />
            <Field
              name='password'
              type='password'
              component={this.renderField}
              label='Password'
            />
            <Field
              name='non_field_errors'
              type='hidden'
              component={this.hiddenField}
            />
            <button className='ui primary button'>Login</button>
          </form>
        </div>
      </div>
        <div className="text-center"><button type="button" style={nextButton} onClick={this.onLogin}>Next</button></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

MembersLoginPage = connect(
  mapStateToProps,
  { login }
)(MembersLoginPage);

export default reduxForm({
  form: 'loginForm'
})(MembersLoginPage);