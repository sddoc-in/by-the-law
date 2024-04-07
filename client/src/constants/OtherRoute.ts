import ClientDetails from "../components/dashboard/client/ClientDetails";
import LawyerDetails from "../components/dashboard/lawyers/LawyerDetails";
import UrlForm from "../pages/UrlForm";

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

export const RoutesWithoutLayout = [
  {
    title: "URL Form",
    path: "/client/:client_id/form/url/:url",
    Element: UrlForm,
  },
];
