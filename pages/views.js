import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import { Typography, Avatar, Divider } from "@mui/material";
import { useRouter } from "next/router";

import TopNavigationBar from "@/components/common/topNavigationBar";
import BookFeatureCard from "@/components/views/bookFeatureCard";
import BookLinkDescription from "@/components/views/bookLinkDescription";
import BookLinkTitle from "@/components/views/bookLinkTitle";
import BookSelectionList from "@/components/views/bookSelectionList";

const exampleThumbnail =
  "https://cdn.pixabay.com/photo/2014/10/23/10/10/dollars-499481_1280.jpg";
const exampleBookImage1 =
  "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791188331796.jpg";
const exampleBookImage2 =
  "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791158883591.jpg";
const exampleBookImage3 =
  "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788959897094.jpg";

function Views() {
  const router = useRouter();
  return (
    <Box>
      <TopNavigationBar />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100vh",
          pt: 8,
          flexDirection: "row",
          backgroundColor: "white",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flex: 3,
            flexDirection: "column",
            minWidth: "400px",
          }}
        >
          <BookLinkTitle />
          <BookFeatureCard />
          <BookLinkDescription />
        </Box>
        <BookSelectionList />
      </Box>
    </Box>
  );
}
export default Views;
