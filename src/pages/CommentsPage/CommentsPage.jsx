import { useNavigate, useParams } from "react-router-dom";
import MainContainer from "../../componentes/MainContainer";
import HeaderPrincipal from "../../componentes/HeaderPrincipal";
import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import BackendService from "../../services/backend";
import { useEffect } from "react";

function CommentsPage() {
  const params = useParams();
  const id = params.postId;

  useEffect(() => {
    BackendService.getComments(id);
  });

  return (
    <MainContainer>
      <HeaderPrincipal
        exibirX={true}
        texto={"Logout"}
        rotaTexto={"/login"}
      ></HeaderPrincipal>
      <SimpleGrid marginTop={"10px"} columns={1} spacingY={"10px"}>
        <Center>
          <Spinner />
        </Center>
      </SimpleGrid>
    </MainContainer>
  );
}

export default CommentsPage;
