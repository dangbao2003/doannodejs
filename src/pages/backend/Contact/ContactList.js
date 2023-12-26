import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ContactService from '../../../services/ContactService';

function ContactList() {
    const [contacts, setContacts] = useState([]);
    const [statusdel, setStatusDel] = useState([]);
    useEffect(function () {
        //call api
        (async function () {
            await ContactService.getAll().then(function (result) {
                setContacts(result.data.contacts);
            });
        })();

    }, [statusdel]);

    function ContactDelete(id) {
        ContactService.remove(id).then(function (result) {
            alert(result.data.message)
            setStatusDel(result.data.id);
        });
    }
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-primary">Contact</strong>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th className='text-center' style={{ width: 30 }}>#</th>
                            
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Title</th>
                            <th>content</th>
                            
                            <th className='text-center'>Ngày tạo</th>
                            <th className='text-center'>Chức năng</th>
                            <th className='text-center' style={{ width: 30 }}>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact, index) => (
                            <tr key={index}>
                                <td className='text-center'><input type='checkbox' /></td>
                                
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.phone}</td>
                                <td>{contact.title}</td>
                                <td>{contact.content}</td>
                                
                                <td className='text-center'>{contact.created_at}</td>
                                <td className='text-center'>
                                    <Link to={`/admin/contact/update/${contact.id}`} className="btn btn-sm btn-info me-1">Edit</Link>
                                    <Link to={`/admin/contact/show/${contact.id}`} className="btn btn-sm btn-success me-1">Show</Link>
                                    <button onClick={() => ContactDelete(contact.id)} className="btn btn-sm btn-danger">Del</button>
                                </td>
                                <td>{contact.id}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    )
}
export default ContactList;