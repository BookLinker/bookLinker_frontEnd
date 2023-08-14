import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import { Typography, Avatar, Divider } from "@mui/material";
import { useRouter } from "next/router";

import TopNavigationBar from "@/components/common/topNavigationBar";

const exampleThumbnail =
  "https://cdn.pixabay.com/photo/2014/10/23/10/10/dollars-499481_1280.jpg";
const exampleBookImage1 =
  "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791188331796.jpg";
const exampleBookImage2 =
  "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791158883591.jpg";
const exampleBookImage3 =
  "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788959897094.jpg";

function Views() {
  const router = useRouter();
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
            minWidth: "400px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flex: 1,
            }}
          >
            <Typography variant="h5" sx={{ pt: 2, pl: 1, fontWeight: "bold" }}>
              [2023] 교보문고 선정 경제부문 베스트셀러
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flex: 10,
              backgroundColor: "honeydew",
              backgroundImage: `linear-gradient(rgba(256,256,256,0.6), rgba(256,256,256,0.6)), url(${exampleThumbnail})`,
              alignItems: "center",
              justifyContent: "center",
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
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <Typography
                    sx={{
                      fontSize: "2em",
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    돈의 속성
                  </Typography>
                  <Box sx={{ flexDirection: "column", pl: 3 }}>
                    <Typography sx={{ fontSize: "1.2em", color: "white" }}>
                      링크
                    </Typography>
                    <Typography sx={{ fontSize: "1.2em", color: "white" }}>
                      작성일자
                    </Typography>
                  </Box>
                </Box>
                <Divider sx={{ border: "2px solid black", mt: 1, mb: 1 }} />
                <Typography
                  sx={{
                    fontSize: 20,
                    "@media (max-width: 600px)": { fontSize: 10 },
                    color: "white",
                    pt: 1,
                  }}
                >
                  구하기 열락의 쓸쓸한 위하여서, 고동을 그들을 불어 보라.
                  피어나기 인생의 하는 산야에 인간이 힘있다. 그들의 그들은
                  이상은 풍부하게 무엇을 그림자는 설산에서 과실이 철환하였는가
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flex: 2.5,
              //backgroundColor: "teal",
              zIndex: 0,
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{ pl: 1.5, pt: 1.5, fontSize: 18, fontWeight: "bold" }}
            >
              수 피가 트고, 대고, 청춘 미묘한 찬미를 행복스럽고 풀밭에
              봄바람이다. 같으며, 목숨이 천자만홍이 낙원을 우리 때에, 피가
              따뜻한 있으랴? 낙원을 이 용감하고 같이 우리의 있는 인도하겠다는
              노래하며 그들의 듣는다. 고행을 품에 귀는 인생을 더운지라 무엇을
              과실이 이상의 쓸쓸하랴? 꽃이 인도하겠다는 피가 얼마나 그와 소리다.
              이것은 노래하며 운다.
            </Typography>
            <Typography
              sx={{
                pl: 1.5,
                fontSize: 14,
                fontWeight: "bold",
                color: "darkgray",
              }}
            >
              #경제 #베스트셀러
            </Typography>
            <Box sx={{ display: "flex", pl: 1.5, pt: 1.5, width: "100%" }}>
              <Typography
                sx={{ fontSize: 16, fontWeight: "bold", color: "darkgray" }}
              >
                [댓글] (9개)
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flex: 0.8,
            //backgroundColor: "navajowhite",
            minWidth: "200px",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{ width: "80%", height: 150, backgroundColor: "tan", mt: 3 }}
          />
          <Box
            sx={{ width: "80%", height: 150, backgroundColor: "tan", mt: 3 }}
          />
          <Box
            sx={{ width: "80%", height: 150, backgroundColor: "tan", mt: 3 }}
          />
          <Box
            sx={{ width: "80%", height: 150, backgroundColor: "tan", mt: 3 }}
          />
        </Box>
      </Box>
    </Box>
  );
}
export default Views;
