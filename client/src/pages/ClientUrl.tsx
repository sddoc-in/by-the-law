import React from "react";
import { IoMdAdd } from "react-icons/io";
import { AppContext } from "../context/Context";
import UserInterface from "../interface/NewUser";
import ClientInterface from "../interface/NewClient";
import { API_URL } from "../constants/data";
import axios from "axios";
import Card from "../components/dashboard/client/Card";
import CreateuserPopup from "../components/dashboard/client/CreateuserPopup";
import InputSearch from "../components/input/InputSearch";
const ClientUrl = () => {
    const { user: currentUser } = React.useContext(AppContext);
    const [data, setData] = React.useState<UserInterface[]>([]);
    const [clients, setClients] = React.useState<ClientInterface[]>([]);
    const [urls, setUrls] = React.useState<any[]>([]); // Modify this to hold URL data
    const [query, setQuery] = React.useState<string>("");
  
    const getAllUrls = async () => {
        try {
          const params = new URLSearchParams();
          params.append("uid", currentUser.uid);
          params.append("session", currentUser.session);
          params.append("access_token", currentUser.access_token);
    
          const data = await axios
            .get(API_URL + "get-all-urls?" + params) // Assuming the API endpoint for fetching URLs is "/urls/all"
            .then((res) => res.data)
            .catch((err) => {
              alert(err.response.data.message);
              return [];
            });
          setUrls(data);
        } catch (err) {}
      };
    
      React.useEffect(() => {
        getAllUrls(); // Fetch URLs when the component mounts
      }, [currentUser]);
    


  return (
    <div>
        
      <InputSearch
        name="search"
        defValue=""
        placeholder="Search"
        inputClassName="md:w-1/2 w-11/12 mx-auto"
        onChangeHandler={(e) => setQuery(e.target.value)}
      />
      {clients.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 w-[95%] mx-auto">
          {clients
            .filter((user: ClientInterface) =>
              user.username.toLowerCase().includes(query.toLowerCase())
            )
            .map((user, index) => {
              return <Card key={index} data={user} lawyers={data} />;
            })}
        </div>
      ) : (
        <p>No Clients Found</p>
      )}
      
    </div>
  )
}

export default ClientUrl
