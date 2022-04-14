import { Paper, Typography, Box, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import getOrders from "../../api/getOrders";
import Loading from "../common/Loading";
import PaginationBar from "../common/PaginationBar";
import SingleOrder from "./SingleOrder";
import * as styles from "./OrderHistoryPageStyles";
import { Link } from "react-router-dom";

export default function OrderHistoryPage() {
  const [orders, setOrders] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [curPage, setCurPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [success, setSuccess] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true);
      const { orders, success, totalPages } = await getOrders(curPage);
      setOrders(orders);
      setSuccess(success);
      setTotalPages(totalPages);
      setIsLoading(false);
    }

    fetchOrders();
  }, [curPage]);

  if (isLoading) {
    return <Loading />;
  }

  if (!success) {
    return (
      <Box xs={styles.container}>
        <Typography sx={styles.errorText}>There was an error getting orders from the server.</Typography>
      </Box>
    );
  }

  if (orders.length === 0) {
    return (
      <Box xs={styles.container}>
        <Typography sx={styles.noOrderText}>There are currently no orders in the database.</Typography>
      </Box>
    );
  }

  const orderList = orders.map(order => {
    return <SingleOrder key={order.orderId} order={order} />;
  });
  
  return (
    <Box sx={styles.container}>
      <Button
        component={Link}
        to="/admin"
        size="large"
        variant="contained"
        color="primary"
      >
        Edit Products
      </Button>
      <Paper sx={styles.paper}>
        <Typography variant="h4" sx={styles.header}>Order History</Typography>
        <PaginationBar curPage={curPage} totalPages={totalPages} setCurPage={setCurPage} />

        {orderList}

        <PaginationBar curPage={curPage} totalPages={totalPages} setCurPage={setCurPage} />
      </Paper>
    </Box>
  );
}
