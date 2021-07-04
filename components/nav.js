import * as React from 'react'
import styled from 'styled-components'
import {AnchorLink } from 
'gatsby-plugin-anchor-links'
import menu from '../src/images/menu.png'
const Header = styled.div`
background: #F6DFEE;
width: 100%;
height: 2.5rem;
position: fixed;
top: 0;
left: 0;
padding-top: 1rem;
z-index: 1;

`
 const Nav = styled.div`
margin-top: 0.5rem;
 top: 0;
right: 0;
position: absolute;
display: flex;
z-index: 1;

.regular{
    display: flex;
}
.mobile{
    display: none;
}

li{
    
   margin-right: 2rem;
  list-style: none;

}

a{
    text-decoration: none;
    color: black;
}
li:hover{

    transform: scale(1.4);
    transition: scale 2s ease-in-out;
}

@media only screen and (max-width: 600px) {
    .regular{
        display: none;
    }

    .mobile{
        
        display: flex;
        position: absolute;
        top: 0;
        right: 0;

        p{
            position: fixed;
            top: 0;
            right: 0;
            margin-right: 1.5rem;
        }
        img{
            height: 25px;
            width: 25px;
            margin-top: 5px;
        }

        img:hover{
            transform: scale(1.4);
            margin-top: 0.5rem;

        }
    }
    .menu{
   
        background: lightgreen;
        width: 9rem;
        margin-top: 2rem;
        li a{
            display: none;
           
        }
    }
    .menu:hover{
        li a{
            display: flex;
            flex-direction: column;
        
            margin-top: 0.4rem;
            margin-bottom: 0.4rem;
            &:hover{
                transform: scale(1.2);
                transition: all 200ms ease-in-out;
                margin-left: 2.5rem;
            }
        }

       
    }

   
}



 `

 const Left = styled.div`
 position: absolute;
 top: 0;
 left: 0;

 z-index: 1;
 font-size: 12px;

 a{
     color: black;
 }

 h1:hover{
    transform: scale(1.1);
    margin-left: 0.7rem;
    }
 `


const NavBar = () => {
    return(
        <>
      <Header>
      <Left>
   <AnchorLink to="/#hero"><h1>Hailey Putnam.</h1></AnchorLink>
              </Left>
          <Nav>
          
              <div className="regular">
             <li><AnchorLink to="/#about">about</AnchorLink></li> 
             <li><AnchorLink to="/#resume">resume</AnchorLink></li> 
          <li><AnchorLink to="/#projects">projects</AnchorLink></li>
          <li><AnchorLink to="/#contact">contact</AnchorLink></li>
          </div>
         <div className="mobile">
             <div className="menu">
              <p><img src={menu}></img></p>
          <li><a href="/#about">about</a></li> 
          <li><a href="/#contact">contact</a></li>
          <li><a href="/#projects">projects</a></li>
          </div>
          </div>
          </Nav>
      </Header>
        </>
    )
}


export default NavBar; 