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

import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { M_PLUS_1 } from "next/font/google";
import Carousel from "react-material-ui-carousel";
import TypeIt from "typeit-react";

import { useRouter } from "next/router";

import TopNavigationBar from "@/components/common/topNavigationBar";
import EyeCatch from "@/components/index/eyeCatch";
import SecondaryPage from "@/components/index/secondaryPage";
import ThirdPage from "@/components/index/thirdPage";
import BottomBar from "@/components/common/bottomBar";

const libraryBackgroundImage =
  "https://cdn.pixabay.com/photo/2016/02/16/21/07/books-1204029_1280.jpg";
const exampleBookList1 =
  "https://cdn.pixabay.com/photo/2015/09/09/21/33/vienna-933500_1280.jpg";
const exampleBookList2 =
  "https://cdn.pixabay.com/photo/2022/04/22/05/42/squid-game-7148889_1280.jpg";
const exampleBookList3 =
  "https://cdn.iworldtoday.com/news/photo/202111/406341_211986_410.png";

function Playlist() {
  const router = useRouter();

  return (
    <Box>
      <CssBaseline />
      <TopNavigationBar />
      <EyeCatch />
      <SecondaryPage />
      <ThirdPage />
      <BottomBar />
    </Box>
  );
}

export default Playlist;
