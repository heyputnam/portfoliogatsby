import * as React from 'react'
import styled from 'styled-components'


const Container = styled.div`
display: flex;
margin: 1rem;
`
const Top = styled.div`
display: flex;


`
const Title = styled.div`
display: flex;
flex-direction: column;
margin-top: 10%;
margin-left: 9%;
h1{
    font-size: 6rem;
}

`

const Short = styled.p`
width: 65%;
font-size: 13px;
`

const Right = styled.div`

margin-right: 8%;
margin-top: 5%;
img{
    height: 350px;
    width: 350px;
}

`


const About = () => {
    return(
        <>
        <Container>
        <Top>
        <Title>
        <h1>about.</h1>

        <Short>
        Scoot butt on the rug. Cough hairball on conveniently placed pants lick plastic bags yowling nonstop the whole night yet cat ass trophy so sit by the fire but 
        ccccccccccccaaaaaaaaaaaaaaatttttttttttttttttssssssssssssssss. Please let me outside pouty face yay! wait, it's cold out please let me inside pouty face oh, thank you rub against mommy's leg oh it looks so nice out, please let me outside again the neighbor cat was mean to me please let me back inside purr like a car engine oh yes, there is my human slave woman she does best pats ever that all i like about her.
        </Short>
        </Title>
        <Right>
        <img src="https://i.pinimg.com/originals/39/34/da/3934da8d6e25787f1426e795a9811255.jpg"></img>
        </Right>
        </Top>
        </Container>
        </>
    )
}


export default About; 