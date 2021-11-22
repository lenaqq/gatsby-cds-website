import React, { useRef, useState } from "react"
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

  /*      Test fetch with POST */
  const post_title = useRef(null);
  const post_description = useRef(null);

  const [postResult, setPostResult] = useState(null);

  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  }

  async function postData() {
    const postData = {
      subject: post_title.current.value,
      body: post_description.current.value,
    };

    console.log(postData);
    
    try {
      const res = await fetch(`https://ccjm8m9uo1.execute-api.us-east-1.amazonaws.com/prod`, {
        method: "post",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(postData),
      });

      if (!res.ok) {
        const message = `An error has occured: ${res.status} - ${res.statusText}`;
        throw new Error(message);
      }

      const data = await res.json();

      const result = {
        status: res.status + "-" + res.statusText,
        headers: {
          "Content-Type": res.headers.get("Content-Type"),
          "Content-Length": res.headers.get("Content-Length"),
        },
        data: data,
      };

      setPostResult(fortmatResponse(result));
    } catch (err) {
      setPostResult(err.message);
    }
  }

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
                ref={post_title}
                onChange={e => setFirstName(e.target.value )}
                placeholder="Include your real first name"/>
              </Form.Group>
            </Col>

            <Col lg={6}>
              <Form.Group controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text"               
                value={secondName}                 
                ref={post_description}            
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
                onClick={postData}>
              Post Data
          </Button>

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