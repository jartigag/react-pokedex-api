import React, { useState } from 'react'

import './App.css';

import { MainHeader } from './components/MainHeader'
import { Search } from './components/Search'
import { PokeContainer } from './components/PokeContainer'
import { MainFooter } from './components/MainFooter'



function App() {
  const [inputText, setInputText] = useState('')

  return (
    <>
      <MainHeader></MainHeader>
      <Search
        value={inputText}
        onSearch={e => {
          setInputText(e.target.value)
        }}
      ></Search>
      <PokeContainer inputText={inputText}></PokeContainer>
      <MainFooter></MainFooter>
    </>  
  );
}

export default App;
