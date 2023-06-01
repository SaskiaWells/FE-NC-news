import { useState, useContext } from "react"
import { PostCommentByArticle } from "../../Utils/postUtils";
import { ArticleContext } from "../../Utils/articleContext";

function PostComment({ setComments }) {
    const [commentBody, setCommentBody] = useState([])
      const { articleid } = useContext(ArticleContext);
  

    function handleInputChange(event) {
        setCommentBody(event.target.value)     
    }

    function handleSubmit(event) {
        
        event.preventDefault()
        PostCommentByArticle({ 'body': commentBody, 'author': 'cooljmessy', }, articleid).then((newComment) => {
            setComments((currComments) => {
                return[newComment, ...currComments]
            })
        }).then(() => {
            setCommentBody('')
        })
    }


    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment-input"></label>
        <input
          id="comment-input"
          type="text"
          required
          name="itemNameInput"
          onChange={handleInputChange}
          value={commentBody}
        ></input>
        <button>Post</button>
      </form>
    );

}

export default PostComment