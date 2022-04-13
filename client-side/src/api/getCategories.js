import axios from "axios";
import { baseUrl } from "../utilities/strings";

export default async function getCategories() {
  // await axios.get(`${baseUrl}/categories`)
  //   .then(res => data = res.data);

  // const categories = data;

  const categories = [
    {
      id: 1,
      title: "cookware"
    },
    {
      id: 2,
      title: "tents"
    },
    {
      id: 3,
      title: "sleeping-bags"
    },
    {
      id: 4,
      title: "fans"
    },
    {
      id: 5,
      title: "emergency"
    },
  ];

  return categories;
}
