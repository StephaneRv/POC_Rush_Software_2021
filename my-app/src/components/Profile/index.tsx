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
                <span />
                <span />
                <span />
                <ul id="menu">
                  <a href="#"><li>Home</li></a>
                  <a href="#Description"><li>Profile</li></a>
                  <a href="#Posts"><li>Activities</li></a>
                  <a href="http://localhost:3000/"><li>Disconnect</li></a>
                </ul>
              </div>
            </nav>
            <div className="profile" id="Description">
                <div className="pp">
                    <img className="avatar" src={props.imgProfileUrl} />
                    <img className="backgroundPic" src={props.imgBackgroundUrl} />
                    <p className="name">{props.name}</p>
                </div>
                <p className="bio">{props.bio}</p>
            </div>
            <div className="activityBloc" id="Posts">
                <h2 className="titles">Activities</h2>
                <p className="activityList">
                    {props.activities.map(
                        (e)=><ul className="activity">{e}</ul>)
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