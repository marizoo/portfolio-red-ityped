import React from 'react'
import styled from 'styled-components'
import {mobile} from '../globalStyle'

const TestimonialSt = styled.div`
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
${mobile({ justifyContent : "space-around" })}
`

const Title = styled.h1`
font-size: 50px;
${mobile({ fontSize: "20px" })}
`

const Container = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
${mobile({ 
    flexDirection: "column",
    height: "100%"
 })}
`

const Card = styled.div`
width: 250px;
      height: 70%;
      border-radius: 10px;
      box-shadow: 0px 0px 15px -8px black;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 20px;
      transition: all 1s ease;
        ${mobile({ 
            height: "180px",
            margin: "10px 0"
        })}
    &:hover {
        transform: scale(1.1);
    }

 &.featured {
     width: 300px;
     height: 75%;
     margin: 0 30px;
    ${mobile({
        width: "250px",
        height: "180px",
        margin: "1px"
    })}
 }
`

const Top = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const LeftIcon = styled.img`
height: 25px;

`

const UserImg = styled.img`
height: 60px;
width: 60px;
border-radius: 50%;
object-fit: cover;
margin: 0 30px;
${mobile({
    width: "30px",
    height: "30px"
})}
`

const RightIcon = styled.img`
height: 25px;

`

const Center = styled.div`
padding: 10px;
border-radius: 10px;
background-color: rgb(250, 244, 245);
text-align: center;
${mobile({
    fontSize : "12px",
    padding: "5px"
})}
`

const Bottom = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
`

const PersonName = styled.h3`
margin-bottom: 5px;
${mobile({ fontSize: "14px" })}
`

const PersonTitle = styled.h4`
color: rgb(121, 115, 115);
${mobile({ fontSize: "13px" })}
`

const Testimonials = () => {

    const data = [
        {
          id: 1,
          name: "Tom Durden",
          title: "Senior Developer",
          img:
            "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "assets/twitter.png",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
        },
        {
          id: 2,
          name: "Alex Kalinski",
          title: "Co-Founder of DELKA",
          img:
            "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "assets/youtube.png",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
          featured: true,
        },
        {
          id: 3,
          name: "Martin Harold",
          title: "CEO of ALBI",
          img:
            "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "assets/linkedin.png",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
      ];

    return (
        <TestimonialSt id="testimonials">
            <Title>Testimonials</Title>
            <Container>
                {data.map( (d) => (
                    <Card className={d.featured && "featured"}>
                        <Top>
                            <LeftIcon src="./assets/right-arrow.png" alt="right arrow icon"/>
                            <UserImg src={d.img} alt="user image"/>
                            <RightIcon src={d.icon} alt="icons" />
                        </Top>
                        <Center>
                            {d.desc}
                        </Center>
                        <Bottom>
                            <PersonName>{d.name}</PersonName>
                            <PersonTitle>{d.title}</PersonTitle>
                        </Bottom>
                    </Card>
                ) )}
            </Container>      
        </TestimonialSt>
    )
}

export default Testimonials
