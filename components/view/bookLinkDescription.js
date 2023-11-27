import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import { Typography, Avatar, Divider } from "@mui/material";
import { useRouter } from "next/router";
import { useBookListStore } from "../../pages/view/[viewId]";

export default function BookLinkDescription() {
  const store = useBookListStore();
  const contentText = store.bookList.content;

  return (
    <Box
      sx={{
        display: "flex",
        zIndex: 0,
        flexDirection: "column",
      }}
    >
      <Typography sx={{ pl: 2.5, pt: 1.5, fontSize: 18, fontWeight: "bold" }}>
        {contentText}
      </Typography>
    </Box>
  );
}
