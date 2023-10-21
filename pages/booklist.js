import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Box from "@mui/material/Box";
import ApiGateway from "../apis/ApiGateway";
import TopNavigationBar from "@/components/common/topNavigationBar";
import Searchbar from "@/components/booklist/searchBar";
import BookLinkList from "@/components/booklist/bookLinkList";
import { create } from "zustand";

let limit = 9;
let totalBookLists = 999;

export const useBookListsStore = create((set) => {
  let totalBookLists = 999;
  let limit = 9;
  let offset = 1;

  return {
    bookLists: [],
    offset: offset,
    setBookLists: (data) =>
      set((state) => ({ bookLists: [...state.bookLists, ...data] })),
    incrementOffset: () => {
      if (offset * limit < totalBookLists) {
        offset++;
        set({ offset: offset });
      }
    },
    getData: async (offset) => {
      if (offset * limit <= totalBookLists) {
        const response = await ApiGateway.getBooklists(offset, limit);
        totalBookLists = response.total;
        if (response) {
          set((state) => ({
            bookLists: [...state.bookLists, ...response.content],
          }));
        } else {
          console.error("데이터를 가져오는 중에 오류가 발생했습니다.");
        }
      }
    },
  };
});

export default function Booklist() {
  const { getData, offset, incrementOffset } = useBookListsStore();

  const [ref, inView] = useInView();
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    getData(offset);
  }, [offset]);

  useEffect(() => {
    if (inView && !isLoading) {
      incrementOffset();
    }
  }, [inView, isLoading]);

  return (
    <Box>
      <TopNavigationBar />
      <Searchbar />
      <BookLinkList />
      <Box ref={ref} />
    </Box>
  );
}
