import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import OrderService from '../../../services/OrderService';



function OrderList() {
    const [orders, setOrders] = useState([]);
    const [statusdel, setStatusDel] = useState([]);
    useEffect(function () {
        //call api
        (async function () {
            await OrderService.getAll().then(function (result) {
                setOrders(result.data.orders);
            });
        })();

    }, [statusdel]);
    function OrderDelete(id) {
        OrderService.remove(id).then(function(result) {
        alert(result.data.message)
        setStatusDel(result.data.id);

    });
}

    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-primary">TẤT CẢ ORDER</strong>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link className="btn btn-sm btn-success" to="/admin/order/create">Thêm</Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th className='text-center' style={{ width: 30 }}>#</th>
                            <th>User_id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Note</th>
                            <th className='text-center'>Ngày tạo</th>
                            <th className='text-center'>Chức năng</th>
                            <th className='text-center' style={{ width: 30 }}>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={index}>
                                <td className='text-center'><input type='checkbox' /></td>
                                <td>{order.user_id}</td>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.phone}</td>
                                <td>{order.address}</td>
                                <td>{order.note}</td>
                                <td className='text-center'>{order.created_at}</td>
                                <td className='text-center'>
                                    <Link to={`/admin/order/update/${order.id}`} className="btn btn-sm btn-info me-1">Edit</Link>
                                    <Link to={`/admin/order/show/${order.id}`} className="btn btn-sm btn-success me-1">Show</Link>
                                    <button onClick={() =>OrderDelete(order.id)} className="btn btn-sm btn-danger">Del</button>
                                </td>
                                <td>{order.id}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    )
}
export default OrderList;
