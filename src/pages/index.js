import * as React from "react"
import { graphql } from "gatsby"
import "./index.css"
import Hero from "../components/hero"
import Intro from "../components/intro"
import Calculator from "../components/calculator"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const IndexPage = () => (
  <div>
    <Navbar />
    <Hero />
    <Intro />
    <Calculator />
    <Footer />
  </div>
)

export default IndexPage


