import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/HeroSection"
import MyImage from "../components/image"

import Img from 'gatsby-image'

import { Container, Carousel } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <HeroSection />
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

        <Carousel>
        { data.allFile.edges.map(image => (
              <Carousel.Item  key={image.node.id} >
                <a href={image.node.publicURL}>

                  <Img
                      fluid={image.node.childImageSharp.fluid}
                      alt={image.node.base.split('.')[0]}                  
                  />                
                </a>
              </Carousel.Item>
          ))}
        </Carousel>

    <Link to="/home">Back to home page</Link>


  </Layout>
  )
  

export default IndexPage

export   const data = graphql`
query  {
  allFile(
    filter: {extension: {regex: "/(jpg)|(png)/"}, relativeDirectory: {eq: "images/gallery"}}) {
    edges {
      node {
        id
        base
        publicURL
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`

