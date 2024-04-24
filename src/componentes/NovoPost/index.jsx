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
import MyButton from "../MyButton";
import BackendService from "../../services/backend";

const NovoPost = ({ callbackAfterSave }) => {
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

  async function saveNewPost(event) {
    event.preventDefault();
    if (value.length < 8) {
      showMessage("O post deve conter pelo menos 8 caracteres", "warning");
    } else {
      await BackendService.novoPost(value);
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
      <MyButton onClick={onOpen}>Adicionar novo post</MyButton>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={saveNewPost}>
            <ModalHeader>Novo Post</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Textarea
                name="post"
                placeholder="O que você está pensando?"
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

export default NovoPost;
