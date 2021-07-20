import React from 'react'
import "./friends.css"

export default function Friends({user}) {
    return (
        <li className="leftbarFriend">
        <img src={user.profilePicture} alt="" className="leftbarFriendImg" />
        <span className="leftbarFriendName">
            {user.username}
        </span>
    </li>
    )
}
