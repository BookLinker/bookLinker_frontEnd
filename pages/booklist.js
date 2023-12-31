import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Box from "@mui/material/Box";
import ApiGateway from "../apis/ApiGateway";
import TopNavigationBar from "@/components/common/topNavigationBar";
import Searchbar from "@/components/booklist/searchBar";
import BookLinkList from "@/components/booklist/bookLinkList";
import { create } from "zustand";

export const useBookListsStore = create((set) => {
  let limit = 9;
  let offset = 1;
  let totalBookLists = 999;

  return {
    bookLists: [],
    offset: offset,
    firstLoad: true,
    setBookLists: (data) => set({ bookLists: data }),
    incrementOffset: () => {
      set((state) => {
        if (state.offset * limit < totalBookLists) {
          return { ...state, offset: state.offset + 1 };
        }
        return state;
      });
    },
    getData: async (offset) => {
      const response = await ApiGateway.getBooklists(offset, limit);
      totalBookLists = response.total;
      if (response) {
        set((state) => ({
          bookLists: state.firstLoad
            ? response.content
            : [...state.bookLists, ...response.content],
          firstLoad: false,
        }));
      } else {
        console.error("데이터를 가져오는 중에 오류가 발생했습니다.");
      }
    },
  };
});

export default function Booklist() {
  const { getData, offset, incrementOffset, firstLoad } = useBookListsStore();

  const [ref, inView] = useInView();
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (firstLoad) {
      getData(offset);
    }
  }, [offset, firstLoad, getData]);

  useEffect(() => {
    if (inView && !isLoading && !firstLoad) {
      setIsLoading(true);
      incrementOffset();

      setIsLoading(false);
    }
  }, [inView, isLoading, firstLoad, incrementOffset, offset]);

  return (
    <Box>
      <TopNavigationBar />
      <Searchbar />
      <BookLinkList />
      <Box ref={ref}>.</Box>
    </Box>
  );
}
