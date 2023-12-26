import { useEffect, useState } from "react";
import { FaArrowLeft, FaSave, FaTrash } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import ContactService from "../../../services/ContactService";

function ContactShow(){
    const navigate = useNavigate();
    const { id } = useParams();
    const [contact, setContact] = useState([]);

    useEffect(function () {
        (async function () {
            await ContactService.getById(id).then(function (result) {
                setContact(result.data.contact);

            });
        })();
    }, []);
    async function ContactDelete(id) {
        await ContactService.remove(id).then(function (result) {
            alert(result.data.message);
            navigate('/admin/contact', { replace: true });
        });
    }
    return(<>
     <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-danger">
                            Chi tiết Menu
                        </strong>

                    </div>
                    <div className="col-md-6 text-end">
                        <Link className='btn btn-info btn-sm me-2 ' to='/admin/contact'>
                            <FaArrowLeft />Quay về danh sách
                        </Link>

                        <Link className='btn btn-info btn-sm me-2 ' to={"/admin/contact/update/" + contact.id}>
                            <FaArrowLeft />Cập nhật
                        </Link>

                        <button onClick={() => ContactDelete(contact.id)} className="btn btn-sm btn-danger"><FaTrash /></button>
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
                            <td>{contact.id}</td>
                        </tr>

                        <tr>
                            <th className="text-center">Tên</th>
                            <td>{contact.name}</td>
                        </tr>
                        <tr>
                            <th className="text-center"> email</th>
                            <td>{contact.email}</td>
                        </tr>
                        <tr>
                            <th className="text-center"> phone</th>
                            <td>{contact.phone}</td>
                        </tr>
                        <tr>
                            <th className="text-center"> title</th>
                            <td>{contact.title}</td>
                        </tr>
                        <tr>
                            <th className="text-center"> content</th>
                            <td>{contact.content}</td>
                        </tr>
                        <tr>
                            <th className="text-center"> ngày tạo</th>
                            <td>{contact.created_at}</td>
                        </tr>
                        
                    </tbody>

                </table>
            </div>

        </div>
    </>)
}
export default ContactShow;
