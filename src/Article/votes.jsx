import { useState } from "react"
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { patchArticle } from "../../Utils/patchArticles";

function Votes({ setArticle, article }) {


    function handleUpClick() {
        setArticle((currArticle) => {
          return {...currArticle, votes:currArticle.votes + 1}
        })
        
        patchArticle(article.article_id, { inc_votes: 1 });
    }

    function handleDownClick() {
    setArticle((currArticle) => {
    return { ...currArticle, votes: currArticle.votes - 1 };
    });

    patchArticle(article.article_id, { inc_votes: 1 });
    }

    return (<section id='article-votes'>
        <p>Do you like this article?</p>
        <button onClick={handleUpClick}>
      <FaThumbsUp /></button>
        <button onClick={handleDownClick}><FaThumbsDown /></button>
        <p>Votes: {article.votes}</p>
    </section>)
}

export default Votes