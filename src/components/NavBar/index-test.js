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
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">
      <button
              class="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarExample01"
              aria-controls="navbarExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarExample01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <a class="nav-link" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
            
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="dropdown">
   <button
      class="btn btn-secondary dropdown-toggle"
      type="button"
      id="dropdownMenuButton1"
      data-bs-toggle="dropdown"
      aria-expanded="false"
   >
      Dropdown button
   </button>
   <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
   </ul>
</div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
