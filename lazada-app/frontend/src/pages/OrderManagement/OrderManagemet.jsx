import React, { useState } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { WrapperLableText } from './../../components/NavBarComponent/style'

const OrderManagement = () => {
  const [orderStatus, setOrderStatus] = useState('Shipped')
  const [productDecision, setProductDecision] = useState('')

  const handleDecision = async decision => {
    if (decision === 'Accepted' || decision === 'Rejected') {
      try {
        const response = await fetch('https://localhost:3500/backend_url', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({ decision })
        })

        const responseData = await response.json()
        console.log('Sending response to Backend' + responseData)

        if (response.ok) {
          setProductDecision(responseData)
        } else {
          console.log('Something wrong happened ')
        }
      } catch (e) {
        console.log('Error sending response' + e)
      }
    }
  }

  return (
    <Container style={{ width: '100vw', height: 'auto', padding: '20px 50px' }}>
      <Row className='mt-4'>
        <Col>
          <Card.Header className='fs-4 fw-bolder text-underline-hover'>
            Order Status
          </Card.Header>

          <div className='h-auto d-grid grid-4 mt-3 gap-5'>
            <Card.Body className='border border-2'>
              <Card.Img
                variant='top'
                src='https://lzd-img-global.slatic.net/g/p/2b3d0c872c7cac5e14484015ac12176d.jpg_400x400q75.jpg_.webp'
                style={{ maxWidth: '280px', marginTop: '20px', objectFit: "cover" }}
              />
              <div className='mx-3'>
                <WrapperLableText>
                  Laptop HP Victus 16-e1107AX (7C140PA) (AMD Ryzen 5 6600H)
                  (Đen)
                </WrapperLableText>
                <p className='fw-medium text-text-primary-emphasis'>
                  Product status:
                  <span style={{ color: 'green' }}> {orderStatus} </span>
                </p>
                {orderStatus === 'Shipped' &&
                  <div>
                    <Button
                      variant='success'
                      className=''
                      onClick={() => handleDecision('Accepted')}
                    >
                      Accepted
                    </Button>
                    <Button
                      variant='danger'
                      className='mx-2'
                      onClick={() => handleDecision('Rejected')}
                    >
                      Rejected
                    </Button>
                  </div>}

                {productDecision &&
                  <p>
                    Your decision: {productDecision}
                  </p>}
              </div>
            </Card.Body>
            <Card.Body className='border border-2'>
              <Card.Img
                variant='top'
                src='https://lzd-img-global.slatic.net/g/p/2df0d5471060c5b544a48c80b7fa8e78.png_720x720q80.png_.webp'
                style={{ maxWidth: '280px', marginTop: '20px' }}
              />
              <div className='mx-3'>
                <WrapperLableText>
                  Laptop HP Victus 16-e1107AX (7C140PA) (AMD Ryzen 5 6600H)
                  (Đen)
                </WrapperLableText>
                <p className='fw-medium text-text-primary-emphasis'>
                  Product status:
                  <span style={{ color: 'green' }}> {orderStatus} </span>
                </p>
                {orderStatus === 'Shipped' &&
                  <div>
                    <Button
                      variant='success'
                      className=''
                      onClick={() => handleDecision('Accepted')}
                    >
                      Accepted
                    </Button>
                    <Button
                      variant='danger'
                      className='mx-2'
                      onClick={() => handleDecision('Rejected')}
                    >
                      Rejected
                    </Button>
                  </div>}

                {productDecision &&
                  <p>
                    Your decision: {productDecision}
                  </p>}
              </div>
            </Card.Body>
           
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default OrderManagement
