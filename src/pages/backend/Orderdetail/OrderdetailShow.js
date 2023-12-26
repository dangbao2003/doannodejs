import { useEffect, useState } from "react";
import { FaArrowLeft, FaSave, FaTrash } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import OrderdetailService from "../../../services/OrderdetailService";

function OrderdetailShow() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [orderdetail, setOrderdetail] = useState([]);

    useEffect(function () {
        (async function () {
            await OrderdetailService.getById(id).then(function (result) {
                setOrderdetail(result.data.orderdetail);

            });
        })();
    }, []);
    async function OrderdetailDelete(id) {
        await OrderdetailService.remove(id).then(function (result) {
            alert(result.data.message);
            navigate('/admin/orderdetail', { replace: true });
        });
    }

    return (<>
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-danger">
                            Chi tiết ORDERDETAIL
                        </strong>

                    </div>
                    <div className="col-md-6 text-end">
                        <Link className='btn btn-info btn-sm me-2 ' to='/admin/orderdetail'>
                            <FaArrowLeft />Quay về danh sách
                        </Link>

                        <Link className='btn btn-info btn-sm me-2 ' to={"/admin/orderdetail/update/" + orderdetail.id}>
                            <FaArrowLeft />Cập nhật
                        </Link>

                        <button onClick={() => OrderdetailDelete(orderdetail.id)} className="btn btn-sm btn-danger"><FaTrash /></button>
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
                            <td>{orderdetail.id}</td>
                        </tr>

                        <tr>
                            <th className="text-center">order_id</th>
                            <td>{orderdetail.order_id}</td>
                        </tr><tr>
                            <th className="text-center">product_id</th>
                            <td>{orderdetail.product_id}</td>
                        </tr><tr>
                            <th className="text-center">price</th>
                            <td>{orderdetail.price}</td>
                        </tr>
                        <tr>
                            <th className="text-center">qty</th>
                            <td>{orderdetail.qty}</td>
                        </tr>
                        <tr>
                            <th className="text-center">amount</th>
                            <td>{orderdetail.amount}</td>
                        </tr>
                        <tr>
                            <th className="text-center">Ngay Tao</th>
                            <td>{orderdetail.created_at}</td>
                        </tr>
                    </tbody>

                </table>
            </div>

        </div>
    </>)
}
export default OrderdetailShow;