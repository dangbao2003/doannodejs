import { useEffect, useState } from "react";
import { FaArrowLeft, FaSave, FaTrash } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProductService from "../../../services/ProductService";

function ProductShow(){
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(function () {
        (async function () {
            await ProductService.getById(id).then(function (result) {
                setProduct(result.data.product);

            });
        })();
    }, []);
    async function ProductDelete(id) {
        await ProductService.remove(id).then(function (result) {
            alert(result.data.message);
            navigate('/admin/product', { replace: true });
        });
    }
    return(<>
     <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-danger">
                            Chi tiết thương hiệu
                        </strong>

                    </div>
                    <div className="col-md-6 text-end">
                        <Link className='btn btn-info btn-sm me-2 ' to='/admin/product'>
                            <FaArrowLeft />Quay về danh sách
                        </Link>

                        <Link className='btn btn-info btn-sm me-2 ' to={"/admin/product/update/" + product.id}>
                            <FaArrowLeft />Cập nhật
                        </Link>

                        <button onClick={() => ProductDelete(product.id)} className="btn btn-sm btn-danger"><FaTrash /></button>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th className="text-center" style={{ width: 200 }}>Tên trường</th>
                            <th style={{}}>Giá trị</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="text-center">Id</th>
                            <td>{product.id}</td>
                        </tr>
                        <tr>
                            <th className="text-center">category_id</th>
                            <td>{product.category_id}</td>
                        </tr>
                        <tr>
                            <th className="text-center">brand_id</th>
                            <td>{product.brand_id}</td>
                        </tr>
                        <tr>
                            <th className="text-center">name</th>
                            <td>{product.name}</td>
                        </tr>
                        <tr>
                            <th className="text-center">slug</th>
                            <td>{product.slug}</td>
                        </tr>
                        <tr>
                            <th className="text-center">price</th>
                            <td>{product.price}</td>
                        </tr>
                        <tr>
                            <th className="text-center">price_sale</th>
                            <td>{product.price_sale}</td>
                        </tr>
                        <tr>
                            <th className="text-center">qty</th>
                            <td>{product.qty}</td>
                        </tr>
                        <tr>
                            <th className="text-center">detail</th>
                            <td>{product.detail}</td>
                        </tr>
                        <tr>
                            <th className="text-center">metakey</th>
                            <td>{product.metakey}</td>
                        </tr>
                        <tr>
                            <th className="text-center">metadesc</th>
                            <td>{product.metadesc}</td>
                        </tr>
                        <tr>
                            <th className="text-center">ngay tao</th>
                            <td>{product.created_at}</td>
                        </tr>
                        
                    </tbody>

                </table>
            </div>

        </div>
    </>)
}
export default ProductShow;