import React from "react";
import useRequestData from "../Hooks/useRequestData";

function HomePage() {
  const [posts, isLoading, isError] = useRequestData(`/posts`);

  return (
    <div>
      HomePage
      <ul>
        {isLoading
          ? "Carregando"
          : posts.map((post) => {
              return <li>{post.id}</li>;
            })}
      </ul>
    </div>
  );
}

export default HomePage;
