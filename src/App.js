import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Profile from "./scenes/Profile";
import Posts from "./scenes/Posts";
import Todo from "./scenes/Todo";
import Gallery from "./scenes/Gallery";
import LandingPage from './components/Landingpage';


import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      
         <Routes>
          <Route path='/' element={<LandingPage/>} /> 
        </Routes> 
        <CssBaseline />
        
            <Routes>
            <Route path='/profile/:id' element={<Profile/>} />
              <Route path="/Posts" element={<Posts />} />
              <Route path="/Gallery" element={<Gallery />} />
              <Route path="/Todo" element={<Todo />} />
            </Routes>
    </ColorModeContext.Provider>
  );
}


export default App;
