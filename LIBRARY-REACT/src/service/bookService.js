import axios from "axios";
import config from "./config";

const BASE_URL = config.BASE_URL;

// Get status message ("/")
export const getApiStatus = () => axios.get(`${BASE_URL}/`);

// Get all books
export const getBooks = () => axios.get(`${BASE_URL}/all`);

// Add a book
export const addBook = (book) => axios.post(`${BASE_URL}`, book);

// Update a book by ID
export const updateBook = (id, book) => axios.put(`${BASE_URL}/${id}`, book);

// Delete a book by ID
export const deleteBook = (id) => axios.delete(`${BASE_URL}/${id}`);
