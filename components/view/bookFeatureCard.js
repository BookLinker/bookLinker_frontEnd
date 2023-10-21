import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import { Typography, Avatar, Divider } from "@mui/material";
import { useRouter } from "next/router";
import { useBookListStore } from "../../pages/view/[viewId]";
import { useCurrentTap } from "./bookSelectionList";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function BookFeatureCard() {
  const exampleThumbnail =
    "https://cdn.pixabay.com/photo/2014/10/23/10/10/dollars-499481_1280.jpg";
  let exampleBookImage1 =
    "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1547879%3Ftimestamp%3D20230227050851";

  const store = useBookListStore();
  const currentTapStore = useCurrentTap();

  console.log("피쳐카드 store>>", store);

  let titleText,
    recommendationText,
    authorsText,
    urlText,
    bookCoverImage,
    backgroundThumbnail;

  if (store.bookList.books && store.bookList.books.length > 0) {
    console.log("체>크", currentTapStore.currentTap);

    titleText = store.bookList.books[currentTapStore.currentTap].title;
    recommendationText =
      store.bookList.books[currentTapStore.currentTap].recommendation;
    authorsText = store.bookList.books[currentTapStore.currentTap].authors;
    urlText = store.bookList.books[currentTapStore.currentTap].url;
    bookCoverImage = store.bookList.books[currentTapStore.currentTap].image;
    backgroundThumbnail = store.bookList.backImg;
  }

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "honeydew",
        backgroundImage: `linear-gradient(rgba(256,256,256,0.6), rgba(256,256,256,0.6)), url(${backgroundThumbnail})`,
        alignItems: "center",
        justifyContent: "center",
        backgroundPosition: "center",
        backgroundSize: "cover",
        "@media (max-width: 1000px)": {
          minHeight: 250,
          backgroundImage: `linear-gradient(rgba(256,256,256,0.6), rgba(256,256,256,0.6)), url(${bookCoverImage})`,
          backgroundPosition: "top",
          backgroundSize: "cover",
          mt: 10,
        },
        ml: 2,
        mr: 30,
      }}
    >
      <ArrowBackIosIcon
        sx={{
          fontSize: 75,
          cursor: "pointer",
          color: currentTapStore.currentTap === 0 ? "lightgray" : "inherit",
        }}
        onClick={() =>
          currentTapStore.currentTap !== 0 &&
          useCurrentTap.setState({ currentTap: currentTapStore.currentTap - 1 })
        }
      />
      <Box
        sx={{
          display: "flex",
          width: "80%",
          height: "80%",
          backgroundColor: "rgba(255,255,255,0.6)",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          "@media (max-width: 1000px)": {
            backgroundColor: "transparent",
            height: "100%",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            //backgroundColor: "blanchedalmond",
            alignItems: "center",
            justifyContent: "center",
            height: "92%",
            width: "30%",
            mr: 2,
            "@media (max-width: 1000px)": {
              display: "none",
            },
          }}
        >
          <img
            src={bookCoverImage}
            alt="Book Cover"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain", // 이미지가 Box에 맞게 조절되도록 합니다.
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            backgroundColor: "rgba(0,0,0,0.7)",
            width: "60%",
            height: "60%",
            flexDirection: "column",
            padding: 3,
            minWidth: "400px",
            zIndex: 3,
            "@media (max-width: 1000px)": {
              height: "100%",
              width: "100%",
            },
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            {titleText && (
              <Typography
                sx={{
                  fontSize: 25,
                  fontWeight: "bold",
                  color: "white",
                  "@media (max-width: 1000px)": { fontSize: 20 },
                }}
              >
                {titleText}
              </Typography>
            )}
            <Box
              sx={{
                flexDirection: "column",
                "@media (max-width: 1000px)": { flexDirection: "row" },
                pl: 3,
              }}
            >
              {authorsText && (
                <div>
                  <Typography
                    sx={{
                      fontSize: 15,
                      color: "white",
                      "@media (max-width: 1000px)": { fontSize: 20 },
                    }}
                  >
                    {authorsText}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 15,
                      color: "white",
                      "@media (max-width: 1000px)": { fontSize: 20 },
                    }}
                  >
                    작성일자
                  </Typography>
                </div>
              )}
            </Box>
          </Box>
          <Divider sx={{ border: "2px solid black", mt: 1, mb: 1 }} />
          {recommendationText && (
            <Typography
              sx={{
                fontSize: 20,
                "@media (max-width: 600px)": { fontSize: 15 },
                color: "white",
                pt: 1,
              }}
            >
              {recommendationText}
            </Typography>
          )}
        </Box>
      </Box>
      <ArrowForwardIosIcon
        sx={{
          fontSize: 75,
          cursor: "pointer",
          color:
            store.bookList.books &&
            currentTapStore.currentTap === store.bookList.books.length - 1
              ? "lightgray"
              : "inherit",
        }}
        onClick={() =>
          currentTapStore.currentTap + 1 < store.bookList.books.length &&
          useCurrentTap.setState({ currentTap: currentTapStore.currentTap + 1 })
        }
      />
    </Box>
  );
}
