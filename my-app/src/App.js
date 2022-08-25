import React, { useEffect, useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";

import MyButton from "./components/UI/button/MyButton";

import MyModal from "./components/UI/modal/MyModal";
import "./styles/App.css";
import { useSortedPosts } from "./hooks/usePosts";

import PostService from "./API/PostService";




function App() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: "", query: "" });

  const [modal, setModal] = useState(false);

  const [isPostsLoading, setIsPostsLoading] = useState(false)

  const sortedAndSearchedPosts = useSortedPosts(posts, filter.sort, filter);

  useEffect(() => {
    fetchPosts()
  }, []) 

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  async function fetchPosts() {
    setIsPostsLoading(true)
    const posts = await PostService.getAll();
    setPosts(posts)
    setIsPostsLoading(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <button onClick={fetchPosts}>Get Posts</button>
      <MyButton onClick={() => setModal(true)}>Создать пост</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        {" "}
        <PostForm create={createPost} />{" "}
      </MyModal>

      <hr style={{ margin: "15px 0" }} />
      <div>
        <PostFilter filter={filter} setFilter={setFilter} />
      </div>
      {isPostsLoading
      ? <h1>Идет Загрузка...</h1>
       : <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Список 1"
      />
    }
      
    </div>
  );
}

export default App;
