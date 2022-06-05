import axios from "axios";

export const randomApi = axios.create({
    baseURL: 'https://randomuser.me/api/',
    timeout: 144000000,
    headers: { "Content-Type": "application/json" },
});