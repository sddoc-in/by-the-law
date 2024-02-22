import NewUser from "../components/dashboard/user/NewUser";
import UpdateUser from "../components/dashboard/user/UpdateUser";

export const UserOptions = [
  {
    title: "Create New User",
    path: "/dashboard/users/new-users",
    shortPath: "/new-users",
    Element: NewUser,
  },
  {
    title: "Update User",
    path: "/dashboard/users/update-users/:uid",
    shortPath: "/update-users",
    Element: UpdateUser,
  },
];
