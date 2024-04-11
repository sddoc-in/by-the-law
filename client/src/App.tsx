import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loading from "./components/loader/Loading";
import Signin from "./pages/Signin";
import AppProvider from "./context/Context";
import { SidebarData } from "./constants/Sidebar";
import GlobalLayout from "./components/dashboard/GlobalLayout";
import UrlForm from "./pages/UrlForm";
import WrongUrl from "./pages/WrongUrl";
import Divorce from "./components/pdf/divorce";
import { ChakraProvider } from "@chakra-ui/react";


function App() {
  return (
    <>
      <AppProvider>
        <ChakraProvider>
          <Router />
        </ChakraProvider>
      </AppProvider>
    </>
  );
}

function Router() {
  return (
    <>
      {/* <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/sign-in" element={<Signin />} />
            <Route path="/url/:url" element={<UrlForm />} />
            <Route path="/wrong-url" element={<WrongUrl />} />
            <Route path="/dashboard/pdf" element={<Divorce />} />

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
          </Routes>
        </Suspense>
      </BrowserRouter> */}
      <Divorce/>
    </>
  );
}

export default App;
