import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import { Typography, Avatar, Divider } from "@mui/material";
import ApiGateway from "@/apis/ApiGateway";

export default function BookLinkComment() {
  const router = useRouter();
  const { viewId } = router.query;
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
    console.log(comments);
  }, [viewId]);

  return (
    <Box sx={{ width: "100%", backgroundColor: "tan" }}>
      <Typography sx={{ fontSize: 18, fontWeight: "bold", p: 2 }}>
        댓글
      </Typography>
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
              사용자 이름 {/* 사용자 이름을 표시할 수 있음 */}
            </Typography>
            <Typography>{comment.content}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
