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
            <div className="profile">
                <img className="avatar" src={props.imgProfileUrl} />
                <img className="backgroundPic" src={props.imgBackgroundUrl} />
                <p className="name">{props.name}</p>
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