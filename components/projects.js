import * as React from 'react'
import styled from 'styled-components'
import kayotime from '../src/images/kayotime.png'
import Tile from './tile'
import rods from '../src/images/rods.png'
import tarot from '../src/images/tarot.png'
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
  <Tile
  title="Swamp Yankee Rods"
  link="/swampyankee"
  img={rods}/>
  <Tile
  title="virtual tarot cards"
  link="/tarot"
  img={tarot}
  />
            </Project>
        </>
    )
}


export default Projects; 