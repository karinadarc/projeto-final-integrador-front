import { Center, Spacer, Spinner, VStack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardPost from "../../componentes/Card";
import HeaderPrincipal from "../../componentes/HeaderPrincipal";
import MainContainer from "../../componentes/MainContainer";
import NovoComment from "../../componentes/NovoComment";
import GlobalContext from "../../context/GlobalContext";
import BackendService from "../../services/backend";

function CommentsPage() {
  const { showError } = useContext(GlobalContext);
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);

  const params = useParams();
  const id = params.postId;

  const loadComments = async () => {
    try {
      const response = await BackendService.getComments(id);
      setComments(response);
    } catch (error) {
      showError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLike = async (comment) => {
    try {
      await BackendService.likeComment(comment.id);
      loadComments();
    } catch (error) {
      showError(error);
    }
  };

  const handleDislike = async (comment) => {
    try {
      await BackendService.dislikeComment(comment.id);
      loadComments();
    } catch (error) {
      showError(error);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    loadComments();
  }, []);

  return (
    <MainContainer>
      <HeaderPrincipal
        exibirX={true}
        texto={"Logout"}
        rotaTexto={"/login"}
      ></HeaderPrincipal>
      <VStack align="stretch" spacing={3}>
        <Spacer />
        <NovoComment postId={id} callbackAfterSave={loadComments}></NovoComment>
        {isLoading ? (
          <Center>
            <Spinner />
          </Center>
        ) : (
          comments.map((comment) => {
            return (
              <CardPost
                key={comment.id}
                creatorName={comment.creator_name}
                content={comment.content}
                likes={comment.likes}
                dislikes={comment.dislikes}
                handleLike={() => {
                  handleLike(comment);
                }}
                handleDislike={() => {
                  handleDislike(comment);
                }}
              ></CardPost>
            );
          })
        )}
      </VStack>
    </MainContainer>
  );
}

export default CommentsPage;
