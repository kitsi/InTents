import React from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  const { id } = useParams();
  return <div>{id}</div>;
}

export default ProductDetailsPage;
