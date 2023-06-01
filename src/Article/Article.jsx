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
        <h2 id='article-title '>{article.title}</h2>
        <h3 id='article-author'>By {article.author}</h3>
        <img src={article.article_img_url} alt={article.title} id='article-img' />
        <p id='article-body'>{article.body}</p>
        <Votes/>
        <Comments articleid={articleid}/>
    </section>);
}

export default Article;
