import React from "react";
import UserCard from "../components/common/User";
import { IoMdAdd } from "react-icons/io";
import UserInterface from "../interface/NewUser";
import { AppContext } from "../context/Context";
import { API_URL } from "../constants/data";

export default function Lawyers() {

  const {user:currentUser} = React.useContext(AppContext);
  const [data, setData] = React.useState<UserInterface[]>([]);


  const getAllUsers = React.useRef(() => {});

  getAllUsers.current =async () => {
    if (!currentUser.uid) {
      return;
    }
    const params = new URLSearchParams();
    params.append("uid", currentUser.uid);
    params.append("session", currentUser.session);
    params.append("token", currentUser.access_token);

    const response = await fetch(`${API_URL}/get-all-users?${params}`);
    const data = await response.json();
    setData(data);
  }


  React.useEffect(() => {
    getAllUsers.current();
  }, [currentUser]);

  return (
    <>
      <div className="flex justify-between items-center mt-4 md:mt-7 w-[95%] mx-auto">
        <h1 className="font-black text-3xl text-start text-black ">Lawyers</h1>
        <a href="/dashboard/users/new-users" className="bg-[#002F53] text-white text-[16px] font-[600] leading-[20px] py-4 rounded-xl flex justify-center px-3 items-center">
        <IoMdAdd className="mr-3 text-[20px]" />
          Create Lawyer
        </a>
      </div>
      <div className="flex flex-col md:flex-row mt-10">
        {
          data.length > 0 ? data.map((user, index) => {
            return <UserCard key={index} {...user} />;
          }) : <p>No Users</p>
        }
      </div>
    </>
  );
}
