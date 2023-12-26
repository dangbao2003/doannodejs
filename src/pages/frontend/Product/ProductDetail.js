import { useEffect, useState } from "react";
import ProductService from "../../../services/ProductService";
import ProductItem from "./ProductItem";
import { urlImage } from "../../../config";
import { useParams } from "react-router-dom";

function formatPrice(price) {
  if (price !== undefined && price !== null) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  return "";
}

function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState([]);
  const [product_orther, setProductOrther] = useState([]);
  useEffect(function () {
    (async function () {
      ProductService.getProductBySlug(slug).then(function (result) {
        if (result.data.success === true) {
          setProduct(result.data.product);
          setProductOrther(result.data.product_orther);
        }
      });
    })()
  }, [slug])
  return (
    <section className="maincontent">
      <div className="container my-4">
        <div className="row">
          <div className="col-md-6">
            <img src={urlImage + "product/" + product.image} className="img-fluid w-100" alt="jhihghg" />
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-between">
              <div>
                <h1 className="text-secondary fw-normal">{product.name}</h1>
                <div className="price-wrapper">
                  <h2 className="text-danger">
                    Giá Sale:
                    {formatPrice(product.price_sale)}đ</h2>
                  {product.price_sale && (
                    <h2 className="text-danger">
                      Giá Gốc:
                      <del> {formatPrice(product.price)}đ</del>

                    </h2>

                  )}
                </div>
                <div className="d-flex justify-content-between">
                  <h3 className="text-secondary fw-normal">Số Lượng: {product.qty}</h3>
                </div>
                <div>
                  <button className="btn" style={{ backgroundColor: 'red', marginRight: '10px' }}>Thêm vào giỏ hàng</button>
                  <button className="btn" style={{ backgroundColor: 'green' }}>Mua hàng</button>
                </div>


                <div className="col-md-12">
                  {product.detail && (
                    <div className="detail-box">
                      <h4>{product.detail}</h4>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="">
          <h3><b>Sản Phẩm Cùng Loại</b></h3>
        </div>
        <div className="row">
          {product_orther.map(function (product, index) {
            return <ProductItem product={product} key={index} />
          })}
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
