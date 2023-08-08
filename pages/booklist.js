"use client";
import React, { useState, useRef, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";

import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MenuIcon from "@mui/icons-material/Menu";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { M_PLUS_1 } from "next/font/google";
import Carousel from "react-material-ui-carousel";
import TypeIt from "typeit-react";

import TopNavigationBar from "@/components/common/topNavigationBar";

const exampleImage =
  "https://cdn.pixabay.com/photo/2019/02/15/11/04/book-3998252_1280.jpg";

function booklist() {
  //최신순 / 인기순 토글에 필요한 스크립트
  const [sortOption, setSortOption] = useState("popular");

  const handleSortChange = (event, newSortOption) => {
    if (newSortOption !== null) {
      setSortOption(newSortOption);
    }
  };

  //검색창을 위한 스크립트
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Handle search logic here (e.g., perform search using searchTerm)
    console.log("Searching for:", searchTerm);
  };

  const items = Array.from({ length: 20 }, (_, index) => `아이템 ${index + 1}`);

  return (
    <Box>
      <TopNavigationBar />
      <Box
        sx={{
          width: "100%",
          height: 150,
          backgroundColor: "white",
          pt: 10,
          display: "flex",
          justifyContent: "center",
          pl: 3,
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "right",
          }}
        >
          <ToggleButtonGroup
            value={sortOption}
            exclusive
            onChange={handleSortChange}
            aria-label="Sort options"
            sx={{ whiteSpace: "nowrap" }}
          >
            <ToggleButton
              value="popular"
              aria-label="Popular"
              sx={{
                fontSize: "12px",
                padding: "2px 10px",
                height: "50px",
                "&.Mui-selected": {
                  backgroundColor: "gray",
                  color: "white",
                },
              }}
            >
              인기순
            </ToggleButton>
            <ToggleButton
              value="latest"
              aria-label="Latest"
              sx={{
                fontSize: "12px",
                padding: "2px 10px",
                height: "50px",
                "&.Mui-selected": {
                  backgroundColor: "gray",
                  color: "white",
                },
              }}
            >
              최신순
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Box
          sx={{
            display: "flex",
            pl: 3,
            flex: 5,
            mr: 10,
            justifyContent: "center",
          }}
        >
          <InputBase
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{
              width: "80%",
              borderRadius: "4px",
              backgroundColor: "#f0f0f0",
              paddingLeft: "10px",
              marginRight: "10px",
              height: "50px",
            }}
          />
          <IconButton
            onClick={handleSearch}
            aria-label="search"
            sx={{
              padding: "10px",
              backgroundColor: "#007BFF",
              borderRadius: "4px",
              height: "50px",
              backgroundColor: "gray",
            }}
          >
            <SearchIcon style={{ color: "#fff" }} />
          </IconButton>
        </Box>
      </Box>
      /* 여기부터 아이템*/
      <Box
        sx={{
          width: "90%",
          marginX: "auto",
          display: "flex",
          justifyContent: "center",
          pt: 3,
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          {items.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={4} xl={4}>
              <Box
                sx={{
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  backgroundColor: "white",
                  height: "300px",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s",
                  margin: 2.5,
                  "&:hover": {
                    transform: "scale(1.025)",
                    boxShadow: 10,
                  },
                }}
              >
                <Box
                  sx={{
                    flex: 1.5,
                    backgroundImage: `
                    linear-gradient(to top, rgba(0, 0, 0, 0.7) 20%, transparent 40%),
                    url(${exampleImage})
                  `,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    borderTopLeftRadius: "8px",
                    borderTopRightRadius: "8px",
                  }}
                ></Box>
                <Box sx={{ flex: 1, padding: "3px" }}>
                  <Box sx={{ mt: -4.6, pl: 0.3 }}>
                    <Chip
                      sx={{
                        margin: 0.3,
                        backgroundColor: "rgb(235,235,235)",
                        fontSize: "12px",
                      }}
                      label="로맨스"
                      size="small"
                    />
                    <Chip
                      sx={{
                        margin: 0.3,
                        backgroundColor: "rgb(235,235,235)",
                        fontSize: "12px",
                      }}
                      label="판타지"
                      size="small"
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      pl: 0.5,
                      pt: 1.2,
                      overflow: "hidden",
                      position: "relative",
                      display: "-webkit-box",
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {item}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "14px",
                      pl: 0.5,
                      pr: 0.5,
                      fontSize: "12px",
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    가슴 속에 하나 둘 새겨지는 별을 이제 다 못 헤는 것은 쉬이
                    아침이 오는 까닭이요, 내일 밤이 남은 까닭이요, 아직 나의
                    청춘이 다하지 않은 까닭입니다. 가슴 속에 하나 둘 새겨지는
                    별을 이제 다 못 헤는 것은 쉬이 아침이 오는 까닭이요, 내일
                    밤이 남은 까닭이요, 아직 나의 청춘이 다하지 않은 까닭입니다.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default booklist;
