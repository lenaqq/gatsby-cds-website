import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'
import Layout from "../../components/layout"
import { useState, useCallback } from 'react'
import { Modal, ModalGateway } from "react-images";
import { Container, Carousel } from 'react-bootstrap';
import SimpleReactLightbox, {SRLWrapper } from "simple-react-lightbox"

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
  
const ImageGallery = ({data}) => {

  console.log(data);

  return (

    <Layout>
      <div className="image-container">
        <h1>Buenos Aires</h1>
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
    
    </Layout>
  )
  
}

export const query = graphql`
query {
  allFile(
      filter: {relativeDirectory: {eq: "images/BuenosAires"}, extension: {regex: "/(jpg)|(png)/"}}) {
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

export default ImageGallery