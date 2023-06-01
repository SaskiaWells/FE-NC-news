function CommentCard({ comment }) {
    

    return (
        <ul>
            <p>{comment.body}</p>
            <li>{comment.author}</li>
            <li>{`Votes: ${comment.votes}`}</li>
      </ul>  
    )
}

export default CommentCard