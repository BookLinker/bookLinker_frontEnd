import React, { useState, useRef, useEffect } from "react";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useRouter } from "next/router";

const libraryBackgroundImage =
  "https://cdn.pixabay.com/photo/2016/02/16/21/07/books-1204029_1280.jpg";

export default function ThirdPage() {
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
            backgroundImage: `linear-gradient(to left, rgba(255, 255, 255, 1) 90%, transparent 100%), url(${libraryBackgroundImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            flexDirection: "row",
            transition: "transform 0.3s",
            "&:hover": {
              transform: "scale(1.025)",
              boxShadow: 5,
            },
          }}
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
                2023 자기계발서 베스트셀러 모음!
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
                이름과, 하나의 벌써 토끼, 새겨지는 별이 그리고 것은 없이
                있습니다. 했던 위에 아름다운 덮어 밤을 그러나 이름과 까닭이요,
                봅니다. 이름자를 어머니, 위에 별 나의 것은 계절이 버리었습니다.
                나는 써 하나에 그리고 동경과 가을로 멀듯이, 계십니다. 위에
                이네들은 가득 까닭입니다. 못 피어나듯이 아름다운 부끄러운
                지나가는 잠, 봅니다. 이름과, 가을 별 아름다운 흙으로 별빛이
                봅니다.
              </Typography>
            </Box>
            <Box sx={{ flex: 1, pl: 0.7 }}>
              <Chip sx={{ margin: 0.5 }} label="로맨스" size="small" />
              <Chip sx={{ margin: 0.5 }} label="판타지" size="small" />
              <Chip sx={{ margin: 0.5 }} label="국내" size="small" />
            </Box>
          </Box>
          <Box sx={{ flex: 1 }}></Box>
        </Box>
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
            backgroundImage: `linear-gradient(to left, rgba(255, 255, 255, 1) 90%, transparent 100%), url(${libraryBackgroundImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            flexDirection: "row",
            transition: "transform 0.3s",
            "&:hover": {
              transform: "scale(1.025)",
              boxShadow: 5,
            },
          }}
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
                2023 자기계발서 베스트셀러 모음!
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
                  //maxHeight: "2.8em", // Adjust this value based on your needs
                }}
              >
                사람들의 내 내 봅니다. 까닭이요, 벌레는 나는 듯합니다. 아무 우는
                사람들의 잠, 다 별이 이름을 까닭입니다. 소녀들의 새겨지는
                사람들의 내 내 봅니다. 까닭이요, 벌레는 나는 듯합니다. 아무 우는
                사람들의 잠, 다 별이 이름을 까닭입니다. 소녀들의 새겨지는
                사람들의 내 내 봅니다. 까닭이요, 벌레는 나는 듯합니다. 아무 우는
                사람들의 잠, 다 별이 이름을 까닭입니다. 소녀들의 새겨지는
                사람들의 내 내 봅니다. 까닭이요, 벌레는 나는 듯합니다. 아무 우는
                사람들의 잠, 다 별이 이름을 까닭입니다. 소녀들의 새겨지는
              </Typography>
            </Box>
            <Box sx={{ flex: 1, pl: 0.7 }}>
              <Chip sx={{ margin: 0.5 }} label="로맨스" size="small" />
              <Chip sx={{ margin: 0.5 }} label="판타지" size="small" />
              <Chip sx={{ margin: 0.5 }} label="국내" size="small" />
            </Box>
          </Box>
          <Box sx={{ flex: 1 }}></Box>
        </Box>
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
            backgroundImage: `linear-gradient(to left, rgba(255, 255, 255, 1) 90%, transparent 100%), url(${libraryBackgroundImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            flexDirection: "row",
            transition: "transform 0.3s",
            "&:hover": {
              transform: "scale(1.025)",
              boxShadow: 5,
            },
          }}
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
                2023 자기계발서 베스트셀러 모음!
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
                  //maxHeight: "2.8em", // Adjust this value based on your needs
                }}
              >
                사람들의 내 내 봅니다. 까닭이요, 벌레는 나는 듯합니다. 아무 우는
                사람들의 잠, 다 별이 이름을 까닭입니다. 소녀들의 새겨지는
                사람들의 내 내 봅니다. 까닭이요, 벌레는 나는 듯합니다. 아무 우는
                사람들의 잠, 다 별이 이름을 까닭입니다. 소녀들의 새겨지는
                사람들의 내 내 봅니다. 까닭이요, 벌레는 나는 듯합니다. 아무 우는
                사람들의 잠, 다 별이 이름을 까닭입니다. 소녀들의 새겨지는
                사람들의 내 내 봅니다. 까닭이요, 벌레는 나는 듯합니다. 아무 우는
                사람들의 잠, 다 별이 이름을 까닭입니다. 소녀들의 새겨지는
              </Typography>
            </Box>
            <Box sx={{ flex: 1, pl: 0.7 }}>
              <Chip sx={{ margin: 0.5 }} label="로맨스" size="small" />
              <Chip sx={{ margin: 0.5 }} label="판타지" size="small" />
              <Chip sx={{ margin: 0.5 }} label="국내" size="small" />
            </Box>
          </Box>
          <Box sx={{ flex: 1 }}></Box>
        </Box>
      </Box>
    </Box>
  );
}
