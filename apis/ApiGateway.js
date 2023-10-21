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
};

export default ApiGateway;
