import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import { Typography, Avatar, Divider, Button } from "@mui/material";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useRouter } from "next/router";
import { useBookListStore } from "../../pages/view/[viewId]";
import ApiGateway from "@/apis/ApiGateway";
import { Cookies } from "react-cookie";

export default function BookLinkTitle({ userNum }) {
  const store = useBookListStore();
  const titleText = store.bookList.title;
  const tagText = store.bookList.hashTag;
  let writerId = store.bookList.writerId;
  const router = useRouter();
  const [alertOpen, setAlertOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleModalConfirm = (isOpen = false) => {
    setAlertOpen(isOpen);
  };

  const handleDeleteConfirm = async () => {
    const cookies = new Cookies();
    const token = cookies.cookies?.token;

    const response = await ApiGateway.deleteBookList(router.query, token);

    if (typeof response !== "object") {
      setErrorMessage(response);
      setErrorModalOpen(true);
      return;
    } else {
      setAlertOpen(false); // 삭제 확인 모달 닫기
      setConfirmOpen(true);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        mr: 30,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          pt: 2,
          pl: 2.5,
          fontWeight: "bold",
          "@media (max-width: 1000px)": { fontSize: 18 },
          pb: 2,
        }}
      >
        {titleText}
      </Typography>
      {writerId === userNum && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            color="error"
            sx={{
              height: 40,
            }}
            onClick={() => handleModalConfirm(true)}
          >
            삭제
          </Button>
        </Box>
      )}
      {/*
      <Typography
        sx={{
          pl: 1.5,
          pb: 2,
          fontSize: 14,
          fontWeight: "bold",
          color: "darkgray",
        }}
      >
        #{tagText}
      </Typography>
      */}

      {/* 삭제 확인 모달 창 */}
      <Dialog open={alertOpen} close={() => handleModalConfirm(false)}>
        <DialogTitle>🤔 북리스트를 삭제할까요? </DialogTitle>
        <DialogContent>
          <Typography>
            작성한 유저만 삭제할 수 있습니다. <br />
            정말 삭제하시겠습니까?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleModalConfirm(false)} color="primary">
            취소
          </Button>
          <Button onClick={() => handleDeleteConfirm(false)} color="primary">
            확인
          </Button>
        </DialogActions>
      </Dialog>

      {/* 삭제 알림 모달 창 */}
      <Dialog open={confirmOpen} close={() => handleDeleteConfirm(false)}>
        <DialogTitle>🗑️ 삭제 완료! </DialogTitle>
        <DialogContent>
          <Typography>게시물이 성공적으로 삭제되었습니다.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => router.push("/booklist")} color="primary">
            확인
          </Button>
        </DialogActions>
      </Dialog>

      {/* 에러 발생 모달 창 */}
      <Dialog open={errorModalOpen}>
        <DialogTitle>⚠️ 에러가 발생했어요... </DialogTitle>
        <DialogContent>
          <Typography>
            {errorMessage}
            <br />
            전체 페이지로 돌아갑니다.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => router.push("/booklist")} color="primary">
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
