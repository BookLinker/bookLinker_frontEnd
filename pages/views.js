import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import { Typography, Avatar, Divider } from "@mui/material";
import { useRouter } from "next/router";
import ApiGateway from "../apis/ApiGateway";
import axios from "axios";
import { create } from "zustand";

import TopNavigationBar from "@/components/common/topNavigationBar";
import BookFeatureCard from "@/components/view/bookFeatureCard";
import BookLinkDescription from "@/components/view/bookLinkDescription";
import BookLinkTitle from "@/components/view/bookLinkTitle";
import BookSelectionList from "@/components/view/bookSelectionList";
import booklist from "./booklist";

const exampleThumbnail =
  "https://cdn.pixabay.com/photo/2014/10/23/10/10/dollars-499481_1280.jpg";
const exampleBookImage1 =
  "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791188331796.jpg";
const exampleBookImage2 =
  "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791158883591.jpg";
const exampleBookImage3 =
  "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788959897094.jpg";

export const useBookListStore = create((set, getState) => ({
  bookList: [],
  setBookList: (data) => set({ bookList: data }),
  getData: async () => {
    const response = await ApiGateway.getExampleBooklists();
    if (response) {
      set({ bookList: response.data });
      console.log("데이터를 가져왔습니다", response.data);
      console.log("booklist>>", getState().bookList);
    } else {
      console.error("데이터를 가져오는 중에 오류가 발생했습니다.");
    }
  },
}));

function Views() {
  const router = useRouter();
  const { getData } = useBookListStore();

  useEffect(() => {
    getData();
  }, []);

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

            "@media (max-width: 1000px)": {
              width: "90%",
            },
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
