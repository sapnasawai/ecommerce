import "../Header/Header.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useFilters } from "../../Context/FilterContext";
import { useAuth } from "../../Context/AuthContext";
import { useWishlist } from "../../Context/WishlistContext";
import { useCart } from "../../Context/CartContext";
import { AUTH_TOKEN } from "../../Constants/AuthConstants";
import toast from "react-hot-toast";
import { ToastStyle } from "../ToastStyle/ToastStyle";
import { SEARCH } from "../../Constants/FilterConstants";

export const Header = () => {
  const { dispatch } = useFilters();
  const { authState, authDispatch } = useAuth();
  const { token } = authState;
  const { wishlist } = useWishlist();
  const { cart } = useCart();
  const navigator = useNavigate();
  const { pathname } = useLocation()
  const logOutHandler = () => {
    localStorage.removeItem("token");
    authDispatch({
      type: AUTH_TOKEN,
      payload: null,
    });
    navigator("/");
    toast.success("Logged out", ToastStyle)
  };

  return (
    <div className="navbar-container">
      <div className="navbar-main">
        <div className="navbar-links">
          <Link to="/" className="nav-link">
            <h2>Evertime</h2>
          </Link>
          <div className="nav-item flex-center">
            <Link to="/products" className="nav-link">
              Products
            </Link>
          </div>
        </div>
        {pathname !== "/" && <div className="search-box-container flex-center margin-r-md">
          <div className="search-box flex-center">
            <input
              className="search-txt"
              type="search"
              name="search"
              placeholder="Type to search"
              onChange={(e) =>
                dispatch({
                  type: SEARCH,
                  payload: e.target.value.toLowerCase(),
                })
              }
            />
            <div className="search-btn flex-center">
              <i className="fas fa-search"></i>
            </div>
          </div>
        </div>}
        
      </div>
      <div>
        <ul className="flex-center margin-x-xl gap-sm">
          {!token ? (
            <li className="nav-item">
              <Link to="/login" className="nav-link">
               Login
              </Link>
            </li>
          ) : (
            <li className="nav-item" onClick={logOutHandler}>
              <p className="nav-link cursor-pointer">Logout</p>
            </li>
          )}
          <li className="nav-item">
            <div className="icon-badge-wrapper">
              <Link to="/wishlist" className="nav-link">
                <i className="fas fa-heart"></i>
              </Link>
              <span className="icon-badge bg-danger flex-center">
                {token ? wishlist.length : 0}
              </span>
            </div>
          </li>
          <li className="nav-item">
            <div className="icon-badge-wrapper">
              <Link to="/cart" className="nav-link">
                <i className="fas fa-shopping-cart"></i>
              </Link>
              <span className="icon-badge bg-danger flex-center">
                {token ? cart.length : 0}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
