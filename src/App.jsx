import React from "react";
import { isMobile } from 'react-device-detect';
import DesktopComponent from "./browser/Index";
import MobileComponent from "./mobile/Index";

function App() {
  return isMobile ? <MobileComponent /> : <DesktopComponent />;
}

export default App;
