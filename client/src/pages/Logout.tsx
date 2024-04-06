import React from "react";

export default function Logout() {
  function logout() {
    localStorage.removeItem("user");
    document.cookie = "user-name=; Expires=Thu, 01 Jan 1970 00:00:00 UTC";
    document.cookie = "session=; Expires=Thu, 01 Jan 1970 00:00:00 UTC";
    document.cookie = "access_token=; Expires=Thu, 01 Jan 1970 00:00:00 UTC";
    document.cookie = "uid=; Expires=Thu, 01 Jan 1970 00:00:00 UTC";
    document.cookie = "role=; Expires=Thu, 01 Jan 1970 00:00:00 UTC";
    document.cookie = "status=; Expires=Thu, 01 Jan 1970 00:00:00 UTC";
    window.location.href = "/sign-in";
  }
  React.useEffect(() => {
    logout();
  }, []);

  return <div></div>;
}
