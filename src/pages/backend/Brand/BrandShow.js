import { useEffect, useState } from "react";
import { FaArrowLeft, FaSave, FaTrash } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import BrandService from "../../../services/BrandService";



function BrandShow() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [brand, setBrand] = useState([]);

    useEffect(function () {
        (async function () {
            await BrandService.getById(id).then(function (result) {
                setBrand(result.data.brand);

            });
        })();
    }, []);
    async function BrandDelete(id) {
        await BrandService.remove(id).then(function (result) {
            alert(result.data.message);
            navigate('/admin/brand', { replace: true });
        });
    }

    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-danger">
                            Chi tiết thương hiệu
                        </strong>

                    </div>
                    <div className="col-md-6 text-end">
                        <Link className='btn btn-info btn-sm me-2 ' to='/admin/brand'>
                            <FaArrowLeft />Quay về danh sách
                        </Link>

                        <Link className='btn btn-info btn-sm me-2 ' to={"/admin/brand/update/" + brand.id}>
                            <FaArrowLeft />Cập nhật
                        </Link>

                        <button onClick={() => BrandDelete(brand.id)} className="btn btn-sm btn-danger"><FaTrash /></button>
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
                            <td>{brand.id}</td>
                        </tr>

                        <tr>
                            <th className="text-center">Tên thương hiệu</th>
                            <td>{brand.name}</td>
                        </tr><tr>
                            <th className="text-center">slug</th>
                            <td>{brand.slug}</td>
                        </tr><tr>
                            <th className="text-center">Từ khóa</th>
                            <td>{brand.metakey}</td>
                        </tr><tr>
                            <th className="text-center">Mô tả</th>
                            <td>{brand.metadesc}</td>
                        </tr>
                    </tbody>

                </table>
            </div>

        </div>
    )
}
export default BrandShow;