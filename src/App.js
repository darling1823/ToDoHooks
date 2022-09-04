import React from 'react';
import Header from './Components/Header/Header.js'
import Main from './Components/Main/Main.js'
import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
`

const App = () => {
  return(
    <>
    <GlobalStyle/>
    <Header/>
    <Main/>
    </>
  )
}

export default App;