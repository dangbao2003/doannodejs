import { useEffect, useState } from "react";
import { FaArrowLeft, FaSave, FaTrash } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";

import TopicService from "../../../services/TopicService";

function TopicShow() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [topic, setTopics] = useState([]);

    useEffect(function () {
        (async function () {
            await TopicService.getById(id).then(function (result) {
                setTopics(result.data.topic);
            });
        })();
    }, []);
    async function TopicDelete(id) {
        await TopicService.remove(id).then(function (result) {
            alert(result.data.message);
            navigate('/admin/topic', { replace: true });
        });
    }

    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-danger">
                            Chi tiết TOPIC
                        </strong>

                    </div>
                    <div className="col-md-6 text-end">
                        <Link className='btn btn-info btn-sm me-2 ' to='/admin/topic'>
                            <FaArrowLeft />Quay về danh sách
                        </Link>

                        <Link className='btn btn-info btn-sm me-2 ' to={"/admin/topic/update/" + topic.id}>
                            <FaArrowLeft />Cập nhật
                        </Link>

                        <button onClick={() => TopicDelete(topic.id)} className="btn btn-sm btn-danger"><FaTrash /></button>
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
                            <td>{topic.id}</td>
                        </tr>

                        <tr>
                            <th className="text-center">Tên</th>
                            <td>{topic.name}</td>
                        </tr>
                        <tr>
                            <th className="text-center"> slug</th>
                            <td>{topic.slug}</td>
                        </tr>
                        <tr>
                            <th className="text-center"> parent_id</th>
                            <td>{topic.parent_id}</td>
                        </tr>
                        <tr>
                            <th className="text-center"> metakey</th>
                            <td>{topic.metakey}</td>
                        </tr>
                        <tr>
                            <th className="text-center"> metadesc</th>
                            <td>{topic.metadesc}</td>
                        </tr>
                        <tr>
                            <th className="text-center">ngày tạo</th>
                            <td>{topic.created_at}</td>
                        </tr>
                    </tbody>

                </table>
            </div>

        </div>
    )
}
export default TopicShow;