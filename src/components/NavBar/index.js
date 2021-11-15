import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
//import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon , NavMenu, NavItem, NavLinks
//       } from "./NavbarElements"
        
import { Container, Carousel, Navbar, Nav, NavDropdown } from 'react-bootstrap';

import { Link, graphql, useStaticQuery } from "gatsby"

import "./NavBarElements.css"

const NavigationBar = () => {
    const [click, setClick] = useState(false)
    const [scroll, setScroll] = useState(false)

    const handleClick = () => setClick(!click)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScroll(true);
        } else {
            setScroll(false)
        }
    }

    useEffect(() => {
        changeNav()
        window.addEventListener("scroll", changeNav)
    }, [])

    const data = useStaticQuery(graphql`
        query {
            allDirectory(filter: {relativeDirectory: {eq: "images"}}) {
              edges {
                node {
                  nlink
                  relativeDirectory
                  relativePath
                  name
                }
              }
            }
          }
    `)

    //console.log(data.allDirectory.edges);

    return (
            <Navbar  expand="lg"  className="navbar-container">
            <Container>
                <Navbar.Brand href="#home">Creative Digital Space</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link className="navlink-colour"href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/enrolment">Enrolment</Nav.Link>
                    <Nav.Link href="/blog">Blogs</Nav.Link>
                    <NavDropdown title="Gallery" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/images/BuenosAires">BuenosAires</NavDropdown.Item>
                    <NavDropdown.Item href="/images/Jelusalem">Jelusalem</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/images/exhibition">Exhibition</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    )
}

export default NavigationBar
