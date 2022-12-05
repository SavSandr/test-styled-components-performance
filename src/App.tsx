import { useState } from 'react'
import styled from 'styled-components'
import './App.css'
// import styledDefault, { createGlobalStyle } from "styled-components";
// export const styled =
//     typeof styledDefault === "function" ? styledDefault : styledDefault.default;

function App() {

  const grayCards=(Array.from(Array(1000).keys()))
  const redCards=(Array.from(Array(500).keys()))
  const textItems=(Array.from(Array(500).keys()))
  return (
    <>
    <Title>Styled Components</Title>
    <Cards >
     {
      grayCards.map(item=>(<GrayCard key={item}>{item}</GrayCard>))
     }
     {
      redCards.map(item=>(<RedCard key={item}>{item}</RedCard>))
     }
     {
      textItems.map(item=>(<TextCard key={item}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egestas lorem metus, sit amet scelerisque eros suscipit nec.</TextCard>))
     }
    </Cards>
    </>
  )
}
const Title=styled.h1`
  font-size:28px;
`
const GrayCard=styled.div`
  background-color:#5b5b5b ;
  width:300px;
  margin:1rem;
  height:100px;
  color:#f8f8f8;
  display:flex ;
  justify-content:center ;
  align-items:center ;
`
const RedCard=styled.div`
   background-color:#ff5555 ;
    width:300px;
    margin:1rem;
    height:300px;
    color:#000;
    display:flex ;
    justify-content:center;
    align-items:center;
    border: 1px solid #fff;
`
const TextCard=styled.div`
  background-color:#5b5b5b ;
  width:300px;
  margin:1rem;
  height:100px;
  color:#f8f8f8;
  display:flex;
  justify-content:center;
  align-items:center;
`
const Cards=styled.div`
  display:flex;
  flex-wrap:wrap ;
  justify-content:center ;

`
export default App
