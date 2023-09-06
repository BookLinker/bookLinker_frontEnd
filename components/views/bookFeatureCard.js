import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import { Typography, Avatar, Divider } from "@mui/material";
import { useRouter } from "next/router";

export default function BookFeatureCard() {
  const exampleThumbnail =
    "https://cdn.pixabay.com/photo/2014/10/23/10/10/dollars-499481_1280.jpg";
  const exampleBookImage1 =
    "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791188331796.jpg";

  return (
    <Box
      sx={{
        display: "flex",
        flex: 10,
        backgroundColor: "honeydew",
        backgroundImage: `linear-gradient(rgba(256,256,256,0.6), rgba(256,256,256,0.6)), url(${exampleThumbnail})`,
        alignItems: "center",
        justifyContent: "center",
        "@media (max-width: 1000px)": {
          minHeight: 300,
          backgroundImage: `linear-gradient(rgba(256,256,256,0.6), rgba(256,256,256,0.6)), url(${exampleBookImage1})`,
          backgroundPosition: "top",
          backgroundSize: "cover",
        },
      }}
    >
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
            backgroundImage: `url(${exampleBookImage1})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            height: "92%",
            width: "33%",
            mr: 2,
            "@media (max-width: 1000px)": {
              display: "none",
            },
          }}
        />
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
            <Typography
              sx={{
                fontSize: "2em",
                fontWeight: "bold",
                color: "white",
                "@media (max-width: 1000px)": { fontSize: 20 },
              }}
            >
              돈의 속성
            </Typography>
            <Box
              sx={{
                flexDirection: "column",
                "@media (max-width: 1000px)": { flexDirection: "row" },
                pl: 3,
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.2em",
                  color: "white",
                  "@media (max-width: 1000px)": { fontSize: 20 },
                }}
              >
                링크
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.2em",
                  color: "white",
                  "@media (max-width: 1000px)": { fontSize: 20 },
                }}
              >
                작성일자
              </Typography>
            </Box>
          </Box>
          <Divider sx={{ border: "2px solid black", mt: 1, mb: 1 }} />
          <Typography
            sx={{
              fontSize: 20,
              "@media (max-width: 600px)": { fontSize: 15 },
              color: "white",
              pt: 1,
            }}
          >
            구하기 열락의 쓸쓸한 위하여서, 고동을 그들을 불어 보라. 피어나기
            인생의 하는 산야에 인간이 힘있다. 그들의 그들은 이상은 풍부하게
            무엇을 그림자는 설산에서 과실이 철환하였는가
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
