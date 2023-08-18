import React from 'react'
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { routes } from './../../routes/index'

const SignInPage = () => {
    const signUpPath = routes.find(route => route.path === '/sign-up')

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
                    <img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1T7K2d8Cw3KVjSZFuXXcAOpXa.png" className='w-50' alt="" />
                  </div>
                  <div className='mb-3 p-2 mt-3 text-center'>
                    <h3> Đăng Nhập Tài Khoản </h3>
                  </div>

                  <div className='mb-3'>
                    <Form>
                      <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label className='text-center'>
                          Email address
                        </Form.Label>
                        <Form.Control
                          type='email'
                          placeholder='Nhập email của bạn vào đây'
                        />
                      </Form.Group>

                      <Form.Group
                        className='mb-3'
                        controlId='formBasicPassword'
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type='password'
                          placeholder='Vui lòng nhập password của bạn'
                        />
                      </Form.Group>

                      <Form.Group
                        className='mb-3 mt-5'
                        controlId='formBasicCheckbox'
                      />
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
