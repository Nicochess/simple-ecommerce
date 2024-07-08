import axios from "axios";

const APIKEY = process.env.NEXT_PUBLIC_API_KEY;
const API_URL = "http://localhost:1337/api";

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${APIKEY}`,
  },
});

const getLastestProducts = () => axiosClient.get("/products?populate=*");

const getProductById = (id: Number) =>
  axiosClient.get(`/products/${id}?populate=*`);

const getProductByCategory = (category: string) =>
  axiosClient.get(`/products?filters=[category][$eq]=${category}&populate=*`);

const fetchCart = () =>
  axiosClient.get(`/carts?populate[products][populate][0]=banner`);

const createCart = (data: any) => axiosClient.post("/carts", data);

const addToCart = (id: number, data: any) => axiosClient.put(`/carts/${id}`, data);

export default {
  getLastestProducts,
  getProductById,
  getProductByCategory,
  addToCart,
  fetchCart,
  createCart
};
