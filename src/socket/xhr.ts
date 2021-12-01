import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
const { VITE_BASE_URL } = import.meta.env;

const instance = axios.create({
  baseURL: VITE_BASE_URL as string,
});

export default instance;
