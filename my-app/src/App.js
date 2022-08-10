import React, { useState } from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
// import Counter from "./components/Counter"
// import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript 2", body: "Description2" },
    { id: 3, title: "Javascript 3", body: "Description3" },
  ]);

  const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");

  const [body, setBody] = useState("")

  const addNewPost = (event) => {
    event.preventDefault()
    const newPost = {
      id: Date.now(),
      title,
      body
    }
    setPosts([...posts, newPost])
    setTitle("")
    setBody("")
    
  };
  return (
    <div className="App">
      <form action="">
        <MyInput
          value={title}
          onChange={(el) => setTitle(el.target.value)}
          type="text"
          placeholder="Название поста"
        />

        
        <MyInput
         
          value={body}
          onChange={(el) => setBody(el.target.value)}
          type="text"
          placeholder="Описание поста"
        />

        
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      
      <PostList posts={posts} title="Список 1" />
    </div>
    
  );
  
}

export default App;
