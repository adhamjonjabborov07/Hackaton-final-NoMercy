import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/layout";
import Home from "./pages/Home/home";
import Secondpage from "./pages/2pg/spg";
import Thirdpage from "./pages/3pg/3pg";
function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout><Home/></Layout>}/>
        <Route path='/Secondpage' element={<Layout><Secondpage/></Layout>}/>
        <Route path='/Thirdpage' element={<Layout><Thirdpage/></Layout>}/>
      </Routes>
    </>
  )
}

export default App
