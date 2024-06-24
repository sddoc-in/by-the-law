import React from "react";
import { useParams } from "react-router-dom";
import FL144 from "../../pdf/fl144/FL144";
import axios from "axios";
import { API_URL } from "../../../constants/data";
import FL1034 from "../../pdf/fl1034/fl1034";
import SU100 from "../../pdf/fl100/fl100";
import FL105 from "../../pdf/fl105/fl105";
import FL141 from "../../pdf/fl141/fl141";
import FL140 from "../../pdf/fl140/fl140";
import SU130a from "../../pdf/fl130A/fl130a";
import Fl130 from "../../pdf/fl130/fl130";
import SU110 from "../../pdf/fl110/fl110";
import SU115 from "../../pdf/fl115/fl115";
import SU117 from "../../pdf/fl117/fl117";
import FL120 from "../../pdf/fl120/fl120";
import FL142 from "../../pdf/fl142/fl142";
import FL145 from "../../pdf/fl145/fl145";
import FL190 from "../../pdf/fl190/fl190";

export default function Form() {
  const { client_id, form_id, form_name } = useParams();
  const [form, setForm] = React.useState<any>({});
  const [loading, setLoading] = React.useState(true);
  const getFormData = React.useRef(() => {});

  getFormData.current = async () => {
    try {
      const params = new URLSearchParams();
      params.append("client_id", client_id || "");
      params.append("form_id", form_id || "");
      params.append("form_name", form_name || "");

      const data = await axios
        .get(API_URL + "/form/data?" + params)
        .then((res) => res.data)
        .catch((err) => {
          alert(err.response.data.message);
          return;
        });

      setForm(data);
      setLoading(false);
    } catch (err) {}
  };

  React.useEffect(() => {
    getFormData.current();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  switch (form_name) {
    case "1034":
      return <FL1034 />;
    case "fl100":
      return <SU100 />;
    case "fl105":
      return <FL105 />;
    case "fl107info":
      return <div>fl107info</div>;
    case "fl110":
      return <SU110 />;
    case "fl115":
      return <SU115 />;
    case "fl117":
      return <SU117 />;
    case "fl120":
      return <FL120 />;
    case "fl130":
      return <Fl130 />;
    case "fl130a":
      return <SU130a />;
    case "fl140":
      return <FL140 />;
    case "fl141":
      return <FL141 />;
    case "fl142":
      return <FL142 />;
    case "fl144":
      return <FL144 />;
    case "fl145":
      return <FL145 />;
    case "fl190":
      return <FL190 />;
    default:
      return <div>Invalid Form</div>;
  }
}
