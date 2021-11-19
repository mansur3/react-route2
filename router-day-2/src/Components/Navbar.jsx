
import {Link} from "react-router-dom";


const Navbar = () => {
    return (
        <div style = {{margin: "auto", width: "800px", height: "50px", backgroundColor: "gray", color : "White"}}>
            <Link style = {{marginTop : "10px", color : "white", fontWeight: "bold", marginLeft : "40px"}}to = "/">Home</Link>
            <Link style = {{marginTop : "10px", color : "white", fontWeight: "bold", marginLeft : "40px"}} to = "/dashboard">Dash Board</Link>
            <Link style = {{marginTop : "10px", color : "white", fontWeight: "bold", marginLeft : "40px"}} to = "/setting" >Setting</Link>
            <Link style = {{marginTop : "10px", color : "white", fontWeight: "bold", marginLeft : "40px"}} to = "/login">Login</Link>
        </div>
    )
}

export {Navbar};