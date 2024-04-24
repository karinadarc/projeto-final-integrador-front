import React, { useContext, useEffect, useState } from "react";
import MainContainer from "../../componentes/MainContainer";
import CardPost from "../../componentes/Card";
import { Center, Spinner, SimpleGrid, Spacer, VStack } from "@chakra-ui/react";
import HeaderPrincipal from "../../componentes/HeaderPrincipal";
import GlobalContext from "../../context/GlobalContext";
import NovoPost from "../../componentes/NovoPost";
import BackendService from "../../services/backend";

function HomePage() {
  const { showError } = useContext(GlobalContext);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const loadPosts = async () => {
    try {
      const response = await BackendService.getPosts();
      setPosts(response);
    } catch (error) {
      showError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    loadPosts();
  }, []);

  return (
    <MainContainer>
      <HeaderPrincipal
        exibirX={false}
        texto={"Logout"}
        rotaTexto={"/login"}
      ></HeaderPrincipal>
      <VStack align="stretch" spacing={3}>
        <Spacer />
        <NovoPost marginTop="5px" callbackAfterSave={loadPosts}></NovoPost>
        {isLoading ? (
          <Center>
            <Spinner />
          </Center>
        ) : (
          posts.map((post) => {
            return (
              <CardPost
                key={post.id}
                post={post}
                updatePostsCallback={loadPosts}
              ></CardPost>
            );
          })
        )}
      </VStack>
    </MainContainer>
  );
}

export default HomePage;
