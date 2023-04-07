import { Box } from "@mui/material";
import Header from "../../components/Header";
import { useState } from "react";
import Topbar from "../../scenes/global/Topbar";
import Sidebar from "../../scenes/global/Sidebar";



const Gallery = () => {
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <div className="app">
    <Sidebar isSidebar={isSidebar} />
    <main className="content">
      <Topbar setIsSidebar={setIsSidebar} />
    <Box m="20px">
      <Header title="Gallery" subtitle="Gallery" />
      <Box>Coming Soon</Box>
    </Box>
    </main>
    </div>

  );
};



export default Gallery;
