import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BrandService from '../../../services/BrandService';
import { urlImage } from '../../../config';

function BrandList() {
    const [brands, setBrands] = useState([]);
    const [statusdel, setStatusDel] = useState([]);
    useEffect(function () {
             BrandService.getAll().then(function(result) {
                setBrands(result.data.brands);
            });
    },[statusdel]);

    function BrandDelete(id) {
            BrandService.remove(id).then(function(result) {
            alert(result.data.message)
            setStatusDel(result.data.id);

        });
    }
    
  

    /* const Brands=[
         {id:"1",name:"Việt Nam", slug:'viet-nam'},
         {id:"2",name:"Hàn Quốc", slug:'han-quoc'},
         {id:"3",name:"Thái Lan", slug:'thai-lan'},
     ];*/
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-primary">TẤT CẢ THƯƠNG HIỆU</strong>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link className="btn btn-sm btn-success" to="/admin/brand/create">Thêm</Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th className='text-center' style={{ width: 30 }}>#</th>
                            <th className='text-center' style={{ width: 120 }}>Hình</th>
                            <th>Tên thương hiệu</th>
                            <th>Slug</th>
                            <th>Sort_order</th>
                            <th>metakey</th>
                            <th>metadesc</th>
                            <th className='text-center'>Ngày tạo</th>
                            <th className='text-center'>Chức năng</th>
                            <th className='text-center' style={{ width: 30 }}>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {brands.map((brand, index) => (
                            <tr key={index}>
                                <td className='text-center'><input type='checkbox' /></td>
                                <img className="img-fluid" src={urlImage+"brand/"+brand.image} alt={brand.image} />
                                <td>{brand.name}</td>
                                <td>{brand.slug}</td>
                                <td>{brand.sort_order}</td>
                                <td>{brand.metakey}</td>
                                <td>{brand.metadesc}</td>
                                <td className='text-center'>{brand.created_at}</td>
                                <td className='text-center'>
                                    <Link to={`/admin/brand/update/${brand.id}`} className="btn btn-sm btn-info me-1">Edit</Link>
                                    <Link to={`/admin/brand/show/${brand.id}`} className="btn btn-sm btn-success me-1">Show</Link>
                                    <button onClick={() =>BrandDelete(brand.id)} className="btn btn-sm btn-danger">Del</button>
                                </td>
                                <td>{brand.id}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    )
}
export default BrandList;