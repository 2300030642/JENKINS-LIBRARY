import axios from "axios";
import config from "./config";

const BASE_URL = config.BASE_URL;

export const getBooks = () => axios.get(`${BASE_URL}/all`);
export const addBook = (book) => axios.post(`${BASE_URL}`, book);
export const updateBook = (id, book) => axios.put(`${BASE_URL}/${id}`, book);
export const deleteBook = (id) => axios.delete(`${BASE_URL}/${id}`);
