import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import {
  Typography,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useRouter } from "next/router";
import ApiGateway from "../apis/ApiGateway";
import { Cookies } from "react-cookie";
import TopNavigationBar from "@/components/common/topNavigationBar";

function SignUp() {
  const router = useRouter();
  const cookies = new Cookies();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordMismatch(password !== e.target.value);
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleLogin = async () => {
    if (password !== confirmPassword) {
      setPasswordMismatch(true);
      return;
    }

    const payload = {
      email: email,
      password: password,
      nickname: nickname,
    };

    try {
      const response = await ApiGateway.signUp(payload);

      if (response.status === 400) {
        alert(response);
      } else if (response.message === "성공") {
        setSuccessModalOpen(true);
      } else {
        alert("예기치 않은 오류가 발생했습니다.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleModalClose = () => {
    setSuccessModalOpen(false);
    router.push("/");
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
            height: 500,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            pb: 2,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "left", width: 400 }}>
            <Typography sx={{ fontSize: 22, pt: 3, fontWeight: "bold" }}>
              📝 회원가입
            </Typography>
          </Box>
          <TextField
            placeholder="이메일"
            sx={{ height: 40, width: 400, marginY: 1, mt: 3 }}
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            placeholder="닉네임"
            sx={{ height: 40, width: 400, marginY: 1, mt: 3 }}
            value={nickname}
            onChange={handleNicknameChange}
          />
          <TextField
            type="password"
            placeholder="비밀번호"
            sx={{ height: 40, width: 400, marginY: 1, mt: 3 }}
            value={password}
            onChange={handlePasswordChange}
          />
          <TextField
            type="password"
            placeholder="비밀번호 확인"
            sx={{ height: 40, width: 400, marginY: 1, mt: 3 }}
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {passwordMismatch && (
            <Typography sx={{ color: "red", fontSize: 14, marginY: 1 }}>
              비밀번호와 비밀번호 확인이 다릅니다.
            </Typography>
          )}

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: 400,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{
                height: 40,
                width: 100,
                mt: 2,
                backgroundColor: "rgb(31,31,31)",
              }}
              onClick={handleLogin}
            >
              가입
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Success Modal */}
      <Dialog open={successModalOpen} onClose={handleModalClose}>
        <DialogTitle>회원가입 완료</DialogTitle>
        <DialogContent>
          <Typography>
            회원가입이 완료되었습니다. 가입된 Email과 Password로 로그인
            해주세요.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose} color="primary">
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default SignUp;
