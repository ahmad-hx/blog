import API from "./api";

export const getPosts = () => API.get("/posts");

export const createPost = (data) =>
  API.post("/posts", data);