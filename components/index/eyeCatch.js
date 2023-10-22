import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TypeIt from "typeit-react";

const libraryBackgroundImage =
  "https://cdn.pixabay.com/photo/2016/02/16/21/07/books-1204029_1280.jpg";

export default function EyeCatch() {
  const [backgroundPosition, setBackgroundPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      // 배경 이미지를 아무런 조작 없이도 조금씩 이동
      setBackgroundPosition((prevPosition) => ({
        x: prevPosition.x + 1,
        y: prevPosition.y + 1,
      }));
    }, 80); // 이동 간격 (밀리초)
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        height: { xs: "800px", sm: "600px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.4)), url(${libraryBackgroundImage})`,
        backgroundPosition: `${backgroundPosition.x}px ${backgroundPosition.y}px`,
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
