import React, { useState } from 'react'

import './App.css';

import { MainHeader } from './components/MainHeader'
import { Search } from './components/Search'
import { PokeContainer } from './components/PokeContainer'
import { MainFooter } from './components/MainFooter'



function App() {
  const [inputText, setInputText] = useState('')
  const [generation, setGeneration] = useState(null)

  return (
    <>
      <MainHeader></MainHeader>
      <Search
        value={inputText}
        onSearch={e => {
          setInputText(e.target.value)
        }}
        onSelect={e => {
          setGeneration(e.target.value)
        }}
      ></Search>
      <PokeContainer inputText={inputText} generation={generation}></PokeContainer>
      <MainFooter></MainFooter>
    </>
  );
}

export default App;
