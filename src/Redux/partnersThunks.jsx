import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSponsersData = createAsyncThunk(
  "partnersData/fetchData",
  async () => {
    const partners = await axios.get("https://bn-bwh7.onrender.com/sponsers");
    return partners.data.data;
  }
);
