import React from "react";
import useRequestData from "../Hooks/useRequestData";
import MainContainer from "../componentes/MainContainer";
import CardPost from "../componentes/Card";
import { Spinner } from '@chakra-ui/react'
import HeaderPrincipal from "../componentes/HeaderPrincipal";

function HomePage() {
  const [posts, isLoading, isError] = useRequestData(`/posts`);

  return (
    <MainContainer>
      <HeaderPrincipal exibirX={false}></HeaderPrincipal>
      {isLoading
        ? <Spinner/>
        : posts.map((post) => {
            return( <CardPost key={post.id} post={post} ></CardPost>);
          })}
    </MainContainer>
  );
}

export default HomePage;
