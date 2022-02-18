import "../styles/globals.css";

import { useState } from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";

import Header from "../components/utils/Header";
import Sidebar from "../components/utils/Sidebar";
import Navbar from "../components/utils/Navbar";

function MyApp({ Component, pageProps }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <ChakraProvider>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <Box>
        <Navbar onShowSidebar={toggleSidebar} />
      </Box>
      <Component />
    </ChakraProvider>
  );
}

export default MyApp;
