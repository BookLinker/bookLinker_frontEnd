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
        flex: 2.5,
        zIndex: 0,
        flexDirection: "column",
      }}
    >
      <Typography sx={{ pl: 1.5, pt: 1.5, fontSize: 18, fontWeight: "bold" }}>
        {contentText}
      </Typography>

      <Box sx={{ display: "flex", pl: 1.5, pt: 1.5, width: "100%" }}>
        <Typography
          sx={{ fontSize: 16, fontWeight: "bold", color: "darkgray" }}
        >
          [댓글] (9개)
        </Typography>
      </Box>
    </Box>
  );
}
