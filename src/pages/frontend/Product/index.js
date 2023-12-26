
import Dichvu from "../Contact/dichvu";
import { useEffect, useState } from 'react';
import ProductItem from "./ProductItem";
import ProductService from "../../../services/ProductService";

function Product() {
    const [limit, setLimit] = useState(8);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await ProductService.getProductAll(limit, 1);
                setProducts(result.data.products);
            } catch (error) {
                // Handle error here
                console.log(error);
            }
        };
        fetchData();
    }, [limit]);

    const hasMoreProducts = products.length >= limit;

    return (
        <>
            <Dichvu />
            <section id="content" className="clearfix container">
                {/* Content for the left and right columns */}
                {/* ... */}
                <div className="container my-4">
                    <div className="row">
                        {products.map(function (product, index) {
                            return <ProductItem key={index} product={product} />;
                        })}
                    </div>

                    <div className='row mt-3'>
                        <div className='col-12 text-center'>
                            {hasMoreProducts ? (
                                <button className='btn btn-success' onClick={() => setLimit(limit + 8)}>Xem thêm</button>
                            ) : (
                                <button className='btn btn-success' disabled>Hết</button>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Product;
