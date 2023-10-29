import ApiTemplate from "./ApiTemplate";
import MethodType from "./MethodType";

const ApiGateway = {
  getExampleBooklists: async () =>
    ApiTemplate.sendApi(
      MethodType.GET,
      `booklists/1
    `,
      null
    ),

  //북리스트 전체 조회
  getBooklists: async (page, size) => {
    const response = await ApiTemplate.sendApi(
      MethodType.GET,
      `booklists?page=${page}&size=${size}`,
      null
    );
    return response.data;
  },

  //북리스트 하나 조회
  getBookList: async (bookListId) => {
    const response = await ApiTemplate.sendApi(
      MethodType.GET,
      `booklists/${bookListId}`,
      null
    );
    return response.data;
  },

  //특정 책 검색 from kakao
  getBookFromKakao: async (title) => {
    const response = await ApiTemplate.sendApi(
      MethodType.GET,
      `books?target=title&query=${title}`,
      null
    );
    return response.data;
  },

  //책 추천: 조회수 순 정렬
  getRecommendBookListByViewCounts: async (offset, size) => {
    const response = await ApiTemplate.sendApi(
      MethodType.GET,
      `booklists/counts?offset=${offset}&size=${size}`,
      null
    );
    return response.data;
  },

  //책 추천: 댓글순 정렬
  getRecommendBookListByComments: async (offset, size) => {
    const response = await ApiTemplate.sendApi(
      MethodType.GET,
      `booklists/comments?offset=${offset}&size=${size}`,
      null
    );
    return response.data;
  },

  //댓글 전체 조회
  getComments: async (bookListId) => {
    const response = await ApiTemplate.sendApi(
      MethodType.GET,
      `comments/${bookListId}`,
      null
    );
    return response.data;
  },

  //댓글작성
  addCommentToBookList: async (bookListId, content) => {
    const response = await ApiTemplate.sendApiWithHeader(
      MethodType.POST,
      `comments/${bookListId}`,
      {
        content: content,
      }
    );
    return response.data;
  },

  //게시글 작성
  createBookList: async (payload, authToken) => {
    console.log("페이로드 2>>", payload);

    const response = await ApiTemplate.sendApiMultiPart(
      MethodType.POST,
      `booklists`,
      payload,
      null
    );
    console.log("폼데이터1>>> ", payload.get("request")); // Blob 내용 확인
    console.log("폼데이터2>>> ", payload.get("backImg")); // 업로
    // return response.data;
  },

  //테스트 post
  testPost: async () => {
    console.log("테스트 실행");
    const response = await ApiTemplate.sendApiWithHeader(
      MethodType.POST,
      `test/headers`,
      "123"
    );
    return response.data;
  },
};

export default ApiGateway;
