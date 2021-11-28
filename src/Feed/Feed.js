import React from 'react'
import StoryReel from './StoryReel'
import "./Feed.css"
import PostInputForm from './PostInputForm'
import Post from './Post'
function Feed() {
    return (
        <div className="feed">
            <StoryReel/>
            <PostInputForm/>
            <Post/>
        </div>
    )
}

export default Feed
