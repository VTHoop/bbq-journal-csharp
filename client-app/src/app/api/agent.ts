import axios, { AxiosResponse } from "axios";
import { Journal } from "../models/Journal";

axios.defaults.baseURL = "http://localhost:5000/api";

const responseBody = (response: AxiosResponse) => response.data;

const sleep = (ms: number) => (response: AxiosResponse) =>
  new Promise<AxiosResponse>((resolve) =>
    setTimeout(() => resolve(response), ms)
  );

const requests = {
  get: (url: string) => axios.get(url).then(sleep(1000)).then(responseBody),
  post: (url: string, body: {}) =>
    axios.post(url, body).then(sleep(1000)).then(responseBody),
  put: (url: string, body: {}) =>
    axios.put(url, body).then(sleep(1000)).then(responseBody),
  delete: (url: string) =>
    axios.delete(url).then(sleep(1000)).then(responseBody),
};

const Journals = {
  list: (): Promise<Journal[]> => requests.get("/journals"),
  details: (id: string): Promise<Journal> => requests.get(`/journals/${id}`),
  create: (Journal: Journal) => requests.post("/journals", Journal),
  update: (Journal: Journal) =>
    requests.put(`/journals${Journal.id}`, Journal),
  delete: (id: string) => requests.delete(`/journals${id}`),
};

export default {
  Journals,
};
