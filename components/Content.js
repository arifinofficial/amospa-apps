import React from 'react'
import { 
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  Button,
} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBook, faImage, faGift } from '@fortawesome/free-solid-svg-icons'

const Content = (props) => (
  <div className="content rounded shadow-sm">
    <h1>Current Loaded Data.</h1>
    <Row>
      <Col>
        <Card body inverse color="info">
          <CardTitle>Review</CardTitle>
          <CardText>Currently you have no review.</CardText>
          <Button color="light" className="text-left text-info"><FontAwesomeIcon color="#17a2b8" icon={faBook} /> Manage Review</Button>
        </Card>
      </Col>
      <Col>
        <Card body inverse color="info">
          <CardTitle>Gallery</CardTitle>
          <CardText>You have 4 galleries.</CardText>
          <Button color="light" className="text-left text-info"><FontAwesomeIcon color="#17a2b8" icon={faImage} /> Manage Gallery</Button>
        </Card>
      </Col>
      <Col>
        <Card body inverse color="info">
          <CardTitle>Gift Voucher</CardTitle>
          <CardText>Currently you have no gift.</CardText>
          <Button color="light" className="text-left text-info"><FontAwesomeIcon color="#17a2b8" icon={faGift} /> Manage Gift</Button>
        </Card>
      </Col>
    </Row>
  </div>
)

export default Content