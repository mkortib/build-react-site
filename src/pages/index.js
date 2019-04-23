import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/Card";
import Section from "../components/Section";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6";
import Section7 from "../components/Section7";
import Wave from "../components/Wave";
import staticdata1 from '../../staticdata1.json';
import staticdata2 from '../../staticdata2.json';
import staticdata3 from '../../staticdata3.json';
import Cell from "../components/Cell";
import Footer from '../components/Footer';
import styled from "styled-components";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home"/>
    
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to <br/> design and code React apps</h1>
        <p className="desc-main">Complete courses about the best tools for design systems. Prototype and build apps woth React and Swift</p>
        <Link to="/page-2/" className="butt-watch">Watch the video</Link>
        <div className="logos">
          <img src={require('../images/logo-sketch.png')} width="50" />
          <img src={require('../images/logo-figma.png')} width="50" />
          <img src={require('../images/logo-studio.png')} width="50" />
          <img src={require('../images/logo-framer.png')} width="50" />
          <img src={require('../images/logo-react.png')} width="50" />
          <img src={require('../images/logo-swift.png')} width="50" />
        </div>
        <div className="try-bl">
          <Link className="butt-bl">try for free</Link>
          <h5 className="grey-p">get 7 days free trial</h5>
          <p className="try-descr">Then, it’s $9 per month, billed annually. Cancel anytime. No soul required. Free upgrade from version 2.</p>
        </div>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>12 courses, more coming</h2>
      <div className="CardGroup">
        <Card 
          title="Design System with Figma"
          text="10 sections"
          image={require('../images/card1.png')}
          status="21 AUG"
        />
        <Card 
          title="React for Designers"
          text="12 sections"
          image={require('../images/card2.png')}
          status="24 JUL"
        />
        <Card 
          title="Video Editing with Screenflow"
          text="6 sections"
          image={require('../images/card3.png')}
          status="20 JUL"
        />
        <Card 
          title="Sound Design With Cubase"
          text="6 sections"
          image={require('../images/card4.png')}
          status="17 JUL"
        />
        <Card 
          title="Build an ARKit 2 app"
          text="10 sections"
          image={require('../images/card5.png')}
          status="new"
        />
        <Card 
          title="Motion Design in After Effects"
          text="8 sections"
          image={require('../images/card6.png')}
          status="new"
        />
        <Card 
          title="Create a Sketch plugin"
          text="7 sections"
          image={require('../images/card7.png')}
        />
        <Card 
          title="Create a Spritekit game"
          text="9 sections"
          image={require('../images/card8.png')}
        />
        <Card 
          title="Swift Advanced"
          text="22 sections"
          image={require('../images/card9.png')}
        />
        <Card 
          title="Learn Swift"
          text="19 sections"
          image={require('../images/card10.png')}
        />
        <Card 
          title="Learn Sketch"
          text="21 sections"
          image={require('../images/card11.png')}
        />
        <Card 
          title="Learn iOS Design"
          text="12 sections"
          image={require('../images/card12.png')}
        />
      </div>
    </div>
    <Section2
      hoursTitle='60'
      hoursTxt='hours of video content that’s downloadable and captioned'
      langTitle='4'
      langTxt='languages supported. English, Chinese, French, Spanish.'
    />
    <Section3 
      image={require('../images/section2.png')}
      title='Design for everyone. Coding for designers.'
    />
    <Section4
      imgLaptop={require('../images/laptop-img.png')}
      imgIphone={require('../images/iPhone.png')}
    />
    <Section 
      image={require('../images/section3.png')}
      logo={require('../images/logo-react.png')}
      title='React for Designers'
      text='Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify.'
    />
    <SectionCaption>12 section - 6 hours</SectionCaption>
    <SectionCellGroup>
      {
        staticdata1.cells.map(cell => {
          return(
            <Cell 
              title={cell.title}
              style={cell.class}
              image={require('../images/logo-react.png')}
            />
          )
        })
      }
    </SectionCellGroup>
    <CellButton><Link to="/" className="cell-button">About React course</Link></CellButton>
    <Section5 
      image={require('../images/section4.png')}
      imgARkit={require('../images/ar.png')}
      imgIphone2={require('../images/iphone2.png')}
    />
    <Section6
      title='Build an ARKit 2 app'
      paragr='Learn ARKit 2’s new image tracking and object detection to create an immersive experience. Import your own 3D models and get familiar with the basics of augmented reality.'
      spantxt='10 sections - 5 hours'
      arImg={require('../images/ar-logo.png')}
      arrAr={staticdata2.cells}
    />
    <CellButton><Link to="/" className="cell-button2">About ARKit 2 course</Link></CellButton>
    <Section7
      sectBg={require('../images/section5.png')}
      title='Motion Design in After Effects'
      paragr='Learn ARKit 2’s new image tracking and object detection to create an immersive experience. Import your own 3D models and get familiar with the basics of augmented reality.'
      aeImg={require('../images/adobe.svg')}
      arrAr={staticdata3.cells}
    />
      <CellButton><Link to="/" className="cell-button3">About After Effects course</Link></CellButton>
    <Footer dataFoot={data.links}>
      <p>Backgrounds made in Cinema 4D, iOS app in Swift, site in React. Email us to ask anything. © {new Date().getFullYear()} - Terms of Service - Privacy Policy</p>
    </Footer>
  </Layout>
)


// graph

export const query = graphql`
  {
      links: allContentfulLink(sort: { fields: [createdAt], order: ASC }) {
          edges {
            node {
              title
              url
              category
              createdAt
            }
          }
        }
        
  }    
`

const SectionCaption = styled.p`
  font-weight: 600;
  text-transform: uppercase;
  font-size: 18px;
  color: #94a4ba;
  text-align: center;
`

const CellButton = styled.div`
  text-align: center;
  width: 100%;

  .cell-button {
    width: 100%;
    font-size: 24px;
    font-weight: 600;
    color: #fff;
    max-width: 310px;
    padding: 20px 0;
    border-radius: 50px;
    text-align: center;
    display: inline-block;
    background: linear-gradient(to right, #1E16A3 0%, #7E4270 100%);
  }

  .cell-button2 {
    width: 100%;
    font-size: 24px;
    font-weight: 600;
    color: #fff;
    max-width: 310px;
    padding: 20px 0;
    border-radius: 50px;
    text-align: center;
    display: inline-block;
    background: linear-gradient(to right, #8901BE 0%, #3534FF 100%);
    margin: -100px 0 200px;
    position: relative;
    z-index: 5;
  }

  .cell-button3 {
    width: 100%;
    font-size: 24px;
    font-weight: 600;
    color: #fff;
    max-width: 380px;
    padding: 20px 0;
    border-radius: 50px;
    text-align: center;
    display: inline-block;
    background: linear-gradient(to right, #8901BE 0%, #3534FF 100%);
    margin: -100px 0 200px;
    position: relative;
    z-index: 5;
  }

`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 50px;
  padding: 0 20px

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export default IndexPage


