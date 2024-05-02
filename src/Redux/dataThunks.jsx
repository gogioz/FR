import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchApiData = createAsyncThunk("apiData/fetchData", async () => {
  const articles = await axios.get("https://bn-bwh7.onrender.com/articles");
  return articles.data.data;
});
