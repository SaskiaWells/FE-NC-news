import { UserContext } from "../../../Utils/userContext"
import { useContext } from "react"
import '../../css/Header.css'

function Header() {
    const {user} = useContext(UserContext)
    return (
        <header>
        <h1>Bias News</h1>
            <p id='user' >logged in as {user}</p>
        </header>
    )    
}

export default Header