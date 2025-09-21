import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/layout";
import Home from "./pages/Home/home";
import AboutUs from "./pages/AboutUs/AboutUs"
import Lost from "./pages/Lost/Lost";
function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout><Home/></Layout>}/>
        <Route path='/AboutUs' element={<Layout><AboutUs/></Layout>}/>
        <Route path='/Lost' element={<Layout><Lost/></Layout>}/>
      </Routes>
    </>
  )
}

export default App
