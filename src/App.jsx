import { useState } from "react";
import "./css/App.css";
import Header from "./Header_and_Nav/Home/Header";
import Nav from "./Header_and_Nav/Home/Nav";
import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import Topic from "./topic/Topic";
import Article from "./Article/Article";
import { ArticleContext } from "../Utils/articleContext";

function App() {
  const [topic, setTopic] = useState({});
  const [articleid, setArticleID] = useState({});

  return (
    <>
      <ArticleContext.Provider value={{ articleid, setArticleID }}>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/topics/${topic}`} element={<Topic />} />
          <Route path="/articles/:article_id" element={<Article />} />
        </Routes>
      </ArticleContext.Provider>
    </>
  );
}

export default App;
