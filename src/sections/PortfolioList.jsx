import React from 'react'
import styled from 'styled-components'
import { mobile,mainColor } from '../globalStyle'

const Li = styled.li`
font-size: 14px;
margin-right: 50px;
padding: 7px;
border-radius: 10px;
cursor: pointer;
${mobile({ marginRight: "20px" })}

&.active {
    background-color: ${mainColor};
    color: white;
}
`

const PortfolioList = ({id, title, active, setSelected }) => {
    return (
        <Li 
        // className={active ? "porfolioList active" : "portfolioList"}
        className={active && "active"}
        onClick={() => setSelected(id)}
        >
            {title}
        </Li>
    )
}

export default PortfolioList
