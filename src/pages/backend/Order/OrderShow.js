import { useEffect, useState } from "react";
import { FaArrowLeft, FaSave, FaTrash } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import OrderService from "../../../services/OrderService";


function OrderShow() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [order, setOrder] = useState([]);

    useEffect(function () {
        (async function () {
            await OrderService.getById(id).then(function (result) {
                setOrder(result.data.order);

            });
        })();
    }, []);
    async function OrderDelete(id) {
        await OrderService.remove(id).then(function (result) {
            alert(result.data.message);
            navigate('/admin/order', { replace: true });
        });
    }

    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-danger">
                            Chi tiết ORDER
                        </strong>

                    </div>
                    <div className="col-md-6 text-end">
                        <Link className='btn btn-info btn-sm me-2 ' to='/admin/order'>
                            <FaArrowLeft />Quay về danh sách
                        </Link>

                        <Link className='btn btn-info btn-sm me-2 ' to={"/admin/order/update/" + order.id}>
                            <FaArrowLeft />Cập nhật
                        </Link>

                        <button onClick={() => OrderDelete(order.id)} className="btn btn-sm btn-danger"><FaTrash /></button>
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
                            <td>{order.id}</td>
                        </tr>
                        <tr>
                            <th className="text-center">user_id</th>
                            <td>{order.user_id}</td>
                        </tr>

                        <tr>
                            <th className="text-center">Tên</th>
                            <td>{order.name}</td>
                        </tr><tr>
                            <th className="text-center">email</th>
                            <td>{order.email}</td>
                        </tr><tr>
                            <th className="text-center">phone</th>
                            <td>{order.phone}</td>
                        </tr>
                        <tr>
                            <th className="text-center">address</th>
                            <td>{order.address}</td>
                        </tr>
                        <tr>
                            <th className="text-center">note</th>
                            <td>{order.note}</td>
                        </tr>
                        <tr>
                            <th className="text-center">ngay tao</th>
                            <td>{order.created_at}</td>
                        </tr>
                    </tbody>

                </table>
            </div>

        </div>
    )
}
export default OrderShow;