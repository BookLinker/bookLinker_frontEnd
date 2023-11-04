import React, { useState, useRef, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";

import TopNavigationBar from "@/components/common/topNavigationBar";
import EyeCatch from "@/components/index/eyeCatch";
import SecondaryPage from "@/components/index/secondaryPage";
import ThirdPage from "@/components/index/thirdPage";
import BottomBar from "@/components/common/bottomBar";

function Playlist() {
  const router = useRouter();

  return (
    <Box>
      <CssBaseline />
      <TopNavigationBar />
      <EyeCatch />
      <SecondaryPage />
      <ThirdPage />
      <BottomBar />
    </Box>
  );
}

export default Playlist;
