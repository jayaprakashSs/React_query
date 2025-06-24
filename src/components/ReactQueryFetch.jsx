import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const fetchPosts = async () => {
  const response = await axios.get("http://localhost:3001/posts");
  return response.data;
};

const ReactQueryFetch = () => {
  const {
    data: posts,
    isLoading,
    isFetched,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    // staleTime:5000, // Data is fresh for 5 seconds
    // refetchInterval: 1000, // Refetch every 1 seconds
    // refetchIntervalInBackground: false, // Continue refetching even when the tab is in the background
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  // console.log("isloading :", isLoading);
  // console.log("isFetched:", isFetched);
  return (
    <div>
      <h2>React Query Posts</h2>
      {posts.map((post) => (
        <Link
          key={post.id}
          to={`/react-query/${post.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div
            style={{
              marginBottom: "1em",
              padding: "1em",
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
          >
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ReactQueryFetch;
