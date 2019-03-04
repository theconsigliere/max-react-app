import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/Card"
import Section from "../components/section"
import Wave from "../components/wave"
import staticdata from "../../staticdata.json"
import Cell from "../components/cell"
import styled from "styled-components"

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94a4ba;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div>
      <div className="Hero">
        <div className="heroGroup">
          <h1>
            Hi I'm Max, <br />a Designer & Developer from Torbay
          </h1>

          <p>Welcome to my site</p>
          <Link to="/page-2/">Click for more</Link>
          <div className="Logos">
            <img src={require("../images/logo-sketch.png")} width="50px" />
            <img src={require("../images/logo-figma.png")} width="50px" />
            <img src={require("../images/logo-studio.png")} width="50px" />
            <img src={require("../images/logo-framer.png")} width="50px" />
            <img src={require("../images/logo-react.png")} width="50px" />
            <img src={require("../images/logo-swift.png")} width="50px" />
          </div>
          <Wave />
        </div>
      </div>
      <div className="Cards">
        <h2>All the courses, for everyone</h2>
        <div className="CardGroup">
          <Card
            title="React for Everyone"
            text="12 Sections"
            image={require("../images/wallpaper.jpg")}
          />
          <Card
            title="Redux for Everyone"
            text="10 Sections"
            image={require("../images/wallpaper2.jpg")}
          />
          <Card
            title="Vue for Everyone"
            text="14 Sections"
            image={require("../images/wallpaper3.jpg")}
          />
          <Card
            title="Sketch for Everyone"
            text="6 Sections"
            image={require("../images/wallpaper4.jpg")}
          />
        </div>
      </div>
      <Section
        image={require("../images/wallpaper2.jpg")}
        logo={require("../images/logo-react.png")}
        title="React for Designers"
        text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
      />
      <SectionCaption>12 Sections - 6 hOURS</SectionCaption>
      <SectionCellGroup>
        {staticdata.cells.map(cell => (
          <Cell title={cell.title} image={cell.image} />
        ))}
      </SectionCellGroup>
    </div>
  </Layout>
)

export default IndexPage
