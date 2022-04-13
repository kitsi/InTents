import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ admin, redirectPath = "/admin/login", children }) {
  if (!admin) {
    return <Navigate to={redirectPath} replace></Navigate>;
  }
  return children;
}

export default ProtectedRoute;
