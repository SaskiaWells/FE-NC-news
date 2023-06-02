import { Link } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../../../Utils/userContext";

function Nav() {
    const { setUser } = useContext(UserContext);
    function handleClick() {
        setUser('guest')
    }
    return (
        <>
            <nav id='login'>
                <Link to='/login'>Login</Link>
                <button onClick={handleClick}>Logout</button>
        </nav>
          <nav id='nav-bar'>
            <Link to='/'>Home</Link>
        </nav>
        
        </>
     )    
}

export default Nav