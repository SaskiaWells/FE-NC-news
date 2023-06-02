import { UserContext } from "../../../Utils/userContext"
import { useContext } from "react"

function Header() {
    const {user} = useContext(UserContext)
    return (
        <header>
        <h1>Bias News</h1>
            <h2>{user}</h2>
        </header>
    )    
}

export default Header