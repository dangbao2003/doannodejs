import { useEffect, useState } from "react";
import { FaArrowLeft, FaSave } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import OrderdetailService from "../../../services/OrderdetailService";


function OrderdetailCreate(){
    const navigate = useNavigate();
    const [order_id, setOrder_id] = useState('');
    const [product_id, setProduct_id] = useState('');
    const [price, setPrice] = useState('');
    const [qty, setQty] = useState('');
    const [amount, setAmount] = useState('');
    const [status, setStatus] = useState(0);
    const OrderdetailStore = async function (event) {
        event.preventDefault();// Không load trang
        
        var orderdetail = new FormData();
        orderdetail.append("order_id", order_id);
        orderdetail.append("product_id", product_id);
        orderdetail.append("price", price);
        orderdetail.append("qty", qty);
        orderdetail.append("amount", amount);
        orderdetail.append("status", status);
        
        await OrderdetailService.create(orderdetail)
            .then(function (result) {
                alert(result.data.message);
                navigate('/admin/orderdetail', { replace: true });
            });
    }
    const [orderdetails, setOrderdetails] = useState([]);
    useEffect(function () {
        (async function () {
            await OrderdetailService.getAll().then(function (result) {
                setOrderdetails(result.data.orderdetails);
            });
        })();
    }, []);
    return(<>
     <form method="post" onSubmit={OrderdetailStore}>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                THÊM ORDER
                            </strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <Link className="btn btn-info btn-sm me-2" to="/admin/orderdetail">
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
                                <label htmlFor="order_id">
                                    <strong> order_id</strong>
                                </label>
                                <input type="number" name="order_id"
                                    value={order_id}
                                    onChange={(e) => setOrder_id(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="product_id">
                                    <strong> product_id</strong>
                                </label>
                                <input type="number" name="product_id"
                                    value={product_id}
                                    onChange={(e) => setProduct_id(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="price">
                                    <strong> price</strong>
                                </label>
                                <input type="number" name="price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="qty">
                                    <strong> qty</strong>
                                </label>
                                <input type="number"
                                    name="qty"
                                    value={qty}
                                    onChange={(e) => setQty(e.target.value)}
                                    className='form-control' />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="amount">
                                    <strong> amount</strong>
                                </label>
                                <input type="number"
                                    name="amount"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    className='form-control' />
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
export default OrderdetailCreate;
