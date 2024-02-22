import React from "react";
import InputName from "../../input/InputName";
import UserErrorInterface from "../../../interface/Error";
import InputEmail from "../../input/InputEmail";
import InputRole from "../../input/InputRole";
import { GetUser, useUpdateUser } from "../../../api/User";
import { useParams } from "react-router-dom";
import { AppContext } from "../../../context/Context";
import { API_URL } from "../../../constants/data";

export default function UpdateUser() {
    const { user,fetchUserCookies } = React.useContext(AppContext);

    const uid = useParams().uid || "";
    const getUser = React.useRef(() => {});

  const [userUpdate, setUserUpdate] = React.useState({
    email: "",
    name: "",
    username: "",
    role: "user",
    password: "",
  });
  const [error, setError] = React.useState<UserErrorInterface>({
    message: "",
    hasError: false,
    field: "",
  });

  function handleChanges(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) {
    setUserUpdate({ ...userUpdate, [e.target.name]: e.target.value });
  }

async function useUpdate() {
    const response = await useUpdateUser(userUpdate);
    console.log(response);
    if (response.errors && response.errors.hasError) {
        setError(response.errors);
        return;
    }    
}

  getUser.current = async () => {
    fetchUserCookies();
    const params = new URLSearchParams();
    params.append("uid", user.uid);
    params.append("session", user.session);
    params.append("userId", uid);
    params.append("token", user.access_token);
  
    const response = await fetch(`${API_URL}/get-user?${params}`);
    const data = await response.json();
    console.log(data);
    //   const response = await GetUser(uid);
    //   console.log(response);

    // if (uid !== undefined && uid !== null && uid !== "") {
    //   setUserUpdate(response);
    // }
  };

  React.useEffect(() => {
    setError({ message: "", hasError: false, field: "" });
  }, [userUpdate]);

  React.useEffect(() => {
    getUser.current();
  }, []);

  return (
    <>
      <div className=" mt-4 md:mt-7 w-[95%] mx-auto">
        <h1 className="font-black text-3xl text-start text-black my-2">
          {" "}
          Update User
        </h1>

        <div className="w-full md:w-8/12 mx-auto my-8">
          <InputName
            defValue={userUpdate.name}
            onChangeHandler={handleChanges}
            placeholder="Enter Name"
            name="name"
            error={
              error.field === "name" && error.hasError ? error.message : ""
            }
          />
          <InputName
            defValue={userUpdate.username}
            onChangeHandler={handleChanges}
            placeholder="Enter Username"
            name="username"
            error={
              error.field === "username" && error.hasError ? error.message : ""
            }
          />
          <InputEmail
            defValue={userUpdate.email}
            onChangeHandler={handleChanges}
            placeholder="Enter Email"
            name="email"
            error={
              error.field === "email" && error.hasError ? error.message : ""
            }
          />
          <InputRole
            defValue={userUpdate.role}
            onChangeHandler={handleChanges}
            name="role"
            error={
              error.field === "role" && error.hasError ? error.message : ""
            }
          />
          <button
            onClick={useUpdate}
            className="w-full bg-[#002F53] text-white text-[16px] font-[600] leading-[20px] py-4 rounded-xl mt-4 flex justify-center items-center"
          >
            Update User
          </button>
        </div>
      </div>
    </>
  );
}
