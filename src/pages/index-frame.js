import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/HeroSection"
import MyImage from "../components/image"


const IndexPage = ({data}) => (
  
  <Layout>
    <Seo title="Home" />
    <HeroSection />
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>


    <Link to="/home">Back to home page</Link>


  </Layout>
)

export default IndexPage
