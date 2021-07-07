import * as React from 'react'
import styled from 'styled-components'
import kayotime from '../src/images/kayotime.png'

const Container =styled.div`
height: 12em;
width: 420px;
cursor: pointer;
/* margin: rem; */
overflow: hidden;
img{
    
}
&:hover{
    img{
        filter: blur(2px);
    
    }
    h1{
        filter: blur(0);
        display: block;
        color: white;
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    }
}
h1{
    z-index: 1;
    text-align: center;
    margin-top: -8rem;
    display: none;
}

`
const Tile = ({link, img, title}) => {
    return (
        <>
            <Container>
                    <a href={link}><img src={img}></img></a>
        <h1>{title}</h1>
            </Container>
        </>
    )
}


export default Tile; 