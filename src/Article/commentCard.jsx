import { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

function CommentCard({ comment }) {
     const [votes, setVotes] = useState(comment.votes)
    
    function handleUpClick() {
        setVotes((currVotes) => {
            return currVotes+1
        }
        )
     }

     function handleDownClick() {
         setVotes((currVotes) => {
           return currVotes - 1;
         });
     }

    return (
      <ul>
        <p>{comment.body}</p>
        <li>{comment.author}</li>
        <li>
          {`Votes: ${votes}`}
          <button onClick={handleUpClick}>
            <FaThumbsUp />
          </button>
          <button onClick={handleDownClick}>
            <FaThumbsDown />
          </button>
        </li>
      </ul>
    );
}

export default CommentCard