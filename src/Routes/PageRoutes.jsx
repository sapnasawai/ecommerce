import { Routes, Route } from "react-router-dom";
import { Home, ProductsPage, Wishlist, Cart, SingleProduct, Login, Signup } from "../Components";
import { PrivateRoute } from "../Components/PrivateRoute/PrivateRoute";

const PageRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
  )
}
export { PageRoutes }