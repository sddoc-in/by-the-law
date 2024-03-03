import { GoProjectTemplate } from "react-icons/go";
import { MdLogout } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineCampaign } from "react-icons/md";
import { MdOutlineAccountTree } from "react-icons/md";
import Dashboard from "../pages/Dashboard";
import Templates from "../pages/Templates";
import Logout from "../pages/Logout";
import Lawyers from "../pages/Lawyers";
import ViewURL from "../pages/ViewUrl";
import Clients from "../pages/Clients";
// import Clients from "../pages/Clients";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    shortPath: "/",
    Icon: IoHomeOutline,
    Element: Dashboard,
  },
  {
    title: "Lawyers",
    path: "/dashboard/Lawyers",
    shortPath: "/lawyers",
    Icon: MdOutlineCampaign,
    Element: Lawyers,
  },
  {
    title: "Urls",
    path: "/dashboard/urls",
    shortPath: "/urls",
    Icon: MdOutlineAccountTree,
    Element: ViewURL,
  },
  {
    title: "Clients",
    path: "/dashboard/clients",
    shortPath: "/clients",
    Icon: MdOutlineAccountTree,
    Element: Clients,
  },
  {
    title: "Templates",
    path: "/dashboard/templates",
    shortPath: "/templates",
    Icon: GoProjectTemplate,
    Element: Templates,
  },
  {
    title: "Logout",
    path: "/dashboard/logout",
    shortPath: "/logout",
    Icon: MdLogout,
    Element: Logout,
  },
];
