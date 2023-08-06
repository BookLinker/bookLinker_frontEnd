import React, { useState, useRef, useEffect } from "react";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Carousel from "react-material-ui-carousel";

import TypeIt from "typeit-react";
import { useRouter } from "next/router";

const exampleBookList1 =
  "https://cdn.pixabay.com/photo/2015/09/09/21/33/vienna-933500_1280.jpg";
const exampleBookList2 =
  "https://cdn.pixabay.com/photo/2022/04/22/05/42/squid-game-7148889_1280.jpg";
const exampleBookList3 =
  "https://cdn.iworldtoday.com/news/photo/202111/406341_211986_410.png";

export default function SecondaryPage() {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        p: 6,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "rgb",
      }}
      component="footer"
    >
      <Typography variant="h5" align="center">
        인기 북 리스트들을 만나보세요!
      </Typography>

      <Box
        sx={{
          height: 650,
          width: "100%",
        }}
      >
        <Carousel
          NextIcon={<ArrowForwardIosIcon />}
          PrevIcon={<ArrowBackIosIcon sx={{ pl: 0.5, fontSize: 27 }} />}
          navButtonsAlwaysVisible={true}
          autoPlay={false}
          indicators={false}
          height={600}
          width={1500}
          background-color={"white"}
        >
          {/* 여기부터 첫번째 캐러셀 박스 */}
          <Box
            sx={{
              height: 630,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                height: 500,
                width: 350,
                backgroundColor: "white",
                margin: 3,
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.1)",
                  boxShadow: 5,
                },
              }}
            >
              <Box
                sx={{
                  height: 250,
                  width: 350,
                  backgroundColor: "beige",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  backgroundImage: `url(${exampleBookList1})`,
                  backgroundPosition: "center",
                }}
              />
              <Box sx={{ height: 250, width: 350 }}>
                <Typography
                  variant="h6"
                  align="left"
                  sx={{ pt: 2, pl: 1.5, fontWeight: "bold" }}
                >
                  시대를 풍미한 로맨스 세계문학
                </Typography>
                <Box sx={{ pl: 1, height: 30 }}>
                  <Chip sx={{ margin: 0.5 }} label="로맨스" size="small" />
                  <Chip sx={{ margin: 0.5 }} label="해외" size="small" />
                </Box>
                <Box sx={{ width: 350, height: 170 }}>
                  <Typography sx={{ padding: 1.5 }}>
                    인류의 감정과 역사를 아름답게 엮어내며 시대를 뛰어넘어
                    독자들에게 사랑의 감동과 갈등, 우정과 분별을 느끼게 하는
                    매혹적인 이야기들을 만나보세요!
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* 여기부터 두번째 캐러셀 박스 */}

            <Box
              sx={{
                height: 500,
                width: 350,
                backgroundColor: "white",
                margin: 3,
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.1)",
                  boxShadow: 5,
                },
              }}
            >
              <Box
                sx={{
                  height: 250,
                  width: 350,
                  backgroundColor: "beige",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  backgroundImage: `url(${exampleBookList2})`,
                  backgroundPosition: "center",
                }}
              />
              <Box sx={{ height: 250, width: 350 }}>
                <Typography
                  variant="h6"
                  align="left"
                  sx={{ pt: 2, pl: 1.5, fontWeight: "bold" }}
                >
                  넷플릭스에서 방영된 소설 원작
                </Typography>
                <Box sx={{ pl: 1, height: 30 }}>
                  <Chip sx={{ margin: 0.5 }} label="판타지" size="small" />
                  <Chip sx={{ margin: 0.5 }} label="해외" size="small" />
                  <Chip sx={{ margin: 0.5 }} label="현대 소설" size="small" />
                </Box>
                <Box sx={{ width: 350, height: 170 }}>
                  <Typography sx={{ padding: 1.5 }}>
                    금년 넷플릭스를 뜨겁게 달군 『퀸스 갬빗』부터 『버드 박스』,
                    『신기한 동물사전』 까지,
                    <br />
                    유명 넷플릭스의 작품들의 원작들을 모았습니다.
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* 여기부터 세번째 캐러셀 박스 */}

            <Box
              sx={{
                height: 500,
                width: 350,
                backgroundColor: "white",
                margin: 3,
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.1)",
                  boxShadow: 5,
                },
              }}
            >
              <Box
                sx={{
                  height: 250,
                  width: 350,
                  backgroundColor: "beige",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  backgroundImage: `url(${exampleBookList3})`,
                  backgroundPosition: "center",
                }}
              />
              <Box sx={{ height: 250, width: 350 }}>
                <Typography
                  variant="h6"
                  align="left"
                  sx={{ pt: 2, pl: 1.5, fontWeight: "bold" }}
                >
                  영화·드라마화 된 웹툰 북리스트
                </Typography>
                <Box sx={{ pl: 1, height: 30 }}>
                  <Chip sx={{ margin: 0.5 }} label="드라마" size="small" />
                  <Chip sx={{ margin: 0.5 }} label="로맨스" size="small" />
                  <Chip sx={{ margin: 0.5 }} label="판타지" size="small" />
                  <Chip sx={{ margin: 0.5 }} label="국내" size="small" />
                </Box>
                <Box sx={{ width: 350, height: 170 }}>
                  <Typography sx={{ padding: 1.5 }}>
                    그림을 넘어 드라마로 까지 만들어진 희대의 명작 국산 웹툰들.
                    <br />
                    신과함께, 치즈인더트랩, 은밀하게 위대하게, 패션왕 등 수록.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Carousel>
      </Box>

      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        취향에 맞는 태그와 제목을 검색해 나에게 맞는 북 리스트를 찾아보세요!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{
          mt: 1,
          backgroundColor: "#a0a0a0",
          color: "white",
          "&:hover": {
            backgroundColor: "#808080",
          },
        }}
      >
        더 많은 북 리스트 찾아보기
      </Button>
    </Box>
  );
}
