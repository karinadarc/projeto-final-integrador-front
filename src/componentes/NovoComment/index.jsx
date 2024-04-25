import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import BackendService from "../../services/backend";
import MyButton from "../MyButton";

const NovoComment = ({ postId, callbackAfterSave }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();

  const showMessage = (message, status) => {
    toast({
      title: "Ops",
      description: message,
      status: status,
      duration: 5000,
      isClosable: true,
      position: "top",
    });
  };

  async function saveNewComment(event) {
    event.preventDefault();
    if (value.length < 8) {
      showMessage(
        "O comentário deve conter pelo menos 8 caracteres",
        "warning"
      );
    } else {
      await BackendService.novoComment(value, postId);
      callbackAfterSave();
    }

    setValue("");
    onClose();
  }

  let [value, setValue] = React.useState("");

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  return (
    <>
      <MyButton onClick={onOpen}>Responder</MyButton>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={saveNewComment}>
            <ModalHeader>Novo Comentário</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Textarea
                name="post"
                placeholder="Responder"
                required={true}
                minLength={8}
                value={value}
                onChange={handleInputChange}
              />
            </ModalBody>

            <ModalFooter>
              <Button type={"submit"} colorScheme="orange" mr={3}>
                Salvar
              </Button>
              <Button onClick={onClose} variant="gray">
                Cancelar
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NovoComment;
