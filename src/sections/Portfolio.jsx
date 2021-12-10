import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {mobile, mainColor} from '../globalStyle'
import PortfolioList from './PortfolioList'
import { featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio } from '../data'

const PortfolioSt = styled.div`
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
`

const PageTitle = styled.h1`
font-size: 50px;
${mobile({ fontSize: "20px" })}
`

const Ul = styled.ul`
margin: 10px;
padding: 0;
list-style: none;
display: flex;

${mobile({ 
    margin: "10px 0",
    flexWrap: "wrap",
    justifyContent: "center"
 })}
`

const Container = styled.div`
width: 70%;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
${mobile({ width: "100%" })}
`

const Item = styled.div`
 width: 220px;
      height: 150px;
      border-radius: 20px;
      border: 1px solid rgb(240, 239, 239);
      margin: 10px 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      position: relative;
      transition: all .5s ease;
      cursor: pointer;
${mobile({ 
    width: "130px",
    height: "100px"
 })}

 &:hover {
     background-color: ${mainColor};
     ItemImg {
         opacity: 0.2;
         z-index: 0;
     }
 }
`

const ItemImg = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
z-index: 1;
`

const ItemTitle = styled.h3`
position: absolute;
font-size: 20px;
`

const Portfolio = () => {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);

    const list = [
        {
          id: "featured",
          title: "Featured",
        },
        {
          id: "web",
          title: "Web App",
        },
        {
          id: "mobile",
          title: "Mobile App",
        },
        {
          id: "design",
          title: "Design",
        },
        {
          id: "content",
          title: "Content",
        },
      ];

      useEffect( () => {
        switch (selected) {
            case "featured" :
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;   
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            case "content" :
                setData(contentPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }
      }, [selected]);

    return (
        <PortfolioSt id="portfolio">
            <PageTitle>Portfolio</PageTitle>
            <Ul>
                {list.map( (item) => (
                    <PortfolioList 
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </Ul>
            <Container>
                {data.map( (d) => (
                    <Item>
                        <ItemImg 
                            src={d.img}
                            alt={`${d.title} image`}
                        />
                        <ItemTitle>{d.title}</ItemTitle>
                    </Item>
                ))}
            </Container>
        </PortfolioSt>
    )
}

export default Portfolio
