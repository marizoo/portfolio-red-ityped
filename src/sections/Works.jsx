import React, {useState} from 'react'
import styled from 'styled-components'
import {secondaryColor, mobile} from '../globalStyle'

const WorksSt = styled.div`
background-color: ${secondaryColor};
display: flex;
align-items: center;
justify-content: center;
position: relative;
`

const Slider = styled.div`
height: 350px;
display: flex;
position: absolute;
left: 0;
transition: all 1s ease-out;
${mobile({
    height: "100vh",
    flexDirection: "column",
    justifyContent: "center"
})}
`

const Container = styled.div`
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
`

const Item = styled.div`
width: 700px;
height: 100%;
background-color: white;
border-radius: 20px;
display: flex;
align-items: center;
justify-content: center;
${mobile({
    width: "80%",
    height:"150px",
    margin: "15px 0"
})}
`

const Left = styled.div`
flex: 4;
          height: 80%;
          display: flex;
          align-items: center;
          justify-content: center;
`

const LeftContainer = styled.div`
width: 90%;
            height: 70%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
`

const ImgContainer = styled.div`
width: 40px;
              height: 40px;
              border-radius: 50%;
              background-color: rgb(245, 179, 155);
              display: flex;
              align-items: center;
              justify-content: center;
${mobile({
    width: "20px",
    height: "20px"
})}
`

const ImgIcon = styled.img`
width: 25px;
${mobile({ width: "15px" })}
`

const Title = styled.h2`
font-size: 20px;
${mobile({ fontSize: "13px" })}
`

const Desc = styled.p`
font-size: 13px;
${mobile({ display: "none" })}
`

const LinkTitle = styled.span`
font-size: 12px;
font-weight: 600;
text-decoration: underline;
cursor: pointer;
`

const Right = styled.div`
flex: 8;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
`

const ImgRight = styled.img`
 width: 400px;
transform: rotate(-10deg);
`

const ArrowLeftImg = styled.img`
height: 50px;
position: absolute;
cursor: pointer;
left: 100px;
transform: rotateY(180deg);
${mobile({ display: "none" })}
`

const ArrowRightImg = styled.img`
height: 50px;
position: absolute;
cursor: pointer;
right: 100px;
${mobile({ display: "none" })}

`


const Works = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
        {
          id: "1",
          icon: "./assets/mobile.png",
          title: "Web Design",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          img:
            "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        },
        {
          id: "2",
          icon: "./assets/globe.png",
          title: "Mobile Application",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img:
            "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
        },
        {
          id: "3",
          icon: "./assets/writing.png",
          title: "Branding",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img:
            "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
        },
      ];

    const handleClick = (way) => {
        way === "left"
        ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : 2)
        : setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0);
    }

    return (
        <WorksSt id="works">
            <Slider
            style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
                {data.map( (d) => (
                    <Container>
                        <Item>
                            <Left>
                                <LeftContainer>
                                    <ImgContainer>
                                        <ImgIcon src={d.icon} alt={`icon of ${d.title}`} />
                                    </ImgContainer>
                                    <Title>{d.title}</Title>
                                    <Desc>{d.desc}</Desc>
                                    <LinkTitle>Projects</LinkTitle>
                                </LeftContainer>
                            </Left>

                            <Right>
                                <ImgRight  
                                src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                                alt="website example image"
                                />
                            </Right>
                        </Item>
                    </Container>
                ))}
            </Slider>
            <ArrowLeftImg src="./assets/arrow.png" alt="" onClick={() => handleClick("left")}/>
            <ArrowRightImg src="./assets/arrow.png" alt="" onClick={() => handleClick()}/>
        </WorksSt> 
    )
}

export default Works
