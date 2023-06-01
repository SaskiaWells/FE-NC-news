import { useEffect } from "react";
import { fetchCommentsById } from "../../Utils/fetchUtils";
import { useState } from "react";
import CommentCard from "./commentCard";

function Comments({articleid}) {
  const [Comments, setComments] = useState([])
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetchCommentsById(articleid).then(({ comments }) => {
      setComments(comments)
    })
  }, [])

  const visibleComments = showAll ? Comments : Comments.slice(0, 5);
  const handleShowAllClick = () => {
    setShowAll(true);
  };

  const handleShowLessClick = () => {
    setShowAll(false)
  }

  return (
    <>
      <h3>Comments</h3>
      <ul>
        {visibleComments.map((comment) => {
          return <CommentCard comment={comment} />;
        })}
      </ul>
      {!showAll && (
        <button onClick={handleShowAllClick}>View more comments</button>
      )}
      {showAll && (
        <button onClick={handleShowLessClick}>View less comments</button>
      )}
    </>
  );
}

export default Comments;
