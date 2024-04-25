import { Center, Spacer, Spinner, VStack } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardPost from "../../componentes/Card";
import HeaderPrincipal from "../../componentes/HeaderPrincipal";
import MainContainer from "../../componentes/MainContainer";
import NovoPost from "../../componentes/NovoPost";
import GlobalContext from "../../context/GlobalContext";
import { goToCommentsPage } from "../../routes/coordinator";
import BackendService from "../../services/backend";

function HomePage() {
  const navigate = useNavigate();
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

  const handleLike = async (post) => {
    try {
      await BackendService.like(post.id);
      loadPosts();
    } catch (error) {
      showError(error);
    }
  };

  const handleDislike = async (post) => {
    try {
      await BackendService.dislike(post.id);
      loadPosts();
    } catch (error) {
      showError(error);
    }
  };

  const handleComment = async (post) => {
    goToCommentsPage(navigate, post.id);
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
                creatorName={post.creator.creatorName}
                content={post.content}
                likes={post.likes}
                dislikes={post.dislikes}
                comments={post.comments}
                handleLike={() => {
                  handleLike(post);
                }}
                handleDislike={() => {
                  handleDislike(post);
                }}
                handleComment={() => {
                  handleComment(post);
                }}
              ></CardPost>
            );
          })
        )}
      </VStack>
    </MainContainer>
  );
}

export default HomePage;
