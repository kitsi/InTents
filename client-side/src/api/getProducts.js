import axios from "axios";
import { baseUrl } from "../utilities/strings";

export default async function getProducts(pageNumber = 0, limit = 10) {
  let data;
  let success = true;

  await axios.get(`${baseUrl}/products/${pageNumber}/${limit}`)
    .then(res => data = res.data)
    .catch(() => success = false);

  const products = data?.content;
  const totalPages = data?.totalPages;

  return { products, success, totalPages, pageNumber };
}
