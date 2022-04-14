import axios from "axios";
import { baseUrl } from "../utilities/strings";

export default async function getOrders(pageNumber = 0, limit = 5) {
  let data;
  let success = true;

  await axios
    .get(`${baseUrl}/orders/?pageNum=${pageNumber}&pageSize=${limit}`)
    .then((res) => (data = res.data))
    .catch(() => (success = false));

  const orders = data?.content;
  const totalPages = data?.totalPages;

  return { orders, success, totalPages, pageNumber };
}
