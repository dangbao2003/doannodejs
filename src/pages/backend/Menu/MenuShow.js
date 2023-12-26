import { useEffect, useState } from "react";
import { FaArrowLeft, FaSave, FaTrash } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import MenuService from "../../../services/MenuService";
function MenuShow() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [menu, setMenu] = useState([]);

    useEffect(function () {
        (async function () {
            await MenuService.getById(id).then(function (result) {
                setMenu(result.data.menu);

            });
        })();
    }, []);
    async function MenuDelete(id) {
        await MenuService.remove(id).then(function (result) {
            alert(result.data.message);
            navigate('/admin/menu', { replace: true });
        });
    }

    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-danger">
                            Chi tiết Menu
                        </strong>

                    </div>
                    <div className="col-md-6 text-end">
                        <Link className='btn btn-info btn-sm me-2 ' to='/admin/menu'>
                            <FaArrowLeft />Quay về danh sách
                        </Link>

                        <Link className='btn btn-info btn-sm me-2 ' to={"/admin/menu/update/" + menu.id}>
                            <FaArrowLeft />Cập nhật
                        </Link>

                        <button onClick={() => MenuDelete(menu.id)} className="btn btn-sm btn-danger"><FaTrash /></button>
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
                            <td>{menu.id}</td>
                        </tr>

                        <tr>
                            <th className="text-center">Tên danh mục</th>
                            <td>{menu.name}</td>
                        </tr>
                        <tr>
                            <th className="text-center"> link</th>
                            <td>{menu.link}</td>
                        </tr>
                        <tr>
                            <th className="text-center"> type</th>
                            <td>{menu.type}</td>
                        </tr>
                        <tr>
                            <th className="text-center"> table_id</th>
                            <td>{menu.table_id}</td>
                        </tr>
                        <tr>
                            <th className="text-center"> position</th>
                            <td>{menu.position}</td>
                        </tr>
                        <tr>
                            <th className="text-center"> level</th>
                            <td>{menu.level}</td>
                        </tr>
                        <tr>
                            <th className="text-center">Parent_id</th>
                            <td>{menu.parent_id}</td>
                        </tr>
                        <tr>
                            <th className="text-center">level</th>
                            <td>{menu.level}</td>
                        </tr>
                        <tr>
                            <th className="text-center">ngày tạo</th>
                            <td>{menu.created_at}</td>
                        </tr>
                    </tbody>

                </table>
            </div>

        </div>
    )
}
export default MenuShow;
