import React from 'react'
import { Routes, Route } from "react-router-dom";
import Error from './components/Error';
import Home from './components/Home';
import Singlemovies from "./components/Singlemovies"
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='movie/:id' element={<Singlemovies/>}/>
        <Route path='*' element={<Error/>} />
      </Routes>
    </>
  )
}


export default App
