import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SearchIcon } from '@chakra-ui/icons'
import Select from 'react-select';
import {
  Box,
  Input,
  Button,
  Image
} from "@chakra-ui/react"

import Container from '../components/common/Container';
import {getScenicPic} from '../utils';

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
  .title-description {
    margin-right: 76px
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
    height: 168px;
    width: 352px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
  .search-block-btn {
    height: 52px;
    width: 352px;
    font-family: Noto Sans TC;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 28px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
  }

  .scenicSpot_block {
    height: 400px;
    width: 100%;
    padding-top: 56px;
  }
  .scenicSpot_block_img {
    height: 400px;
    width: 100%;
    position: relative; 
  }
  .scenicSpot_block span {
    position: absolute; 
    top:72%;
    left:50%;
    transform: translate(-64%, -74%); 
    z-index:1000;
    font-family: Noto Sans TC;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 41px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
  }

`

const HomePage = () => {
  const [option, setOption] = useState({ value: "option1", label: "探索景點" })
  const [scenicPic, setScenicPic] = useState([])
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
      height: 52,
      '&:hover': { borderColor: 'gray' }, // border style on hover
      border: '1px solid lightgray',
      boxShadow: 'none',
    }),
  }

  useEffect(() => {
    getScenicPic()
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }, []);
  return (
    <StyledHomePage>
      <Container className="container">
        <div className="title_block">
          <div className="title-description">
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
            <Input className="search-block-input" variant="outline" bgColor='#F9F9F9'  focusBorderColor="none" placeholder="你想去哪裡？請輸入關鍵字" />
            <Button leftIcon={<SearchIcon color='white' />} className="search-block-btn" bg="#7F977B" _hover={{ bg: "#65895F" }} _focus={{ bg: "#7F977B" }} variant="solid">
              搜尋
            </Button>
          </Box>
        </div>
        <div className='scenicSpot_block'>
          <Image className='scenicSpot_block_img' src='https://thumbor.thedailymeal.com/aB_uTimKh7q88umKip8MrevI6TU=/870x565/filters:format(webp)/https://www.thedailymeal.com/sites/default/files/slideshows/1895814/2247743/00.jpg' alt='Scenic Spot' />
          <span>景點</span>
        </div>
      </Container>
    </StyledHomePage>
  )
}

export default HomePage;