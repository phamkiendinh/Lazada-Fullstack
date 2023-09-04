  import React, { useContext } from 'react'
  import './HeaderComponent.css'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
  import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
  import { Link, NavLink } from 'react-router-dom'
  import { useAuth } from '../../context/AuthContext'
  import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




  const HeaderComponent = () => {
    const [auth, setAuth] = useAuth();
    const handleLogout = () => {
      setAuth({
        ...auth, 
        user:null,
        token: ''
      });
      localStorage.removeItem('auth');
    }


    return (
      <div className='header'>
        <nav className='navbar navbar-expand'>
          <div className='navbar-container'>
            <ul className='navbar-nav'>
            
                
                {!auth.user ? (
                  <>
                  <li className='nav-item'>
                    <NavLink to='/sign-in' className='nav-link'>
                        LOGIN
                      </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink to='/sign-up' className='nav-link'>
                        SIGN UP
                      </NavLink>
                  </li>
                
                  </>
                ): (<>               
                    <Navbar expand="lg" className="bg-body-tertiary">
                          <Container>
                          <Navbar.Toggle aria-controls="basic-navbar-nav" />
                          <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                              <NavDropdown style={{ fontSize: "15px" }} title={auth?.user?.name} id="basic-nav-dropdown">
                                <NavDropdown.Item as={NavLink} to={`/dashboard/${auth?.user?.role === 1 ? 'admin' : 'user' }`} style={{ fontSize: "15px" }}>
                                Dasboard</NavDropdown.Item>
                                <NavDropdown.Item  as={NavLink} to="/sign-in" style={{ fontSize: "15px" }}>
                                Logout
                                </NavDropdown.Item>
                              </NavDropdown>
                            </Nav>
                          </Navbar.Collapse>
                      </Container>
                  </Navbar>             
                </>)}
            </ul>
          </div>
        </nav>
        <div className='lzd-logo-bar'>
          <div className='logo-bar-content'>
            <div className='lzd-logo-content'>
              <Link to='/' className='lzd-logo-link'>
                <img
                  src='//laz-img-cdn.alicdn.com/images/ims-web/TB1T7K2d8Cw3KVjSZFuXXcAOpXa.png'
                  alt='Online Shopping Lazada.vn Logo'
                />
              </Link>
            </div>
            <div className='search-bar-content'>
              <form className='search-form'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Search in Lazada'
                  aria-label='Search in Lazada'
                  aria-describedby='basic-addon2'
                />
                <button className='btn search-btn' type='button'>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </form>
            </div>
            <div className='cart-bar-content'>
              <NavLink to='/my-order'>
                <span className='cart-item'>
                  <FontAwesomeIcon icon={faCartShopping} />
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default HeaderComponent
