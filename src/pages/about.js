import React from "react"
import MyImage from "../components/image"
import Layout from "../components/layout"

/*
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import Seo from "../components/seo"
import HeroSection from "../components/HeroSection"
*/

import { Carousel} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"


import img1 from "../../data/images/gallery/IMG_4572.jpg"
import img2 from "../../data/images/gallery/IMG_4457.jpg"

const AboutPage = () => (
<Layout>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
      width="90%"
      text-align ="center"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img

        className="d-block w-100"
      src={img2}
      alt="Second slide"
      width="90%"
      text-align ="center"
    />
  </Carousel.Item>

</Carousel>
</Layout>
)

export default AboutPage