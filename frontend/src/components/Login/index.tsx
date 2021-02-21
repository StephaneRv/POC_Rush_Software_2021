import React, {useState, Fragment} from "react";
import axios from "axios";
import "./index.css";

function loginUser(e: React.FormEvent<HTMLFormElement>): void {
    console.log("Coucou");
}
//axios.post("127.0.0.1:8000/api/login", JSON.stringify(user));

function Login(): JSX.Element {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const user = {username, password}

    return (
        <Fragment>
            <div className="page">
                <div>
                    <h1 className="title">
                        KOUBALIBRÉ
                    </h1>
                    <form className="userInput" onSubmit={
                        (event) => {
                            event.preventDefault();
                            axios.request({
                                method: "post",
                                url:"http://127.0.0.1:8080/login",
                                data: JSON.stringify(user),
                                withCredentials: true})
                                .then(() => {console.log("Victory")})
                                .catch((error: string) => {console.log(error)});
                        }
                    }>
                        <label className="username">
                            <div className="label">
                                Username:
                            </div>
                            <input className="usernameInput" type="text" name="username" onChange={
                                (e) => {
                                    setUsername(e.target.value);
                                }
                            }/>
                        </label>
                        <label className="password">
                            <div className="label">
                                Password:
                            </div>
                            <input className="passwordInput" type="password" name="password" onChange={
                                (e) => {
                                    setPassword(e.target.value);
                                }
                            }/>
                        </label>
                        <div className="submitButton">
                        <form action="http://localhost:3000/profile" method="get">
                            <input className="submitButtonContent" type="submit" value="Submit"/>
                        </form>
                        </div>
                    </form>
                </div>
            </div>
            <div className="LoginFooter">
                <img className="logo" src="https://i.imgur.com/Ouoti5H.png" />
            </div>
        </Fragment>
    );
}

export default Login