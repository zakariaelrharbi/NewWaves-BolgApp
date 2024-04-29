import React from 'react'
import Header from './Components/Header'
import HomePage from './pages/Home/HomePage'
import ArticleDetailPage from './pages/articleDetail/ArticleDetailPage'
import { Routes, Route } from 'react-router-dom'
import Register from './pages/Register/Register'
import TermsAndConditions from './pages/Register/Terms_and_conditions'
import Login from './pages/Login/UserLogin'
const App = () => {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path="/" element={<HomePage/>}/>
        <Route path="/blog/:id" element={<ArticleDetailPage/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/terms-and-conditions" element={<TermsAndConditions/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
