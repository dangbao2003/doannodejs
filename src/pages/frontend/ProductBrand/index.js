import { useEffect, useState } from "react";
import ListBrand from "../../../layouts/LayoutSite/ListBrand";
import ListCategory from "../../../layouts/LayoutSite/ListCategory";
import BrandService from "../../../services/BrandService";
import ProductService from "../../../services/ProductService";
import { useParams } from "react-router-dom";
import ProductItem from "../Product/ProductItem";

function ProductBrand() {
    const { slug } = useParams();
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(8);
    const [title, setTitle] = useState("");
    const [hasMoreProducts, setHasMoreProducts] = useState(true);

    useEffect(function () {
        (async function () {
            try {
                const result_brand = await BrandService.getById(slug);
                const brandid = result_brand.data.brand.id;
                setTitle(result_brand.data.brand.name);
                const result = await ProductService.getProductByBrandId(brandid, limit);
                setProducts(result.data.products);
                if (result.data.products.length < limit) {
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
        <section className="maincontent">
            <div className="container my-4">
                <div className="row">
                    <div className="col-md-3">
                        <ListCategory />
                        <ListBrand />
                    </div>
                    <div className="col-md-9">
                        <h3 className="text-center" style={{ color: "GrayText" }}>{title}</h3>
                        <div className="row">
                        {products.map(function (product, index) {
                        return <ProductItem key={index} product={product} />;
                    })}
                        </div>
                        {hasMoreProducts && (
                            <div className="row">
                                <div className="text-center my-3">
                                    <button onClick={loadMoreProducts} className="btn btn-success">Xem thêm</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductBrand;
