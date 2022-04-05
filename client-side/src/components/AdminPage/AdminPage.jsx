import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./adminPage.css";
import AdminProduct from "./AdminProduct";
import ProductTile from "../common/ProductTile";
import { fetchProducts } from "../ProductsPage/productsSlice";
import { Divider, Typography } from "@mui/material";
import Loading from "../common/Loading";
import ProductEditDialog from "./ProductEditDialog/ProductEditDialog";

function AdminPage() {
  const { products, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState();

  useEffect(() => {
    if (products.length > 0) return;
    dispatch(fetchProducts());
  }, [dispatch, products]);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const editProduct = (product) => {
    setSelectedProduct(product);
    toggleModal();
  };

  const productTiles = products.map((product) => {
    return (
      <AdminProduct
        key={product.id}
        productData={product}
        editProduct={editProduct}
      />
    );
  });

  return (
    <div className="admin-page">
      <ProductEditDialog
        isOpen={modalOpen}
        toggleModal={toggleModal}
        product={selectedProduct}
      />
      <Typography variant="h2" className="admin-page-header">
        Admin
      </Typography>
      <Divider />
      <div className="admin-product-tiles-container">
        {loading ? (
          <Loading />
        ) : products.length === 0 ? (
          <Typography variant="h3">
            No Products Available. Please check back again!
          </Typography>
        ) : (
          productTiles
        )}
      </div>
    </div>
  );
}

export default AdminPage;
