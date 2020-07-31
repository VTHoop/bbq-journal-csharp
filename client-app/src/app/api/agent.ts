import axios, { AxiosResponse } from "axios";
import { Activity } from "../models/Activities";

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

const Activities = {
  list: (): Promise<Activity[]> => requests.get("/activities"),
  details: (id: string): Promise<Activity> => requests.get(`/acivities/${id}`),
  create: (activity: Activity) => requests.post("/acitivites", activity),
  update: (activity: Activity) =>
    requests.put(`/acivities${activity.id}`, activity),
  delete: (id: string) => requests.delete(`/acivities${id}`),
};

export default {
  Activities,
};
