import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/HeroSection"
import MyImage from "../components/image"

const ImagesPage = () => (
  <Layout>
    <Seo title="Home" />
    <MyImage />
  </Layout>
)

export default ImagesPage