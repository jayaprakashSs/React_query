import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

const fetcgPostById = (postId) => {
  return axios.get(`http://localhost:3001/posts/${postId}`);
};

const QueryById = () => {
  const { postId } = useParams();
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["posts", postId],
    queryFn: () => fetcgPostById(postId),
  });
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  // console.log(data);
  const { title, body } = data?.data || {};
  return (
    <div>
      QueryById
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default QueryById;
