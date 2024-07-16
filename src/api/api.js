import axios from "axios";

const REST_API_ADDR = axios.create({
  baseURL: "http://localhost:3001",
});

export const aiApi = {
  askToAI: (query) => {
    //요청 : http://localhost:3000/?prompt=string
    return REST_API_ADDR.get(`/?prompt=${query}`);
  },
};
