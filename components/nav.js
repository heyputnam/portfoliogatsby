import * as React from 'react'
import styled from 'styled-components'

const Header = styled.div`
background: lightgreen;
width: 100%;
height: 2rem;
position: fixed;
top: 0;
left: 0;
padding-top: 1rem;


`
 const Nav = styled.div`
margin-top: 0.5rem;
 top: 0;
right: 0;
position: absolute;
display: flex;

.regular{
    display: flex;
}
.mobile{
    display: none;
}
li:not(:last-child){
  margin-right: 2rem;
}

li{
   
  list-style: none;

}
li:hover{

    transform: scale(1.3);
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
    }
    .menu{
   
        background: lightgreen;
        width: 9rem;
        li a{
            display: none;
           
        }
    }
    .menu:hover{
        li a{
            display: flex;
            flex-direction: column;
        
            margin-top: 2rem;

            &:hover{
                transform: scale(1.2);
                transition: all 200ms ease-in-out;
                margin-left: 2.5rem;
            }
        }

       
    }

   
}

 `
const NavBar = () => {
    return(
        <>
      <Header>
          <Nav>
              <div className="regular">
             <li><a href="/#about">about</a></li> 
          <li><a href="/#contact">contact</a></li>
          <li><a href="/#projects">projects</a></li>
          </div>
         <div className="mobile">
             <div className="menu">
                 <p>:</p>
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