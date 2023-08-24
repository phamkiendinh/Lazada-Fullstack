import { useState } from 'react'
import React from 'react'
import { Button, Container, Row, Col, Image } from 'react-bootstrap'
import ToastContainer from 'react-bootstrap/ToastContainer'
import Toast from 'react-bootstrap/Toast'
import styled from 'styled-components'
import './style.css'
import { useNavigate } from "react-router-dom";

const images = [
  'https://lzd-img-global.slatic.net/g/p/2df0d5471060c5b544a48c80b7fa8e78.png_720x720q80.png_.webp',
  'https://lzd-img-global.slatic.net/g/p/e494a1d1e2bddb0939bb090d4470ef74.png_720x720q80.png_.webp',
  'https://lzd-img-global.slatic.net/g/p/7cb1db454f333225bd6064ccf7a4f976.png_720x720q80.png_.webp',
  'https://lzd-img-global.slatic.net/g/p/a9256d938212b3457188dd11bd27e879.png_720x720q80.png_.webp'
]

const WrapperPriceProdduct = styled.div`
  background: rgb();
  border-radius: 4px;
  margin-top: 30px;
`

const WrapperPriceTextProduct = styled.h2`
  font-size: 30px;
  line-height: 40px;
  margin-right: 8px;
  font-weight: 500;
  color: #f57224;
`
const WrapperOldPriceTextProduct = styled.h2`
  text-decoration: line-through;
  font-size: 20px;
  line-height: 40px;
  margin-right: 8px;
  font-weight: 400;
  opacity: 0.7;
`

const WrapperQualityProduct = styled.div`
  margin-top: 40px;
  font-size: 30px;
  line-height: 40px;
  margin-right: 8px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
`

const ProductDetailComponent = () => {
  const [selectedImage, setSelectedIamge] = useState(images[0])
  const [quantity, setQuantity] = useState(1)
  const [show, setShow] = useState(false)
  const [showAdd, setShowAdd] = useState(false)
  const navigate = useNavigate();

  const handleImageClick = imageUrl => {
    setSelectedIamge(imageUrl)
  }

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const handleIncrease = () => {
    setQuantity(quantity + 1)
  }

  return (
    <div style={{ padding: '10px 10px' }}>
      <Container style={{ marginTop: '20px' }}>
        <Row>
          <Col sm={6}>
            <Image
              src={selectedImage}
              rounded
              style={{ width: '540px', heigth: '250px' }}
            />
            {/* THUMBNAIL IMAGE */}
            <Row className='gap-3 mt-2'>
              {images.map((imageUrl, index) =>
                <Image
                  key={index}
                  src={imageUrl}
                  rounded
                  style={{
                    width: '120px',
                    height: '100px',
                    marginRight: '10px',
                    border:
                      selectedImage === imageUrl ? '2px solid blue' : 'none',
                    cursor: 'pointer'
                  }}
                  onClick={() => handleImageClick(imageUrl)}
                />
              )}
            </Row>
          </Col>
          <Col sm={6}>
            <h2>
              [Voucher 12% max 3TR] Laptop HP Victus 16-e1107AX (7C140PA) (AMD
              Ryzen 5 6600H) (Đen) - Bảo hành 12 tháng
            </h2>
            <WrapperPriceProdduct>
              <WrapperPriceTextProduct>₫17,790,00</WrapperPriceTextProduct>
              <WrapperOldPriceTextProduct>
                ₫25,490,000{' '}
              </WrapperOldPriceTextProduct>
            </WrapperPriceProdduct>
            <WrapperQualityProduct>
              <div> Quantity </div>
              <div className='mt-3'>
                <Button variant='outline-primary' onClick={handleDecrease}>
                  -
                </Button>
                <span style={{ margin: '10px 10px' }}>
                  {quantity}
                </span>
                <Button variant='outline-primary' onClick={handleIncrease}>
                  +
                </Button>
              </div>
            </WrapperQualityProduct>
            <div className='mt-5'>
              <Button
                size='lg'
                style={{ width: '200px' }}
                variant='warning'
                onClick={() => setShow(true)}
              >
                Buy Now
              </Button>
              <Button
                size='lg'
                style={{ width: '200px' }}
                className='custom-button mx-4'
                onClick={() => setShowAdd(true)}
              >
                Add to Cart
              </Button>

              <Col xs={6}>
                <ToastContainer
                  position='top-end'
                  className='p-3 rounded-2'
                  style={{ zIndex: 1, marginTop: '50px' }}
                >
                  <Toast
                    onClose={() => setShow(false)}
                    show={show}
                    delay={3000}
                    autohide
                  >
                    <Toast.Header>
                      <img
                        src='holder.js/20x20?text=%20'
                        className='rounded'
                        alt=''
                      />
                      <strong className='mx-auto'>Notification</strong>
                    </Toast.Header>
                    <Toast.Body
                      style={{
                        backgroundColor: 'green',
                        color: 'white',
                        textAlign: 'center'
                      }}
                    >
                      Buy Product Successfully
                    </Toast.Body>
                  </Toast>
                </ToastContainer>
              </Col>
              <Col xs={6}>
                <ToastContainer
                  position='top-end'
                  className='p-3'
                  style={{ zIndex: 1, marginTop: '50px' }}
                >
                  <Toast
                    onClose={() => setShowAdd(false)}
                    show={showAdd}
                    delay={3000}
                    autohide
                  >
                    <Toast.Header>
                      <img
                        src='holder.js/20x20?text=%20'
                        className='rounded mx-2'
                        alt=''
                      />
                      <strong className='mx-auto'>Notification</strong>
                    </Toast.Header>
                    <Toast.Body
                      style={{
                        backgroundColor: '#f3742f',
                        color: 'white',
                        textAlign: 'center'
                      }}
                    >
                      Add to Cart successfully
                    </Toast.Body>
                  </Toast>
                </ToastContainer>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProductDetailComponent
