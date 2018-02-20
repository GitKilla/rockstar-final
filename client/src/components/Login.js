import React from 'react';

const Login = () => {
    return( 
            <div className = "container" alignItems = "center">
                <div className = "row"></div>
                <div className = "row"></div>
                <div className = "row">
                    <div className="col s5"></div>
                    <a href='/auth/google' className="waves-effect waves-light btn orange darken-4">Sign in with Google</a>
                </div>
                <div className = "row">
                    <div className="col s5"></div>
                    <a href='/auth/facebook' className="waves-effect waves-light btn blue darken-4">Sign in with Facebook</a>
                </div>
            </div>
    );
}

export default Login;