import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Profile from "./components/Profile";

var activity = ["abc", "def", "ghi"];
ReactDOM.render(
  <React.StrictMode>
    <Profile
      userId={1}
      imgProfileUrl="https://i.imgur.com/XSS44rg.jpg"
      imgBackgroundUrl="https://thumbor.forbes.com/thumbor/711x177/https://blogs-images.forbes.com/josephliu/files/2019/06/3-martin-adams-764547-unsplash-1200x300.jpg?width=960"
      name="Pepe"
      bio="Life sucks, is banana a bread, gonna kill a ship later"
      activities={activity}
    />
  </React.StrictMode>,
  document.getElementById("root")
);