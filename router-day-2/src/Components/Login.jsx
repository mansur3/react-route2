import {useState, useContext} from "react";
import {AuthContext} from "../AuthProvider/AuthContext";
import {Redirect} from "react-router-dom";

const Login = () => {

    const [name, setName] = useState("");

    const [password, setPassword] = useState("");
    const {handleToken, token}  = useContext(AuthContext);

    // const handleClick = () => {
    //     handleToken("tokenCreated");
    // }

    if(token) {
        return <Redirect to = "/dashboard" />
    }


    return (
        <div>
            <input value = {name} onChange = {(e) => setName(e.target.value)} type = "text" placeholder = "Enter the user name" />
            <br />
            <input value = {password} onChange = {(e) => setPassword(e.target.value)} type = "password" placeholder = "Enter the password" />
            <br />
            <button onClick = {() => {
                handleToken("token")
            }}>Login</button>
        </div>
    )
}
export {Login};