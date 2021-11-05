import React from 'react';
import './Login.css'
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import googleImg from '../../images/google.png';
import githubImg from '../../images/github.png';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const iconStyle = { margin: '0px 20px' };
    const linkStyle = { textDecoration: 'none', fontWeight: 'bold' };

    const { signInWithGoogle, signInWithGithub } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/shop';
    
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
            history.push(redirect_url)
        })
    }
    const handleSignInWithGithub = () => {
        signInWithGithub()
            .then(result => {
            history.push(redirect_url)
        })
    }

    return (
        <div className='login-form'>
            <div>
                <h1>Login</h1>
                <form onSubmit="">
                    <input className='login-input' type="email" placeholder='Enter your email here' />
                    <br />
                    <br/>
                    <input className='login-input' type="password" placeholder='Enter your password here' />
                    <br />
                    <br/>
                    <button className='btn-login'>LogIn</button>
                </form>
                <br />
                <div>-----------------or------------------</div>
                <br/>
                <div className="login-form">
                <button style={iconStyle} onClick={handleSignInWithGoogle}><img width='50' height='50' src={googleImg} alt=""/></button>
                <h3>or</h3>
                <button style={iconStyle} onClick={handleSignInWithGithub}><img width='50' height='40' src={githubImg} alt=""/></button>
                </div>
                <br />
                <div className="login-form">
                    <p>New to Ema-john <NavLink style={linkStyle} to="/register">Create account</NavLink></p>
                </div>
                <br/>
            </div>
        </div>
    );
};

export default Login;