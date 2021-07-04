import * as React from 'react'
import styled from 'styled-components'


const Section = styled.div`
h1{
  margin-top: 20%;
  /* margin-left: 40%; */
  display: flex;
  justify-content: center;
}

`

const Content = ({name, children}) => {
    return(
        <Section >
        <h1>hi im the {name} section</h1>
        {children}
        </Section>
    )
}


export default Content; 