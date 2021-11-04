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

  const options = {
    buttons: {
      backgroundColor: 'rgba(30,30,36,0.8)',
      iconColor: 'rgba(255, 255, 255, 0.8)',
      iconPadding: '10px',
      showAutoplayButton: true,
      showCloseButton: true,
      showDownloadButton: false,
      showFullscreenButton: true,
      showNextButton: true,
      showPrevButton: true,
      showThumbnailsButton: true,
      size: '40px'
    }
}
  
const MyImage = ({data}) => {
  const [currentImage, setCurrentImage] = useState(0);

  const image_dir = "image/gallery/Jelusalem";

  console.log(data);

  return (
      <div className="image-container">
        <h1>View artworks</h1>
          <SimpleReactLightbox>
            <SRLWrapper options={options}>
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

export const query = graphql`
query MyImageQuery( $image_dir: String ) {
  allFile(
      filter: {relativeDirectory: {eq: $image_dir}, extension: {regex: "/(jpg)|(png)/"}}) {
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

export default MyImage
