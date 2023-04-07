import { Box } from "@mui/material";
import Header from "../../components/Header";
import { useState } from "react";
import Topbar from "../../scenes/global/Topbar";
import Sidebar from "../../scenes/global/Sidebar";


const Todo = () => {
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <div className="app">
    <Sidebar isSidebar={isSidebar} />
    <main className="content">
      <Topbar setIsSidebar={setIsSidebar} />

    <Box m="20px">
      <Header title="TODO" subtitle="Todo" />
      <Box>Coming Soon</Box>
    </Box>
    </main>
    </div>

  );
};

export default Todo;

