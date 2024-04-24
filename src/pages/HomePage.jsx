import React, { useContext, useEffect } from "react";
import useRequestData from "../Hooks/useRequestData";
import MainContainer from "../componentes/MainContainer";
import CardPost from "../componentes/Card";
import { Center, Spinner, SimpleGrid, Spacer } from "@chakra-ui/react";
import HeaderPrincipal from "../componentes/HeaderPrincipal";
import GlobalContext from "../context/GlobalContext";
import NovoPost from "../componentes/NovoPost";

function HomePage() {
  const context = useContext(GlobalContext);
  const { posts, setPosts, triggerLoad, setTriggerLoad } = context;
  const [postsResponse, isLoading, isError] = useRequestData(
    `/posts`,
    triggerLoad
  );

  const loadPosts = () => {
    setTriggerLoad(Date.now());
  };

  useEffect(() => {
    setPosts(postsResponse);
  }, [postsResponse]);

  return (
    <MainContainer>
      <HeaderPrincipal
        exibirX={false}
        texto={"Logout"}
        rotaTexto={"/login"}
      ></HeaderPrincipal>
      <Spacer />
      <SimpleGrid marginTop={"10px"} columns={1} spacingY={"10px"}>
        <NovoPost callbackAfterSave={loadPosts}></NovoPost>

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
      </SimpleGrid>
    </MainContainer>
  );
}

export default HomePage;
