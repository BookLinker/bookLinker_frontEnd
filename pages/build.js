import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Divider from "@mui/material/Divider";
import { Cookies } from "react-cookie";

import axios from "axios";
import { useRouter } from "next/router";
import TopNavigationBar from "@/components/common/topNavigationBar";

import TitleIcon from "@mui/icons-material/Title";
import ApiGateway from "@/apis/ApiGateway";
import { Button } from "@mui/material";

function Build() {
  const router = useRouter();
  const cookies = new Cookies();

  let token = cookies.cookies?.token;
  console.log("쿠키<<", cookies.cookies.token);

  const backgroundImage =
    "https://cdn.pixabay.com/photo/2014/08/16/18/17/book-419589_1280.jpg";

  const [bookListTitle, setBookListTitle] = useState("");
  const [bookListContent, setBookListContent] = useState("");
  const [uploadImage, setUploadImage] = useState(null);
  const [serachValue, setSearchValue] = useState("");
  const [bookData, setBookData] = useState([]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setUploadImage(file);
  };

  const [bookList, setBookList] = useState([
    {
      key: 0,
      title: "",
      description: "",
      bookData: null,
    },
  ]);

  /*
  const handleSubmit = async () => {
    const formData = new FormData();
    const jsonPayload = JSON.stringify(examplePayload);
    const blob = new Blob([jsonPayload], { type: "application/json" });
    formData.append("request", blob, "payload.json");
    if (uploadImage) {
      formData.append("backImg", uploadImage);
    }

    console.log("폼데이터1>> ", formData.request);
    console.log("폼데이터2>> ", formData.backImg);

    const response = await ApiGateway.createBookList(formData, null);
    console.log("res >>", response);
  };
*/

  const handleSubmit = async () => {
    const formData = new FormData();
    const bookDataArray = bookList.map((book) => {
      const { title, authors, isbn, publisher, image, url } = book.bookData;
      return {
        title,
        authors: Array.isArray(authors) && authors.length > 0 ? authors[0] : "",
        isbn,
        publisher,
        image,
        url,
        recommendation: book.description,
      };
    });

    const payload = {
      title: bookListTitle,
      content: bookListContent,
      hashTag: "해시태그",
      books: bookDataArray,
    };

    console.log("페이로드", payload);
    const jsonPayload = JSON.stringify(payload);
    const blob = new Blob([jsonPayload], { type: "application/json" });
    formData.append("request", blob, "payload.json");
    if (uploadImage) {
      formData.append("backImg", uploadImage);
    }

    console.log("폼데이터1>> ", formData.request);
    console.log("폼데이터2>> ", formData.backImg);

    let authToken = cookies.cookies?.token;

    const response = await ApiGateway.createBookList(formData, authToken);
    console.log("res >>", response);
  };

  const handleSearch = async (index) => {
    console.log("I am 코딩중 에요~");
    console.log("검색어 : ", serachValue);
    const response = await ApiGateway.getBookFromKakao(serachValue);
    console.log("res>>>>", response);
    setBookList((prevBookList) => {
      const updatedBookList = [...prevBookList];
      if (Array.isArray(response) && response.length > 0) {
        updatedBookList[index].bookData = response[0];
      } else {
        updatedBookList[index].bookData = null;
      }
      return updatedBookList;
    });
  };

  useEffect(() => {
    console.log("북데이터", bookData);
  }, [bookData]);

  useEffect(() => {
    console.log("북리스트<<", bookList);
    console.log("북데이터,", bookData);
  }, [bookList]);

  const addBook = () => {
    const newBookList = [...bookList];
    const newKey = bookList.length;
    newBookList.push({
      key: newKey,
      title: "",
      description: "",
    });
    setBookList(newBookList);
  };

  const removeBook = (key) => {
    if (bookList.length === 1) {
      alert("🚨 남은 책이 하나 뿐이에요 ㅠㅠ");
      return;
    }

    const updatedBookList = bookList.filter((book) => book.key !== key);
    setBookList(updatedBookList);
  };

  return (
    <Box
      sx={{
        backgroundColor: "black",
        backgroundImage: `
    linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 100%),
    url(${backgroundImage})
  `,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        overflowY: "auto",
      }}
    >
      <TopNavigationBar />
      <Box
        sx={{
          display: "flex",
          margin: "0 auto", // 가운데 정렬
          padding: "0 20px", // 좌우 여백
          maxWidth: "1200px", // 최대 너비
          width: "100%", // 기본 너비
          minHeight: "100vh", // 최소 높이를 화면 높이로 설정
          "@media (max-width: 960px)": {
            padding: "0 10px", // 모바일 및 태블릿에서 좌우 여백 줄임
          },
          backgroundColor: "rgb(243,243,243)",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "95%",
            height: "100vh",
            mt: 12,
            pl: 3,
            pr: 3,
            pt: 3,
            flex: 1,
          }}
        >
          <Typography sx={{ fontSize: 22, pb: 1, fontWeight: "bold" }}>
            🧑 제목
          </Typography>
          <TextField
            hiddenLabel
            fullWidth
            placeholder="제목을 입력하세요 (3~20자)"
            InputProps={{
              sx: { backgroundColor: "white", border: "1px solid black" },
            }}
            onChange={(e) => {
              setBookListTitle(e.target.value);
            }}
          />

          <Typography sx={{ fontSize: 22, mt: 3, pb: 1, fontWeight: "bold" }}>
            🖼️ 배경
          </Typography>
          <Box>
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </Box>
          <Typography sx={{ fontSize: 22, pt: 4, pb: 1, fontWeight: "bold" }}>
            💬 설명
          </Typography>
          <TextField
            hiddenLabel
            fullWidth
            placeholder="책리스트의 설명을 입력하세요 (3~50자)"
            multiline={true}
            rows={3}
            InputProps={{
              sx: { backgroundColor: "white", border: "1px solid black" },
            }}
            onChange={(e) => {
              setBookListContent(e.target.value);
            }}
          />
          {bookList.map((book, index) => (
            <Box
              key={book.key}
              sx={{
                width: "100%",
                //    height: 260,
                backgroundColor: "rgb(100,100,100)",
                mt: 4,
                borderRadius: 3,
                padding: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: "bold",
                    pb: 2,
                    color: "white",
                  }}
                >
                  📕 원하는 책을 선택해주세요!
                </Typography>

                <Typography
                  sx={{
                    fontSize: 22,
                    fontWeight: "bold",
                  }}
                  onClick={() => removeBook(book.key)}
                >
                  🗑️
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Autocomplete
                  hiddenLabel
                  disablePortal
                  options={top100Films}
                  sx={{ width: "100%", mr: 2 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="책 이름을 검색하세요!"
                      InputProps={{
                        sx: {
                          backgroundColor: "white",
                          border: "1px solid black",
                        },
                      }}
                      onChange={(e) => setSearchValue(e.target.value)}
                    />
                  )}
                />
                <Button
                  sx={{ backgroundColor: "white" }}
                  onClick={() => handleSearch(index)}
                >
                  검색
                </Button>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  backgroundColor: "teal",
                  mt: 2,
                  height: 300,
                  flexDirection: "row",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    backgroundColor: "transparent",
                    height: "100%",
                    width: "25%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      backgroundImage: book.bookData
                        ? `url(${book.bookData.image})`
                        : "none",
                      height: "80%",
                      width: "80%",
                      transition: "background-position 0.3s ease-out",
                      overflow: "hidden",
                      zIndex: 10,
                      backgroundSize: "auto 100%",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    height: "100%",
                    width: "75%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <TextField
                    value={book.bookData ? book.bookData.title : ""}
                    disabled
                    sx={{
                      mt: 3,
                      width: "90%",
                      ml: 3,
                      backgroundColor: "white",
                    }}
                  />
                  <TextField
                    value={book.bookData ? book.bookData.authors : ""}
                    disabled
                    sx={{
                      mt: 1,
                      width: "90%",
                      ml: 3,
                      backgroundColor: "white",
                    }}
                  />
                  <TextField
                    hiddenLabel
                    fullWidth
                    placeholder="책에 대해 간단히 소개해주세요! (3~50자)"
                    multiline={true}
                    rows={4}
                    sx={{ pt: 2, width: "90%", ml: 3 }}
                    InputProps={{
                      sx: {
                        backgroundColor: "white",
                        border: "1px solid black",
                      },
                    }}
                    onChange={(e) => {
                      // 이벤트 발생 시 소개 내용을 배열에 저장
                      const newDescription = e.target.value;
                      setBookList((prevBookList) => {
                        const updatedBookList = [...prevBookList];
                        updatedBookList[index].description = newDescription;
                        return updatedBookList;
                      });
                    }}
                  />
                </Box>
              </Box>
            </Box>
          ))}
          <Box
            sx={{
              display: "flex",
              height: 50,
              width: 120,
              mt: 1,
              backgroundColor: "teal",
              float: "right",
              borderRadius: 2,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
            onClick={addBook}
          >
            <Typography sx={{ fontSize: 20 }}>책 추가</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            width: "30%",
            height: 60,
            backgroundColor: "rgb(31,31,31)",
            borderRadius: 3,
            mb: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
            position: "fixed",
            top: "92%",
            boxShadow: "4px 4px grey",
            transition: "transform 0.2s",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
          onClick={handleSubmit}
        >
          <Typography sx={{ fontSize: 20, color: "white" }}>등록</Typography>
        </Box>
      </Box>
    </Box>
  );
}

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
];

const authToken =
  "Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W3siYXV0aG9yaXR5IjoiUk9MRV9NRU1CRVIifV0sImlkIjozLCJlbWFpbCI6InRlc3Rwc2pAdGVzdC5jb20iLCJqdGkiOiJ0ZXN0cHNqQHRlc3QuY29tIiwiaWF0IjoxNjk4NDY0NjMxLCJleHAiOjQ0ODk4NDY0NjMxfQ.buYOehqeUg38TQaO-ThqwMX3FpZYaV4un8POG7m5MuojClSyBVzfBh1vUKnVjjfUT06ainGKv0CilUrUPpRkwA";
const headers = {
  Authorization: authToken,
  "Content-Type": "application/json", // 다른 헤더도 필요한 경우 추가
};

const examplePayload = {
  title: "이미지 테스트 2번",
  content: "사용자 직접 기입 북리스트 내용",
  hashTag: "해시태그",
  books: [
    {
      title: "벼랑 위의 포뇨",
      authors: "미야자키 하야오",
      isbn: "1133469728 9791133469727",
      publisher: "대원씨아이",
      image:
        "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1547879%3Ftimestamp%3D20230227050851",
      url: "https://search.daum.net/search?w=bookpage&bookId=1547879&q=벼랑+위의+포뇨",
      recommendation: "사용자 직접기입 추천사",
    },
    {
      title: "햄스터 요정 토리와 친구들",
      authors: "소울크리에이티브",
      isbn: "1196033501 9791196033507",
      publisher: "소울크레아",
      image:
        "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1660110%3Ftimestamp%3D20190131144808",
      url: "https://search.daum.net/search?w=bookpage&bookId=1660110&q=햄스터+요정+토리와+친구들",
      recommendation: "사용자 직접기입 추천사2",
    },
  ],
};

export default Build;
