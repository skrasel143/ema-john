import React from 'react';
import { NavLink } from 'react-router-dom';
import googleImg from '../../images/google.png'
import githubImg from '../../images/github.png'
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const linkStyle = {textDecoration: 'none', fontWeight: 'bold'}
    const pStyle = { fontSize: '20px' }
    const style = { margin: '0px 20px' };
    const { signInWithGoogle, signInWithGithub } = useAuth();
    return (
        <div className='login-form'>
            <div>
                <h1>Create Account</h1>
                <form onSubmit="">
                    <h3>Name</h3>
                    <input className='login-input' type="name" placeholder='Enter your name here' />
                    <h3>Email address</h3>
                    <input className='login-input' type="email" placeholder='Enter your email here' />
                    <h3>Password</h3>
                    <input className='login-input' type="password" placeholder='Enter your password here' />
                    <h3>Re-type Password</h3>
                    <input className='login-input' type="password" placeholder='Enter your password here' />
                    <br />
                    <br/>
                    <input className='btn-login' type="submit" value="Submit"/>
                </form>
                <br/>
                <div>-----------------or------------------</div>
                <br/>
                <div className="login-form">
                <NavLink to='/review'><button style={style} onClick={signInWithGoogle}><img width='50' height='50' src={googleImg} alt=""/></button></NavLink>
                <h3>or</h3>
                <NavLink to='/review'><button style={style} onClick={signInWithGithub}><img width='50' height='40' src={githubImg} alt=""/></button></NavLink>
                </div>
                <div className="login-form">
                    <p style={pStyle}>Already have an account <NavLink style={linkStyle} to="/login">Login</NavLink></p>
                </div>
                <br/>
            </div>
        </div>
    );
};

export default Register;