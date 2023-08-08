import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import { Typography, Avatar, Divider } from "@mui/material";
import { useRouter } from "next/router";

import TopNavigationBar from "@/components/common/topNavigationBar";

const exampleThumbnail =
  "https://cdn.pixabay.com/photo/2014/10/23/10/10/dollars-499481_1280.jpg";
const exampleBookImage1 =
  "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791188331796.jpg";
const exampleBookImage2 =
  "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791158883591.jpg";
const exampleBookImage3 =
  "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788959897094.jpg";

function View() {
  const router = useRouter();

  return (
    <Box>
      <TopNavigationBar />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100vh",
          pt: 8,
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flex: 10,
            backgroundColor: "white",
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "flex", flex: 3 }}>
            <Box
              sx={{
                display: "flex",
                flex: 1,
                backgroundColor: "darkgray",
                backgroundImage: `url(${exampleBookImage1})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                flexDirection: "column",
                marginTop: 5,
                marginLeft: 10,
              }}
            ></Box>
            <Box sx={{ display: "flex", flex: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  flex: 1,
                  marginTop: 5,
                  marginRight: 1,
                  backgroundColor: "cornflowerblue",
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${exampleThumbnail})`,
                  flexDirection: "column",
                  overflow: "hidden",
                  padding: 4,
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                    color: "white",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  『돈의 속성』
                </Typography>
                <Typography sx={{ color: "white", whiteSpace: "pre-wrap" }}>
                  저자 김승호
                </Typography>
                <Divider sx={{ border: "2px solid white", mt: 1, mb: 1 }} />
                <Typography sx={{ color: "white", whiteSpace: "pre-wrap" }}>
                  2020ㆍ2021ㆍ2022ㆍ2023 4년 연속 최장기 베스트셀러 80만
                  깨어있는 독자들이 선택한 경제경영 필독서 『돈의 속성』 <br />
                  나도 언젠가 부자가 될 수 있을까? 누군가는 돈에 대해 이야기하는
                  것을 꺼려하고 품위 없는 것처럼 치부하지만 저자는 오히려 돈의
                  가치를 폄훼하는 그 행위가 위선적이라고 말한다. <br />
                  <br /> 세상 살며 돈이 가진 중요성을 따져 볼 때 누구도 돈의
                  영향력에서 자유로울 수 없기 때문이다. 그렇기에 저자는 돈의
                  특성을 매우 특이하게 정의했는데 바로, 인격체라고 지칭한
                  것이다. 그의 논리를 들어보자. 돈을 너무 사랑해서 집 안에만
                  가둬 놓으면 기회만 있으면 나가버리려고 할 것이고 다른 돈에게
                  주인이 구두쇠니 오지 마라 할 것이다. 자신을 존중해주지 않는
                  사람을 부자가 되게 하는 데 협조도 하지 않는다. 가치 있는 곳과
                  좋은 일에 쓰인 돈은 그 대우에 감동해 다시 다른 돈을 데리고
                  주인을 찾을 것이고 술집이나 도박에 자신을 사용하면 비참한
                  마음에 등을 돌리는 게 돈이다. <br />
                  <br />
                  돈은 감정을 가진 실체라서 사랑하되 지나치면 안 되고 품을 땐
                  품어도 가야 할 땐 보내줘야 하며 절대로 무시하거나 함부로
                  대해서는 안 된다. 오히려 존중하고 감사해야 한다. 이런 마음을
                  가진 사람들에게 돈은 상상 기회를 주고 다가오고 보호하려 한다.
                  다행히 돈은 뒤끝이 없어서 과거 행동에 상관없이 오늘부터 자신을
                  존중해주면 모든 것을 잊고 당신을 존중해줄 것이다.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flex: 1,
              backgroundColor: "white",
              ml: 10,
              mt: 2,
              flexDirection: "column",
            }}
          >
            <Box>
              <Typography sx={{ fontSize: 21, fontWeight: 600 }}>
                [2023] 교보문고 선정 경제부문 베스트셀러
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 1 }}>
              <Avatar>E</Avatar>
              <Box sx={{ display: "flex", flexDirection: "column", pl: 0.5 }}>
                <Typography sx={{ pl: 1, fontWeight: 600 }}>
                  Elon Musk
                </Typography>
                <Typography color="text.secondary" sx={{ pl: 1, fontSize: 11 }}>
                  구독자 6.46천명
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                backgroundColor: "rgb(242,242,242)",
                height: 110,
                mt: 1,
                borderRadius: 3,
                padding: 1.5,
                flexDirection: "column",
              }}
            >
              <Typography style={{ fontSize: 14, fontWeight: 600 }}>
                조회수 122,743회 2023. 4. 16. #베스트셀러 #경제 <br />
              </Typography>
              <Typography style={{ fontSize: 14 }}>
                * 단순한 저축으로는 미래를 보장할 수 없는 요즘, 교보문고가
                선정한 2023년 경제부문 베스트셀러를 모았습니다.
                <br />
                김승호 저자의 [돈의 속성] 부터, [트렌트 코리아 2023], [부자 아빠
                가난한 아빠]까지 계획적인 경제관념을 세워봅시다.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flex: 3,
            //backgroundColor: "honeydew",
            mt: 5,
            flexDirection: "column",
            padding: 2,
          }}
        >
          <Divider sx={{ border: "1px solid darkgray", mt: 1, mb: 1 }} />

          <Typography sx={{ fontSize: 17, fontWeight: 600 }}>
            다음 책 목록
          </Typography>
          <Divider sx={{ border: "1px solid darkgray", mt: 1, mb: 1 }} />

          <Box
            sx={{
              display: "flex",
              width: "100%",
              height: 120,
              //backgroundColor: "teal",
              flexDirection: "row",
              //backgroundImage: `url(${exampleBookImage2})`,
              mt: 1,
            }}
          >
            <Box
              sx={{
                borderRadius: 3,
                width: 200,
                backgroundImage: `url(${exampleBookImage2})`,
                backgroundPosition: "top",
                backgroundSize: "cover",
              }}
            />
            <Box sx={{ display: "flex", flexDirection: "column", margin: 1.2 }}>
              <Typography sx={{ fontSize: 16, fontWeight: 500 }}>
                부자 아빠 가난한 아빠
              </Typography>
              <Typography sx={{ fontSize: 12, fontWeight: 500 }}>
                로버트 기요사키 저자(글) · 안진환 번역
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              width: "100%",
              height: 120,
              //backgroundColor: "teal",
              flexDirection: "row",
              //backgroundImage: `url(${exampleBookImage2})`,
              mt: 3,
            }}
          >
            <Box
              sx={{
                borderRadius: 3,
                width: 200,
                backgroundImage: `url(${exampleBookImage2})`,
                backgroundPosition: "top",
                backgroundSize: "cover",
              }}
            />
            <Box sx={{ display: "flex", flexDirection: "column", margin: 1.2 }}>
              <Typography sx={{ fontSize: 16, fontWeight: 500 }}>
                부자 아빠 가난한 아빠
              </Typography>
              <Typography sx={{ fontSize: 12, fontWeight: 500 }}>
                로버트 기요사키 저자(글) · 안진환 번역
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default View;
