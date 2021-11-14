import React from "react";

import { App as AppWrapper, Button } from "samespace-zen";
import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
import AllCards from './components/AllCards';
import Setting from './components/Setting';
import ReportUI from './components/ReportUI'
import ReportTabs from "./components/ReportTabs";

import "./assets/styles.generated.css";


function App() {
  return (
    <AppWrapper>
      <Navbar/>
      {/* <SideMenu/> */}
      {/* <AllCards/> */}
      {/* <Setting/> */}
      <ReportTabs/>
      <ReportUI/>
    </AppWrapper>
  );
}

export default App;
