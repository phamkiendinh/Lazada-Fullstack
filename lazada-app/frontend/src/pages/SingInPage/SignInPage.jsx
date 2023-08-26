import React, { useState, useContext } from 'react'
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import { routes } from './../../routes/index'
import Alert from 'react-bootstrap/Alert'
import AuthContext from './../../context/AuthContext';

const SignInPage = () => {
  const signUpPath = routes.find(route => route.path === '/sign-up')
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [loginError, setLoginError] = useState('')



  const validateEmail = () => {
    if (!email) {
      setEmailError('Email is required')
    } else {
      setEmailError('')
    }
  }

  const validatePassword = () => {
    if (!password) {
      setPasswordError('Password is required')
    } else {
      setPasswordError('')
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    validateEmail()
    validatePassword()

    if (!emailError && !passwordError) {
      if (email === 'huysanti@gmail.com' && password === '123456') {
        console.log('Login successful')
        console.log('Email', email)
        console.log('Password', password)
        login({email})
        navigate('/')
      } else {
        setLoginError('Incorrect password or email')
      }
    } else {
      console.log('Form submitted failed ')
    }
  }

  return (
    <div style={{ background: '#ccc', height: 'auto' }}>
      <Container>
        <Row className='vh-100 d-flex justify-content-center align-items-center'>
          <Col md={8} lg={6} xs={12}>
            <div className='border border-2 border-primary' />
            <Card className='shadow px-4'>
              <Card.Body>
                <div className='mb-3 mt-md-4'>
                  <div className='d-flex align-items-center justify-content-center'>
                    <img
                      src='https://laz-img-cdn.alicdn.com/images/ims-web/TB1T7K2d8Cw3KVjSZFuXXcAOpXa.png'
                      className='w-50'
                      alt=''
                    />
                  </div>
                  <div className='mb-3 p-2 mt-3 text-center'>
                    <h3> Đăng Nhập Tài Khoản </h3>
                  </div>

                  {loginError &&
                    <Alert variant='danger'>
                      {loginError}
                    </Alert>}
                  <div className='mb-3'>
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label className='text-center'>
                          Email address
                        </Form.Label>
                        <Form.Control
                          type='email'
                          placeholder='Nhập email của bạn vào đây'
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          onBlur={validateEmail}
                        />

                        {emailError &&
                          <div className='text-danger'>
                            {emailError}
                          </div>}
                      </Form.Group>

                      <Form.Group
                        className='mb-3'
                        controlId='formBasicPassword'
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type='password'
                          placeholder='Vui lòng nhập password của bạn'
                          value={password}
                          onChange={e => setPassword(e.target.value)}
                          onBlur={validatePassword}
                        />
                        {passwordError &&
                          <div className='text-danger'>
                            {passwordError}
                          </div>}
                      </Form.Group>

                      <div className='d-grid'>
                        <Button variant='primary' type='submit'>
                          Login
                        </Button>
                      </div>
                    </Form>
                    <div className='mt-4'>
                      <div className='mb-0  text-center'>
                        Chưa tạo tài khoản, đăng ký tại đây ??{' '}
                        <NavLink
                          to={signUpPath.path}
                          className='text-primary fw-bold'
                        >
                          Sign Up
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SignInPage
