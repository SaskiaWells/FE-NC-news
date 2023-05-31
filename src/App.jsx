import { useState } from 'react'
import './css/App.css'
import Header from './Header_and_Nav/Home/Header'
import Nav from './Header_and_Nav/Home/Nav'
import Home from './Home/Home'
import { Route, Routes } from 'react-router-dom'
import Topic from './topic/Topic'
import Article from './Article/Article'

function App() {
  const [topic, setTopic] = useState({})

  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path={`/${topic}`} element={<Topic />} />
        <Route path='/:article_id' element={<Article/>} />
      </Routes>
    </>
  )
}

export default App
