import { Header } from "../Header/Header.jsx";
import { Link } from "react-router-dom";
import { Footer } from "../Footer/Footer.jsx";
import "../Home/Home.css";
import { useFilters } from "../../Context/FilterContext.jsx";
export const Home = () => {
  const { state, dispatch } = useFilters();
  const { category } = state;
  return (
    <div>
      <Header />
      <div className="home-page">
        <div className="hero-section flex-column-center gap-md margin-t-xxl">
          <h1 className="padding-sm">
            Evertime
            <span className="text-secondary font-inherit"> Mart</span>
          </h1>
          <h1 className="padding-x-sm">UPTO 30% OFF on various products</h1>
          <Link to="/products">
            <button className="btn btn-primary btn-large">
              <h3 >Shop Now</h3>  
            </button>
          </Link>
        </div>
        <h1 className="flex-center margin-y-xxl text-primary">
          Featured Categories
        </h1>
        <div className=" flex-center gap-xl margin-b-xxl flex-wrap">
          <Link
            to="/products"
            className="category-card"
            onClick={() =>
              dispatch({
                type: "FILTER_BY_CATEGORY",
                payload: "analog",
              })
            }
          >
            <img
              className="category-img"
              src="/Assets/brand2.jpg"
              alt="Analog Watch"
            />
            <h3 className="flex-center text-secondary">Analog Watch</h3>
          </Link>
          <Link
            to="/products"
            className="category-card"
            onClick={() =>
              dispatch({
                type: "FILTER_BY_CATEGORY",
                payload: "digital",
              })
            }
          >
            <img
              className="category-img"
              src="./Assets/digital-01.jpg"
              alt="Digital Watch"
            />
            <h3 className="flex-center text-secondary">Digital Watch</h3>
          </Link>
          <Link
            to="/products"
            className="category-card"
            onClick={() =>
              dispatch({
                type: "FILTER_BY_CATEGORY",
                payload: "analog-digital",
              })
            }
          >
            <img
              className="category-img"
              src="/Assets/analog-digital-01.jpg"
              alt="Analog-Digital Watch"
            />
            <h3 className="flex-center text-secondary">Analog-Digital Watch</h3>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};
