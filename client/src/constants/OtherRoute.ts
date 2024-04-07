import ClientDetails from "../components/dashboard/client/ClientDetails";
import LawyerDetails from "../components/dashboard/lawyers/LawyerDetails";

export const OtherRoutes = [
  {
    title: "Client Details",
    path: "/dashboard/client/:client_id/details",
    Element: ClientDetails,
  },
  {
    title: "Lawyer Details",
    path: "/dashboard/lawyer/:lawyer_id/details/",
    Element: LawyerDetails,
  },
];
