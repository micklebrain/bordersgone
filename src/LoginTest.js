import React, { Component } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

// const CLIENT_ID = "1045839805169-9vcgmva03ano3lo435i221gnd92580lh.apps.googleusercontent.com";

class LoginTest extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      userInfo: {
        name: "",
        emailId: "",
      },
    };
  }

  // Success Handler
  responseGoogleSuccess = (response) => {
    console.log();
    let userInfo = {
      name: response.profileObj.name,
      emailId: response.profileObj.email,
    };
    this.setState({ userInfo, isLoggedIn: true });
  };

  // Error Handler
  responseGoogleError = (response) => {
    console.log(response);
  };

  // Logout Session and Update State
  logout = (response) => {
    console.log(response);
    let userInfo = {
      name: "",
      emailId: "",
    };
    this.setState({ userInfo, isLoggedIn: false });
  };

  render() {
    return (
      <div className="row mt-5">
        <div className="col-md-12">
          {this.state.isLoggedIn ? (
            <div>
              <h1>Welcome, {this.state.userInfo.name}</h1>
              <GoogleLogout
                clientId="1045839805169-9vcgmva03ano3lo435i221gnd92580lh.apps.googleusercontent.com"
                buttonText={"Logout"}
                onLogoutSuccess={this.logout}
              ></GoogleLogout>
            </div>
          ) : (
            <GoogleLogin
              clientId="1045839805169-9vcgmva03ano3lo435i221gnd92580lh.apps.googleusercontent.com"
              buttonText="Sign In with Google"
              onSuccess={this.responseGoogleSuccess}
              onFailure={this.responseGoogleError}
              isSignedIn={true}
              cookiePolicy={"single_host_origin"}
            />
          )}
        </div>
      </div>
    );
  }
}
export default LoginTest;