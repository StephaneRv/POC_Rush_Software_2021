import React from 'react';
import { Fragment } from 'react';
import "./index.css"

type ProfileProps = {
    userId: number;
    imgProfileUrl: string;
    imgBackgroundUrl: string;
    name: string;
    bio: string;
    activities: string[];
}

function Profile(props: ProfileProps): JSX.Element {
    return(
        <Fragment>
            <div className="header">
                <img className="logo" src="https://i.imgur.com/Ouoti5H.png" />
                <h1>KOUBALIBRÉ</h1>
            </div>
            <nav role="navigation">
              <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                  <a href="#"><li>Home</li></a>
                  <a href="#profile"><li>Profile</li></a>
                  <a href="#activityBloc"><li>Activities</li></a>
                  <a href="http://localhost:3000/"><li>Disconnect</li></a>
                </ul>
              </div>
            </nav>
            <div className="profile">
                <div className="pp">
                    <img className="avatar" src={props.imgProfileUrl} />
                    <img className="backgroundPic" src={props.imgBackgroundUrl} />
                    <p className="name">{props.name}</p>
                </div>
                <p className="bio">{props.bio}</p>
            </div>
            <div className="activityBloc">
                <h2 className="titles">Activities</h2>
                <p className="activityList">
                    {props.activities.map(
                        (elem)=><ul className="activity">{elem}</ul>)
                    }
                </p>
            </div>
            <div className="footer">
                <h1>KOUBALIBRÉ</h1>
                <img className="logo" src="https://i.imgur.com/Ouoti5H.png" />
            </div>
        </Fragment>
    );
}

export default Profile