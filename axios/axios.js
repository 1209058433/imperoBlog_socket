import axios from "axios";

export const useAxios = axios.create({
    // baseURL:"http://localhost:3030/api",
    baseURL:"https://www.impero.top:3030/api",
})