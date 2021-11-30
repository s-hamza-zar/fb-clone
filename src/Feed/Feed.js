import React from 'react'
import StoryReel from './StoryReel'
import "./Feed.css"
import PostInputForm from './PostInputForm'
import Post from './Post'
import db from '../firebase'
import { useState } from 'react'
import { useEffect } from 'react'
function Feed() {
 const [posts, setPosts] = useState([])
 useEffect(() => {
    db.collection('posts').onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc)=>({ id:doc.id, data:doc.data()})))
    )
 }, []);

    return (
        <div className="feed">
            <StoryReel/>
            <PostInputForm/>
            {posts.map((post)=>{
                <Post 
                key={post.id}
                message={post.data.message}
                timstamp={post.data.timestamp}
                username={post.data.username}
                image={post.data.image}
                />

            })}
        </div>
    )
}

export default Feed
