import React, { useState, useRef, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { useRouter } from "next/router";

export default function TopNavigationBar() {
  const router = useRouter();

  //상단바 반응형 버튼을 위한 스크립트
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenuIconClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <CssBaseline />
      <AppBar
        position="relative"
        sx={{
          bgcolor: "rgb(31,31,31)",
          flexGrow: 1,
          position: "fixed",
          zIndex: 10,
        }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            noWrap
            sx={{ flexGrow: 1 }}
            onClick={() => router.push("/")}
          >
            BookLinker
          </Typography>
          <Box
            component="div"
            sx={{ display: { xs: "block", sm: "none" } }}
            onClick={handleMenuIconClick}
          >
            <MenuIcon />
          </Box>
          <Box component="div" sx={{ display: { xs: "none", sm: "flex" } }}>
            <Button color="inherit" onClick={() => router.push("/booklist")}>
              BookLinks
            </Button>
            <Button
              color="inherit"
              sx={{ ml: 6 }}
              onClick={() => router.push("/build")}
            >
              Build
            </Button>
            <Button color="inherit" sx={{ ml: 6 }}>
              Users
            </Button>
            <Button
              color="inherit"
              sx={{ ml: 4, backgroundColor: "rgb(56,56,61)" }}
            >
              Login
            </Button>
            <Button
              color="inherit"
              sx={{ ml: 1, backgroundColor: "rgb(56,56,61)" }}
            >
              SignUp
            </Button>
          </Box>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <MenuItem onClick={() => router.push("/booklist")}>
              <Button color="inherit">BookLinks</Button>
            </MenuItem>
            <MenuItem onClick={() => router.push("/build")}>
              <Button color="inherit">Build</Button>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Button color="inherit">Users</Button>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Button color="inherit">Login</Button>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Button color="inherit">SignUp</Button>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
