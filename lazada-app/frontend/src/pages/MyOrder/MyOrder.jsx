import React from 'react';
import './MyOrder.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
                                    <div className="checkbox-wrap">
                                        <label className="next-checkbox list-header-checkbox ">
                                            <input type="checkbox" aria-checked="false" value="on"/>
                                        </label>
                                    </div>
                                    <div className='list-item-img'>
                                        <img className='item-img' src='https://lzd-img-global.slatic.net/g/p/3ca045c0ab8acdf3bd2e4e9f51a0b088.jpg_2200x2200q75.jpg_.webp' alt='item-img'/>
                                    </div>
                                    <div className='list-item-info'>
                                        <p>
                                            Ga giường Cotton Tici M2T Bedding - Ga trải giường cotton phong cách Hàn Quốc - không kèm vỏ gối - đủ size drap nệm
                                        </p>
                                        <p>
                                            M2T Bedding, Color family:Lẻ ga xám nhạt, Bedding Size:1m5 x 2m
                                        </p>
                                    </div>
                                </div>
                                <div className='list-item-middle'>
                                </div>
                                <div className='list-item-right'>
                                </div>
                            </div>
                        </div>
                    </Row>
                
                </Col>
                <Col sm={4} className='col'>sm=4</Col>
            </Row>
        </div>
    );
};

export default MyOrder;