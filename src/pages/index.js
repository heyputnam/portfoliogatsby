import * as React from "react"
import styled from 'styled-components'
import Layout from "../../globalStyles"


const Section = styled.div`
height: 75vw;
width: 100%;

`

const Hero = styled.div`
background: lightgrey;
height: 100%;
`
const About = styled.div`
background: lightblue;
height: 100%;

`
const Projects = styled.div`

background: lightcyan;
height: 100%;
`
const Contact = styled.div`
background: lightsalmon;
height: 100%;

`

const IndexPage = () => {
  return(
    <>
    <Layout/>
    <Section>
  <Hero>
    <h1>hero </h1>
  </Hero>
  </Section>
  <Section>
  <About>
  <h1>About </h1>
  </About>
  </Section>
  <Section>
  <Projects>
  <h1>Project </h1>
  </Projects>
  </Section>
  <Section>
  <Contact>
  <h1>Contact </h1>
  </Contact>
  </Section>



    </>
  )



}

export default IndexPage; 