import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  ModalCloseButton,
} from "@chakra-ui/react";
import React from "react";
import toTitleCase from "../../functions/toTitle";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  data: any;
  onDelete: (data: any) => void;
  type: string;
}

export default function Delete(props: Props) {
  function onDelete() {
    props.onClose();
    props.onDelete(props.data);
  }

  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete {toTitleCase(props.type)}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>
              Do you want to delete this {toTitleCase(props.type)} -{" "}
              <b>
                {" "}
                {props.type === "lawyer"
                  ? props.data.name
                  : props.type === "discord-user"
                  ? props.data.username
                  : props.type === "panel-user"
                  ? props.data.name
                  : ""}
                ?{" "}
              </b>
            </p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={props.onClose}>
              Close
            </Button>
            <Button variant="ghost" onClick={onDelete} colorScheme="red">
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
