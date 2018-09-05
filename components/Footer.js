import React from 'react'
import {
  Row,
  Col
} from 'reactstrap'

const Footer = (props) => (
  <div className="bottom rounded shadow-sm">
    <Row>
      <Col className="text-left">
        Amo Spa A.P.I Developed by {props.author}
      </Col>
      <Col className="text-right">
        Copyright &copy; {props.copy}
      </Col>
    </Row>
  </div>
)

export default Footer