import React from 'react'
import { Avatar} from "@mui/material";
import './Story.css'
function Story({image,ProfilePic,title}) {
    return (
        <div className='story' style={{backgroundImage: `url(${image})`}}>
            <Avatar className='story__avatar' src={ProfilePic}/>
            <h4>{title}</h4>
        </div>
    )
}

export default Story
