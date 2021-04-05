import React from "react";
import Post from "./Post";

export default function Posts({ posts }) {
  if (!posts.length) {
    return <p className="text-center">No post just yet=)</p>;
  }
  return posts.map((post) => <Post post={post} key={post} />);
}
