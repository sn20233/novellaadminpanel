import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import RightBar from "./scenes/global/RightBar";
import DashBoard from "./scenes/global/DashBoard";
import Scroll from "./scenes/global/Scroll";
import Comments from "./scenes/global/Comments";
import Scrapbook from "./scenes/global/Scrapbook";
import { Route, Routes } from "react-router-dom";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <RightBar />
            <Scroll />

            <Routes>
              <Route path="/" element={<DashBoard />} />
              <Route path="/Dashboard" element={<DashBoard />} />
              <Route path="/Comments" element={<Comments/>} />             
              <Route path="/Scrapbook" element={<Scrapbook />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
