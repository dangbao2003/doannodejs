import { useEffect, useState } from "react";
import { FaArrowLeft, FaSave } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import TopicService from "../../../services/TopicService";

function TopicCreate(){
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [parent_id, setParent_id] = useState('');
    const [metakey, setMetakey] = useState('');
    const [metadesc, setMetadesc] = useState('');
    const [status, setStatus] = useState(0);
    const TopicStore = async function (event) {
        event.preventDefault();// Không load trang
        
        var topic = new FormData();
        topic.append("name", name);
        topic.append("slug", slug);
        topic.append("parent_id", parent_id);
        topic.append("metakey", metakey);
        topic.append("metadesc", metadesc);
        topic.append("status", status);
        
        await TopicService.create(topic)
            .then(function (result) {
                alert(result.data.message);
                navigate('/admin/topic', { replace: true });
            });
    }
    const [topics, setTopics] = useState([]);
    useEffect(function () {
        (async function () {
            await TopicService.getAll().then(function (result) {
                setTopics(result.data.topics);
            });
        })();
    }, []);
    return(<>
     <form method="post" onSubmit={TopicStore}>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                THÊM TOPIC
                            </strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <Link className="btn btn-info btn-sm me-2" to="/admin/menu">
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
                                    <strong> Tên</strong>
                                </label>
                                <input type="text" name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="link">
                                    <strong> slug</strong>
                                </label>
                                <input type="text" name="slug"
                                    value={slug}
                                    onChange={(e) => setSlug(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="parent_id">
                                    <strong> Parent_id</strong>
                                </label>
                                <input type="number"
                                    name="parent_id"
                                    value={parent_id}
                                    onChange={(e) => setParent_id(e.target.value)}
                                    className='form-control' />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="metakey">
                                    <strong> Từ khóa</strong>
                                </label>
                                <textarea name="metakey"
                                    value={metakey}
                                    onChange={(e) => setMetakey(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="metadesc">
                                    <strong> Mô tả</strong>
                                </label>
                                <textarea name="metadesc"
                                    value={metadesc}
                                    onChange={(e) => setMetadesc(e.target.value)}
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
export default TopicCreate;