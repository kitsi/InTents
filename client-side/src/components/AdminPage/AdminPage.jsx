import React, { useEffect, useState } from "react";
import AdminProduct from "./AdminProduct";
import { Divider, Typography, Button, Box } from "@mui/material";
import Loading from "../common/Loading";
import ProductEditDialog from "./ProductEditDialog/ProductEditDialog";
import getProducts from "../../api/getProducts";
import * as styles from "./AdminPageStyles";

function AdminPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState();
  const [newProduct, setnewProduct] = useState(false);

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [curPage, setCurPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const checkProducts = async () => {
      setIsLoading(true);

      const { products, totalPages, pageNumber } = await getProducts(curPage);
      setProducts(products);
      setTotalPages(totalPages);
      setCurPage(pageNumber);

      setIsLoading(false);
    }

    checkProducts();
  }, [curPage]);

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
        key={product.productId}
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
        {isLoading ? (
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
