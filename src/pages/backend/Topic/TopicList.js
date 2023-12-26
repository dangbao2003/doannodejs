import { useEffect, useState } from "react";
import TopicService from "../../../services/TopicService";
import { Link } from 'react-router-dom';
function TopicList(){
    const [topics, setTopics] = useState([]);
    const [statusdel, setStatusDel] = useState([]);
    useEffect(function () {
        //call api
        (async function () {
            await TopicService.getAll().then(function (result) {
                setTopics(result.data.topics);
            });
        })();
    }, [statusdel]);
    function TopicDelete(id) {
        TopicService.remove(id).then(function(result) {
        alert(result.data.message)
        setStatusDel(result.data.id);

    });
}
    return(<>
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-primary">TẤT CẢ TOPIC</strong>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link className="btn btn-sm btn-success" to="/admin/topic/create">Thêm</Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th className='text-center' style={{ width: 30 }}>#</th>
                            <th>Name</th>
                            <th>slug</th>
                            <th>parent_id</th>
                            <th>metakey</th>
                            <th>metadesc</th>
                            <th className='text-center'>Ngày tạo</th>
                            <th className='text-center'>Chức năng</th>
                            <th className='text-center' style={{ width: 30 }}>ID</th>
                        </tr>
                    </thead>

                    <tbody>
                        {topics.map((topic, index) => (
                            <tr key={index}>
                                <td className='text-center'><input type='checkbox' /></td>
                                <td>{topic.name}</td>
                                <td>{topic.slug}</td>
                                <td>{topic.parent_id}</td>
                                <td>{topic.metakey}</td>
                                <td>{topic.metadesc}</td>
                                <td className='text-center'>{topic.created_at}</td>
                                <td className='text-center'>
                                    <Link to={`/admin/topic/update/${topic.id}`} className="btn btn-sm btn-info me-1">Edit</Link>
                                    <Link to={`/admin/topic/show/${topic.id}`} className="btn btn-sm btn-success me-1">Show</Link>
                                    <button onClick={() =>TopicDelete(topic.id)} className="btn btn-sm btn-danger">Del</button>
                                </td>
                                <td>{topic.id}</td>
                                </tr>
                        ))}
                    </tbody>


                </table>
            </div>
        </div>
    </>)
}
export default TopicList;