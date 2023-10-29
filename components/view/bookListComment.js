import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import { Typography, Avatar, Divider, TextField, Button } from "@mui/material";
import ApiGateway from "@/apis/ApiGateway";

export default function BookLinkComment() {
  const router = useRouter();
  const { viewId } = router.query;
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]); // 댓글 데이터를 저장할 상태

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

  /*
  const handleAddComment = async () => {
    if (comment.trim() !== "") {
      // 댓글을 서버로 업로드
      try {
        const response = await ApiGateway.addCommentToBookList(viewId, comment);
        // 서버로부터 성공적으로 업로드된 댓글을 받음
        setComments([...comments, response]); // 새 댓글을 현재 댓글 목록에 추가
        setComment(""); // 입력 필드를 초기화
      } catch (error) {
        console.error("댓글 업로드 중 오류 발생", error);
      }
    }
  };
  */
  const handleAddComment = async () => {
    const response = await ApiGateway.addCommentToBookList(viewId, comment);
    console.log("resposne >> ", response);
    if (response.error) {
      alert(response.message);
      return;
    } else {
      setComments([...comments, response]);
      setComment("");
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
            p: 2,
            borderBottom: "1px solid #ccc",
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: "bold" }}>
              {comment.nickname} {/* 사용자 이름을 표시 */}
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
          justifyContent: "center",
        }}
      >
        <TextField
          placeholder="타인의 권리를 침해하거나 명예를 훼손하는 댓글은 운영원칙 및 관련 법률에 제재를 받을 수 있습니다."
          variant="outlined"
          multiline
          rows={2}
          value={comment}
          onChange={handleCommentChange}
          sx={{ width: "70%", mt: 2, ml: 2, mr: 2 }}
        />
        <Button
          variant="contained"
          sx={{ height: 80, mt: 2, backgroundColor: "gray" }}
          onClick={handleAddComment}
        >
          댓글 추가
        </Button>
      </Box>
    </Box>
  );
}
