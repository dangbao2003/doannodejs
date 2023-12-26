import { urlImage } from '../../../config';
import { Link } from 'react-router-dom';

function formatPrice(price) {
  if (price !== undefined && price !== null) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  return "";
}

function truncateProductName(name, maxLength) {
  if (name.length > maxLength) {
    return name.substring(0, maxLength) + '...';
  }
  return name;
}

function ProductItem(props) {
  const MAX_NAME_LENGTH = 20; // Maximum allowed length for product names

  const truncatedName = truncateProductName(props.product.name, MAX_NAME_LENGTH);

  return (
    <div className="col-md-3 mb-3">
      <div className="product-item border d-flex flex-column h-100">
        <div className="product-image">
          <Link to={"/chi-tiet-san-pham/" + props.product.slug}>
            <img src={urlImage + "product/" + props.product.image} className="img-fluid my-2" alt={props.product.image} />
          </Link>
        </div>
        <h4 className="text-center">
          <Link className="nav-link" to={"/chi-tiet-san-pham/" + props.product.slug}>
            {truncatedName}
          </Link>
        </h4>
        <div className="product-price p-2 mt-auto">
          <div className="row">
            <div className="col-12 text-center">
              <strong className="text-danger fs-3">{formatPrice(props.product.price_sale)}đ</strong>
              <br />
              <del style={{ marginTop: '10px' }}>{formatPrice(props.product.price)}đ</del>
              <div className="d-flex justify-content-between">
                <button className="btn btn-sm" style={{ backgroundColor: 'red' }}>Thêm vào giỏ hàng</button>
                <button className="btn btn-sm" style={{ backgroundColor: 'green', marginLeft: '10px' }}>Mua hàng</button>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default ProductItem;
