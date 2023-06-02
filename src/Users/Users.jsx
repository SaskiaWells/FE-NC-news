import { useEffect, useState, useContext} from "react"
import { fetchArticles } from "../../Utils/fetchUtils"
import { UserContext } from "../../Utils/userContext"
import { useNavigate } from "react-router-dom";
import '../css/Login.css'

function Users() {
    const {setUser, user} = useContext(UserContext)
    const [users, setUsers] = useState([])
    const [choice, setChoice] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        fetchArticles().then(({ articles }) => {
          const authors = articles
            .map((article) => article.author) 
                .filter((author, index, array) => array.indexOf(author) === index);
          setUsers(authors)
        })
    })

    function handleClick(event) {
        const yes = window.confirm(`Are you sure you would like to login as ${event.target.id}?`)

        setChoice(yes)

        if (yes) {
            setUser(event.target.id)
            navigate('/')
            window.alert(`Logged in as ${event.target.id}`)
        } else {
            window.alert(`Please choose a user to login`);
        }
    }


    
    return (
      <section>
            <h2 id='user-page-title'>User page</h2>
            <h3 id='instructions'>Click a user to login</h3>
            <section id='users'>
                {users.map((user) => {
                    return (
                        <ul >
                            <img id='user-img'
                                src="https://img.freepik.com/premium-vector/empty-face-icon-avatar-with-black-hair-vector-illustration_601298-13402.jpg?w=2000"
                                alt={user}
                            />
                            <button id={user} onClick={handleClick} className='user-button'>{user}</button>
                        </ul>
                    )
                })}
        </section>
      </section>
    );
}

export default Users