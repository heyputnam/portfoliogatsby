import * as React from "react"
import styled from 'styled-components'
import Layout from "../../globalStyles"
import Content from '../../components/content'
import Projects from "../../components/projects"

const Section = styled.div`
height: 100vh;
width: 100%;
z-index: 2;
padding-top: 1rem;

`

const IndexPage = ({name}) => {

  return(
    <>
    <Layout/>

    <Section  className="hero" id="hero" style={{background: 'lightblue'}}>
<Content name="hero">
</Content>


 

  </Section>
  <Section className="resume" id="resume" style={{background: 'yellow'}}>
    <Content name="resume" >

    </Content>

  </Section>
  <Section className="about" id="about" style={{background: 'lightgreen'}}>
    <Content name="about">

    </Content>

  </Section>
  <Section className="projects" id="projects" style={{background: 'lightcyan'}}>
<Content name="projects"/>
 
  </Section>
  <Section className="contact" id="contact" style={{background: 'lightblue'}}>
    <Content name="contact"/>
  </Section>



    </>
  )



}

export default IndexPage; 