import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle, addMovies } from "../actions/index";
import history from './history';

import './login.css';

function mapStateToProps(state) {

    return {
        LoginObj: state.usercredentials,
    }
}

class ConnectedLogin extends Component {

    constructor(props) {

        super(props);

        this.uname = "";
        this.pwd = "";

        this.setusername = this.setusername.bind(this);
        this.setpassword = this.setpassword.bind(this);
        this.validateUser = this.validateUser.bind(this);
    }

    setusername(event) {
        this.uname = event.target.value;
    }

    setpassword(event) {
        this.pwd = event.target.value;
    }

    validateUser(event) {
        event.preventDefault();

        if ((this.uname == this.props.LoginObj[0].username) && (this.pwd == this.props.LoginObj[0].password)) {
            //alert("User validated");
            history.push('/dashboard');
        } else {
            alert("Credentails are not valid");
        }

    }

    render() {

        return (

            <div className="container">
                
                <div className="login">
                    <h1>Login to App</h1>
                    <p><input type="text" name="login" onChange={this.setusername} placeholder="Username or Email" /></p>
                    <p><input type="password" name="password" onChange={this.setpassword} placeholder="Password" /></p>
                    <p className="submit"><input type="submit" onClick={this.validateUser} name="commit" value="Login" /></p>
                </div>

            </div>

        );
    }
}

const Login = connect(mapStateToProps)(ConnectedLogin);

export default Login;