import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft, FaSave } from 'react-icons/fa';
import CategoryService from "../../../services/CategoryService";


function CategoryUpdate() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [parent_id, setParent_id] = useState('');
    const [metakey, setMetakey] = useState('');
    const [metadesc, setMetadesc] = useState('');
    const [level, setLevel] = useState('');
    const [sort_order, setSort_order] = useState('0');
    const [status, setStatus] = useState('0');

    const [categorys, setCategorys] = useState([]);
    useEffect(function () {
        (async function () {
            await CategoryService.getAll().then(function (result) {
                setCategorys(result.data.categorys);
            });
        })();
    }, []);

    async function CategoryUpdate(event) {
        event.preventDefault();
        const image = document.querySelector("#image")
        var category = new FormData();
        category.append("name", name);
        category.append("parent_id", parent_id);
        category.append("metakey", metakey);
        category.append("metadesc", metadesc);
        category.append("level", level);
        category.append("sort_order", sort_order);
        category.append("status", status);
        if (image.files.length === 0) {
            category.append('image', "")
        }
        else {
            category.append("image", image.files[0])
        }
        await CategoryService.update(category, id)
            .then(function (result) {
                alert(result.data.message);
                navigate('/admin/category', { replace: true });
            });
    }

    useEffect(function () {
        (async function () {
            await CategoryService.getById(id).then(function (result) {
                const tpm = result.data.category;
                setName(tpm.name);
                setParent_id(tpm.parent_id);
                setMetakey(tpm.metakey);
                setMetadesc(tpm.metadesc);
                setLevel(tpm.level);
                setSort_order(tpm.sort_order);
                setStatus(tpm.status);
            });
        })();
    }, []);


    return (
        <form method="post" onSubmit={CategoryUpdate}>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                CẬP NHẬP DANH MỤC
                            </strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <Link className="btn btn-info btn-sm me-2" to="/admin/category">
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
                                <label htmlFor="name">
                                    <strong> Tên danh mục</strong>
                                </label>
                                <input type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className='form-control' />
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
                        <div className="mb-2">
                            <label htmlFor="level">
                                <strong> Level</strong>
                            </label>
                            <select name="level"
                                value={level}
                                onChange={(e) => setLevel(e.target.value)}
                                className="form-control">
                                <option value="0">None</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <div className="mb-3">
                                <label htmlFor="sort_order">
                                    <strong> Sắp xếp</strong>
                                </label>
                                <select name="sort_order"
                                    value={sort_order}
                                    onChange={(e) => setSort_order(e.target.value)}
                                    className="form-control">
                                    <option value="0">None</option>
                                    {categorys.map(function (ca, index) {
                                        return (<option key={index} value={ca.sort_order + 1}>{ca.name}</option>);
                                    })}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="image">
                                    <strong> Hình ảnh</strong>
                                </label>
                                <input type="file" name="image" id="image"
                                    className="form-control" />
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
            </div>
        </form>
    );
}

export default CategoryUpdate;