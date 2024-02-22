import React from "react";
import InputName from "../../input/InputName";
import InputEmail from "../../input/InputEmail";
import InputRole from "../../input/InputRole";
import { GetUser } from "../../../api/User";

export default function UpdateUser() {
  const getUser = React.useRef(() => {});

  const [userView, setUserView] = React.useState({
    email: "",
    name: "",
    username: "",
    role: "user",
    password: "",
  });

  getUser.current = async () => {
    const url = window.location.href;
    const uid = url.split("/").pop();

    if (uid !== undefined && uid !== null && uid !== "") {
      const response = await GetUser(uid);
      console.log(response);
      setUserView(response);
    }
  };

  React.useEffect(() => {
    getUser.current();
  }, []);

  return (
    <>
      <div className=" mt-4 md:mt-7 w-[95%] mx-auto">
        <h1 className="font-black text-3xl text-start text-black my-2">
          {" "}
          View User
        </h1>

        <div className="w-full md:w-8/12 mx-auto my-8">
          <InputName
            defValue={userView.name}
            placeholder="Enter Name"
            name="name"
            disabled={true}
          />
          <InputName
            defValue={userView.username}
            disabled={true}
            placeholder="Enter Username"
            name="username"
          />
          <InputEmail
            defValue={userView.email}
            disabled={true}
            placeholder="Enter Email"
            name="email"
          />
          <InputRole defValue="" disabled={true} name="role" />
        </div>
      </div>
    </>
  );
}
