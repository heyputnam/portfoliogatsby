import * as React from 'react'
import styled from 'styled-components'
import kayotime from '../src/images/kayotime.png'
import Tile from './tile'

const Project =styled.div`
display: grid;
grid-template-columns: 33% 33% 33%;
`


const Projects = ({link, image, title}) => {
    return (
        <>
            <Project>
  <Tile
  title="Kayo Time Details"
  link="/kayotime"
  img={kayotime}/>
  <Tile/>

            </Project>
        </>
    )
}


export default Projects; 