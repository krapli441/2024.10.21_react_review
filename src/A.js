import React from "react";

const A = ({ message, post }) => {
  return (
    <div>
      <h1>Component A</h1>
      <p>{message}</p>
      <ul>
        {post.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default A;
