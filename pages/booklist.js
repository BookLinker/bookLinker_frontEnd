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
  let firstLoad = true;

  return {
    bookLists: [],
    offset: offset,
    setBookLists: (data) => set({ bookLists: data }),
    incrementOffset: () => {
      if (offset * limit < totalBookLists) {
        offset++;
        set({ offset: offset });
      }
    },
    getData: async (offset) => {
      console.log("겟데이터 ", offset, limit);
      const response = await ApiGateway.getBooklists(offset, limit);
      totalBookLists = response.total;
      if (response) {
        set((state) => ({
          bookLists: firstLoad
            ? response.content
            : [...state.bookLists, ...response.content],
        }));
        firstLoad = false;
      } else {
        console.error("데이터를 가져오는 중에 오류가 발생했습니다.");
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
    console.log("offset은 바뀌었는데요");
    getData(offset);
  }, [offset]);

  useEffect(() => {
    console.log("야호");
    if (inView && !isLoading) {
      setIsLoading(true);
      incrementOffset();
      console.log("오프셋", offset);
      setIsLoading(false);
    }
  }, [inView]);

  return (
    <Box>
      <TopNavigationBar />
      <Searchbar />
      <BookLinkList />
      <Box ref={ref}>여기가 REF이다.</Box>
    </Box>
  );
}
