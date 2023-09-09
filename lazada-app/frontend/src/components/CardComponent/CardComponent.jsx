import React from 'react'
import Card from 'react-bootstrap/Card'
import './CardComponent.css'
import { NavLink } from 'react-router-dom';
import { routes } from './../../routes/index'
import Button from 'react-bootstrap/Button'

const CardComponent = () => {
    const loadMorePath = routes.find(route => route.name === '/type')
  return (
    <div>
      <h3 className='text-fw-bold mt-4'> #Just For You </h3>
      <div className='mt-4 h-auto d-flex' style={{gap: '70px'}} >
        <Card className='card-item'>
            <Card.Img
            variant='top'
            src='https://images.unsplash.com/photo-1682687220431-81a76ec65505?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
            className='item-img' />
            <Card.Body className='item-body'>
                <Card.Text className='item-desc'>
                    <div className='item-segment'>
                        <img src='https://lzd-img-global.slatic.net/g/tps/tfs/TB1r3Rqi2zO3e4jSZFxXXaP_FXa-94-28.png' className='segment-img' alt="image" />
                    </div>
                    <div className='desc-details'>
                        LWRC Direct Impingement AR-15 Semi Auto Rifle 5.56 NATO 16.1" Spiral Fluted Heavy Barrel 10 Rounds Modular Free Float Rail System Collapsible Stock Burnt Bronze
                    </div>
                </Card.Text>
                <Card.Text className='item-price'>
                    <div className='item-actual-price'>
                        <span className='price'>29,999,000</span>
                        <span className='currency'>VND</span>
                    </div>
                    <div className="item-price-before">
                        <span className='price'>36,999,000</span>
                        <span className='currency'>VND</span>
                        <span className='discount-rate'>-19%</span>
                    </div>
                </Card.Text>
                <Card.Text className='item-rating'>
                    <div className='item-rating-stars'>
                        <span className='rating-stars'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 20 20" fill="currentColor" className="w-1 h-1 star">
                                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 20 20" fill="currentColor" className="w-1 h-1 star">
                                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 20 20" fill="currentColor" className="w-1 h-1 star">
                                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 20 20" fill="currentColor" className="w-1 h-1 star">
                                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 20 20" fill="currentColor" className="w-1 h-1 star">
                                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                            </svg>
                            
                            
                            
                            
                        </span>
                        <span className='rating-count'> (1,000)</span>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
        <Card className='card-item'>
            <Card.Img
            variant='top'
            src='https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw764a8304/large/2-lwicdir5bb16com.jpg?sw=800&sh=800'
            className='item-img' />
            <Card.Body className='item-body'>
                <Card.Text className='item-desc'>
                    <div className='item-segment'>
                        <img src='https://lzd-img-global.slatic.net/g/tps/tfs/TB1r3Rqi2zO3e4jSZFxXXaP_FXa-94-28.png' className='segment-img' />
                    </div>
                    <div className='desc-details'>
                        LWRC Direct Impingement AR-15 Semi Auto Rifle 5.56 NATO 16.1" Spiral Fluted Heavy Barrel 10 Rounds Modular Free Float Rail System Collapsible Stock Burnt Bronze
                    </div>
                </Card.Text>
                <Card.Text className='item-price'>
                    <div className='item-actual-price'>
                        <span className='price'>29,999,000</span>
                        <span className='currency'>VND</span>
                    </div>
                    <div className="item-price-before">
                        <span className='price'>36,999,000</span>
                        <span className='currency'>VND</span>
                        <span className='discount-rate'>-19%</span>
                    </div>
                </Card.Text>
                <Card.Text className='item-rating'>
                    <div className='item-rating-stars'>
                        <span className='rating-stars'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 20 20" fill="currentColor" className="w-1 h-1 star">
                                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 20 20" fill="currentColor" className="w-1 h-1 star">
                                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 20 20" fill="currentColor" className="w-1 h-1 star">
                                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 20 20" fill="currentColor" className="w-1 h-1 star">
                                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 20 20" fill="currentColor" className="w-1 h-1 star">
                                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                            </svg>
                            
                            
                            
                            
                        </span>
                        <span className='rating-count'> (1,000)</span>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
        <Card className='card-item'>
            <Card.Img
            variant='top'
            src='https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw764a8304/large/2-lwicdir5bb16com.jpg?sw=800&sh=800'
            className='item-img' />
            <Card.Body className='item-body'>
                <Card.Text className='item-desc'>
                    <div className='item-segment'>
                        <img src='https://lzd-img-global.slatic.net/g/tps/tfs/TB1r3Rqi2zO3e4jSZFxXXaP_FXa-94-28.png' className='segment-img'  />
                    </div>
                    <div className='desc-details'>
                        LWRC Direct Impingement AR-15 Semi Auto Rifle 5.56 NATO 16.1" Spiral Fluted Heavy Barrel 10 Rounds Modular Free Float Rail System Collapsible Stock Burnt Bronze
                    </div>
                </Card.Text>
                <Card.Text className='item-price'>
                    <div className='item-actual-price'>
                        <span className='price'>29,999,000</span>
                        <span className='currency'>VND</span>
                    </div>
                    <div className="item-price-before">
                        <span className='price'>36,999,000</span>
                        <span className='currency'>VND</span>
                        <span className='discount-rate'>-19%</span>
                    </div>
                </Card.Text>
                <Card.Text className='item-rating'>
                    <div className='item-rating-stars'>
                        <span className='rating-stars'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 20 20" fill="currentColor" className="w-1 h-1 star">
                                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 20 20" fill="currentColor" className="w-1 h-1 star">
                                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 20 20" fill="currentColor" className="w-1 h-1 star">
                                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 20 20" fill="currentColor" className="w-1 h-1 star">
                                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 20 20" fill="currentColor" className="w-1 h-1 star">
                                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                            </svg>
                            
                            
                            
                            
                        </span>
                        <span className='rating-count'> (1,000)</span>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
        <Card className='card-item'>
            <Card.Img
            variant='top'
            src='https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw764a8304/large/2-lwicdir5bb16com.jpg?sw=800&sh=800'
            className='item-img' />
            <Card.Body className='item-body'>
                <Card.Text className='item-desc'>
                    <div className='item-segment'>
                        <img src='https://lzd-img-global.slatic.net/g/tps/tfs/TB1r3Rqi2zO3e4jSZFxXXaP_FXa-94-28.png' className='segment-img'  />
                    </div>
                    <div className='desc-details'>
                        LWRC Direct Impingement AR-15 Semi Auto Rifle 5.56 NATO 16.1" Spiral Fluted Heavy Barrel 10 Rounds Modular Free Float Rail System Collapsible Stock Burnt Bronze
                    </div>
                </Card.Text>
                <Card.Text className='item-price'>
                    <div className='item-actual-price'>
                        <span className='price'>29,999,000</span>
                        <span className='currency'>VND</span>
                    </div>
                    <div className="item-price-before">
                        <span className='price'>36,999,000</span>
                        <span className='currency'>VND</span>
                        <span className='discount-rate'>-19%</span>
                    </div>
                </Card.Text>
                <Card.Text className='item-rating'>
                    <div className='item-rating-stars'>
                        <span className='rating-stars'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 20 20" fill="currentColor" className="w-1 h-1 star">
                                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 20 20" fill="currentColor" className="w-1 h-1 star">
                                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 20 20" fill="currentColor" className="w-1 h-1 star">
                                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 20 20" fill="currentColor" className="w-1 h-1 star">
                                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 20 20" fill="currentColor" className="w-1 h-1 star">
                                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                            </svg>
                            
                            
                            
                            
                        </span>
                        <span className='rating-count'> (1,000)</span>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
        <Card className='card-item'>
            <Card.Img
            variant='top'
            src='https://down-vn.img.susercontent.com/file/vn-11134207-23020-tz6tf5eftpnv15_tn'
            />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </Card.Text>
            <Button variant='primary'>Go somewhere</Button>
            </Card.Body>
            
        </Card>

    
      </div>

      

    
        <div className='d-flex align-items-baseline justify-content-center mt-4'>
            <NavLink to={loadMorePath.path}  className='w-25 bg-success p-3 rounded-3 text-white text-decoration-none text-center' style={{ fontSize: '20px' }}>
                Load More
            </NavLink>
        </div>   
 

      </div>
  )
}

export default CardComponent
