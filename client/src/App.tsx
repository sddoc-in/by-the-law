import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loading from "./components/loader/Loading";
import Signin from "./pages/Signin";
import AppProvider from "./context/Context";
import { SidebarData } from "./constants/Sidebar";
import GlobalLayout from "./components/dashboard/GlobalLayout";
import WrongUrl from "./pages/WrongUrl";
import { ChakraProvider } from "@chakra-ui/react";
import { OtherRoutes, RoutesWithoutLayout } from "./constants/OtherRoute";
import { FormRoute } from "./constants/FormRoute";
import Fl144 from "../src/components/pdf/fl144/FL144";
import  Fl145 from "../src/components/pdf/fl145/fl145";
import  Fl1034 from "../src/components/pdf/fl1034/fl1034";
import  Fl142 from "../src/components/pdf/fl142/fl142";
import  Fl117 from "../src/components/pdf/fl117/fl117";
import Fl115 from "../src/components/pdf/fl115/fl115";
import Fl130 from "../src/components/pdf/fl130/fl130";
import Fl130a from "../src/components/pdf/fl130A/fl130a";
import FL140 from "./components/pdf/fl140/fl140";
import FL141 from "./components/pdf/fl141/fl141";
import FL100 from "./components/pdf/fl100/fl100";
import FL105 from "./components/pdf/fl105/fl105";
import FL110 from "./components/pdf/fl110/fl110";
import FL120 from "./components/pdf/fl120/fl120";
import FL190 from "./components/pdf/fl190/fl190";

 

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
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/sign-in" element={<Signin />} />
            <Route path="*" element={<WrongUrl />} />
            <Route path="/pdf144" element={<Fl144/>} />
            <Route path="/pdf145" element={<Fl145/>} />
            <Route path="/pdf1034" element={<Fl1034/>} />
            <Route path="/pdf142" element={<Fl142/>} />
            <Route path="/pdf117" element={<Fl117/>} />
            <Route path="pdf115" element={<Fl115/>}/>
            <Route path="pdf130" element={<Fl130/>}/>
            <Route path="pdf130a" element={<Fl130a/>}/>
            <Route path="pdf140" element={<FL140/>}/>
            <Route path="pdf141" element={<FL141/>}/>
            <Route path="pdf100" element={<FL100/>}/>
            <Route path="pdf105" element={<FL105/>}/>
            <Route path="pdf110" element={<FL110/>}/>
            <Route path="pdf120" element={<FL120/>}/>
            <Route path="pdf190" element={<FL190/>}/>

           

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

            {OtherRoutes.map((item, index) => {
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
            {RoutesWithoutLayout.map((item, index) => {
              return (
                <Route
                  key={index}
                  path={item.path}
                  element={<item.Element />}
                />
              );
            })}

            {FormRoute.map((item, index) => {
              return (
                <Route
                  key={index}
                  path={item.path}
                  element={<item.Element />}
                />
              );
            })}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
