import React from 'react'
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { routes } from './../../routes/index'
import { useState } from 'react'

const SignUpPage = () => {
  const signInPath = routes.find(route => route.path === '/sign-in')
  const [form, setForm] = useState({ phone: '', password: '', confirm_password: '', email: ''});
  const [errors, setError] = useState({})

  // Update the state of form
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value

      // sử dụng tính năng "computed property names" trong JavaScript để cập nhật hoặc thêm một trường mới trong đối tượng "form". Trường này có tên được xác định bởi giá trị của biến field, và giá trị của trường là giá trị của biến value.
    })

    // Check and see if errors exist, and remove them from the error object:
    if (errors[field]) {
      setError({
        ...errors,
        [field]: null
      })
    }
  }

  const findFormErrors = (e) => {
    const { password, phone, email, confirm_password } = form
    const newErrors = {}
    // name errors
    if (!email || email === '') newErrors.email = ' email cannot be blank '
    else if (email.type !== 'email') newErrors.email = 'must be a valid email'

    // comment errors
    if (!password || password === '') { newErrors.password = 'password cannot be blank!' } 
   

    // comment errors
    if (!confirm_password || confirm_password === '') { newErrors.confirm_password = 'confirm_password cannot be blank!' } 
   
    return newErrors
  }


  const validatePhoneNumber = (phoneNumber) => {
    // Regular expression for a basic 10-digit US phone number format
    const phonePattern = /^\d{10}$/;

    if (!phonePattern.test(phoneNumber)) {
      return 'Please enter a valid 10-digit phone number';
    } 

  return '';

  };

  const validatePassword = (password) => {
    if (password.length < 8) {
      return " Password must be at least 8 characters long";   
    } 

    return ''
  
  }

  const validateConfirmPassword = (confirm_password) => {
    if (confirm_password !== form.password) {
        return "Password do not match";
    } 

    return '';
  
  }



  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate all fields
    const phoneError = validatePhoneNumber(form.phone);
      const passwordError = validatePassword(form.password);
      const confirmpasswordError = validateConfirmPassword(form.confirm_password)

    // get Errors
    const newError = findFormErrors()

    const combineError = {
      ...newError,
      phone: phoneError,
      password: passwordError,
      confirm_password: confirmpasswordError,

    };

    if (Object.keys(combineError).length > 0) {
      setError(combineError)
    } else {
      alert('Thank for creating new account')
    }
  }

  return (
    <div>
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
                          onChange={e => setField('email', e.target.value)}
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
                          onChange={e => setField('phone', e.target.value)}
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
                          onChange={e => setField('password', e.target.value)}
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
                          onChange={e => setField('confirm_password', e.target.value)}
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
