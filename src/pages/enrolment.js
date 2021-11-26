import * as React from 'react';
import { useRef, useState } from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"


import  { Form, Button, Container, Row, Col, ListGroup, Badge, InputGroup, FormControl, Checkbox } from "react-bootstrap"

import { MDBInput } from 'mdbreact';

import gatsbyicon from "../images/gatsby-icon.png"

import '@fortawesome/fontawesome-free/css/all.min.css'; import
'bootstrap-css-only/css/bootstrap.min.css'; import
'mdbreact/dist/css/mdb.css';

const EnrolmentPage = () => {
  const [email, setEmail] = useState('');

  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');

  const [message, setMessage] = useState("");

  const [name, setName] = useState("");

  /*      Test fetch with POST */
  const post_title = useRef(null);
  const post_description = useRef(null);

  const [postResult, setPostResult] = useState(null);

  const [voucher, setVoucher] = useState('');
  const [digiArtChecked, setDigiArtChecked] = useState(false);
  const [graphDesChecked, setGraphDesChecked] = useState(false);

  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  }

  async function postData() {
    const postData = {
      subject: post_title.current.value,
      body: post_description.current.value,
      voucher: {voucher}    
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

  const [item, setItem] = useState({ kindOfStand: "", another: "another" });

  const { kindOfStand } = item;

  const handleChangeTest = e => {
    e.persist();
    console.log(e.target.value);

    setItem(prevState => ({
      ...prevState,
      kindOfStand: e.target.value
    }));
  };

  const [programs, setPrograms] = useState( { 'digi-art': false, 
                                                    'gr-des': false, 
                                                    'pack': false,
                                                    'coding': false, 
                                                    'python': false 
                                                  } ) 

  const handlePrograms = e =>
  {
    e.persist();

    var course = e.target.id;

    console.log(course);
    programs[course] = !programs[course];
    console.log(programs[course]);
    console.log(programs);
  } 

  const courses = [ 
                    { name: 'Introduction to Digital Art and Animation',
                      abbr: 'digi-art',
                      checked: false
                    },
                    { name: 'Introduction to Graphic Design',
                      abbr: 'gr-des',
                      checked: false
                    },
                    { name: 'Introduction Pack to Digital Art or Graphic Design',
                      abbr: 'pack',
                      checked: false
                    },
                    { name: 'Coding (Visual Block-Based Programming)',
                      abbr: 'coding',
                      checked: false
                    },
                    { name: 'Introduction to Python Programming',
                      abbr: 'python',
                      checked: false
                    },
                   ];

  const handleSubmit = e => {

    e.preventDefault();

    let sel_courses = '';

    for ( var course in programs ) { 
      if ( programs[course] ) { 
        
        sel_courses += course + " "; 
      } 
    } 

    alert(`${kindOfStand}`  + ' ' + `${secondName}` + ' ' + sel_courses);

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

        <Col lg={12}>   
        <Form onSubmit={handleSubmit}>
          <ListGroup as="ol" numbered>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >

              <div className="ms-2 me-auto">
                <div className="fw-bold">Select one or more courses starting from July in 2021 (required)
                </div>
                
                <div>
                  {courses.map((course) => 
                      <Form.Check
                        type="checkbox"
                        id={course.abbr}
                        label={course.name}
                        onChange={handlePrograms}
                        course={course.abbr}
                      />  
                    )             
                  }

                </div>
                <br/>
                <p>Note: Enrolment deadline is two weeks before the course starts if you need to order a drawing tablet. 
                  Usually it takes three working days to order a tablet, but now it takes much longer due to the Covid-19 lockdown.</p>

                <Form.Group controlId="formBasicPhone">
                  <Form.Label>Please write down your preferred day and time (give us few options). We will decide the final day and time according 
                  to most enrolment’s preferences and notify you.</Form.Label>
                  <Form.Control type="text"/>
                </Form.Group>   

                <div>
                  There will be an one-to-one session few days before the start of the workshop to set up the learning environment, especially 
                  for digital art and graphic design courses. Once enrolled, we will organise a time for the set up session.
                </div>
              </div>
            </ListGroup.Item>

            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Select one or more programs with prices (required)</div>
                <br/>
                <div>
                  {/* Material unchecked */}
                  <MDBInput label="One term $240 (8 classes and each is 1 hours. Starts on 2nd week of the term, 2-4 kids)" type="checkbox" id="checkbox1" />
      
                  {/* Material checked */}
                  <MDBInput label="1 Hour Private lesson, $50" type="checkbox" id="checkbox2" value={secondName}/>
          
                  <MDBInput label="4 Hour Private lessons, $180" type="checkbox" id="checkbox3" />

                  {/* Material unchecked disabled */}
                  <MDBInput label="6 Hour Private lessons, $240" type="checkbox" id="checkbox4" />
      
                  {/* Material checked disabled */}
                  <MDBInput label="8 hour private lessons, $320" type="checkbox" id="checkbox5" />

                  {/* Material unchecked disabled */}
                  <MDBInput label="Introduction Pack to Digital Art or Graphic Design, $130" type="checkbox" id="checkbox4" />

                </div>
                </div>
            </ListGroup.Item>

            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Student Name (required)
                </div>
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
              </div>
            </ListGroup.Item>

            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">School Year:
                </div>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control  type="email"/>
                </Form.Group>     
              </div>      
            </ListGroup.Item>  
          
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Student Email Address:
                </div>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control  type="email"/>
                </Form.Group>     
              </div>
            </ListGroup.Item>

            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >

              <div className="ms-2 me-auto">
                <div className="fw-bold">Select one or more programs with prices (required)</div>

              
              <div>

              <Form.Group controlId="kindOfStand">
              <Form.Check
                value="No"
                type="radio"
                aria-label="radio 1"
                label="No Voucher"
                onChange={handleChangeTest}
                checked={kindOfStand === "No"}
              />
              <Form.Check
                value="Yes"
                type="radio"
                aria-label="radio 2"
                label="Have a Creative Kids Voucher"
                onChange={handleChangeTest}
                checked={kindOfStand === "Yes"}
              />
            </Form.Group>

                  {/* Material unchecked */}
                  <MDBInput label="No" name="option" type="radio" id="no_voucher" 
                    value={voucher}
                  />
      
                  {/* Material checked */}
                  <MDBInput label="Yes (Your payment will be reduced by $100). Please fill in the following fields:" 
                    type="radio" name="option" id="voucher" 
                    value={voucher}
                  />
                </div>
                <div className="fw-bold">Voucher Number:</div>
                <Form.Group controlId="formBasicMessage">
                  <Form.Control as="text" row="3" placeholder="16 digits"/>
                </Form.Group>
                <div className="fw-bold">Date of Birth:</div>
                <Form.Group controlId="formDatOfBirth">
                  <Form.Control as="text" row="3" placeholder="16 digits"/>
                </Form.Group>
                <div>Alternatively, please send the voucher to info@creativedigitalspace.com.au with your child’s date of birth.</div>
              </div>
              <br/>
            </ListGroup.Item>

            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Student Email Address:</div>
                <div>
                  {/* Material unchecked */}
                  <MDBInput label="Desktop (Windows 10)" type="radio" id="no_voucher" />
                  {/* Material checked */}
                  <MDBInput label="Laptop (Windows 10)" type="radio" id="voucher" />
                  {/* Material unchecked */}
                  <MDBInput label="Computer tablet (Windows 10)" type="radio" id="no_voucher" />
                  {/* Material checked */}
                  <MDBInput label="iMac" type="radio" id="voucher" />
                  {/* Material unchecked */}
                  <MDBInput label="iPad 8 or Air with a digital pencil" type="radio" id="no_voucher" />
                  {/* Material checked */}
                  <MDBInput label="Mobile device (Android)" type="radio" id="voucher" />
                </div>

                <Form.Group controlId="formBasicMessage">
                <Form.Label>If none of the above is selected, please indicate the computer model that you are going to use in this course:</Form.Label>
                <Form.Control as="text" row="3" placeholder="Please write your request"/>
              </Form.Group>
              </div>
            </ListGroup.Item>


            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">We need both drawing tablet and an external web camera during the digital art and graphic design course. 
                  We prefer a drawing tablet including a stylus with 8192 levels of pressure sensibility for 
                  digital art courses. You can purchase them or borrow them from us. Please select one or more 
                  options below:                
                </div>
                <div>
                  {/* Material unchecked */}
                  <MDBInput label="I have a drawing tablet and a web cam" type="checkbox" id="checkbox1" />      
                  {/* Material checked */}
                  <MDBInput label="I'd like to borrow a drawing tablet ($65 deposit)" type="checkbox" id="checkbox2" />    
                  <MDBInput label="I'd like to borrow a web cam (external) ($35 deposit)" type="checkbox" id="checkbox3" />
                  {/* Material unchecked disabled */}
                  <MDBInput label="I'd like to purchase a drawing tablet ($65)" type="checkbox" id="checkbox4" />
     
                  {/* Material checked disabled */}
                  <MDBInput label="I'd like to purchase a web cam (external) ($35)" type="checkbox" id="checkbox5" />

                  {/* Material unchecked disabled */}
                  <MDBInput label="Not need it" type="checkbox" id="checkbox4" />

                </div><br/>

                <div>If you borrow any device, we can arrange a pick up time for the device. When you 
                  return them in good condition, we will return your deposit.</div><br/>
                <div>The amount of purchase are subject to change due to sale prices.</div><br/>
                <div>We will send you a Setup Instruction Manual once you have the table and web cam. 
                  An one-to-one session is followed to make sure you have the right set up environment for 
                  the workshop.</div><br/>
              </div>
            </ListGroup.Item>

            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">We prefer using a big screen/monitor during the class time. Would you like to borrow a big monitor from us?
                </div>
                <div>
                  {/* Material unchecked */}
                  <MDBInput label="Yes ($50 deposit)" type="radio" id="no_voucher" />
                  {/* Material checked */}
                  <MDBInput label="No" type="radio" id="voucher" />
                </div>
              </div>
            </ListGroup.Item>

            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">We prefer using a big screen/monitor during the class time. Would you like to borrow a big monitor from us?
                </div>
                <div>
                  {/* Material unchecked */}
                  <MDBInput label="English" type="checkbox" id="checkbox1" />      
                  {/* Material checked */}
                  <MDBInput label="Chinese (Mandarin)" type="checkbox" id="checkbox2" />          
                  {/* Material checked */}
                  <MDBInput label="Chinese (Cantonese)" type="checkbox" id="checkbox3" />
                  {/* Material unchecked disabled */}
                  <MDBInput label="Spanish" type="checkbox" id="checkbox4" />
                </div>
              </div>
            </ListGroup.Item>
                      
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Parent full name (required):
                </div>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control  type="email"/>
                </Form.Group>     
              </div>
            </ListGroup.Item>
                      
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Contact email (required)
                (required):
                </div>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control  type="email"/>
                </Form.Group>     
              </div>
            </ListGroup.Item>
                                  
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Comment (max 100 letters):
                </div>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control  as="textarea" row="3" />
                </Form.Group>     
              </div>

            </ListGroup.Item>
                                  
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Terms and conditions (required):</div>
                <p>
                You, parent/carer, agree that your child will use a video conference application like Zoom for this online course and communicate with the teacher.
                </p>
                <p>
                You, parent/carer, agree to install software driver for our selected drawing tablet and install the drawing software on your computer.
                </p>
                <p>
                You, parent/carer, and your child will use borrowed drawing tablet and web camera carefully and return them in good condition.
                </p>
                <p>
                Your child will respect to other children and teacher via the online video conference tool.
                </p>
                <p>
                You, parent/carer, understand that collected name and email addresses are used for this online course and collected computer information is to facilitate the set up of the drawing tablet and to know the version of drawing software you will be using.
                </p>
                <p>
                You, parent/carer, give consent for your child to participate in the selected workshop/classes. You realise precautions are taken to eliminate any injuries or hazards and a competent supervisor is present online; however, in the event of any injury, You hereby waive, release and hold harmless from any liability for damages or claims for personal injury, including accidental death, as well as for property damage which may arise in conjunction with the above activity, against Creative Digital Space, its employees and assistants.
                </p>
                <div>
                  {/* Material unchecked */}
                  <MDBInput label="Accept" type="checkbox" id="checkbox1" />      
                </div>
              </div>

            </ListGroup.Item>

          </ListGroup>

          <Button 
                className="btnFormSend"
                variant="outline-success"
                onClick={handleChangeTest}>
              Submit
          </Button>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </Col>
      </Container>
    </Layout>
  )
}
export default EnrolmentPage
