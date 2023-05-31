import { useContext, useEffect, useState } from "react";
import { ArticleContext } from "../../Utils/articleContext";
import { fetchArticleById } from "../../Utils/fetchUtils";
import Votes from "./votes";
import Comments from "./Comments";

function Article() {
      const { articleid } = useContext(ArticleContext);
    const [article, setArticle] = useState({}) 
    const [isLoading, setIsLoading] = useState(true)
    
    
    useEffect(() => {
        fetchArticleById(articleid).then(({ article }) => {
            setArticle(article)
            setIsLoading(false)
})
    }, [])
    
    if (isLoading) {
        return(<p>Loading</p>)
    }


    return (<section>
        <h2>{article.title}</h2>
        <h3>By {article.author}</h3>
        <img src={article.article_img_url} alt={article.title} />
        <p>{article.body}</p>
        <Votes/>
        <Comments/>
    </section>);
}

export default Article;
