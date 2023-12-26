import { useEffect, useState } from "react";
import { FaArrowLeft, FaTrash } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import SliderService from "../../../services/SliderService";


function SliderShow() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [slider, setSlider] = useState([]);

    useEffect(function () {
        (async function () {
            await SliderService.getById(id).then(function (result) {
                setSlider(result.data.slider);

            });
        })();
    }, []);
    async function SliderDelete(id) {
        await SliderService.remove(id).then(function (result) {
            alert(result.data.message);
            navigate('/admin/slider', { replace: true });
        });
    }

    return (<>
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-danger">
                            Chi tiết danh mục
                        </strong>

                    </div>
                    <div className="col-md-6 text-end">
                        <Link className='btn btn-info btn-sm me-2 ' to='/admin/slider'>
                            <FaArrowLeft />Quay về danh sách
                        </Link>

                        <Link className='btn btn-info btn-sm me-2 ' to={"/admin/slider/update/" + slider.id}>
                            <FaArrowLeft />Cập nhật
                        </Link>

                        <button onClick={() => SliderDelete(slider.id)} className="btn btn-sm btn-danger"><FaTrash /></button>
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
                            <td>{slider.id}</td>
                        </tr>

                        <tr>
                            <th className="text-center">Tên</th>
                            <td>{slider.name}</td>
                        </tr>
                        <tr>
                            <th className="text-center"> link</th>
                            <td>{slider.link}</td>
                        </tr>
                        <tr>
                            <th className="text-center">sort_order</th>
                            <td>{slider.sort_order}</td>
                        </tr>
                        <tr>
                            <th className="text-center">position</th>
                            <td>{slider.position}</td>
                        </tr>
                        <tr>
                            <th className="text-center">Ngay tao</th>
                            <td>{slider.created_at}</td>
                        </tr>
                    </tbody>

                </table>
            </div>

        </div>
    </>)
}
export default SliderShow;