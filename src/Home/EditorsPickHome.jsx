import { useEffect, useState } from "react"
import '../css/EditorsPick.css'


function EditorsPickHome({articles}) {
    const [editorsPick, setEditorsPick] = useState({})

    useEffect(() => {
        if(articles.length !== 0){
        const filteredByCheifEditor = articles.filter(artticle => {
            return artticle.author === 'grumpy19'
        })
    const EditorsPick = filteredByCheifEditor.reduce((prev, current) =>
      prev.comment_count > current.comment_count ? prev : current
            );   
            
            setEditorsPick(EditorsPick)
        }
        }, [articles])

    
    return (
        <section id="editors-pick">
            <img
          id="editors-pick-img"
          src={editorsPick.article_img_url}
          alt={editorsPick.title}
            /> 
        <ul id="editorsPick">
          <h2>Editors pick!</h2>
        <li id="editors-pick-title">{editorsPick.title}</li>
        <li id="editors-pick-topic">{editorsPick.topic}</li>
        <li id="editors-pick-author">{editorsPick.author}</li>
      </ul>
        </section>
    );
}
export default EditorsPickHome