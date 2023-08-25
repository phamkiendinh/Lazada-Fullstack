import React from 'react'
import Pagination from 'react-bootstrap/Pagination'
import { Col, Container, Row } from 'react-bootstrap'

const PaginationComponent = () => {
  return (
    <div style={{ padding : "30px 100px", display: "flex" }}>
      <Container className=''>
        <Row>
          <Col className='d-flex align-items-center justify-content-center'>
            <Pagination className=''>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item active>
                {1}
              </Pagination.Item>
              <Pagination.Ellipsis />

              <Pagination.Item>
                {10}
              </Pagination.Item>
              <Pagination.Item>
                {11}
              </Pagination.Item>
              <Pagination.Item >
                {12}
              </Pagination.Item>
              <Pagination.Item>
                {13}
              </Pagination.Item>
              <Pagination.Item disabled>
                {14}
              </Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>
                {20}
              </Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PaginationComponent
