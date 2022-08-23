import React from "react";
import PostItem from './PostItem'



const PostList = ({posts, title, remove}) => {
    
    
  return (
    <div>
      <h1>{title}</h1>
      {posts.map((el, index) => (
        <PostItem remove={remove} number={index + 1 } post={el} key={el.id} />
      ))}
    </div>
  );
};

export default PostList
