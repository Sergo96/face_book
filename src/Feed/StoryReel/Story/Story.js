import React from "react";
import {Avatar} from "@material-ui/core";
import "./Story.css";

function story({images, profileSrc, title}) {
    return(
        <div style={{ backgroundImage: `url(${images})` }} className="story">
            <Avatar className="story__avatar" src={profileSrc}/>
            <h4>{title}</h4>
        </div>
    )
}

export default story;