import * as React from 'react'
import styled from 'styled-components'
import kayotime from '../src/images/kayotime.png'


const Project =styled.div`

display: grid;
grid-template-columns: 3;
grid-template-rows: 2;
`
const Tile =styled.div`
height: 12em;
width: 400px;
cursor: pointer;
margin: 1rem;
&:hover{
    img{
        filter: blur(2px);
    }
    h1{
        filter: blur(0);
        display: block;
    }
}
h1{
    z-index: 1;
    text-align: center;
    margin-top: -8rem;
    display: none;
}

`
const Projects = () => {
    return (
        <>
            <Project>
                <Tile>
                    <a href="/kayotime"><img src={kayotime}></img></a>
        <h1>Kayo Time Details</h1>
                </Tile>
                <Tile>
                    <img src={kayotime}></img>
        <h1>Kayo Time Details</h1>
                </Tile>
            </Project>
        </>
    )
}


export default Projects; 