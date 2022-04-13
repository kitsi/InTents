import axios from "axios";
import { baseUrl } from "../utilities/strings";

//TODO: Consider adding category to URL parameters
export default async function getProducts(pageNumber = 0, category, limit = 10) {
  let data;
  let success = true;

  await axios.get(`${baseUrl}/products/?pageNum=${pageNumber}&pageSize=${limit}` + (category ? `&category=${category}` : ""))
    .then(res => data = res.data)
    .catch(() => success = false);

  const products = data?.content;
  const totalPages = data?.totalPages;

  return { products, success, totalPages, pageNumber };
}
