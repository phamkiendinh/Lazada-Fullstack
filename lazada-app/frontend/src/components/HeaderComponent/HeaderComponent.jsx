import React from 'react';
import './HeaderComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from 'react-router-dom';

const HeaderComponent = () => {
    return (
        <div className="header">
            <nav className="navbar navbar-expand">
                <div className="navbar-container">
                    <ul className="navbar-nav">
                       
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">TRACK MY ORDER</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/sign-in" className="nav-link">LOGIN</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/sign-up" className="nav-link">SIGN UP</NavLink>
                        </li>
                      
                    </ul>
                </div>
            </nav>
            <div className="lzd-logo-bar">
                <div className="logo-bar-content">
                    <div className="lzd-logo-content">
                        <Link to="/" className="lzd-logo-link">
                            <img src="//laz-img-cdn.alicdn.com/images/ims-web/TB1T7K2d8Cw3KVjSZFuXXcAOpXa.png" alt="Online Shopping Lazada.vn Logo"/> 
                        </Link>
                    </div>
                    <div className="search-bar-content">
                        <form className="search-form">
                            <input type="text" className="form-control" placeholder="Search in Lazada" aria-label="Search in Lazada" aria-describedby="basic-addon2"/>
                            <button className="btn search-btn" type="button">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </form>
                    </div>
                    <div className="cart-bar-content">
                        <a href="">
                            <span className="cart-item">
                                <FontAwesomeIcon icon={faCartShopping} />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderComponent;