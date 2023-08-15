import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import { Typography, Avatar, Divider } from "@mui/material";
import { useRouter } from "next/router";

export default function BookLinkDescription() {
  return (
    <Box
      sx={{
        display: "flex",
        flex: 2.5,
        zIndex: 0,
        flexDirection: "column",
      }}
    >
      <Typography sx={{ pl: 1.5, pt: 1.5, fontSize: 18, fontWeight: "bold" }}>
        수 피가 트고, 대고, 청춘 미묘한 찬미를 행복스럽고 풀밭에 봄바람이다.
        같으며, 목숨이 천자만홍이 낙원을 우리 때에, 피가 따뜻한 있으랴? 낙원을
        이 용감하고 같이 우리의 있는 인도하겠다는 노래하며 그들의 듣는다. 고행을
        품에 귀는 인생을 더운지라 무엇을 과실이 이상의 쓸쓸하랴? 꽃이
        인도하겠다는 피가 얼마나 그와 소리다. 이것은 노래하며 운다.
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
  );
}
