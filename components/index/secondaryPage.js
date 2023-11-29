import React, { useState, useRef, useEffect } from "react";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Carousel from "react-material-ui-carousel";
import ApiGateway from "@/apis/ApiGateway";

import TypeIt from "typeit-react";
import { useRouter } from "next/router";

const exampleBookList1 =
  "https://cdn.pixabay.com/photo/2015/09/09/21/33/vienna-933500_1280.jpg";
const exampleBookList2 =
  "https://cdn.pixabay.com/photo/2022/04/22/05/42/squid-game-7148889_1280.jpg";
const exampleBookList3 =
  "https://cdn.iworldtoday.com/news/photo/202111/406341_211986_410.png";

function chunkArray(arr, chunkSize) {
  const result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
}

export default function SecondaryPage() {
  const router = useRouter();
  const [recommendByViewCounts, setRecommendByViewCounts] = useState([]);

  // 책 추천: 조회수 순 정렬 API 호출
  const getRecommendByViewCounts = async () => {
    try {
      const response = await ApiGateway.getRecommendBookListByViewCounts(0, 9);
      setRecommendByViewCounts(response);
    } catch (error) {
      console.error("책 추천: 조회수 순 정렬 API 호출 중 오류 발생", error);
    }
  };

  useEffect(() => {
    getRecommendByViewCounts();
  }, []);

  // 데이터 그룹화
  const groupedData = chunkArray(recommendByViewCounts, 3);

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
      <Typography variant="h5" align="center" sx={{ pt: 3 }}>
        🏛️ 인기 북 리스트들을 만나보세요!
      </Typography>

      <Box
        sx={{
          height: 600,
          width: "100%",
        }}
      >
        <Carousel
          NextIcon={<ArrowForwardIosIcon />}
          PrevIcon={<ArrowBackIosIcon sx={{ pl: 0.5, fontSize: 27 }} />}
          navButtonsAlwaysVisible={true}
          autoPlay={true}
          interval={5000}
          duration={800}
          indicators={false}
          height={600}
          width={1500}
          background-color={"red"}
          animation="slide"
        >
          {groupedData.map((group, groupIndex) => (
            <Box
              key={groupIndex}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "transform 0.3s",
              }}
            >
              {group.map((item) => (
                <Box
                  key={item.bookListId}
                  sx={{
                    height: 500,
                    width: 350,
                    backgroundColor: "white",
                    margin: 3,
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "scale(1.1)",
                      boxShadow: 5,
                      cursor: "pointer",
                    },
                    "@media (max-width: 1000px)": {
                      width: 300,
                    },
                  }}
                  onClick={() => router.push(`/view/${item.bookListId}`)}
                >
                  <Box
                    sx={{
                      height: 250,
                      width: 350,
                      backgroundColor: "beige",
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                      backgroundImage: `url(${item.backImg})`,
                      backgroundPosition: "center",
                      "@media (max-width: 1000px)": {
                        backgroundPosition: "center",
                        width: 300,
                      },
                    }}
                  />
                  <Box
                    sx={{
                      height: 250,
                      width: 350,
                      "@media (max-width: 1000px)": {
                        width: 300,
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      align="left"
                      sx={{ pt: 2, pl: 1.5, fontWeight: "bold" }}
                    >
                      {item.title}
                    </Typography>
                    <Box sx={{ flex: 1, pl: 0.7 }}>
                      {item.books.slice(0, 2).map((book, index) => (
                        <Chip
                          key={index}
                          sx={{ margin: 0.5 }}
                          label={`「${book.title}」`}
                          size="small"
                        />
                      ))}
                      {item.books.length > 2 && (
                        <Chip
                          sx={{ margin: 0.5 }}
                          label={`외 ${item.books.length - 3}권`}
                          size="small"
                        />
                      )}
                    </Box>
                    <Box
                      sx={{
                        width: 350,
                        height: 170,
                        "@media (max-width: 1000px)": {
                          width: 300,
                        },
                      }}
                    >
                      <Typography sx={{ padding: 1.5 }}>
                        {item.content}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          ))}
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
        onClick={() => router.push("/booklist")}
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
