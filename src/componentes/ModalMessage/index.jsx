import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";

const ModalMessage = ({ isOpen, onClose, mensagem }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ops</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{mensagem}</ModalBody>

          <ModalFooter>
            <Button colorScheme="orange" mr={3} onClick={onClose}>
              OK
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalMessage;
