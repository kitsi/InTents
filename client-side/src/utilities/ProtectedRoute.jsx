import React from "react";
import AdminLogin from "../components/AdminPage/AdminLogin/AdminLogin";

function ProtectedRoute({ admin, children }) {
  if (!admin) {
    return <AdminLogin />;
  }

  return children;
}

export default ProtectedRoute;
