import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"

import  { Form, Button, Container, Row, Col } from "react-bootstrap"

const AboutPage = () => (
    <Layout>
      <SEO title="About"/>

      <Container>
        <h1>About Us</h1>
        <Col lg={6}>   
        <Form>
          <Row>
            <Col lg={6}>
              <Form.Group controlId="formBasicFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Include your real first name"/>
              </Form.Group>
            </Col>

            <Col lg={6}>
              <Form.Group controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Include your real first name"/>
              </Form.Group>              
            </Col>
          </Row>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control required type="email"/>
          </Form.Group>        
          
          <Form.Group controlId="formBasicPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>        
          
          <Form.Group controlId="formBasicMessage">
            <Form.Label>Your Message</Form.Label>
            <Form.Control as="textarea" row="3" placeholder="Please write your request"/>
          </Form.Group>

          <Button type="submit">Submit</Button>
        </Form>
        </Col>
        <Col lg="6"></Col>
      </Container>
    </Layout>
)

export default AboutPage