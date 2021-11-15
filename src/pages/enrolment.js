import React, {useState} from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"

import  { Form, Button, Container, Row, Col } from "react-bootstrap"

import gatsbyicon from "../images/gatsby-icon.png"

const EnrolmentPage = () => {
  const [email, setEmail] = useState('');

  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');


  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    console.log( email );
  };

  const [name, setName] = useState("");

  const onSubmit1 = () => {
    console.log({firstName});
    console.log({secondName});

   // console.log( message );
    setMessage(`${firstName}` + ' ' + `${secondName}`);

    console.log( message );
  };

  return (
  
    <Layout>
      <SEO title="Enrolment"/>

      <Container>
        <h1>Enrolment Form for Term and Private Lessons</h1>
        <Row>
            <Col lg={6}>
              <img style={{height:'auto',width:'20%'}} src={ gatsbyicon }/>
            </Col>

            <Col lg={6}>
              <div align="right">
                <span>Tel: 098747665</span><br/>
                <span>Email: lehahhd@gmail.com</span>
              </div>
            </Col>
          </Row>
        <Col lg={6}>   
        <Form>
          <Row>
            <Col lg={6}>
              <Form.Group controlId="formBasicFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" 
                value={firstName}               
                onChange={e => setFirstName(e.target.value )}
                placeholder="Include your real first name"/>
              </Form.Group>
            </Col>

            <Col lg={6}>
              <Form.Group controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text"               
                value={secondName}                 
                onChange={e => setSecondName(e.target.value )}
                placeholder="Include your real first name"/>
              </Form.Group>              
            </Col>
          </Row>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control  type="email"/>
          </Form.Group>        
          
          <Form.Group controlId="formBasicPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>        
          
          <Form.Group controlId="formBasicMessage">
            <Form.Label>Your Message</Form.Label>
            <Form.Control as="textarea" row="3" placeholder="Please write your request"/>
          </Form.Group>

          <p>User Details: {firstName} {secondName}</p>
          <p>User Details: {message}</p>

          <Button 
                className="btnFormSend"
                variant="outline-success"
                onClick={onSubmit1}>
              Submit
          </Button>
        </Form>
        </Col>
        <Col lg="6">

  
        </Col>
      </Container>
    </Layout>
  )
}
export default EnrolmentPage