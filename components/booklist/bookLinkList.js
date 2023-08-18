import React, { useState, useRef, useEffect } from "react";

import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function BookLinkList() {
  const exampleImage =
    "https://cdn.pixabay.com/photo/2019/02/15/11/04/book-3998252_1280.jpg";

  const items = Array.from({ length: 20 }, (_, index) => `아이템 ${index + 1}`);

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
      <Grid container spacing={2} justifyContent="center">
        {items.map((item, index) => (
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
                },
              }}
            >
              <Box
                sx={{
                  flex: 1.5,
                  backgroundImage: `
                    linear-gradient(to top, rgba(0, 0, 0, 0.7) 20%, transparent 40%),
                    url(${exampleImage})
                  `,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                }}
              ></Box>
              <Box sx={{ flex: 1, padding: "3px" }}>
                <Box sx={{ mt: -4.6, pl: 0.3 }}>
                  <Chip
                    sx={{
                      margin: 0.3,
                      backgroundColor: "rgb(235,235,235)",
                      fontSize: "12px",
                    }}
                    label="로맨스"
                    size="small"
                  />
                  <Chip
                    sx={{
                      margin: 0.3,
                      backgroundColor: "rgb(235,235,235)",
                      fontSize: "12px",
                    }}
                    label="판타지"
                    size="small"
                  />
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
                  {item}
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
                  가슴 속에 하나 둘 새겨지는 별을 이제 다 못 헤는 것은 쉬이
                  아침이 오는 까닭이요, 내일 밤이 남은 까닭이요, 아직 나의
                  청춘이 다하지 않은 까닭입니다. 가슴 속에 하나 둘 새겨지는 별을
                  이제 다 못 헤는 것은 쉬이 아침이 오는 까닭이요, 내일 밤이 남은
                  까닭이요, 아직 나의 청춘이 다하지 않은 까닭입니다.
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
