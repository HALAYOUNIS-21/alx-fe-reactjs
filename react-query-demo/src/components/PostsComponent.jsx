import React from "react";
import { useQuery } from "react-query";

// Function to fetch posts
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const PostsComponent = () => {
  // Use React Query's useQuery hook with additional options
  const { data, error, isLoading, isError, refetch, isFetching } = useQuery(
    "posts", // Query key
    fetchPosts, // Fetching function
    {
      cacheTime: 1000 * 60 * 10, // 10 minutes (default is 5 minutes)
      staleTime: 1000 * 60 * 5, // 5 minutes (data won't refetch during this time)
      refetchOnWindowFocus: false, // Disable refetching on window focus
      keepPreviousData: true, // Retain previous data during refetch
    }
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? "Refetching..." : "Refetch Posts"}
      </button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;