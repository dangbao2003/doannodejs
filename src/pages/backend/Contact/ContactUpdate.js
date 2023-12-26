import { useEffect, useState } from "react";
import { FaArrowLeft, FaSave } from 'react-icons/fa';
import { Link, useNavigate, useParams } from "react-router-dom";
import ContactService from "../../../services/ContactService";

function ContactUpdate() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user_id, setUser_id] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [replay_id, setReplay_id] = useState('');
    const [status, setStatus] = useState(1);

    const [contacts, setContacts] = useState([]);
    useEffect(function () {
        (async function () {
            await ContactService.getAll().then(function (result) {
                setContacts(result.data.contacts);
            });
        })();
    }, []);

    async function ContactUpdate(event) {
        event.preventDefault();
        var contact = new FormData();
        contact.append("user_id", user_id);
        contact.append("name", name);
        contact.append("email", email);
        contact.append("phone", phone);
        contact.append("title", title);
        contact.append("content", content);
        contact.append("replay_id", replay_id);
        contact.append("status", status);

        await ContactService.update(contact, id)
            .then(function (result) {
                alert(result.data.message);
                navigate('/admin/contact', { replace: true });
            });
    }

    useEffect(function () {
        (async function () {
            await ContactService.getById(id).then(function (result) {
                const ct = result.data.contact;
                setUser_id(ct.user_id);
                setName(ct.name);
                setEmail(ct.email);
                setPhone(ct.phone);
                setTitle(ct.title);
                setContent(ct.content);
                setReplay_id(ct.replay_id);
                setStatus(ct.status);
            });
        })();
    }, []);
    return (<>
        <form method="post" onSubmit={ContactUpdate}>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                CẬP NHẬP CONTACT
                            </strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <Link className="btn btn-info btn-sm me-2" to="/admin/contact">
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
                                <label htmlFor="name">
                                    <strong> name</strong>
                                </label>
                                <input type="text" name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="type">
                                    <strong> email</strong>
                                </label>
                                <input type="text" name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="table_id">
                                    <strong> phone</strong>
                                </label>
                                <input type="number" name="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="title">
                                    <strong> title</strong>
                                </label>
                                <input type="text" name="name"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="title">
                                    <strong> content</strong>
                                </label>
                                <input type="text" name="content"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="replay_id">
                                    <strong> replay_id</strong>
                                </label>
                                <textarea name="replay_id"
                                    value={replay_id}
                                    onChange={(e) => setReplay_id(e.target.value)}
                                    className="form-control" />
                            </div>
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
export default ContactUpdate;
