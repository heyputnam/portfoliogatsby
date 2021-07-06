import * as React from 'react'
import styled from 'styled-components'
import Layout from '../../globalStyles'
import {AnchorLink } from 'gatsby-plugin-anchor-links'
import hand from '../images/pointing-left.png'

const PageContainer = styled.div`
margin-top: 4rem;
margin-bottom: 3rem;

`
const Title = styled.div`
margin-top: 2rem;
height: auto;
text-align: center;
font-size: 2rem;
`

const Description = styled.div`
height: auto;
font-weight: 600;
font-size: 1.7rem;
margin: 1.5rem;
text-align: center;
margin-left: 15%;
margin-right: 15%;

`

const Video = styled.div`
height: 400px;
display: flex;
justify-content: center;

`

const Back = styled.div`
position: fixed;
top: 1;
left: 0;
z-index: 1;
img{
    margin: 1rem;
    margin-top: -1rem;
    height: 40px;
    width: 40px;
}

&:hover{
    img{
        transform: scale(1.3);
        transition: all 300ms ease-in-out;
        filter: saturate(200%);
    }
}

`

const SwampYankee = () => {
    return(
        <>
        <Layout/>
        <PageContainer>
        <Back>
        <AnchorLink to="/#projects"><img src={hand}></img></AnchorLink>
        </Back>
            <Video>
            <iframe width="60%" height="100%" 
src="https://www.youtube.com/embed/MXVbIO9HyHs">
</iframe>
            </Video>
            <Title>
        <h1>Low Rent</h1>
            </Title>
        <Description>
<p>Business information signgle page web app. Made using React.js, styled components, gsap, and mail.js</p>
        </Description>
       
        </PageContainer>
        </>
    )
}


export default SwampYankee;