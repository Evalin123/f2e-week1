import React, { useState } from "react";
import styled from "styled-components";
import Select from 'react-select';
import {
  Box,
  Input
} from "@chakra-ui/react"

import Container from '../components/common/Container';

const StyledHomePage = styled.div`
  height: 100vh;
  width: 100%;
  top: 80px;

  .container {
    padding-top: 84px;
  }

  .title_block {
    display: flex;
    flex-direction: row;
  }
  .title_block h1 {
    font-family: Noto Sans TC;
    font-style: normal;
    font-weight: 320;
    font-size: 48px;
    line-height: 70px;
    letter-spacing: 0.03em;
    color: #1E1E1E;
    mix-blend-mode: normal;
  }
  .title_block h3 {
    font-family: Noto Sans TC;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 29px;
    letter-spacing: 0.03em;
    color: #646464;
  }
  .title_block u {
    padding-bottom:2px;
    text-decoration:none;
    border-bottom:2px solid #E0DA48;
  }

  .search-block {
    height: 52px;
    width: 352px;
  }
  .search-block-select {
    height: 52px;
    width: 352px;
    font-family: Noto Sans TC;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
  }
  .search-block-input {
    height: 52px;
    width: 352px;
    font-family: Noto Sans TC;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    border-radius: 5px;
    border: 1px solid lightgray
  }
  .search-block-input:hover {
    border: 'gray'
  } 

`

const HomePage = () => {
  const [option, setOption] = useState({ value: "option1", label: "探索景點" })
  const groupedOptions = [
    { value: "option1", label: "探索景點" },
    { value: "option2", label: "節慶活動" },
    { value: "option3", label: "品嚐美食" }
  ]
  const customStyles = {
    option: (provided, { isFocused }) => ({
      ...provided,
      color: '#2F2F2F',
      backgroundColor: isFocused ? 'rgba(127,151,123,0.3)' : undefined,
      boxShadow: "none"
    }),
    singleValue: (provided) => ({ ...provided, color: '#6E7D60', }),
    control: (provided) => ({
      ...provided,
      '&:hover': { borderColor: 'gray' }, // border style on hover
      border: '1px solid lightgray',
      boxShadow: 'none',
    }),
  }
  return (
    <StyledHomePage>
      <Container className="container">
        <div className="title_block">
          <div>
            <h1>探索<u>台灣之美</u><br />讓我們更親近這片土地</h1>
            <h3>台灣旅遊景點導覽 Taiwan Travel Guide</h3>
          </div>
          <Box className="search-block">
            <Select
              isSearchable={false}
              className="search-block-select"
              options={groupedOptions}
              value={option}
              onChange={(value) => setOption(value)}
              components={{
                IndicatorSeparator: () => null
              }}
              styles={customStyles}
            >
            </Select>
            <Input className="search-block-input" variant="unstyled" bgColor='#F9F9F9' color='#9E9E9E' placeholder="你想去哪裡？請輸入關鍵字" />
          </Box>
        </div>
      </Container>
    </StyledHomePage>
  )
}

export default HomePage;