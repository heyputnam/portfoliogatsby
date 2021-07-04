import * as React from 'react'
import styled from 'styled-components'


const Section = styled.div`

`

const Title = styled.h1`
margin-top: 2rem;
display: flex;
justify-content: center;
`

const Content = ({name, children}) => {
    return(
        <Section >
        <Title>hi im the {name} section</Title>
        {children}
        </Section>
    )
}


export default Content; 