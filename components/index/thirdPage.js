import React, { useState, useRef, useEffect } from "react";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ApiGateway from "@/apis/ApiGateway";

import { useRouter } from "next/router";

const libraryBackgroundImage =
  "https://cdn.pixabay.com/photo/2016/02/16/21/07/books-1204029_1280.jpg";

export default function ThirdPage() {
  const router = useRouter();

  const [recommendByComments, setRecommendByComments] = useState([]);

  const getRecommendByComments = async () => {
    try {
      const response = await ApiGateway.getRecommendBookListByComments(0, 3);
      console.log("책 추천: 댓글 순 정렬 API 응답:", response);
      setRecommendByComments(response);
    } catch (error) {
      console.error("책 추천: 조회수 순 정렬 API 호출 중 오류 발생", error);
    }
  };

  useEffect(() => {
    getRecommendByComments();
  }, []);

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 8,
        pb: 6,
        height: "600px",
        backgroundColor: "beige",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h5" align="center">
        이런 북 리스트는 어떠신가요?
      </Typography>
      <Box sx={{ marginTop: 5, height: 650, width: "70%" }}>
        {recommendByComments.map((item) => (
          <Box
            sx={{
              backgroundColor: "white",
              height: 130,
              width: "100%",
              marginTop: 1,
              marginBottom: 2,
              borderRadius: 5,
              border: 1.5,
              borderColor: "lightgray",
              display: "flex",
              backgroundImage: `linear-gradient(to left, rgba(255, 255, 255, 1) 90%, transparent 100%), url(${item.backImg})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              flexDirection: "row",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.025)",
                boxShadow: 5,
                cursor: "pointer",
              },
            }}
            onClick={() => router.push(`/view/${item.bookListId}`)}
          >
            <Box sx={{ flex: 1.1 }}></Box>
            <Box sx={{ flex: 8, display: "flex", flexDirection: "column" }}>
              <Box sx={{ flex: 1 }}>
                <Typography
                  align="left"
                  sx={{
                    pt: 1.5,
                    pl: 1.5,
                    fontWeight: "bold",
                    fontSize: "18px",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
              <Box
                sx={{
                  flex: 1.6,
                  textOverflow: "ellipsis",
                }}
              >
                <Typography
                  color="text.secondary"
                  sx={{
                    pl: 1.5,
                    fontSize: "12px",
                    overflow: "hidden",
                    position: "relative",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {item.content}
                </Typography>
              </Box>
              {/*
              <Box sx={{ flex: 1, pl: 0.7 }}>
                <Chip sx={{ margin: 0.5 }} label="로맨스" size="small" />
                <Chip sx={{ margin: 0.5 }} label="판타지" size="small" />
                <Chip sx={{ margin: 0.5 }} label="국내" size="small" />
              </Box>
                */}
            </Box>
            <Box sx={{ flex: 1 }}></Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
