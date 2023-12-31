import { useEffect, useState } from "react";
import { FaPlus } from 'react-icons/fa';
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft, FaSave } from 'react-icons/fa';
import UserServices from "../../../services/UserServices";

function UserUpdate() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [roles, setRoles] = useState("");
    const [status, setStatus] = useState(0);

    const [users, setUsers] = useState([]);
    useEffect(function () {
        (async function () {
            await UserServices.getAll().then(function (result) {
                setUsers(result.data.users);
            });
        })();
    }, []);

    async function UserUpdate(event) {

        event.preventDefault();
        const image = document.querySelector("#image")
        var user = new FormData();
        user.append("name", name)
        user.append("email", email)
        user.append("phone", phone)
        user.append("username", username)
        user.append("password", password)
        user.append("address", address)
        user.append("roles", roles)
        user.append("status", status)
        if (image.files.length === 0) {
            user.append('image', "")
        }
        else {
            user.append("image", image.files[0])
        }
        await UserServices.update(user, id)
            .then(function (result) {
                alert(result.data.message);
                navigate('/admin/user', { replace: true });
            });
    }

    useEffect(function () {
        (async function () {
            await UserServices.getById(id).then(function (result) {
                const us = result.data.user;
                setName(us.name);
                setEmail(us.email);
                setPhone(us.phone);
                setUsername(us.username);
                setPassword(us.password);
                setAddress(us.address);
                setRoles(us.roles);
                setStatus(us.status);
            });
        })();
    }, []);
    return (<>
        <form method='post' onSubmit={UserUpdate}>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-6">
                            <strong className="text-danger text-uppercase">
                                Thêm người dùng
                            </strong>
                        </div>
                        <div className="col-6 text-end">
                            <Link to="/admin/user" className="btn btn-info btn-sm me-2">
                                <FaPlus /> Về người dùng
                            </Link>
                            <button type='submit' className='btn btn-success btn-sm'>Lưu</button>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className='row'>
                        <div className='col-md-9'>
                            <div className='mb-3'>
                                <label>
                                    <strong>Tên người dùng(*)</strong>
                                </label>
                                <input value={name} onChange={(e) => setName(e.target.value)} className='form-control' type='text' />
                            </div>
                            <div className='mb-3'>
                                <label>
                                    <strong>Email(*)</strong>
                                </label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} className='form-control' type='text' />
                            </div>
                            <div className='mb-3'>
                                <label>
                                    <strong>Điện thoại(*)</strong>
                                </label>
                                <input value={phone} onChange={(e) => setPhone(e.target.value)} className='form-control' type='text' />
                            </div>
                            <div className='mb-3'>
                                <label>
                                    <strong>Tên tài khoản(*)</strong>
                                </label>
                                <input value={username} onChange={(e) => setUsername(e.target.value)} className='form-control' type='text' />
                            </div>
                            <div className='mb-3'>
                                <label>
                                    <strong>Mật khẩu(*)</strong>
                                </label>
                                <input value={password} onChange={(e) => setPassword(e.target.value)} className='form-control' type='text' />
                            </div>
                            <div className='mb-3'>
                                <label>
                                    <strong>Địa chỉ(*)</strong>
                                </label>
                                <textarea value={address} onChange={(e) => setAddress(e.target.value)} className='form-control'></textarea>
                            </div>
                            <div className='mb-3'>
                                <label>
                                    <strong>Roles</strong>
                                </label>
                                <select value={roles} onChange={(e) => setRoles(e.target.value)} className='form-control'>
                                    <option value="None">None</option>
                                    <option value="User">User</option>
                                    <option value="Admin">Admin</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='mb-3'>
                                <label>
                                    <strong>Hình</strong>
                                </label>
                                <input id="image" className='form-control' type="file" />
                            </div>
                            <div className='mb-3'>
                                <label>
                                    <strong>Trạng thái</strong>
                                </label>
                                <select value={status} onChange={(e) => setStatus(e.target.value)} className='form-control'>
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
export default UserUpdate;