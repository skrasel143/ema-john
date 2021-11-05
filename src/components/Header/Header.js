import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                {user.email && <img className='user-image' width='50' height='50' src={user.photoURL} alt=""/>}
                {user.email && <span className='user-name'>{user.displayName}</span>}
                {
                    user.email ?
                    <NavLink onClick={logOut} to="/login">Logout</NavLink>
                    :
                    <NavLink to="/login">Login</NavLink>
                }
            </nav>  
        </div>
    );
};

export default Header;

