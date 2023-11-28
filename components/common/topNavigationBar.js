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
import ApiGateway from "@/apis/ApiGateway";
import { Cookies } from "react-cookie";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

import { useRouter } from "next/router";

export default function TopNavigationBar() {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const [alertOpen, setAlertOpen] = useState(false);

  useEffect(() => {
    const cookies = new Cookies();
    const token = cookies.get("token");
    setToken(token);
  }, []);

  //상단바 반응형 버튼을 위한 스크립트
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenuIconClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    const cookies = new Cookies();
    cookies.remove("token");
    window.location.reload();
  };

  const handleModalConfirm = (isOpen = false) => {
    setAlertOpen(isOpen);
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
            sx={{
              flexGrow: 1,
              "&:hover": {
                cursor: "pointer",
              },
            }}
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

            {token ? (
              <>
                <Button
                  color="inherit"
                  sx={{ ml: 6 }}
                  onClick={() => handleModalConfirm(true)}
                >
                  Users
                </Button>
                <Button
                  color="inherit"
                  sx={{ ml: 4, backgroundColor: "rgb(56,56,61)" }}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  color="inherit"
                  sx={{ ml: 4, backgroundColor: "rgb(56,56,61)" }}
                  onClick={() => {
                    router.push("/login");
                  }}
                >
                  Login
                </Button>
                <Button
                  color="inherit"
                  sx={{ ml: 1, backgroundColor: "rgb(56,56,61)" }}
                  onClick={() => {
                    router.push("/signup");
                  }}
                >
                  SignUp
                </Button>
              </>
            )}
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
              <Button color="inherit">BookList</Button>
            </MenuItem>
            <MenuItem onClick={() => router.push("/build")}>
              <Button color="inherit">Build</Button>
            </MenuItem>
            <MenuItem onClick={() => handleModalConfirm(true)}>
              <Button color="inherit">Users</Button>
            </MenuItem>
            {token ? (
              <MenuItem onClick={handleLogout}>
                <Button color="inherit">Logout</Button>
              </MenuItem>
            ) : (
              <>
                <MenuItem onClick={() => router.push("/login")}>
                  <Button color="inherit">Login</Button>
                </MenuItem>
                <MenuItem onClick={() => router.push("/signup")}>
                  <Button color="inherit">SignUp</Button>
                </MenuItem>
              </>
            )}
          </Menu>
        </Toolbar>
      </AppBar>

      {/* 미완성 안내 모달 창 */}
      <Dialog open={alertOpen} close={() => handleModalConfirm(false)}>
        <DialogTitle>😥 준비 중인 서비스입니다.</DialogTitle>
        <DialogContent>
          <Typography>서비스 이용에 불편을 드려 죄송합니다.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleModalConfirm(false)} color="primary">
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
