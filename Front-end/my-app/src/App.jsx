import React from 'react'
import Header from './Components/Header'
import HomePage from './pages/Home/HomePage'
import { Routes, Route } from 'react-router-dom'
import ArticleDetailPage from './pages/articleDetail/ArticleDetailPage'
const App = () => {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path="/" element={<HomePage/>}/>
        <Route path="/blog/:id" element={<ArticleDetailPage/>}/>
      </Routes>
    </div>
  )
}

export default App
