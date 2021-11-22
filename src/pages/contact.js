import React, { useRef, useState } from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"

import  { Form, Button, Container, Row, Col } from "react-bootstrap"

import gatsbyicon from "../images/gatsby-icon.png"

const EnrolmentPage = () => {
  //const [email, setEmail] = useState('');

  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');


  //const [message, setMessage] = useState("");

  const handleSubmit = () => {
    console.log( email );
  };

  const [name, setName] = useState("");

  /*      Test fetch with POST */
  const first_name = useRef(null);
  const second_name = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);
  const message = useRef(null);

  const [postResult, setPostResult] = useState(null);

  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  }

  async function postData() {
    const postData = {

      subject: "Contact Form",
      first_name: first_name.current.value,
      second_name: second_name.current.value,
      email: email.current.value,
      phone: phone.current.value,
      message: message.current.value,
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

      console.log(JSON.stringify(postData));
      console.log(res);
      
      if (!res.ok) {
        const message = `An error has occured: ${res.status} - ${res.statusText}`;
        throw new Error(message);
      }

      const data = await res.json();

      console.log(data);

      const result = {
        status: res.status + "-" + res.statusText,
        headers: {
          "Content-Type": res.headers.get("Content-Type"),
          "Content-Length": res.headers.get("Content-Length"),
        },
        data: data,
      };
      console.log(result);
      setPostResult(fortmatResponse(result));

    } catch (err) {

      console.log(err.message);
      setPostResult(err.message);
    }
  }

  const onSubmit1 = () => {
    console.log({firstName});
    console.log({secondName});

    
   // console.log( message );
    //setMessage(`${firstName}` + ' ' + `${secondName}`);

    console.log( message );
  };

  return (
  
    <Layout>
      <SEO title="Enrolment"/>

      <Container>
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

        <h1>Enrolment Form for Term and Private Lessons</h1>

        <Col lg={6}>   
        <Form>
          <Row>
            <Col lg={6}>
              <Form.Group controlId="formBasicFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control required type="text" 
                      value={firstName}               
                      ref={first_name}
                      onChange={e => setFirstName(e.target.value )}
                      placeholder="Include your real first name"/>
              </Form.Group>
            </Col>

            <Col lg={6}>
              <Form.Group controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text"               
                  value={secondName}                 
                  ref={second_name}            
                  onChange={e => setSecondName(e.target.value )}
                  placeholder="Include your real first name"/>
              </Form.Group>              
            </Col>
          </Row>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email Address *</Form.Label>
            <Form.Control required type="email" ref={email} />
          </Form.Group>        
          
          <Form.Group controlId="formBasicPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" ref={phone} />
          </Form.Group>        
          
          <Form.Group controlId="formBasicMessage">
            <Form.Label>Your Message</Form.Label>
            <Form.Control as="textarea" ref={message} row="3" placeholder="Please write your request"/>
          </Form.Group>

          <Button 
                className="btnFormSend"
                variant="outline-success"
                onClick={postData}>
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