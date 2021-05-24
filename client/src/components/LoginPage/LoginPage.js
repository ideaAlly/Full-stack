

import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
// import img from './img.jpg';
export class LoginPage extends Component{
  responseGoogle = (response) =>{
    console.log(response);
    console.log(response.profileObj);
  }

  render() {
    return (
      <div className="loginpage">
          <div className="google">
        <GoogleLogin
          clientId="80993338551-9a8k6vgq0giaqmsqel22ved2ol3ov1rc.apps.googleusercontent.com"
          buttonText="Sign in with Google"
          onSuccess = {this.responseGoogle}
          onFailure = {this.responseGoogle} 
          cookiePolicy = {'single_host_origin'}

        /></div>
        <div className="heading">
            <h1>
                Welcome to IdeaAlly! <br></br>
            </h1>
            <h2>Searching for a teammate for your projects? Trying to find a co-founder for you funded or bootstrapped startup?
                Find your perfect teammate now.</h2>
        </div>
        {/* <div className="image">
        <img src={img}></img>
        </div> */}
        </div>
      
    )
  }
}

export default LoginPage