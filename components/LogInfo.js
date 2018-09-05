import React from 'react'
import {UncontrolledAlert, Badge} from 'reactstrap'

const LogInfo = (props) => (
  <UncontrolledAlert className="mt-4 mb-0 shadow-sm" color="info">
    Welcome {props.userLog}. Last login at <Badge color="info">{props.dateLog}</Badge>        
  </UncontrolledAlert>
)
export default LogInfo