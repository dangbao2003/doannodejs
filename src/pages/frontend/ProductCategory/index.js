import { useEffect, useState } from "react";
import ProductService from "../../../services/ProductService";
import ProductItem from "../Product/ProductItem";
import CategoryService from "../../../services/CategoryService";
import { useParams } from "react-router-dom";
import ListCategory from "../../../layouts/LayoutSite/ListCategory";
import ListBrand from "../../../layouts/LayoutSite/ListBrand";

function ProductCategory() {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(8);
  const [title, setTitle] = useState("");
  const [hasMoreProducts, setHasMoreProducts] = useState(true);

  document.title = title;

  useEffect(function () {
    (async function () {
      try {
        const infocategory = await CategoryService.getBySlug(slug);
        const catid = infocategory.data.category.id;
        setTitle(infocategory.data.category.name);
        const infoproduct = await ProductService.getProductByCategoryId(limit, catid);
        setProducts(infoproduct.data.products);
        if (infoproduct.data.products.length < limit) {
          setHasMoreProducts(false);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [limit, slug]);

  const loadMoreProducts = () => {
    setLimit(limit + 4);
  };

  return (
    <>
      <section className="maincontent">
        <div className="container my-4">
          <div className="row">
            <div className="col-md-3">
              <ListCategory />
              <ListBrand />
            </div>
            <div className="col-md-9">
              <h1 className="text-center" style={{ color: "GrayText" }}>
                {title}
              </h1>
              <div className="row">
                {products.map(function (product, index) {
                  return <ProductItem product={product} key={index} />;
                })}
              </div>
              <div className="row">
                <div className="col-12 text-center">
                  {!hasMoreProducts ? (
                    <button className="btn btn-success" disabled>
                      Hết
                    </button>
                  ) : (
                    <button className="btn btn-success" onClick={loadMoreProducts}>
                      Xem thêm
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductCategory;
