import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <div className="header">
            <nav className="navbar navbar-expand">
                <div className="navbar-container">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#" className="nav-link nav-link-hidden">INTERNAL FEEDBACK</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link nav-link-special">SAVE MORE ON APP</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link nav-link-special">SELL ON LAZADA</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">CUSTOMER CARE</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">TRACK MY ORDER</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">LOGIN</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">SIGN UP</a>
                        </li>
                        <li className="nav-item nav-last-item">
                            <a href="#" className="nav-link">CHANGE LANGUAGE</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="lzd-logo-bar">
                <div className="logo-bar-content">
                    <div className="lzd-logo-content">
                        <a href="#" className="lzd-logo-link">
                            <img src="//laz-img-cdn.alicdn.com/images/ims-web/TB1T7K2d8Cw3KVjSZFuXXcAOpXa.png" alt="Online Shopping Lazada.vn Logo"/> 
                        </a>
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
}

export default Header;