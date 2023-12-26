import {  useEffect, useState } from "react";
import { FaArrowLeft, FaTrash } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import PostService from "../../../services/PostService";



function PostShow() {

    const navigate = useNavigate();
    const { id } = useParams();
    const [post, setPost] = useState([]);

    useEffect(function () {
        (async function () {
            await PostService.getById(id).then(function (result) {
                setPost(result.data.post);

            });
        })();
    }, []);
    async function PostDelete(id) {
        await PostService.remove(id).then(function (result) {
            alert(result.data.message);
            navigate('/admin/post', { replace: true });
        });
    }

    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-danger">
                            Chi tiết post
                        </strong>

                    </div>
                    <div className="col-md-6 text-end">
                        <Link className='btn btn-info btn-sm me-2 ' to='/admin/post'>
                            <FaArrowLeft />Quay về danh sách
                        </Link>

                        <Link className='btn btn-info btn-sm me-2 ' to={"/admin/post/update/" + post.id}>
                            <FaArrowLeft />Cập nhật
                        </Link>

                        <button onClick={() => PostDelete(post.id)} className="btn btn-sm btn-danger"><FaTrash /></button>
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
                            <td>{post.id}</td>
                        </tr>
                        <tr>
                            <th className="text-center">topic_id</th>
                            <td>{post.topic_id}</td>
                        </tr>
                        <tr>
                            <th className="text-center">title</th>
                            <td>{post.title}</td>
                        </tr>
                        <tr>
                            <th className="text-center">slug</th>
                            <td>{post.slug}</td>
                        </tr>
                        <tr>
                            <th className="text-center">detail</th>
                            <td>{post.detail}</td>
                        </tr>
                        <tr>
                            <th className="text-center">type</th>
                            <td>{post.type}</td>
                        </tr>
                        <tr>
                            <th className="text-center">metakey</th>
                            <td>{post.metakey}</td>
                        </tr>
                        <tr>
                            <th className="text-center">metadesc</th>
                            <td>{post.metadesc}</td>
                        </tr>


                    </tbody>

                </table>
            </div>

        </div>
    )

}
export default PostShow;