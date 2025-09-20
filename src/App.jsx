import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import Layout from './pages/layout/Layout'
import Home from './pages/home/Home'
import Detail from './pages/detail/Detail'

const App = () => {
  return (
    <BrowserRouter>
      {/* <Header/> */}
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index={true} element={<Home/>}/>
          <Route path='/products/:id' element={<Detail/>}/>
          <Route path='*' element={<h1>something went wrong :(</h1>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
