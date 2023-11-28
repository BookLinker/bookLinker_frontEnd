import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import { Typography, Avatar, Divider, TextField, Button } from "@mui/material";
import ApiGateway from "@/apis/ApiGateway";
import { Cookies } from "react-cookie";

export default function BookLinkComment() {
  const router = useRouter();
  const { viewId } = router.query;
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]); // 댓글 데이터를 저장할 상태
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const cookies = new Cookies();
    const token = cookies.cookies?.token;
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (viewId) {
        try {
          const response = await ApiGateway.getComments(viewId);
          setComments(response); // 댓글 데이터를 상태에 설정
        } catch (error) {
          console.error("데이터 가져오기 중 오류 발생", error);
        }
      }
    };

    fetchData();
  }, [viewId]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleAddComment = async () => {
    const cookies = new Cookies();
    const token = cookies.cookies?.token;
    const response = await ApiGateway.addCommentToBookList(
      viewId,
      comment,
      token
    );
    if (response.error) {
      alert(response.message);
      return;
    } else {
      window.location.reload();
    }
  };

  return (
    <Box sx={{ width: "100%", backgroundColor: "white", pt: 6 }}>
      <Divider sx={{ borderWidth: "6px" }} />
      <Box sx={{ backgroundColor: "lightgray" }}>
        <Typography sx={{ fontSize: 18, fontWeight: "bold", p: 2 }}>
          전체 댓글 {comments.length}개
        </Typography>
      </Box>
      <Divider />
      {comments.map((comment) => (
        <Box
          key={comment.commentId}
          sx={{
            display: "flex",
            backgroundColor: "white",
            p: 2,
            borderBottom: "1px solid #ccc",
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: "bold" }}>
              {comment.nickname} | {comment.createAt.slice(0, 10)}
            </Typography>
            <Typography>{comment.content}</Typography>
          </Box>
        </Box>
      ))}
      <Box
        sx={{
          height: 100,
          backgroundColor: "white",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "left",
          mr: 28,
        }}
      >
        <TextField
          placeholder={
            isLoggedIn
              ? "타인의 권리를 침해하거나 명예를 훼손하는 댓글은 운영원칙 및 관련 법률에 제재를 받을 수 있습니다."
              : "로그인 후에 댓글을 추가할 수 있습니다."
          }
          variant="outlined"
          multiline
          rows={2}
          value={comment}
          onChange={handleCommentChange}
          sx={{ width: "100%", mt: 2, ml: 2, mr: 2 }}
          disabled={!isLoggedIn}
        />
        <Button
          variant="contained"
          sx={{ height: 80, width: 100, mt: 2, backgroundColor: "gray" }}
          onClick={handleAddComment}
          disabled={!isLoggedIn}
        >
          작성
        </Button>
      </Box>
    </Box>
  );
}
