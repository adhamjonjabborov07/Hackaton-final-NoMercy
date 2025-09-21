import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/layout";
import Home from "./pages/Home/home";
import AboutUs from "./pages/AboutUs/AboutUs"
import Lost from "./pages/Lost/Lost"
import ReportF from "./pages/ReportF/ReportF";
import ReportL from "./pages/ReportL/ReportL";
import Found from "./pages/Found/Found";
function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout><Home/></Layout>}/>
        <Route path='/AboutUs' element={<Layout><AboutUs/></Layout>}/>
        <Route path='/Lost' element={<Layout><Lost/></Layout>}/>
        <Route path='/ReportF' element={<Layout><ReportF/></Layout>}/>
        <Route path='/ReportL' element={<Layout><ReportL/></Layout>}/>
        <Route path='/Found' element={<Layout><Found/></Layout>}/>
      </Routes>
    </>
  )
}

export default App
