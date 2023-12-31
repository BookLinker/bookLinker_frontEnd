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

  //북리스트 검색어
  getBooklistsByKeyword: async (keyword, page, size) => {
    const response = await ApiTemplate.sendApi(
      MethodType.GET,
      `booklists/search?title=${keyword}&page=${page}&size=${size}`,
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
  addCommentToBookList: async (bookListId, content, authToken) => {
    const response = await ApiTemplate.sendApiWithHeader(
      MethodType.POST,
      `comments/${bookListId}`,
      {
        content: content,
      },
      authToken
    );
    return response.data;
  },

  //게시글 작성
  createBookList: async (payload, authToken) => {
    const response = await ApiTemplate.sendApiMultiPart(
      MethodType.POST,
      `booklists`,
      payload,
      authToken
    );
    return response;
  },

  //게시글 삭제
  deleteBookList: async (bookListId, authToken) => {
    const response = await ApiTemplate.sendApiWithHeader(
      MethodType.DELETE,
      `booklists/${bookListId.viewId}`,
      null,
      authToken
    );
    return response.data;
  },

  //테스트 post
  testPost: async () => {
    const response = await ApiTemplate.sendApiWithHeader(
      MethodType.POST,
      `test/headers`,
      "123"
    );
    return response.data;
  },

  //로그인
  login: async (payload) => {
    const response = await ApiTemplate.sendApi(
      MethodType.POST,
      `/members/authenticate`,
      payload,
      null
    );
    return response;
  },

  //회원가입
  signUp: async (payload) => {
    const response = await ApiTemplate.sendApi(
      MethodType.POST,
      `/members`,
      payload,
      null
    );
    return response;
  },
};

export default ApiGateway;
