import * as React from "react"
import styled from 'styled-components'
import Layout from "../../globalStyles"
import Content from '../../components/content'
import Projects from "../../components/projects"

const Section = styled.div`
height: 75vw;
width: 100%;
z-index: 2;
padding-top: 1rem;



@media only screen and (max-width: 600px) {
  height: 75vh;
}
`

const IndexPage = ({name}) => {

  return(
    <>
    <Layout/>

    <Section  className="hero" id="hero">

 
<Content name="hero">
</Content>


 

  </Section>

  <Section className="about" id="about">
    <Content name="about">

    </Content>

  </Section>
  <Section className="projects" id="projects">
<Content name="projects"/>
 
  </Section>
  <Section className="contact" id="contact">
    <Content name="contact"/>
  </Section>



    </>
  )



}

export default IndexPage; 