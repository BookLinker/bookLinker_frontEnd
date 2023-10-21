import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import TypeIt from "typeit-react";

const libraryBackgroundImage =
  "https://cdn.pixabay.com/photo/2016/02/16/21/07/books-1204029_1280.jpg";

export default function EyeCatch() {
  //움직이는 배경을 위한 스크립트
  const boxRef = useRef(null);
  useEffect(() => {
    const boxElement = boxRef.current;
    if (!boxElement) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { top, left, width, height } = boxElement.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const moveX = (clientX - centerX) / (width / 2);
      const moveY = (clientY - centerY) / (height / 2);

      boxElement.style.backgroundPosition = `${moveX * 50}px ${moveY * 50}px`;
    };

    boxElement.addEventListener("mousemove", handleMouseMove);

    return () => {
      boxElement.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Box
      ref={boxRef}
      sx={{
        height: { xs: "800px", sm: "600px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.4)), url(${libraryBackgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        transition: "background-position 0.3s ease-out",
        overflow: "hidden",
      }}
    >
      <Typography variant="h5" align="center" sx={{ mt: -2 }}>
        독서의 모든 것<br />
        책으로 쌓은 플레이리스트
      </Typography>
      <Typography variant="h2" align="center" sx={{ mt: 3 }}>
        <TypeIt>Book Linker</TypeIt>
      </Typography>
      <Typography>나만의 책, 나만의 리스트.</Typography>
    </Box>
  );
}
