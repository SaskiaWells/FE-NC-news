import { useState, useContext } from "react"
import { PostCommentByArticle } from "../../Utils/postUtils";
import { ArticleContext } from "../../Utils/articleContext";
import CommentMessage from "./CommentMessage";

function PostComment({ setComments }) {
    const [commentBody, setCommentBody] = useState([])
  const { articleid } = useContext(ArticleContext);
  const [buttonDisable, setButtonDisable] = useState(false)
  const [showMessage, setShowMessage] = useState(false);

    function handleInputChange(event) {
        setCommentBody(event.target.value)     
    }


  
    function handleSubmit(event) {
        
    setButtonDisable(true)
  
        event.preventDefault()
        PostCommentByArticle({ 'body': commentBody, 'author': 'cooljmessy', }, articleid).then(({ comment }) => {
        
            setComments((currComments) => {
                return[comment, ...currComments]
            })
        }).then(() => {
          setCommentBody('')
          setShowMessage(true);
        }).then(() => {
          setButtonDisable(false)
        })
    }


    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment-input">Post a comment</label>
        <input
          id="comment-input"
          type="text"
          required
          name="itemNameInput"
          onChange={handleInputChange}
          value={commentBody}
        ></input>
        <button disabled={buttonDisable}>Post</button>
        {showMessage && (
          <CommentMessage message="Your comment has been posted!" />
        )}
      </form>
    );

}

export default PostComment