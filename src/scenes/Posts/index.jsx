import { Box } from "@mui/material";
import { useState } from "react";
import Header from "../../components/Header";
import Topbar from "../../scenes/global/Topbar";
import Sidebar from "../../scenes/global/Sidebar";


const Posts = () => {
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <div className="app">
    <Sidebar isSidebar={isSidebar} />
    <main className="content">
      <Topbar setIsSidebar={setIsSidebar} />

    <Box m="20px">
      <Header title="Posts" subtitle="Posts" />
      <Box>Coming Soon</Box>
    </Box>
    </main>
    </div>
  );
};

export default Posts;
