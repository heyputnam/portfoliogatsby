import * as React from "react"
import styled from 'styled-components'
import Layout from "../../globalStyles"
import Content from '../../components/content'
import Projects from "../../components/projects"
import About from '../../components/about'
// sets each section to be a full webpage height and width 
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
    {/* give sections id so they are able to be linked using # */}
    <Section  className="hero" id="hero" style={{background: 'white'}}>
      {/* name proprs requested by the Content component  */}
<Content name="hero">
  {/* the lines either includes in the content block or right after are considered children */}
  i want to do some sort of parrallax thing here to intro the webpage 
</Content>
  </Section>
  <Section className="resume" id="resume" style={{background: 'white'}}>
    <Content name="resume" >
    obviously my resume goes here. 
    Im not sure how to format it though to make it look nice full screen 
    </Content>

  </Section>
  <Section className="about" id="about" style={{background: 'white'}}>
    <Content name="about">
  
    </Content>
    <About/>
  </Section>
  <Section className="projects" id="projects" style={{background: 'white'}}>
<Content name="projects"/>
<Projects/>
 {/* links to all projects, with preview photo grip then on click goes to section about the projects  */}
  </Section>
  <Section className="contact" id="contact" style={{background: 'white'}}>
    <Content name="contact"/>
    contact links, github , linkedin , stackoverflow, phone number, email, picture of me, icons maybe under a picture of me "contact me via any of the ways below"
  </Section>



    </>
  )



}

export default IndexPage; 