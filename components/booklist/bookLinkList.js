import React, { useState, useRef, useEffect } from "react";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useBookListsStore } from "@/pages/booklist";
import { useRouter } from "next/router";

export default function BookLinkList() {
  const router = useRouter();

  const exampleImage =
    "https://cdn.pixabay.com/photo/2019/02/15/11/04/book-3998252_1280.jpg";

  const store = useBookListsStore();
  let bookLists;

  return (
    <Box
      sx={{
        width: "90%",
        marginX: "auto",
        display: "flex",
        justifyContent: "center",
        pt: 3,
      }}
    >
      {Array.isArray(store.bookLists) ? (
        <Grid container spacing={2} justifyContent="center">
          {store.bookLists.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={4} xl={4}>
              <Box
                sx={{
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  backgroundColor: "white",
                  height: "300px",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s",
                  margin: 2.5,
                  "&:hover": {
                    transform: "scale(1.025)",
                    boxShadow: 10,
                    cursor: "pointer",
                  },
                }}
                onClick={() => {
                  router.push(`/view/${item.bookListId}`);
                }}
              >
                <Box
                  sx={{
                    flex: 1.5,
                    backgroundImage: `
            linear-gradient(to top, rgba(0, 0, 0, 0.7) 20%, transparent 40%),
            url(${item.backImg})`, // item 객체의 backImg 속성 사용
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    borderTopLeftRadius: "8px",
                    borderTopRightRadius: "8px",
                  }}
                ></Box>
                <Box sx={{ flex: 1, padding: "3px" }}>
                  <Box sx={{ mt: -4.6, pl: 0.3 }}>
                    {item.hashTag.split(" ").map((tag, tagIndex) => (
                      <Chip
                        key={tagIndex}
                        sx={{
                          margin: 0.3,
                          backgroundColor: "rgb(235,235,235)",
                          fontSize: "12px",
                        }}
                        label={tag}
                        size="small"
                      />
                    ))}
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      pl: 0.5,
                      pt: 1.2,
                      overflow: "hidden",
                      position: "relative",
                      display: "-webkit-box",
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "14px",
                      pl: 0.5,
                      pr: 0.5,
                      fontSize: "12px",
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {item.content}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      ) : (
        <p>데이터를 로드하는 중입니다.</p>
      )}
    </Box>
  );
}
