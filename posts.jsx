import { useEffect, useState } from "react";
import API from "../api/api";

useEffect(() => {
  API.get("/posts").then((res) => setPosts(res.data));
}, []);