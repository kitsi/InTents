import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminProduct from "./AdminProduct";
import { fetchProducts } from "../ProductsPage/productsSlice";
import { Divider, Typography, Button, Box } from "@mui/material";
import Loading from "../common/Loading";
import ProductEditDialog from "./ProductEditDialog/ProductEditDialog";

import * as styles from "./AdminPageStyles";

function AdminPage() {
  const { products, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState();
  const [newProduct, setnewProduct] = useState(false);

  useEffect(() => {
    if (products.length > 0) return;
    dispatch(fetchProducts());
  }, [dispatch, products]);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const createProduct = () => {
    setSelectedProduct({
      title: "",
      sku: "",
      description: "",
      price: 0,
      inventory: {
        quantity: 0,
      },
      image: "",
      category: {
        categoryId: 1,
      },
    });
    setnewProduct(true);
    toggleModal();
  };

  const editProduct = (product) => {
    setSelectedProduct(product);
    setnewProduct(false);
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
    <Box>
      <ProductEditDialog
        isOpen={modalOpen}
        toggleModal={toggleModal}
        product={selectedProduct}
        newProduct={newProduct}
      />
      <Typography variant="h2" sx={styles.pageHeader}>
        Admin
      </Typography>

      <Divider />

      <Box sx={styles.addButton}>
        <Button
          size="large"
          variant="contained"
          color="primary"
          onClick={createProduct}
        >
          Add Item
        </Button>
      </Box>

      <Box sx={styles.productTilesContainer}>
        {loading ? (
          <Loading />
        ) : products.length === 0 ? (
          <Typography variant="h3">
            No Products Available. Please check back again!
          </Typography>
        ) : (
          productTiles
        )}
      </Box>
    </Box>
  );
}

export default AdminPage;
