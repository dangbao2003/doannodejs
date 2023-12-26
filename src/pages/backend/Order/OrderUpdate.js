import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft, FaSave } from 'react-icons/fa';
import OrderService from "../../../services/OrderService";


function OrderUpdate() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user_id, setUser_id] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [note, setNote] = useState('');
    const [status, setStatus] = useState(0);

    const [orders, setOrders] = useState([]);
    useEffect(function () {
        (async function () {
            await OrderService.getAll().then(function (result) {
                setOrders(result.data.orders);
            });
        })();
    }, []);

    async function OrderUpdate(event) {
        event.preventDefault();
        var order = new FormData();
        order.append("user_id", user_id);
        order.append("name", name);
        order.append("email", email);
        order.append("phone", phone);
        order.append("address", address);
        order.append("note", note);
        order.append("status", status);

        await OrderService.update(order, id)
            .then(function (result) {
                alert(result.data.message);
                navigate('/admin/order', { replace: true });
            });
    }

    useEffect(function () {
        (async function () {
            await OrderService.getById(id).then(function (result) {
                const tpm = result.data.order;
                setUser_id(tpm.user_id);
                setName(tpm.name);
                setEmail(tpm.email);
                setPhone(tpm.phone);
                setAddress(tpm.address);
                setNote(tpm.note);
                setStatus(tpm.status);
            });
        })();
    }, []);

    return (<>
        <form method="post" onSubmit={OrderUpdate}>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                THÊM ORDER
                            </strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <Link className="btn btn-info btn-sm me-2" to="/admin/order">
                                <FaArrowLeft /> Quay về
                            </Link>
                            <button type="submit" className="btn btn-sm btn-success">
                                <FaSave /> Lưu

                            </button>
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <div className="row">
                        <div className="col-md-10">
                            <div className="mb-2">
                                <label htmlFor="User_id">
                                    <strong> User_id</strong>
                                </label>
                                <input type="number" name="user_id"
                                    value={user_id}
                                    onChange={(e) => setUser_id(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="name">
                                    <strong> Tên</strong>
                                </label>
                                <input type="text" name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="email">
                                    <strong> email</strong>
                                </label>
                                <input type="text" name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="phone">
                                    <strong> phone</strong>
                                </label>
                                <input type="number"
                                    name="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className='form-control' />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="address">
                                    <strong> address</strong>
                                </label>
                                <textarea name="address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="note">
                                    <strong> note</strong>
                                </label>
                                <textarea name="note"
                                    value={note}
                                    onChange={(e) => setNote(e.target.value)}
                                    className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="mb-1">
                                <label htmlFor="status">
                                    <strong>Trạng thái</strong>
                                </label>
                                <select name="status"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    className="form-control">
                                    <option value="1">Xuất bản</option>
                                    <option value="2">Chưa xuất bản</option>
                                </select>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </form>
    </>)
}
export default OrderUpdate;
