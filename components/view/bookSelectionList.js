import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import { Typography, Avatar, Divider } from "@mui/material";
import { useRouter } from "next/router";
import { create } from "zustand";
import { useBookListStore } from "../../pages/view/[viewId]";

export const useCurrentTap = create(() => ({
  currentTap: 0,
}));

export default function BookSelectionList() {
  const store = useBookListStore();
  const currentTapStore = useCurrentTap();
  const books = store.bookList.books;
  let bookLength;

  if (store.bookList.books && store.bookList.books.length > 0) {
    bookLength = store.bookList.books.length;
    console.log(bookLength);
  }

  return (
    <Box
      sx={{
        display: "flex",
        flex: 0.8,
        backgroundColor: "rgb(200,200,200)",
        minWidth: "200px",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {BooksTapButtons({ bookLength, books })}
    </Box>
  );
}

function BooksTapButtons({ bookLength, books }) {
  const { currentTap } = useCurrentTap();

  if (!books || books.length === 0) {
    return <p>No books available.</p>;
  }

  return books.map((book, index) => (
    <Box
      key={index}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        height: 150,
        backgroundColor: "red",
        mt: 3,
        backgroundImage: `
        linear-gradient(to top, rgba(0, 0, 0, 0.7) 20%, transparent 80%),
        url(${book.image})
      `,
        backgroundPosition: "center",
        backgroundSize: "cover",
        cursor: "pointer",
        borderRadius: 3,
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.1)",
          boxShadow: 5,
        },
        ...(index === currentTap && {
          outline: "2px solid black",
          outlineOffset: "4px",
        }),
      }}
      onClick={() => {
        useCurrentTap.setState({ currentTap: index });
      }}
    >
      <Typography sx={{ marginTop: "auto", pl: 1, pb: 1, color: "white" }}>
        {book.title}
      </Typography>
    </Box>
  ));
}
