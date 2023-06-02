import { useState, useEffect } from "react";
import "../css/Headliner.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ArticleContext } from "../../Utils/articleContext";

function HeadlinerHome({ articles }) {
  const [headliner, setHeadliner] = useState({});
  const navigate = useNavigate();
  const { setArticleID } = useContext(ArticleContext);

  useEffect(() => {
    if (articles.length !== 0) {
      const headliner = articles.reduce((prev, current) =>
        prev.comment_count > current.comment_count ? prev : current
      );

      setHeadliner(headliner);
    }
  }, [articles]);

  function handleClick(event) {
    event.preventDefault();
    setArticleID(event.currentTarget.getAttribute("name"));
    navigate(`/articles/${event.currentTarget.getAttribute("name")}`);
  }

  return (
    <section>
      <h2 id='headliner-header'>Headliner</h2>
      <article id="headliner" name={headliner.article_id} onClick={handleClick}>
        <img
          id="headliner-img"
          src={headliner.article_img_url}
          alt={headliner.title}
        />
        <ul>
          
          <li id="headliner-title">{headliner.title}</li>
          <li id="hedliner-topic">{headliner.topic}</li>
          <li id="headliner-author">{headliner.author}</li>
        </ul>
      </article>
    </section>
  );
}

export default HeadlinerHome;
