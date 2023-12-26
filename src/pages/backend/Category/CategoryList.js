import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import CategoryService from '../../../services/CategoryService';
import { urlImage } from '../../../config';


function CategoryList(){
   
    const [categorys, setCategorys] = useState([]);
    const [statusdel, setStatusDel] = useState([]);
    useEffect(function () {
        //call api
        (async function(){
            await CategoryService.getAll().then(function (result) {
                setCategorys(result.data.categorys);
            });
        })();

    }, [statusdel]);

    function CategoryDelete(id) {
        CategoryService.remove(id).then(function(result) {
        alert(result.data.message)
        setStatusDel(result.data.id);

    });
}
    /*const categorys=[
        {id:"1",name:"Việt Nam", slug:'viet-nam'},
        {id:"2",name:"Hàn Quốc", slug:'han-quoc'},
        {id:"3",name:"Thái Lan", slug:'thai-lan'},
    ];*/
    return(
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-primary">TẤT CẢ DANH MỤC</strong>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link className="btn btn-sm btn-success" to="/admin/category/create">Thêm</Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th className='text-center' style={{width:30}}>#</th>
                            <th className='text-center' style={{width:120}}>Hình</th>
                            <th>Tên danh mục</th>
                            <th>parent_id</th>
                            <th>metakey</th>
                            <th>metadesc</th>
                            <th>level</th>
                            <th className='text-center'>Ngày tạo</th>
                            <th className='text-center'>Chức năng</th>
                            <th className='text-center' style={{width:30}}>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categorys.map(function(category,index){
                            return(
                                <tr key={index}>
                                <td className='text-center'><input type='checkbox' /></td>
                                <img className="img-fluid" src={urlImage+"category/"+category.image} alt={category.image} />
                                <td>{category.name}</td>
                                <td>{category.parent_id}</td>
                                <td>{category.metakey}</td>
                                <td>{category.metadesc}</td>
                                <td>{category.level}</td>

                                <td className='text-center'>{category.created_at}</td>
                                <td className='text-center'>
                                    <Link to={`/admin/category/update/${category.id}`} className="btn btn-sm btn-info me-1">Edit</Link>
                                    <Link to={`/admin/category/show/${category.id}`} className="btn btn-sm btn-success me-1">Show</Link>
                                    <button onClick={() =>CategoryDelete(category.id)} className="btn btn-sm btn-danger">Del</button>
                                </td>
                                <td>{category.id}</td>
                            </tr>
                            
                            )})}
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default CategoryList;