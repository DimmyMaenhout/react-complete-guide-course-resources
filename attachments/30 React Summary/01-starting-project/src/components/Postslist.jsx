import classes from "./PostsList.module.css";

import Post from "./Post";
// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function PostsList() {
  // const [posts, setPosts] = useState([]);
  // const [isFetching, setIsFetching] = useState(false);

  const posts = useLoaderData();

  // useEffect (cause a side effect in our component function) where we want to trigger an action that does not directly influence JSX code but maybe indirectly in the future or that does anything else that's not related to rendering the UI.
  // This method doesn't always execute when the component is rendered again! It executes sometimes when the component function executes, that is controlled with the second argument, the array with dependencies.
  // useEffect gets executed after the component function
  // useEffect(() => {
  //   // this function will be executed by React for us whenever it considers this effect to require execution everytime
  //   async function fetchPosts() {
  //     setIsFetching(true);

  //     // const response = await fetch("http://localhost:8080/posts");
  //     // const resData = await response.json();

  //     setPosts(resData.posts);

  //     setIsFetching(false);
  //   }

  //   fetchPosts();
  // }, []);

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              body={post.body}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}

      {/* {isFetching && (
        <p style={{ textAlign: "center", color: "white" }}>Loading posts...</p>
      )} */}
    </>
  );
}
