import React, { useState } from 'react';
import { Col, Button, Row, Container, Card, Form, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { routes } from './../../routes/index';

const SignUpPage = () => {
    const signInPath = routes.find(route => route.path === '/sign-in');
    const [form, setForm] = useState({
        email: '',
        phone: '',
        password: '',
        confirm_password: ''
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const validateEmail = () => {
        if (!form.email) {
            setErrors(prevErrors => ({ ...prevErrors, email: 'Email is required' }));
        } else {
            setErrors(prevErrors => ({ ...prevErrors, email: '' }));
        }
    };

    const validatePhone = () => {
        if (!form.phone) {
            setErrors(prevErrors => ({ ...prevErrors, phone: 'Phone number is required' }));
        } else {
            setErrors(prevErrors => ({ ...prevErrors, phone: '' }));
        }
    };

    const validatePassword = () => {
        if (!form.password) {
            setErrors(prevErrors => ({ ...prevErrors, password: 'Password is required' }));
        } else {
            setErrors(prevErrors => ({ ...prevErrors, password: '' }));
        }
    };

    const validateConfirmPassword = () => {
        if (form.confirm_password !== form.password) {
            setErrors(prevErrors => ({ ...prevErrors, confirm_password: 'Passwords do not match' }));
        } else {
            setErrors(prevErrors => ({ ...prevErrors, confirm_password: '' }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validateEmail();
        validatePhone();
        validatePassword();
        validateConfirmPassword();

        const noErrors = Object.values(errors).every(error => error === '');
        if (noErrors) {
            // Form submission logic (API call, etc.)
            setSuccessMessage('Account created successfully!');
        } else {
            setSuccessMessage('');
        }
    };

    const handleChange = (field, value) => {
        setForm(prevForm => ({ ...prevForm, [field]: value }));
    };

    return (
        <div style={{ background: "#ccc", height: "auto", padding: "20px" }}>
            <Container>
                <Row className='vh-100 d-flex justify-content-center align-items-center'>
                    <Col md={8} lg={6} xs={12}>
                        {/* ... your existing code */}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className='mb-3' controlId='formBasicEmail'>
                                <Form.Label className='text-center'>Email</Form.Label>
                                <Form.Control
                                    type='email'
                                    placeholder='Enter your email'
                                    value={form.email}
                                    onChange={(e) => handleChange('email', e.target.value)}
                                    onBlur={validateEmail}
                                    isInvalid={!!errors.email}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className='mb-3' controlId='Phone'>
                                <Form.Label className='text-center'>Phone</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Enter your phone number'
                                    value={form.phone}
                                    onChange={(e) => handleChange('phone', e.target.value)}
                                    onBlur={validatePhone}
                                    isInvalid={!!errors.phone}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {errors.phone}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className='mb-3' controlId='formBasicPassword'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    placeholder='Enter your password'
                                    value={form.password}
                                    onChange={(e) => handleChange('password', e.target.value)}
                                    onBlur={validatePassword}
                                    isInvalid={!!errors.password}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {errors.password}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className='mb-3' controlId='formBasicPassword'>
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    placeholder='Confirm your password'
                                    value={form.confirm_password}
                                    onChange={(e) => handleChange('confirm_password', e.target.value)}
                                    onBlur={validateConfirmPassword}
                                    isInvalid={!!errors.confirm_password}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {errors.confirm_password}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <div className='d-grid'>
                                <Button variant='primary' type='submit'>
                                   
