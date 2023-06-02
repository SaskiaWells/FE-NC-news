import { useEffect, useState } from "react";
import "../css/topStories.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ArticleContext } from "../../Utils/articleContext";

function TopStoriesHome({ articles }) {
  const [topStories, setTopStories] = useState([]);
  const navigate = useNavigate();
  const { setArticleID } = useContext(ArticleContext);

  useEffect(() => {
 const filteredByCheifEditor = articles.filter((artticle) => {
   return artticle.author === "grumpy19";
 });
 const EditorsPick = filteredByCheifEditor.reduce((prev, current) =>
   prev.comment_count > current.comment_count ? prev : current
 );
    const headliner = articles.reduce((prev, current) =>
      prev.comment_count > current.comment_count ? prev : current
    );

    const topStoriesarray = articles.filter((article) => {
      return (
        article.comment_count > 11 &&
        article.article_id !== headliner.article_id &&
        article.article_id !== EditorsPick.article_id
      );
    });
    setTopStories(topStoriesarray);
  }, [articles]);

  function handleClick(event) {
    event.preventDefault();
   setArticleID(event.currentTarget.getAttribute("name"));
    navigate(`/articles/${event.currentTarget.getAttribute("name")}`);
  }

  return (
    <section>
      <h3>Top Stories</h3>
      <div id="top-stories">
        {topStories.map((topstory) => {
          return (
            <article
              key={topstory.article_id}
              id="top-story"
              name={topstory.article_id}
              onClick={handleClick}
            >
              <img
                className="top-story"
                id='top-story-imgs'
                src={topstory.article_img_url}
                alt={topstory.title}
              />
              <ul>
                <li className="top-story" id="topstory-title">
                  {topstory.title}
                </li>
                <li className="top-story" id="topstory-topic">
                  {topstory.topic}
                </li>
                <li className="top-story" id="topstory-author">
                  {topstory.author}
                </li>
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default TopStoriesHome;
