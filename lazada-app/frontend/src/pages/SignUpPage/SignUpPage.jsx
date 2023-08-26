import React, { useContext } from 'react'
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from './../../routes/index'
import { useState } from 'react'
import AuthContext from './../../context/AuthContext'

const SignUpPage = () => {
  const signInPath = routes.find(route => route.path === '/sign-in')
  const { user, setUser } = useContext(AuthContext)
  const [formValidation, setFormValidation] = useState({
    email: '',
    phone: '',
    password: '',
    confirm_password: ''
  })

  const navigate = useNavigate()
  const [errors, setError] = useState({})
  const [successMessage, setSuccessMessage] = useState('')

  const isValidEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const isValidPhoneNumber = phone => {
    const phoneRegex = /^\d{10}$/
    return phoneRegex.test(phone)
  }

  const validateEmail = () => {
    if (!formValidation.email) {
      setError(prevErrors => ({
        ...prevErrors,
        email: 'Email is required'
      }))
    } else if (!isValidEmail(formValidation.email)) {
      setError(prevErrors => ({
        ...prevErrors,
        email: 'Invalid email'
      }))
    } else {
      setError(prevErrors => ({
        ...prevErrors,
        email: ''
      }))
    }
  }

  const validatePhone = () => {
    if (!formValidation.phone) {
      setError(prevErrors => ({
        ...prevErrors,
        phone: 'Phone is required'
      }))
    } else if (!isValidPhoneNumber(formValidation.phone)) {
      setError(prevErrors => ({
        ...prevErrors,
        phone: 'Phone must be a valid number'
      }))
    } else {
      setError(prevErrors => ({
        ...prevErrors,
        phone: ''
      }))
    }
  }

  const validatePassword = () => {
    if (!formValidation.password) {
      setError(prevErrors => ({
        ...prevErrors,
        password: 'Password is required'
      }))
    } else if (formValidation.lenght < 8) {
      setError(prevErrors => ({
        ...prevErrors,
        password: 'Password must be at least 8 characters'
      }))
    } else {
      setError(prevErrors => ({
        ...prevErrors,
        password: ''
      }))
    }
  }

  const validateConfirmPassword = () => {
    if (!formValidation.confirm_password) {
      setError(prevErrors => ({
        ...prevErrors,
        confirm_password: 'Confirm password is required'
      }))
    } else if (formValidation.password !== formValidation.confirm_password) {
      setError(prevErrors => ({
        ...prevErrors,
        confirm_password: 'Passoword do not match '
      }))
    } else {
      setError(prevErrors => ({
        ...prevErrors,
        confirm_password: ''
      }))
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    validateEmail()
    validatePhone()
    validatePassword()
    validateConfirmPassword()

    const noErrors = Object.values(errors).every(error => error === '')
    if (noErrors) {
      // Form submission logic (API call, etc.)
      setSuccessMessage('Account created successfully!')
      setUser({ email: formValidation.email })
      navigate('/')
    } else {
      setSuccessMessage('')
    }
  }

  const handleChange = (field, value) => {
    setFormValidation(preFormValidation => ({
      ...preFormValidation,
      [field]: value
    }))
  }

  return (
    <div style={{ background: '#ccc', height: 'auto', padding: '20px' }}>
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
                    <h3> Đăng Ký Tài Khoản </h3>
                  </div>
                  <div className='mb-3'>
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label className='text-center'>Email</Form.Label>
                        <Form.Control
                          type='email'
                          placeholder='Nhập email của bạn vào đây'
                          onChange={e => handleChange('email', e.target.value)}
                          onBlur={validateEmail}
                          isInvalid={!!errors.email}
                        />

                        {/* Show error */}
                        <Form.Control.Feedback type='invalid'>
                          {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className='mb-3' controlId='Phone'>
                        <Form.Label className='text-center'>Phone</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Nhập số điện thoại của bận vào đây'
                          onChange={e => handleChange('phone', e.target.value)}
                          onBlur={validatePhone}
                          isInvalid={!!errors.phone}
                        />

                        {/* Show error */}
                        <Form.Control.Feedback type='invalid'>
                          {errors.phone}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        className='mb-3'
                        controlId='formBasicPassword'
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type='password'
                          placeholder='Vui lòng nhập password của bạn'
                          onChange={e =>
                            handleChange('password', e.target.value)}
                          onBlur={validatePassword}
                          isInvalid={!!errors.password}
                        />

                        {/* Show error */}
                        <Form.Control.Feedback type='invalid'>
                          {errors.password}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        className='mb-3'
                        controlId='formBasicPassword'
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type='password'
                          placeholder='Nhập lại password của bạn '
                          onChange={e =>
                            handleChange('confirm_password', e.target.value)}
                          onBlur={validateConfirmPassword}
                          isInvalid={!!errors.confirm_password}
                        />
                        {/* Show error */}
                        <Form.Control.Feedback type='invalid'>
                          {errors.confirm_password}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        className='mb-3 mt-5'
                        controlId='formBasicCheckbox'
                      />
                      <div className='d-grid'>
                        <Button variant='primary' type='submit'>
                          Create Account
                        </Button>
                      </div>
                    </Form>
                    <div className='mt-4'>
                      <div className='mb-0  text-center'>
                        Already have an account??{' '}
                        <Link
                          to={signInPath.path}
                          className='text-primary fw-bold'
                        >
                          Sign In
                        </Link>
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

export default SignUpPage
