import { useEffect, useState } from "react";
import { FaArrowLeft, FaSave } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import BrandService from '../../../services/BrandService';


function BrandCreate() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [metakey, setMetakey] = useState('');
    const [metadesc, setMetadesc] = useState('');
    const [sort_order, setSort_order] = useState(0);
    const [status, setStatus] = useState(0);
    const BrandStore = async function (event) {
        event.preventDefault();// Không load trang
        const image = document.querySelector("#image");
        var brand = new FormData();
        brand.append("name", name);
        brand.append("metakey", metakey);
        brand.append("metadesc", metadesc);
        brand.append("sort_order", sort_order);
        brand.append("status", status);
        if (image.files.length === 0) {
            brand.append("image", "")
        }
        else {
            brand.append("image", image.files[0]);
        }
        // brand.forEach(function(v,k){
        //     console.log(k+"------"+v);
        // });
        await BrandService.create(brand)
            .then(function (result) {
                alert(result.data.message);
                navigate('/admin/brand', { replace: true });
            });
    }
    const [brands, setBrands] = useState([]);
    useEffect(function () {
        (async function () {
            await BrandService.getAll().then(function (result) {
                setBrands(result.data.brands);
            });
        })();
    }, []);

    //console.log("Re-Render"+name);
    return (<>
        <form method="post" onSubmit={BrandStore}>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                THÊM THƯƠNG HIỆU
                            </strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <Link className="btn btn-info btn-sm me-2" to="/admin/brand">
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
                            <div className="mb-3">
                                <label htmlFor="name">
                                    <strong> Tên thương hiệu</strong>
                                </label>
                                <input type="text" name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="metakey">
                                    <strong> Từ khóa</strong>
                                </label>
                                <textarea name="metakey"
                                    value={metakey}
                                    onChange={(e) => setMetakey(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="metadesc">
                                    <strong> Mô tả</strong>
                                </label>
                                <textarea name="metadesc"
                                    value={metadesc}
                                    onChange={(e) => setMetadesc(e.target.value)}
                                    className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="mb-3">
                                <label htmlFor="sort_order">
                                    <strong> Sắp xếp</strong>
                                </label>
                                <select name="metadesc" value={sort_order}
                                    onChange={(e) => setSort_order(e.target.value)}
                                    className="form-control">
                                    <option value="0">None</option>
                                    {brands.map(function (br, index) {
                                        return (<option key={index} value={br.sort_order + 1}>{br.name}</option>);
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
    </>);
}
export default BrandCreate;