
import { useState } from "react"
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { patchArticle } from "../../Utils/patchArticles";
import VoteMessage from "./VoteMessage";

function Votes({ setArticle, article }) {
  const [hasVoted, setHasVoted] = useState(0)  
  const [showMessage, setShowMessage] = useState(false)
  const [vote, setvote] = useState('')
  
  

  function handleUpClick() {
    if (hasVoted === 0 || hasVoted === -1) {
      setShowMessage(false)
      setArticle((currArticle) => {
          return {...currArticle, votes:currArticle.votes + 1}
        })
      setHasVoted((currNum) => {
          return currNum +1
        } )
      patchArticle(article.article_id, { inc_votes: 1 });
    } else {
      setvote('up')
      setShowMessage(true)
    }
        
    }

  function handleDownClick() {
    if (hasVoted === 0 || hasVoted === 1) {
      setShowMessage(false)
      setArticle((currArticle) => {
        return { ...currArticle, votes: currArticle.votes - 1 };
      });
      setHasVoted((currNum) => {
        return currNum -1;
      });
      patchArticle(article.article_id, { inc_votes: -1 });
    } else {
       setvote("down");
    setShowMessage(true);
    }

  }

  return (<section id='article-votes'>
    <p>Do you like this article?</p>
    {showMessage && (
      <VoteMessage message={`you have reached the maximum number of ${vote} votes for this article`}/>
      )}
        <button id='vote-button'onClick={handleUpClick}>
      <FaThumbsUp /></button>
      <button onClick={handleDownClick} id='vote-button'><FaThumbsDown /></button>
        <p>Votes: {article.votes}</p>
    </section>)

}

export default Votes