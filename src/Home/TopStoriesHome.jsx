import { useEffect, useState } from "react"
import '../css/topStories.css'

function TopStoriesHome({articles}) {

    const [topStories, setTopStories] = useState([])

    useEffect(() => {
        const topStoriesarray = articles.filter((article) => {
            return article.comment_count > 6 && article.comment_count < 9
        })
        setTopStories(topStoriesarray)
    }, [articles])

  return (
      <section>
      <h3>Top Stories</h3>
      <div id="top-stories">
        {topStories.map((topstory) => {
          return (
            <article id="top-story">
              <img
                className="top-story"
                id='top-story-imgs'
                src={topstory.article_img_url}
                alt={topstory.title}
                  />
                  <ul>
              <li classname="top-story" id="topstory-title">
                {topstory.title}
              </li>
              <li classname="top-story" id="topstory-topic">
                {topstory.topic}
              </li>
              <li classname="top-story" id="topstory-author">
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

export default TopStoriesHome