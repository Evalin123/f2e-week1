import React from "react";
import styled from "styled-components";
import {
  Image,
  Button
} from "@chakra-ui/react"

import Logo from '../images/logo-desktop.svg'

const StyledPageHeader = styled.div`
  border: 1px solid rgb(229, 229, 229);
  width: 100%;
  height: 80px;
  padding: 0px 48px 0px 48px;
  background: #FFFFFF;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .btn-group {
    height: 28px;
    display: flex;
    flex-direction: row;
  }

  .btn-group-item {
    margin-left: 20px;
    font-family: Noto Sans TC;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    text-align: right;
    letter-spacing: 0.03em;
    color: #646464;
  }
`

const Header = () => {
  return (
    <StyledPageHeader>
      <Image src={Logo} alt="Logo desktop" />
      <div className='btn-group'>
        <Button className='btn-group-item' variant="unstyled" _focus={{ color: "#7F977B", borderBottom: "2px", borderBottomRadius: "0", borderColor: "#E0DA48" }}>
          探索景點
        </Button>
        <Button className='btn-group-item' variant="unstyled" _focus={{ color: "#7F977B", borderBottom: "2px", borderBottomRadius: "0", borderColor: "#E0DA48" }}>
          節慶活動
        </Button>
        <Button className='btn-group-item' variant="unstyled" _focus={{ color: "#7F977B", borderBottom: "2px", borderBottomRadius: "0", borderColor: "#E0DA48" }}>
          品嚐美食
        </Button>
      </div>
    </StyledPageHeader>
  )
}

export default Header