import { useEffect, useState } from "react"
import HeadlinerHome from "./HeadlinerHome"
import TopStoriesHome from "./TopStoriesHome"
import EditorsPickHome from "./EditorsPickHome"
import OtherArticles from "./OtherArticles"
import { fetchArticles } from "../../Utils/fetchUtils"


function Home() {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchArticles().then(({ articles }) => {
            setArticles(articles)
            setIsLoading(false)
        }  
        )
    }, [])

    if (isLoading){
        return (<p>Loading!</p>)
    }

    return (
        <>
            <div className="container">
        <HeadlinerHome
        
          id="headliner"
          articles={articles}
        />
        <TopStoriesHome
          
                    
          id="top-stories"
          articles={articles}
                />
            </div>
        <EditorsPickHome  articles={articles} />
        <OtherArticles id="other-articles" articles={articles} />
      </>
    );
}

export default Home