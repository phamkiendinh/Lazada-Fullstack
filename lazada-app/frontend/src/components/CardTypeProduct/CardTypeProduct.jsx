import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import { routes } from './../../routes/index'

const CardTypeProduct = () => {
  const typeProductPath = routes.find(
    route => route.path === '/product-detail/:id'
  )


  return (
    <div className='mt-4 h-auto d-flex' style={{ gap: '20px' }}>
      <Card className='card-item'>
        <Link to={typeProductPath.path}>
          <Card.Img
            variant='top'
            src='https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw764a8304/large/2-lwicdir5bb16com.jpg?sw=800&sh=800'
            className='item-img'
          />
          <Card.Body className='item-body'>
            <Card.Text className='item-desc'>
              <div className='item-segment'>
                <img
                  src='https://lzd-img-global.slatic.net/g/tps/tfs/TB1r3Rqi2zO3e4jSZFxXXaP_FXa-94-28.png'
                  className='segment-img'
                  alt='image'
                />
              </div>
              <div className='desc-details'>
                LWRC Direct Impingement AR-15 Semi Auto Rifle 5.56 NATO 16.1"
                Spiral Fluted Heavy Barrel 10 Rounds Modular Free Float Rail
                System Collapsible Stock Burnt Bronze
              </div>
            </Card.Text>
            <Card.Text className='item-price'>
              <div className='item-actual-price'>
                <span className='price'>29,999,000</span>
                <span className='currency'>VND</span>
              </div>
              <div className='item-price-before'>
                <span className='price'>36,999,000</span>
                <span className='currency'>VND</span>
                <span className='discount-rate'>-19%</span>
              </div>
            </Card.Text>
            <Card.Text className='item-rating'>
              <div className='item-rating-stars'>
                <span className='rating-stars'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 2 20 20'
                    fill='currentColor'
                    className='w-1 h-1 star'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 2 20 20'
                    fill='currentColor'
                    className='w-1 h-1 star'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 2 20 20'
                    fill='currentColor'
                    className='w-1 h-1 star'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 2 20 20'
                    fill='currentColor'
                    className='w-1 h-1 star'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 2 20 20'
                    fill='currentColor'
                    className='w-1 h-1 star'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                      clipRule='evenodd'
                    />
                  </svg>
                </span>
                <span className='rating-count'> (1,000)</span>
              </div>
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>

      <Card className='card-item'>
        <Card.Img
          variant='top'
          src='https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw764a8304/large/2-lwicdir5bb16com.jpg?sw=800&sh=800'
          className='item-img'
        />
        <Card.Body className='item-body'>
          <Card.Text className='item-desc'>
            <div className='item-segment'>
              <img
                src='https://lzd-img-global.slatic.net/g/tps/tfs/TB1r3Rqi2zO3e4jSZFxXXaP_FXa-94-28.png'
                className='segment-img'
              />
            </div>
            <div className='desc-details'>
              LWRC Direct Impingement AR-15 Semi Auto Rifle 5.56 NATO 16.1"
              Spiral Fluted Heavy Barrel 10 Rounds Modular Free Float Rail
              System Collapsible Stock Burnt Bronze
            </div>
          </Card.Text>
          <Card.Text className='item-price'>
            <div className='item-actual-price'>
              <span className='price'>29,999,000</span>
              <span className='currency'>VND</span>
            </div>
            <div className='item-price-before'>
              <span className='price'>36,999,000</span>
              <span className='currency'>VND</span>
              <span className='discount-rate'>-19%</span>
            </div>
          </Card.Text>
          <Card.Text className='item-rating'>
            <div className='item-rating-stars'>
              <span className='rating-stars'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 2 20 20'
                  fill='currentColor'
                  className='w-1 h-1 star'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                    clipRule='evenodd'
                  />
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 2 20 20'
                  fill='currentColor'
                  className='w-1 h-1 star'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                    clipRule='evenodd'
                  />
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 2 20 20'
                  fill='currentColor'
                  className='w-1 h-1 star'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                    clipRule='evenodd'
                  />
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 2 20 20'
                  fill='currentColor'
                  className='w-1 h-1 star'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                    clipRule='evenodd'
                  />
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 2 20 20'
                  fill='currentColor'
                  className='w-1 h-1 star'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                    clipRule='evenodd'
                  />
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
          className='item-img'
        />
        <Card.Body className='item-body'>
          <Card.Text className='item-desc'>
            <div className='item-segment'>
              <img
                src='https://lzd-img-global.slatic.net/g/tps/tfs/TB1r3Rqi2zO3e4jSZFxXXaP_FXa-94-28.png'
                className='segment-img'
              />
            </div>
            <div className='desc-details'>
              LWRC Direct Impingement AR-15 Semi Auto Rifle 5.56 NATO 16.1"
              Spiral Fluted Heavy Barrel 10 Rounds Modular Free Float Rail
              System Collapsible Stock Burnt Bronze
            </div>
          </Card.Text>
          <Card.Text className='item-price'>
            <div className='item-actual-price'>
              <span className='price'>29,999,000</span>
              <span className='currency'>VND</span>
            </div>
            <div className='item-price-before'>
              <span className='price'>36,999,000</span>
              <span className='currency'>VND</span>
              <span className='discount-rate'>-19%</span>
            </div>
          </Card.Text>
          <Card.Text className='item-rating'>
            <div className='item-rating-stars'>
              <span className='rating-stars'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 2 20 20'
                  fill='currentColor'
                  className='w-1 h-1 star'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                    clipRule='evenodd'
                  />
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 2 20 20'
                  fill='currentColor'
                  className='w-1 h-1 star'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                    clipRule='evenodd'
                  />
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 2 20 20'
                  fill='currentColor'
                  className='w-1 h-1 star'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                    clipRule='evenodd'
                  />
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 2 20 20'
                  fill='currentColor'
                  className='w-1 h-1 star'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                    clipRule='evenodd'
                  />
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 2 20 20'
                  fill='currentColor'
                  className='w-1 h-1 star'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                    clipRule='evenodd'
                  />
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
          className='item-img'
        />
        <Card.Body className='item-body'>
          <Card.Text className='item-desc'>
            <div className='item-segment'>
              <img
                src='https://lzd-img-global.slatic.net/g/tps/tfs/TB1r3Rqi2zO3e4jSZFxXXaP_FXa-94-28.png'
                className='segment-img'
              />
            </div>
            <div className='desc-details'>
              LWRC Direct Impingement AR-15 Semi Auto Rifle 5.56 NATO 16.1"
              Spiral Fluted Heavy Barrel 10 Rounds Modular Free Float Rail
              System Collapsible Stock Burnt Bronze
            </div>
          </Card.Text>
          <Card.Text className='item-price'>
            <div className='item-actual-price'>
              <span className='price'>29,999,000</span>
              <span className='currency'>VND</span>
            </div>
            <div className='item-price-before'>
              <span className='price'>36,999,000</span>
              <span className='currency'>VND</span>
              <span className='discount-rate'>-19%</span>
            </div>
          </Card.Text>
          <Card.Text className='item-rating'>
            <div className='item-rating-stars'>
              <span className='rating-stars'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 2 20 20'
                  fill='currentColor'
                  className='w-1 h-1 star'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                    clipRule='evenodd'
                  />
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 2 20 20'
                  fill='currentColor'
                  className='w-1 h-1 star'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                    clipRule='evenodd'
                  />
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 2 20 20'
                  fill='currentColor'
                  className='w-1 h-1 star'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                    clipRule='evenodd'
                  />
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 2 20 20'
                  fill='currentColor'
                  className='w-1 h-1 star'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                    clipRule='evenodd'
                  />
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 2 20 20'
                  fill='currentColor'
                  className='w-1 h-1 star'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                    clipRule='evenodd'
                  />
                </svg>
              </span>
              <span className='rating-count'> (1,000)</span>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardTypeProduct
