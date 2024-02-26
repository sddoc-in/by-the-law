import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loading from "./components/loader/Loading";
import Signin from "./pages/Signin";
import AppProvider from "./context/Context";
import { SidebarData } from "./constants/Sidebar";
import GlobalLayout from "./components/dashboard/GlobalLayout";
import { UserOptions } from "./constants/Users";
import UrlForm from "./pages/UrlForm";
import WrongUrl from "./pages/WrongUrl";

function App() {
  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Signin />} />
              <Route path="/sign-in" element={<Signin />} />
              <Route path="/url/:url" element={<UrlForm />} />
              <Route path="/wrong-url" element={<WrongUrl />} />

              {SidebarData.map((item, index) => {
                return (
                  <Route
                    key={index}
                    path={item.path}
                    element={
                      <GlobalLayout>
                        <item.Element />
                      </GlobalLayout>
                    }
                  />
                );
              })}

              {UserOptions.map((item, index) => {
                return (
                  <Route
                    key={index}
                    path={item.path}
                    element={
                      <GlobalLayout>
                        <item.Element />
                      </GlobalLayout>
                    }
                  />
                );
              })}
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AppProvider>
    </>
  );
}

export default App;
