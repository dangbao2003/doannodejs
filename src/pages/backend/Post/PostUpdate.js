import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft, FaSave } from 'react-icons/fa';
import PostService from "../../../services/PostService";


function PostUpdate() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [topic_id, setTopic_id] = useState(0);
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [detail, setDetail] = useState('');
    const [type, setType] = useState('');
    const [metakey, setMetakey] = useState('');
    const [metadesc, setMetadesc] = useState('');
    const [status, setStatus] = useState(0);

    const [posts, setPosts] = useState([]);
    useEffect(function () {
        (async function () {
            await PostService.getAll().then(function (result) {
                setPosts(result.data.posts);
            });
        })();
    }, []);

    async function PostUpdate(event) {
        event.preventDefault();// Không load trang
        const image = document.querySelector("#image");
        var post = new FormData();
        post.append("topic_id", topic_id);
        post.append("title", title);
        post.append("slug", slug);
        post.append("detail", detail);
        post.append("type", type);
        post.append("metakey", metakey);
        post.append("metadesc", metadesc);
        post.append("status", status);

        if (image.files.length === 0) {
            post.append("image", "")
        }
        else {
            post.append("image", image.files[0]);
        }
        // brand.forEach(function(v,k){
        //     console.log(k+"------"+v);
        // });
        await PostService.create(post)
            .then(function (result) {
                alert(result.data.message);
                navigate('/admin/post', { replace: true });
            });
    }
    useEffect(function () {
        (async function () {
            await PostService.getById(id).then(function (result) {
                const tpm = result.data.post;
                setTopic_id(tpm.topic_id);
                setTitle(tpm.title);
                setSlug(tpm.slug);
                setDetail(tpm.detail);
                setType(tpm.type);
                setMetakey(tpm.metakey);
                setMetadesc(tpm.metadesc);
                setStatus(tpm.status);
            });
        })();
    }, []);


    return (
        <form method="post" onSubmit={PostUpdate}>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                CAP NHAP POST
                            </strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <Link className="btn btn-info btn-sm me-2" to="/admin/post">
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
                        <div className="col-md-9">
                            <div className="mb-2">
                                <label htmlFor="topic_id">
                                    <strong> topic_id</strong>
                                </label>
                                <input type="text" name="topic_id"
                                    value={topic_id}
                                    onChange={(e) => setTopic_id(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="title">
                                    <strong> title</strong>
                                </label>
                                <input type="text" name="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="slug">
                                    <strong> slug</strong>
                                </label>
                                <input type="text" name="slug"
                                    value={slug}
                                    onChange={(e) => setSlug(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="detail">
                                    <strong> detail</strong>
                                </label>
                                <input type="text" name="detail"
                                    value={detail}
                                    onChange={(e) => setDetail(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="type">
                                    <strong> type</strong>
                                </label>
                                <input type="type" name="type"
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="metakey">
                                    <strong> metakey</strong>
                                </label>
                                <input type="metakey" name="metakey"
                                    value={metakey}
                                    onChange={(e) => setMetakey(e.target.value)}
                                    className="form-control" />
                            </div>

                            <div className="mb-2">
                                <label htmlFor="metadesc">
                                    <strong> metadesc</strong>
                                </label>
                                <input type="metadesc" name="metakey"
                                    value={metadesc}
                                    onChange={(e) => setMetadesc(e.target.value)}
                                    className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="mb-3">
                                <label htmlFor="image">
                                    <strong> Hình ảnh</strong>
                                </label>
                                <input type="file" name="image" id="image"
                                    className="form-control" />
                            </div>
                            
                        </div>

                        <div className="mb-3">
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
        </form>
    );
}

export default PostUpdate;