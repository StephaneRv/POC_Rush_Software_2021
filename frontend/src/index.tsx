import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";

var activity = ["premier message", "deuxième message", "troisième message",
                "premier message", "deuxième message", "troisième message",
                "premier message", "deuxième message", "troisième message",
                "premier message", "deuxième message", "troisième message",
                "premier message", "deuxième message", "troisième message",
                "premier message", "deuxième message", "troisième message"]

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Login/>
                </Route>
            </Switch>
        </BrowserRouter>
        <BrowserRouter>
            <Switch>
                <Route exact path="/profile">
                  <Profile
                    userId={1}
                    imgProfileUrl="https://i.imgur.com/XSS44rg.jpg"
                    imgBackgroundUrl="https://thumbor.forbes.com/thumbor/711x177/https://blogs-images.forbes.com/josephliu/files/2019/06/3-martin-adams-764547-unsplash-1200x300.jpg?width=960"
                    name="Cowboy Peepo"
                    bio="Life sucks, is banana a bread, gonna kill a ship later"
                    activities={activity}
                  />
                </Route>
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);