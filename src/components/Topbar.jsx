import { Mail, Person } from '@material-ui/icons'
import React from 'react'
import styled, {css} from 'styled-components'
import { mobile, mainColor } from '../globalStyle'

const Container = styled.div`
 width: 100%;
  height: 70px;
  background-color: white;
  color: ${mainColor};
  position: fixed;
  top: 0;
  z-index: 3;
  transition: all 1s ease;

&.active {
background-color: ${mainColor};
color: white;
}
`

const Wrapper = styled.div`
padding: 10px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Left = styled.div`
display: flex;
      align-items: center;
`

const Logo = styled.a`
 font-size: 40px;
        font-weight: 700;
        text-decoration: none;
        color: inherit;
        margin-right: 40px;
`

const ItemContainer = styled.div`
display: flex;
align-items: center;
margin-left: 30px;
${mobile({ display: "none" })}
`

const IconStyle = {
    fontSize: "18px",
    marginRight: "5px"
};

const ItemContainerDesc = styled.span`
font-size: 15px;
font-weight: 500;
`

const Right = styled.div``

const Hamburger = styled.div`
width: 32px;
height: 25px;
display: flex;
flex-direction: column;
justify-content: space-between;
cursor: pointer;
`

const lines = css`
width: 100%;
height: 3px;
background-color: ${mainColor};
transform-origin: left;
transition: all 2s ease;
`

const Line1 = styled.span`
${lines}

&.active{
    background-color: white;
transform: rotate(45deg);   
}

`

const Line2 = styled.span`
${lines}
&.active{
opacity: 0;  
}
`

const Line3 = styled.span`
${lines}
&.active{
background-color: white;
transform: rotate(-45deg); 

}
`

const Topbar = ({ menuOpen, setMenuOpen }) => {
    return (
        <Container className={menuOpen && "active"}>
            <Wrapper>
                <Left>
                    <Logo>Izoo.</Logo>
                    <ItemContainer>
                        <Person style={IconStyle}/>
                        <ItemContainerDesc>+1 428 794 32</ItemContainerDesc>
                    </ItemContainer>
                    <ItemContainer>
                        <Mail style={IconStyle}/>
                        <ItemContainerDesc>woof@izoo.com</ItemContainerDesc>
                    </ItemContainer>
                </Left>

                <Right>
                    <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
                        <Line1 className={menuOpen && "active"}></Line1>
                        <Line2 className={menuOpen && "active"}></Line2>
                        <Line3 className={menuOpen && "active"}></Line3>
                    </Hamburger>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Topbar
