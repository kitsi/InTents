import axios from "axios";
import { baseUrl } from "../utilities/strings";

export default async function getProducts(
  pageNumber = 0,
  category = 0,
  limit = 10,
  title = ""
) {
  let data;
  let success = true;

  await axios
    .get(
      `${baseUrl}/products/?pageNum=${pageNumber}&pageSize=${limit}` +
        (category !== 0 ? `&category=${category}` : "") +
        (title !== "" ? `&title=${title}` : "")
    )
    .then((res) => (data = res.data))
    .catch(() => (success = false));

  const products = data?.content;
  const totalPages = data?.totalPages;

  return { products, success, totalPages, pageNumber };
}
