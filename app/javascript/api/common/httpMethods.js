import { APIBaseUrl } from "./utils";

const headers = new Headers({
  Authorization: null,
  "Content-Type": "application/json",
  Accept: "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
});

const responseData = async (response) => {
  return {
    data: await response.json(),
    status: response.status,
  };
};

export const get = async (url) => {
  const response = await fetch(APIBaseUrl(url), {
    method: "GET",
    headers: headers,
  });
  return responseData(response);
};

export const post = async (url, body) => {
  const response = await fetch(APIBaseUrl(url), {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body),
  });
  return responseData(response);
};

export const remove = async (url, body) => {
  const response = await fetch(APIBaseUrl(url), {
    method: "DELETE",
    headers,
    body: JSON.stringify(body),
  });
  return responseData(response);
};
