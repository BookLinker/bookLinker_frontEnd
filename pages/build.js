import React, { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Divider from "@mui/material/Divider";

import { useRouter } from "next/router";
import TopNavigationBar from "@/components/common/topNavigationBar";

import TitleIcon from "@mui/icons-material/Title";

function Build() {
  const router = useRouter();

  const backgroundImage =
    "https://cdn.pixabay.com/photo/2014/08/16/18/17/book-419589_1280.jpg";

  const [bookList, setBookList] = useState([
    {
      key: 0,
      title: "",
      description: "",
    },
  ]);

  const addBook = () => {
    const newBookList = [...bookList];
    const newKey = bookList.length;
    newBookList.push({
      key: newKey,
      title: "",
      description: "",
    });
    setBookList(newBookList);
  };

  const removeBook = (key) => {
    if (bookList.length === 1) {
      alert("🚨 남은 책이 하나 뿐이에요 ㅠㅠ");
      return;
    }

    const updatedBookList = bookList.filter((book) => book.key !== key);
    setBookList(updatedBookList);
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        backgroundImage: `
    linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 100%),
    url(${backgroundImage})
  `,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <TopNavigationBar />
      <Box
        sx={{
          display: "flex",
          margin: "0 auto", // 가운데 정렬
          padding: "0 20px", // 좌우 여백
          maxWidth: "1200px", // 최대 너비
          width: "100%", // 기본 너비
          height: "100vh",
          "@media (max-width: 960px)": {
            padding: "0 10px", // 모바일 및 태블릿에서 좌우 여백 줄임
          },
          backgroundColor: "rgb(243,243,243)",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "95%",
            height: "100vh",
            mt: 12,
            pl: 3,
            pr: 3,
            pt: 3,
          }}
        >
          <Typography sx={{ fontSize: 22, pb: 1, fontWeight: "bold" }}>
            🧑 제목
          </Typography>
          <TextField
            hiddenLabel
            fullWidth
            placeholder="제목을 입력하세요 (3~20자)"
            InputProps={{
              sx: { backgroundColor: "white", border: "1px solid black" },
            }}
          />
          <Typography sx={{ fontSize: 22, pt: 4, pb: 1, fontWeight: "bold" }}>
            💬 설명
          </Typography>
          <TextField
            hiddenLabel
            fullWidth
            placeholder="책리스트의 설명을 입력하세요 (3~50자)"
            multiline={true}
            rows={3}
            InputProps={{
              sx: { backgroundColor: "white", border: "1px solid black" },
            }}
          />
          {bookList.map((book) => (
            <Box
              key={book.key}
              sx={{
                width: "100%",
                height: 260,
                backgroundColor: "rgb(100,100,100)",
                mt: 4,
                borderRadius: 3,
                padding: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: "bold",
                    pb: 2,
                    color: "white",
                  }}
                >
                  📕 원하는 책을 선택해주세요!
                </Typography>

                <Typography
                  sx={{
                    fontSize: 22,
                    fontWeight: "bold",
                  }}
                  onClick={() => removeBook(book.key)}
                >
                  🗑️
                </Typography>
              </Box>
              <Autocomplete
                hiddenLabel
                disablePortal
                options={top100Films}
                sx={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="책 이름을 검색하세요!"
                    InputProps={{
                      sx: {
                        backgroundColor: "white",
                        border: "1px solid black",
                      },
                    }}
                  />
                )}
              />
              <TextField
                hiddenLabel
                fullWidth
                placeholder="책에 대해 간단히 소개해주세요! (3~50자)"
                multiline={true}
                rows={3}
                sx={{ pt: 2 }}
                InputProps={{
                  sx: { backgroundColor: "white", border: "1px solid black" },
                }}
              />
            </Box>
          ))}
          <Box
            sx={{
              display: "flex",
              height: 50,
              width: 120,
              mt: 1,
              backgroundColor: "teal",
              float: "right",
              borderRadius: 2,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
            onClick={addBook}
          >
            <Typography sx={{ fontSize: 20 }}>➕</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
];

export default Build;
