import * as React from "react"
import styled from 'styled-components'
import Layout from "../../globalStyles"
import Hero from '../../components/hero'

const Section = styled.div`
height: 75vw;
width: 100%;

.hero, .about, .projects, .contact {
  background-color: white;
  height: 100%;
}

`


const IndexPage = ({heroContent}) => {

  return(
    <>
    <Layout/>
    <Section>
  <div className="hero" id='hero'>
    <Hero/>
    <p>hero</p>
  </div>
  </Section>
  <Section>
  <div className ="about"id='about'>
    <p>about</p>
  </div>
  </Section>
  <Section>
  <div className ="projects" id='projects'>
<p>projects</p>
  </div>
  </Section>
  <Section>
  <div  className="contact" id='contact'>
<p>contact</p>
  </div>
  </Section>



    </>
  )



}

export default IndexPage; 