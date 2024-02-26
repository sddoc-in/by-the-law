import DeleteUser from "../components/dashboard/user/DeleteUser";
import NewUser from "../components/dashboard/user/NewUser";
import UpdateUser from "../components/dashboard/user/UpdateUser";
import ViewUser from "../components/dashboard/user/ViewUser";

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
  {
    title: "Delete User",
    path: "/dashboard/users/delete-users/:uid",
    shortPath: "/delete-users",
    Element: DeleteUser,
  },
  {
    title: "View User",
    path: "/dashboard/users/view-users/:uid",
    shortPath: "/view-users",
    Element: ViewUser,
  },
];
