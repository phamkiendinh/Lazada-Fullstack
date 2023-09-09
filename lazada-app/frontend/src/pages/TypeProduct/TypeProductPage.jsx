import React from 'react'
import NavBarComponent from './../../components/NavBarComponent/index'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardTypeProduct from './../../components/CardTypeProduct/index'
import { useNavigate } from 'react-router-dom'
import PaginationComponent from './../../components/PaginationComponent/index'

const TypeProductPage = () => {
  const navigate = useNavigate()
  return (
    <div
      style={{
        backgroundColor: '#eff0f5',
        height: '100%',
        padding: '10px 50px'
      }}
    >
      <h5 className='pt-3'>
        <span
          style={{ cursor: 'pointer', fontWeight: 'bold' }}
          onClick={() => {
            navigate('/')
          }}
        >
          Trang chủ
        </span>
        - Loại Sản Phẩm
      </h5>
      <Container
        style={{
          width: '100vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'end'
        }}
      >
        <div style={{}}>
          <Row
            style={{
              padding: '10px 10px',
              width: '1400px',
              flexWrap: 'nowrap',
              paddingTop: '10px',
              gap: '25px'
            }}
          >
            <Col
              sm={2}
              style={{
                background: '#fff',
                marginRight: '10px',
                padding: '10px',
                borderRadius: '6px',
                height: '55vh'
              }}
            >
              <NavBarComponent />
            </Col>
            <Col sm={10}>
              <CardTypeProduct />
            </Col>
          </Row>
        </div>
      </Container>

      <PaginationComponent />
    </div>
  )
}

export default TypeProductPage
