import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import { Typography, Avatar, Divider } from "@mui/material";
import { useRouter } from "next/router";

export default function BookLinkTitle() {
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          pt: 2,
          pl: 1,
          fontWeight: "bold",
          "@media (max-width: 1000px)": { fontSize: 18 },
        }}
      >
        [2023] 교보문고 선정 경제부문 베스트셀러
      </Typography>
      <Typography
        sx={{
          pl: 1.5,
          pb: 2,
          fontSize: 14,
          fontWeight: "bold",
          color: "darkgray",
        }}
      >
        #경제 #베스트셀러
      </Typography>
    </Box>
  );
}
