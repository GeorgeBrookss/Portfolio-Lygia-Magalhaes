import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyle from './GlobalStyles'
import Main from './Pages/Main/Main'

import Projeto1 from './Pages/p1/Projeto1'
import Projeto2 from './Pages/p2/Projeto2'
import Projeto3 from './Pages/p3/Projeto3'
function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/bora-juntas" element={<Projeto1 />} />
          <Route path="/nendostore" element={<Projeto2 />} />
          <Route path="/serenity" element={<Projeto3 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
