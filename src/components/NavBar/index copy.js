import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon , NavMenu, NavItem, NavLinks
        } from "./NavbarElements"
import NavDropdown from "react-bootstrap/NavDropdown"

import { Link, graphql, useStaticQuery } from "gatsby"

const Navbar = () => {
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
        <>
            <IconContext.Provider value = { { color: "#141414"}}>
                <Nav active={scroll} click={click}>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <NavIcon />
                                Explore
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to="/">Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/about">About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/images">Images
                                <NavDropdown id="basic-nav-dropdown" class="sub-items responsive-navbar-nav pdown-menu dropdown-menu-right">
                                        <NavDropdown.Item href="/images/BuenosAires">
                                            BuenosAires
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="/images/Jelusalem">
                                            Jelusalem
                                        </NavDropdown.Item>
                                
                                </NavDropdown>
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/blog">Blogs</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
