import axios from "axios";
import jwt from "jsonwebtoken";
import { useState } from "react";

// axios.defaults.withCredentials = true;

const instance = axios.create({
  baseURL: "https://booklinker.xyz",
  timeout: 100000,
  //withCredentials: true,
});

const EXPIRED_ACCESS_TOKEN = "액세스 토큰이 만료되었습니다.";

const ApiTemplate = {
  sendApi: async (method, url, body) => {
    let result = null;

    if (body) {
      try {
        result = await instance[method](url, body);
      } catch (e) {
        if (e.response && e.response.status !== "SUCCESS") {
          console.error("API 요청에 실패하였습니다.", e.response.data);
        }

        return e.response.data;
      }

      return result.data;
    }

    try {
      result = await instance[method](url);
    } catch (e) {
      if (e.response && e.response.status !== "SUCCESS") {
        console.error("API 요청에 실패하였습니다.", e.response.data);
      }

      return e.response.data;
    }

    return result.data;
  },

  sendApiWithHeader: async (method, url, body, token) => {
    let result = null;

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    const config = { headers };

    if (body) {
      try {
        result = await instance[method](url, body, config);
      } catch (e) {
        if (e.response && e.response.status !== "SUCCESS") {
          console.error("API 요청에 실패하였습니다.", e.response.data);
        }

        return e.response.data;
      }

      return result.data;
    }

    try {
      result = await instance[method](url, config);
    } catch (e) {
      if (e.response && e.response.status !== "SUCCESS") {
        console.error("API 요청에 실패하였습니다.", e.response.data);
      }

      //return e.response.data;
      return e.response;
    }

    return result.data;
  },

  sendApiMultiPart: async (method, url, formData, token) => {
    let result = null;

    const authorizationHeader = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      result = await instance[method](url, formData, authorizationHeader);
    } catch (e) {
      /*
      if (e.response.status === 401 && e.message === EXPIRED_ACCESS_TOKEN) {
        alert("인증에러입니다. 다시 로그인 해주세요.");
      }

      return e.response.data;
      */
    }

    return result;
  },
};

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

export default ApiTemplate;
