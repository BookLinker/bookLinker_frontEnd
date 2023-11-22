import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import { Typography, Avatar, Divider, TextField, Button } from "@mui/material";
import { useRouter } from "next/router";
import ApiGateway from "../apis/ApiGateway";
import axios from "axios";
import { create } from "zustand";
import TopNavigationBar from "@/components/common/topNavigationBar";
import { Cookies } from "react-cookie";

function Login() {
  const router = useRouter();
  const cookies = new Cookies();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    const payload = {
      email: email,
      password: password,
    };

    try {
      const response = await ApiGateway.login(payload);

      if (response.status === 400) {
        alert(response);
      } else if (response.message === "성공") {
        const tokenWithoutBearer = response.data.token.replace("Bearer ", "");
        cookies.set("token", tokenWithoutBearer, { path: "/" });
        router.push("/");
      } else {
        alert("예기치 않은 오류가 발생했습니다.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box>
      <TopNavigationBar />
      <Box
        sx={{
          display: "flex",
          backgroundColor: "rgb(51,51,51)",
          width: "100%",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: 3,
            width: 600,
            height: 300,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            pb: 2,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "left", width: 400 }}>
            <Typography sx={{ fontSize: 22, pt: 3, fontWeight: "bold" }}>
              🔑 로그인
            </Typography>
          </Box>
          <TextField
            placeholder="Email"
            sx={{ height: 40, width: 400, margin: 1 }}
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            placeholder="Password"
            type="password"
            sx={{ height: 40, width: 400, margin: 2 }}
            value={password}
            onChange={handlePasswordChange}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end", // 로그인 버튼을 오른쪽에 위치하도록 설정
              width: 400,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{
                height: 40,
                width: 100,
                mt: 1,
                backgroundColor: "rgb(31,31,31)",
              }}
              onClick={handleLogin}
            >
              로그인
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
