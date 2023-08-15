"use client";
import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";

import TopNavigationBar from "@/components/common/topNavigationBar";
import Searchbar from "@/components/booklist/searchBar";
import BookLinkList from "@/components/booklist/bookLinkList";

function booklist() {
  return (
    <Box>
      <TopNavigationBar />
      <Searchbar />
      <BookLinkList />
    </Box>
  );
}

export default booklist;
