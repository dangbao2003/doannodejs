import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductService from "../../../services/ProductService";
import ProductItem from "../Product/ProductItem";

function ProductHome(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await ProductService.getProductHome(8, props.category.id);
        setProducts(result.data.products);
      } catch (error) {
        // Handle error here
        console.log(error);
      }
    };

    fetchData();
  }, []);
  
  if (products != null) {
    return (
      <div className="container my-4">
        <div className="product-category p-2">
          <h3 className="text-center" style={{ color: "GrayText" }}>
            <b>{props.category.name}</b>
          </h3>
        </div>
        <div className="row">
          {products.map(function (product, index) {
            return <ProductItem key={index} product={product} />;
          })}
        </div>
        <div className="text-center my-3">
          {products.length < 8 ? (
            <button className="btn btn-success" disabled>
              Hết
            </button>
          ) : (
            <Link to={"/danh-muc-san-pham/" + props.category.slug} className="btn btn-success">
              Xem thêm
            </Link>
          )}
        </div>
      </div>
    );
  }
}

export default ProductHome;
