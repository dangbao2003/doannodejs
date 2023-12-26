import { Link } from 'react-router-dom';
import {FaEdit, FaPlus, FaRegEye, FaTrash} from 'react-icons/fa';
import { useEffect, useState } from 'react';
import OrderdetailService from '../../../services/OrderdetailService';

function OrderdetailList() {
    const [orderdetails, setOrderdetails] = useState([]);
    const [statusdel, setStatusDel] = useState([]);
    useEffect(function () {
        (async function () {
            await OrderdetailService.getAll()
                .then(function (result) {
                    setOrderdetails(result.data.orderdetails)
                });
        })();
    }, [statusdel])
    async function OrderdetailDelete(id) {
        await OrderdetailService.remove(id)
            .then(function (result) {
                alert(result.data.message)
                setStatusDel(id)
            });
    }

    return (<>
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-primary">TẤT CẢ ORDERDERTAIL</strong>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link className="btn btn-sm btn-success" to="/admin/orderdetail/create">Thêm</Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th className='text-center' style={{ width: 30 }}>#</th>

                            <th>order_id</th>
                            <th>product_id</th>
                            <th>price</th>
                            <th>qty</th>
                            <th>amount</th>
                            <th className='text-center'>Ngày tạo</th>
                            <th className='text-center'>Chức năng</th>
                            <th className='text-center' style={{ width: 30 }}>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderdetails.map((orderdetail, index) => (
                            <tr key={index}>
                                <td className='text-center'><input type='checkbox' /></td>

                                <td>{orderdetail.order_id}</td>
                                <td>{orderdetail.product_id}</td>
                                <td>{orderdetail.price}</td>
                                <td>{orderdetail.qty}</td>
                                <td>{orderdetail.amount}</td>

                                <td className='text-center'>{orderdetail.created_at}</td>
                                <td className='text-center'>
                                    <Link to={`/admin/orderdetail/update/${orderdetail.id}`} className="btn btn-sm btn-info me-1">Edit</Link>
                                    <Link to={`/admin/orderdetail/show/${orderdetail.id}`} className="btn btn-sm btn-success me-1">Show</Link>
                                    <button onClick={() =>OrderdetailDelete(orderdetail.id)} className="btn btn-sm btn-danger">Del</button>
                                </td>
                                <td>{orderdetail.id}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    </>)
}
export default OrderdetailList;