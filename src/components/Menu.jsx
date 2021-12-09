import React from 'react'
import styled from 'styled-components'
import {mainColor} from '../globalStyle'

const Container = styled.div`
 width: 300px;
  height: 100vh;
  background-color: ${mainColor};
  position: fixed;
  top: 0;
  right: -300px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 1s ease;

  &.active {
      right: 0;
  }
`

const Ul = styled.ul`
 margin: 0;
    padding: 0;
    list-style: none;
    font-size: 30px;
    font-weight: 300;
    color: white;
    width: 60%;
`

const Li = styled.li`
margin-bottom: 25px;
`

const Aa = styled.a`
 font-size: inherit;
        color: inherit;
        text-decoration: none;

&:hover {
    font-weight: 500;
}
`

const Menu = ({menuOpen, setMenuOpen}) => {
    return (
        <Container className={menuOpen && "active"}>
            <Ul>
                <Li onClick={() => setMenuOpen(false)}>
                    <Aa href="home">Home</Aa>
                </Li>
                <Li onClick={() => setMenuOpen(false)}>
                    <Aa href="portfolio">Portfolio</Aa>
                </Li>
                <Li onClick={() => setMenuOpen(false)}>
                    <Aa href="works">Works</Aa>
                </Li>
                <Li onClick={() => setMenuOpen(false)}>
                    <Aa href="testimonials">Testimonials</Aa>
                </Li>
                <Li onClick={() => setMenuOpen(false)}>
                    <Aa href="contact">Contact</Aa>
                </Li>
            </Ul>
        </Container>
    )
}

export default Menu
