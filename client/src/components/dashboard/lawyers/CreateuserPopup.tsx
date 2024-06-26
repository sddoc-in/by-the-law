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
import InputSelect from "../../input/InputSelect";
import { Roles, RolesEnum } from "../../../constants/Roles";
import InputPass from "../../input/InputPass";
import InputEmail from "../../input/InputEmail";
import InputName from "../../input/InputName";
import { AppContext } from "../../../context/Context";
import axios from "axios";
import { API_URL } from "../../../constants/data";
import UserErrorInterface from "../../../interface/Error";
import validateUser from "../../../functions/validateUserSignup";
import UserInterface from "../../../interface/NewUser";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreateuserPopup(props: Props) {
  const { user: currentUser } = React.useContext(AppContext);

  const [error, setError] = React.useState<UserErrorInterface>(
    {} as UserErrorInterface
  );

  const [panelUser, setPanelUser] = React.useState<UserInterface>(
    {} as UserInterface
  );

  async function onCreate() {
    if (!ValidateUser()) {
      return;
    }

    if (currentUser.role !== RolesEnum.admin && currentUser.uid) {
      alert("You are not allowed to create a panel user");
      return;
    }

    try {
      const params = new URLSearchParams({
        uid: currentUser.uid,
        access_token: currentUser.access_token,
        session: currentUser.session,
      });

      const data = await axios
        .post(API_URL + "/lawyer/create?" + params, panelUser)
        .then((res) => res.data)
        .catch((err) => {
          let data = err.response.data;
          alert(data.message);
          return;
        });
      if (data.message !== "Lawyer created successfully") {
        alert(data.message);
        return;
      }
      if (data.user.uid) {
        alert("Lawyer created successfully");
        props.onClose();
        window.location.reload();
      }
    } catch (err) {}
  }

  function ValidateUser() {
    let error: UserErrorInterface = validateUser(panelUser, "", true);
    if (error.hasError) {
      setError(error);
      return false;
    }
    return true;
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPanelUser({
      ...panelUser,
      [e.target.name]: e.target.value,
    });
  }

  function onRoleChange(name: string, value: string) {
    setPanelUser({
      ...panelUser,
      [name]: value,
    });
  }

  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Lawyer</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <InputName
              name="name"
              defValue=""
              placeholder="Name"
              inputClassName="w-full"
              onChangeHandler={onChange}
              error={
                error.hasError && error.field === "name" ? error.message : ""
              }
            />
            <InputName
              name="username"
              defValue=""
              placeholder="Bar Number"
              inputClassName="w-full"
              onChangeHandler={onChange}
              error={
                error.hasError && error.field === "username"
                  ? error.message
                  : ""
              }
            />
            <InputEmail
              name="email"
              defValue=""
              placeholder="Email"
              inputClassName="w-full"
              onChangeHandler={onChange}
              error={
                error.hasError && error.field === "email" ? error.message : ""
              }
            />

            <InputPass
              name="password"
              defValue=""
              placeholder="Password"
              inputClassName="w-full"
              onChangeHandler={onChange}
              error={
                error.hasError && error.field === "password"
                  ? error.message
                  : ""
              }
            />
            <InputSelect
              name="role"
              selectArray={Roles}
              onChange={onRoleChange}
              defValue=""
              placeholder="Select your role"
              inputClassName="w-full"
              error={
                error.hasError && error.field === "role" ? error.message : ""
              }
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={props.onClose}>
              Close
            </Button>
            <Button
              variant="ghost"
              onClick={onCreate}
              className="bg-[#002F53] text-[white!important] capitalize hover:bg-[#002F53!important] "
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
