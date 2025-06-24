import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const response = await axios.get("http://localhost:3001/posts");
  return response.data;
};

const QueryByClick = () => {
  const {
    data: posts,
    isLoading,
    isFetched,
    isError,
    error,
    refetch,
  } = useQuery({
    //refetch is used to manually trigger the query
    queryKey: ["posts"],
    queryFn: fetchPosts,
    enabled: false, // Disable automatic fetching
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  // console.log("isloading :", isLoading);
  // console.log("isFetched:", isFetched);
  return (
    <div>
      <h2>React Query By Click Post</h2>
      {posts &&
        posts.map((post) => (
          <div
            key={post.id}
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
        ))}

      <button
        onClick={refetch}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Refetch Posts
      </button>
    </div>
  );
};

export default QueryByClick;
