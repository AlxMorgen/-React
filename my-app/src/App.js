import React, { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
// import MyButton from "./components/UI/button/MyButton";
// import MyInput from "./components/UI/input/MyInput";
// import Counter from "./components/Counter"
// import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript 2", body: "Description2" },
    { id: 3, title: "Javascript 3", body: "Description3" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length !== 0 
      ? <PostList remove={removePost} posts={posts} title="Список 1" />
      : 
        <h1 style={{textAlign: "center"}}>Посты не найдены</h1>
      }
    </div>
  );
}

export default App;
