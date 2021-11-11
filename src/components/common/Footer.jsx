import React from "react";
import styled from "styled-components";

const StyledPageFooter = styled.div`
  width: 100%;
  height: 60px;
  background: #65895F;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: #FFFFFF;
`

const Footer = () => {
  return (
    <StyledPageFooter>
      #The F2E 3rd Week01 #Breakfast #Eva
    </StyledPageFooter>
  )
}

export default Footer