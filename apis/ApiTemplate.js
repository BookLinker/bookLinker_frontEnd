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

  sendApiWithHeader: async (method, url, body) => {
    let result = null;

    const headers = {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W3siYXV0aG9yaXR5IjoiUk9MRV9NRU1CRVIifV0sImlkIjozLCJlbWFpbCI6InRlc3Rwc2pAdGVzdC5jb20iLCJqdGkiOiJ0ZXN0cHNqQHRlc3QuY29tIiwiaWF0IjoxNjk4NDc0NzIxLCJleHAiOjQ0ODk4NDc0NzIxfQ.DpsWi0hqnLp7QDaE5G7zMdEe9Le8TEEqTrOzBqyTiVRUwHkWp2w-3aC_5H_gOh4mEoOvgPyiG6mAcA90aHMAhQ",
    };

    console.log("헤더>>", headers);
    const config = { headers };

    if (body) {
      try {
        result = await instance[method](url, body, config);
        console.log("result? >>", result);
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

      return e.response.data;
    }

    return result.data;
  },

  sendApiMultiPart: async (method, url, formData, token) => {
    let result = null;

    console.log("sendMut>>", token);
    const authorizationHeader = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };

    console.log("헤더", authorizationHeader);
    try {
      console.log("try문 입장 >>");
      result = await instance[method](url, formData, authorizationHeader);
    } catch (e) {
      /*
      if (e.response.status === 401 && e.message === EXPIRED_ACCESS_TOKEN) {
        alert("인증에러입니다. 다시 로그인 해주세요.");
      }

      return e.response.data;
      */
      console.log("catch문 입장 e>>", e);
    }

    //return result.data;
  },
};

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

export default ApiTemplate;
