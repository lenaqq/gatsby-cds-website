import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'
import "./image.css"

const MyImage = () => {
  const data = useStaticQuery(graphql`
              query  {
                allFile(
                    filter: {relativeDirectory: {eq: "gallery"}, extension: {regex: "/(jpg)|(png)/"}}) {
                  edges {
                    node {
                      base
                      publicURL
                      childImageSharp {
                        fluid {
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
        <div className="image-grid">
          { data.allFile.edges.map((image, key) => (
              <Img 
                  className="image-item"
                  fluid={image.node.childImageSharp.fluid}
                  alt={image.node.base.split('.')[0]}
              />
          ))}
        </div>
      </div>
  )
  
}

export default MyImage
