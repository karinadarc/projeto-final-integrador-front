import React from "react";
import useRequestData from "../Hooks/useRequestData";
import MainContainer from "../componentes/MainContainer";
import CardPost from "../componentes/Card";
import { Center, Spinner, SimpleGrid, Divider } from "@chakra-ui/react";
import HeaderPrincipal from "../componentes/HeaderPrincipal";

function HomePage() {
  const [posts, isLoading, isError] = useRequestData(`/posts`);

  return (
    <MainContainer>
      <HeaderPrincipal exibirX={false}></HeaderPrincipal>
      <Divider />
      <SimpleGrid columns={1} spacingY={"10px"}>
        {isLoading ? (
          <Center>
            <Spinner />
          </Center>
        ) : (
          posts.map((post) => {
            return <CardPost key={post.id} post={post}></CardPost>;
          })
        )}
      </SimpleGrid>
    </MainContainer>
  );
}

export default HomePage;
