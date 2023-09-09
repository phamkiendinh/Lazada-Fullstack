import React from 'react';
import './MyOrder.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const MyOrder = () => {
    return (
        <div style={{ 
            height: '100%', 
            padding: '25px 110px',
            backgroundColor: '#eff0f5'}}
        >
            
            <Row className='row'>
                <Col sm={8} className='col'>
                    <Row>
                        <div className="list-header">
                            <div class="list-header-container">
                                <div class="list-header-main">
                                    <div class="checkbox-wrap">
                                        <label class="next-checkbox list-header-checkbox ">
                                            <input type="checkbox" aria-checked="false" value="on"/>
                                        </label>
                                        <span>
                                            Select All (2 item(s))
                                        </span>
                                    </div>
                                    <div class="list-header-operations">
                                        <div class="btn-wrap automation-btn-delete">
                                            <span class="trash-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 1 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 trash-can">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                </svg>
                                            </span>
                                            <span class="list-header-operation-text">Delete</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div className='list-item-container'>
                            <div className='list-item-main'>
                                <div className='list-item-left'>
                                    <label className="next-checkbox list-item-checkbox ">
                                        <input type="checkbox" aria-checked="false" value="on"/>
                                    </label>
                                    <div className='list-item-img'>
                                        <img className='item-img' src='https://lzd-img-global.slatic.net/g/p/3ca045c0ab8acdf3bd2e4e9f51a0b088.jpg_2200x2200q75.jpg_.webp' alt='item-img'/>
                                    </div>
                                    <div className='list-item-info'>
                                        <a className='item-info-title'>
                                            Ga giường Cotton Tici M2T Bedding - Ga trải giường cotton phong cách Hàn Quốc - không kèm vỏ gối - đủ size drap nệm
                                        </a>
                                        <a className='item-info-sku'>
                                            M2T Bedding, Color family:Lẻ ga xám nhạt, Bedding Size:1m5 x 2m
                                        </a>
                                    </div>
                                </div>
                                <div className='list-item-middle'>
                                    <div className='list-item-price'>
                                        <p>
                                            <span className='currency'>VND</span>
                                            <span className='price'>99,000</span>
                                        </p>
                                    </div>
                                    <div className='list-item-function'>
                                        <div className='list-item-function-wrap'>
                                            <span class="trash-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 1 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 trash-can">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='list-item-right'>
                                    <div className='list-item-status'>
                                        <span className='status-functions'>
                                            <Button as="input" type="-" value="-" className='quantity-btn' size="sm"/>{' '}
                                            <input type="text" step="1" min="1" max="30" value="1" autocomplete="off" height="100%" className='quantity-input'></input>
                                            <Button as="input" type="+" value="+" className='quantity-btn' size="sm"/>{' '}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                
                </Col>
                <Col sm={4} className='col order-summary-wrapper' >
                    <div className='order-summary'>
                        <div className='order-summary-header'>
                            <h3 className='order-summary-title'>Order Summary</h3>
                        </div>
                        <div className='order-summary-body'>
                            <div className='order-summary-checkout'>
                                <div className='order-checkout-row'>
                                    <div className='checkout-row-label'>
                                        Subtotal
                                    </div>
                                    <div className='checkout-row-value'>
                                        <span className='currency'>VND</span>
                                        <span className='price'>99,000</span>
                                    </div>
                                </div>
                                <div className='order-checkout-row'>
                                <div className='checkout-row-label'>
                                        Shipping Fee
                                    </div>
                                    <div className='checkout-row-value'>
                                        <span className='currency'>VND</span>
                                        <span className='price'>10,000</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='order-total'>
                                <div className='order-checkout-row'>
                                    <div className='checkout-row-label label-total'>
                                        Total (VAT included)
                                    </div>
                                    <div className='checkout-row-value'>
                                        <span className='currency'>VND</span>
                                        <span className='price'>209,000</span>
                                    </div>
                                </div>
                            </div>

                            <div className='checkout-btn-wrapper'>
                                <Button className='checkout-btn' variant="primary" size="lg" block>
                                    CONFIRM PURCHASE
                                </Button>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default MyOrder
