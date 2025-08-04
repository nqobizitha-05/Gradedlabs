import React from "react";
import './ProfileCards.css'
export default function ProfileCard({img, name, job, bio}){


    return(
        <div className="profileCard">
            <img src={img} alt={`${name} profile`} width={'250px'}/>
            <h2>{name}</h2>
            <h4>{job}</h4>
            <p>{bio}</p>
        </div> 
    )
}

