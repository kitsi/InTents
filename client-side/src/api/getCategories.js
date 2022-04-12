import axios from "axios";
import { baseUrl } from "../utilities/strings";

export default async function getCategories() {
  await axios.get(`${baseUrl}/categories`)
    .then(res => data = res.data);

  const categories = data;

  return categories;
}
