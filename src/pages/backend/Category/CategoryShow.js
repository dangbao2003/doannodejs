import { useEffect, useState } from "react";
import { FaArrowLeft, FaSave, FaTrash } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import CategoryService from "../../../services/CategoryService";




function CategoryShow() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [category, setCategory] = useState([]);

    useEffect(function () {
        (async function () {
            await CategoryService.getById(id).then(function (result) {
                setCategory(result.data.category);

            });
        })();
    }, []);
    async function CategoryDelete(id) {
        await CategoryService.remove(id).then(function (result) {
            alert(result.data.message);
            navigate('/admin/category', { replace: true });
        });
    }

    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-danger">
                            Chi tiết danh mục
                        </strong>

                    </div>
                    <div className="col-md-6 text-end">
                        <Link className='btn btn-info btn-sm me-2 ' to='/admin/category'>
                            <FaArrowLeft />Quay về danh sách
                        </Link>

                        <Link className='btn btn-info btn-sm me-2 ' to={"/admin/category/update/" + category.id}>
                            <FaArrowLeft />Cập nhật
                        </Link>

                        <button onClick={() => CategoryDelete(category.id)} className="btn btn-sm btn-danger"><FaTrash /></button>
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
                            <td>{category.id}</td>
                        </tr>

                        <tr>
                            <th className="text-center">Tên danh mục</th>
                            <td>{category.name}</td>
                        </tr>
                        <tr>
                            <th className="text-center"> slug</th>
                            <td>{category.slug}</td>
                        </tr>
                        <tr>
                            <th className="text-center">Parent_id</th>
                            <td>{category.parent_id}</td>
                        </tr>
                        <tr>
                            <th className="text-center">Từ khóa</th>
                            <td>{category.metakey}</td>
                        </tr>
                        <tr>
                            <th className="text-center">Mô tả</th>
                            <td>{category.metadesc}</td>
                        </tr>
                        <tr>
                            <th className="text-center">level</th>
                            <td>{category.level}</td>
                        </tr>
                        <tr>
                            <th className="text-center">ngày tạo</th>
                            <td>{category.created_at}</td>
                        </tr>
                    </tbody>

                </table>
            </div>

        </div>
    )
}
export default CategoryShow;