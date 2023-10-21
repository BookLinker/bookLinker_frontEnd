import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import { Typography, Avatar, Divider } from "@mui/material";
import { useRouter } from "next/router";
import { useBookListStore } from "../../pages/view/[viewId]";

export default function BookLinkTitle() {
  const store = useBookListStore();
  const titleText = store.bookList.title;
  const tagText = store.bookList.hashTag;

  return (
    <Box
      sx={{
        display: "flex",
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
        {titleText}
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
        #{tagText}
      </Typography>
    </Box>
  );
}
