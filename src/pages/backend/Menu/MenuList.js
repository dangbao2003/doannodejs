import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MenuService from '../../../services/MenuService';

function MenuList() {
    const [menus, setMenus] = useState([]);
    const [statusdel, setStatusDel] = useState([]);
    useEffect(function () {
        //call api
        (async function () {
            await MenuService.getAll().then(function (result) {
                setMenus(result.data.menus);
            });
        })();

    }, [statusdel]);

    function MenuDelete(id) {
        MenuService.remove(id).then(function (result) {
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
                        <strong className="text-primary">TẤT CẢ MENU</strong>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link className="btn btn-sm btn-success" to="/admin/menu/create">Thêm</Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th className='text-center' style={{ width: 30 }}>#</th>

                            <th>Name</th>
                            <th className='text-center' style={{ width: 120 }}>Link</th>
                            <th>Type</th>
                            <th>Table</th>
                            <th>Sort order</th>
                            <th>Position</th>
                            <th>Level</th>
                            <th>Parent id</th>
                            <th className='text-center'>Ngày tạo</th>
                            <th className='text-center'>Chức năng</th>
                            <th className='text-center' style={{ width: 30 }}>ID</th>
                        </tr>
                    </thead>

                    <tbody>
                        {menus.map((menu, index) => (
                            <tr key={index}>
                                <td className='text-center'><input type='checkbox' /></td>
                                <td>{menu.name}</td>
                                <td>{menu.link}</td>
                                <td>{menu.type}</td>
                                <td>{menu.table_id}</td>
                                <td>{menu.sort_order}</td>
                                <td>{menu.position}</td>
                                <td>{menu.level}</td>
                                <td>{menu.parent_id}</td>
                                <td className='text-center'>{menu.created_at}</td>
                                <td className='text-center'>
                                    <Link to={`/admin/menu/update/${menu.id}`} className="btn btn-sm btn-info me-1">Edit</Link>
                                    <Link to={`/admin/menu/show/${menu.id}`} className="btn btn-sm btn-success me-1">Show</Link>
                                    <button onClick={() => MenuDelete(menu.id)} className="btn btn-sm btn-danger">Del</button>
                                </td>
                                <td>{menu.id}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default MenuList;