import { useState, useEffect } from "react"
import '../css/Headliner.css'


function HeadlinerHome({ articles }) {
    const [headliner, setHeadliner] = useState({})



 useEffect(() => {
   if (articles.length !== 0){
     const headliner = articles.reduce((prev, current) =>
      prev.comment_count > current.comment_count ? prev : current
            );   
            
            setHeadliner(headliner)
        };
 }, [articles]);

    
    return (
        <>
            <section id='headliner' >
            <img id='headliner-img' src={headliner.article_img_url} alt={headliner.title} />
                <ul>
                    <h2>Headliner</h2>
            <li id='headliner-title'>{headliner.title}</li>
            <li id='hedliner-topic'>{headliner.topic}</li>
                <li id='headliner-author'>{headliner.author}</li>
            </ul>
            </section>
        </>
    );
}

export default HeadlinerHome