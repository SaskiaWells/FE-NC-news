import { Link } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../../../Utils/userContext";
import '../../css/Nav.css'

function Nav() {
    const { setUser } = useContext(UserContext);
    function handleClick() {
        setUser('guest')
    }
    return (
        <>
            <nav id='login'>
                <Link id='login-button' to='/login'>Login</Link>
                <button id='logout-button' onClick={handleClick}>Logout</button>
        </nav>
          <nav id='nav-bar'>
            <Link id='home' to='/'>Home</Link>
        </nav>
        
        </>
     )    
}

export default Nav