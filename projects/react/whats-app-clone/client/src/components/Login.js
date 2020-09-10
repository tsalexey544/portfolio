import React, {useRef, useState} from 'react'
import Count from './Count'
import CountRef from './CountRef'
import UseEffect from './UseEffect'
import {Container, Form} from 'react-bootstrap'

export default function Login() {
  const [myName, setmyName] = useState("");
  // const [myName, setmyName] = useEffect("1");

  return (
    <Container>
      <Form.Group>
        <Form.Label>My name is <span>{myName}</span> </Form.Label>
        {/* <Form.Label>Enter your ID</Form.Label> */}
        <Form.Control type="text" onChange={e=>setmyName(e.target.value)}></Form.Control>
        {/* <Count /> */}
        <CountRef />
        {/* <UseEffect/> */}
      </Form.Group>
      Login
    </Container>
  )
}
