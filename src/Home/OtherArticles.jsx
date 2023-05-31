import { useEffect, useState } from "react";
import '../css/otherArticles.css'

function OtherArticles({ articles }) {
  const [otherArticles, setOtherArticles] = useState([]);

  useEffect(() => {
    if (articles.length !== 0) {
      const headliner = articles.reduce((prev, current) =>
        prev.comment_count > current.comment_count ? prev : current
      );
      const filteredByCheifEditor = articles.filter((artticle) => {
        return artticle.author === "grumpy19";
      });
      const EditorsPick = filteredByCheifEditor.reduce((prev, current) =>
        prev.comment_count > current.comment_count ? prev : current
      );
        const topStoriesarray = articles.filter((article) => {
          return article.comment_count > 6 && article.comment_count < 9;
        });

          const otherArticlesArray = articles.filter(
            (article) =>
              article !== headliner &&
              article !== EditorsPick &&
              !topStoriesarray.includes(article)
          );
        
    setOtherArticles(otherArticlesArray);
    }
  }, [articles]);
    
    

    return (
        <section>
            <h2>Other Articles</h2>
    <div id="other-articles">
      {otherArticles.map((otherArticle) => {
        return (
          <section id="other-article">
            <img
              className="other-article"
              id={otherArticle.article_id}
              src={otherArticle.article_img_url}
              alt={otherArticle.title}
            />
            <ul>
              <li classname="other-article" id="otherArticle-title">
                {otherArticle.title}
              </li>
              <li classname="other-article" id="otherArticle-topic">
                {otherArticle.topic}
              </li>
              <li classname="other-article" id="otherArticle-author">
                {otherArticle.author}
              </li>
            </ul>
              </section>
         
        );
      })}
    </div>
   </section>);
}

export default OtherArticles;
