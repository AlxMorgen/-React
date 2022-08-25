import React from "react";
import PostItem from "./PostItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Посты не найдены</h1>;
  }

  return (
    <div>
      <h1>{title}</h1>

      <TransitionGroup>
        {posts.map((el, index) => 
          <CSSTransition key={el.id} timeout={500} classNames="post">
            <PostItem remove={remove} number={index + 1} post={el} />
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
