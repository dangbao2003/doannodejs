import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { urlImage } from '../../../config';
import ProductService from '../../../services/ProductService';


function ProductList() {
    const [products, setProducts] = useState([]);
    const [statusdel, setStatusDel] = useState([]);
    useEffect(function () {
             ProductService.getAll().then(function(result) {
                setProducts(result.data.products);
            });
    },[statusdel]);

    function ProductDelete(id) {
        ProductService.remove(id).then(function(result) {
            alert(result.data.message)
            setStatusDel(result.data.id);

        });
    }

    // const Products=[
    //     {id:"1",name:"Áo", slug:'viet-nam', giagoc:"299.000đ", giasale:"100.000đ"},
    //     {id:"2",name:"Quần", slug:'han-quoc', giagoc:"299.000đ", giasale:"100.000đ"},
    //     {id:"3",name:"Giày", slug:'thai-lan', giagoc:"299.000đ", giasale:"100.000đ"},
    // ];
    return (<>
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-primary">TẤT CẢ SAN PHAM</strong>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link className="btn btn-sm btn-success" to="/admin/product/create">Thêm</Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th className='text-center' style={{ width: 30 }}>#</th>
                            <th className='text-center' style={{ width: 120 }}>Hình</th>
                            <th>category_id</th>
                            <th>brand_id</th>
                            <th>name</th>
                            <th>slug</th>
                            <th>price</th>
                            <th>price_sale</th>
                            
                            <th className='text-center'>Ngày tạo</th>
                            <th className='text-center'>Chức năng</th>
                            <th className='text-center' style={{ width: 30 }}>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index}>
                                <td className='text-center'><input type='checkbox' /></td>
                                <img className="img-fluid" src={urlImage+"product/"+product.image} alt={product.image} />
                                <td>{product.category_id}</td>
                                <td>{product.brand_id}</td>
                                <td>{product.name}</td>
                                <td>{product.slug}</td>
                                <td>{product.price}</td>
                                <td>{product.price_sale}</td>
                                <td className='text-center'>{product.created_at}</td>
                                <td className='text-center'>
                                    <Link to={`/admin/product/update/${product.id}`} className="btn btn-sm btn-info me-1">Edit</Link>
                                    <Link to={`/admin/product/show/${product.id}`} className="btn btn-sm btn-success me-1">Show</Link>
                                    <button onClick={() =>ProductDelete(product.id)} className="btn btn-sm btn-danger">Del</button>
                                </td>
                                <td>{product.id}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>

    </>)
}
export default ProductList;