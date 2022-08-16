import React from "react";
import Post from "./Post";

function Posts() {
  const posts = [
    {
      id: "1",
      username: "erhan",
      userImg: "https://avatars.githubusercontent.com/u/36031081?v=4",
      img: "https://images.unsplash.com/photo-1660590763018-9730ab97a0bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80",
      caption: "Thanks for you",
    },
    {
      id: "2",
      username: "cinar",
      userImg: "https://avatars.githubusercontent.com/u/36031081?v=4",
      img: "https://images.unsplash.com/photo-1660620949725-77cc32219509?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
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
