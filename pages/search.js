import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Box from "@mui/material/Box";
import ApiGateway from "../apis/ApiGateway";
import TopNavigationBar from "@/components/common/topNavigationBar";
import Searchbar from "@/components/booklist/searchBar";
import BookLinkList from "@/components/booklist/bookLinkList";
import { create } from "zustand";
// ... (기존의 import 문들)

export const useBookListsStore = create((set) => {
  let limit = 9;
  let offset = 1;
  let totalBookLists = 999;

  return {
    bookLists: [],
    offset: offset,
    firstLoad: true,
    searchTerm: "",
    setBookLists: (data) => set({ bookLists: data }),
    setSearchTerm: (term) => set({ searchTerm: term }),
    incrementOffset: () => {
      set((state) => {
        if (state.offset * limit < totalBookLists) {
          return { ...state, offset: state.offset + 1 };
        }
        return state;
      });
    },
    getData: async (keyword, searchTerm, offset) => {
      let response;

      // getBooklistsByKeyword를 사용하여 데이터를 가져옵니다.
      response = await ApiGateway.getBooklistsByKeyword(keyword, offset, limit);

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
  const {
    getData,
    offset,
    incrementOffset,
    firstLoad,
    setSearchTerm,
    searchTerm,
    bookLists, // 상태 저장소에서 bookLists 추가
  } = useBookListsStore();

  const [ref, inView] = useInView();
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  let url;
  useEffect(() => {
    url = window.location;
    url = url.search.slice(6);
  }, []);

  useEffect(() => {
    if (firstLoad) {
      // getData를 적절한 키워드와 함께 호출합니다.
      getData(url, searchTerm, offset);
    }
  }, [offset, firstLoad, getData, searchTerm]);

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
      {/* bookLists를 렌더링합니다. */}
      <BookLinkList bookLists={bookLists} />
      <Box ref={ref}>.</Box>
    </Box>
  );
}
