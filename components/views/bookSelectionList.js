import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import { Typography, Avatar, Divider } from "@mui/material";
import { useRouter } from "next/router";

export default function BookSelectionList() {
  return (
    <Box
      sx={{
        display: "flex",
        flex: 0.8,
        //backgroundColor: "navajowhite",
        minWidth: "200px",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box sx={{ width: "80%", height: 150, backgroundColor: "tan", mt: 3 }} />
      <Box sx={{ width: "80%", height: 150, backgroundColor: "tan", mt: 3 }} />
      <Box sx={{ width: "80%", height: 150, backgroundColor: "tan", mt: 3 }} />
      <Box sx={{ width: "80%", height: 150, backgroundColor: "tan", mt: 3 }} />
    </Box>
  );
}
