import React from "react";
import Post from "./Post";

function Posts() {
  const posts = [
    {
      id: "1",
      username: "erhan",
      userImg: "https://avatars.githubusercontent.com/u/36031081?v=4",
      img: "https://images.unsplash.com/photo-1660548840757-b92bc9a5f764?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      caption: "Thanks for you",
    },
    {
      id: "2",
      username: "cinar",
      userImg: "https://avatars.githubusercontent.com/u/36031081?v=4",
      img: "https://images.unsplash.com/photo-1611213574952-de754cc6003f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      caption: "Nice",
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
