import * as React from 'react'
import styled from 'styled-components'
import kayotime from '../src/images/kayotime.png'
import Tile from './tile'
import rods from '../src/images/rods.png'
import tarot from '../src/images/tarot.png'
import lowrent from '../src/images/lowrent.png'
import clouds from '../src/images/clouds.gif'
const Project =styled.div`
display: grid;
grid-template-columns: 33% 33% 33%;
margin: 1rem;
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
  <Tile
  title="Low-Rent"
  link="/lowrent"
  img={lowrent}
  />
  <Tile
  title="Parallax Scroll"
  link="/scroll"
  img={clouds}
  />
            </Project>
        </>
    )
}


export default Projects; 