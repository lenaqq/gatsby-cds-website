import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'
import "./image.css"
import { useState, useCallback } from 'react'
import { Modal, ModalGateway } from "react-images";
import { Container, Carousel } from 'react-bootstrap';
import SimpleReactLightbox, {SRLWrapper } from "simple-react-lightbox"

const displayOneImage = ({data}) => {

  return (
    <Container>
      <Carousel>
      { data.allFile.edges.map(image => (
            <Carousel.Item  key={image.node.id} >
              <a href={image.node.publicURL}>{image.node.publicURL}</a>
            <Img
                fluid={image.node.childImageSharp.fluid}
                alt={image.node.base.split('.')[0]}                  
            />
            </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  )
  }

const MyImage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const data = useStaticQuery(graphql`
              query  {
                allFile(
                    filter: {relativeDirectory: {eq: "images/gallery"}, extension: {regex: "/(jpg)|(png)/"}}) {
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
  `)

  return (
      <div className="image-container">
        <h1>View artworks</h1>
          <SimpleReactLightbox>
            <SRLWrapper>
              <div className="image-grid" >
                    { data.allFile.edges.map((image, key) => (
                        <div className="frame"  >

                        <a href={image.node.publicURL}>
                          <Img key={key}
                              className="image-item"
                              fluid={image.node.childImageSharp.fluid}
                              alt={image.node.base.split('.')[0]}    
                          />
                        </a>
                        </div>
                    ))}
              </div>
            </SRLWrapper>
        </SimpleReactLightbox>
      </div>
  )
  
}

export default MyImage
