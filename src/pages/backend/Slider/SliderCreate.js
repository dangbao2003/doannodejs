import { useEffect, useState } from "react";
import { FaArrowLeft, FaSave } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import SliderService from "../../../services/SliderService";

function SliderCreate() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [sort_order, setSort_order] = useState(0);
    const [position, setPosition] = useState('');
    const [status, setStatus] = useState(0);
    const SliderStore = async function (event) {
        event.preventDefault();// Không load trang
        const image = document.querySelector("#image");
        var slider = new FormData();
        slider.append("name", name);
        slider.append("link", link);
        slider.append("sort_order", sort_order);
        slider.append("position", position);
        slider.append("status", status);
        if (image.files.length === 0) {
            slider.append("image", "")
        }
        else {
            slider.append("image", image.files[0]);
        }
        // brand.forEach(function(v,k){
        //     console.log(k+"------"+v);
        // });
        await SliderService.create(slider)
            .then(function (result) {
                alert(result.data.message);
                navigate('/admin/slider', { replace: true });
            });
    }
    const [sliders, setSliders] = useState([]);
    useEffect(function () {
        (async function () {
            await SliderService.getAll().then(function (result) {
                setSliders(result.data.sliders);
            });
        })();
    }, []);
    return (<>
        <form method="post" onSubmit={SliderStore}>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                THÊM SLIDER
                            </strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <Link className="btn btn-info btn-sm me-2" to="/admin/slider">
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
                                    <strong> Tên slider</strong>
                                </label>
                                <input type="text" name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="link">
                                    <strong> Link</strong>
                                </label>
                                <textarea name="link"
                                    value={link}
                                    onChange={(e) => setLink(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="p">
                                    <strong> position</strong>
                                </label>
                                <textarea name="position"
                                    value={position}
                                    onChange={(e) => setPosition(e.target.value)}
                                    className="form-control" />
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="mb-3">
                                <label htmlFor="sort_order">
                                    <strong> Sắp xếp</strong>
                                </label>
                                <select name="sort_order" value={sort_order}
                                    onChange={(e) => setSort_order(e.target.value)}
                                    className="form-control">
                                    <option value="0">None</option>
                                    {sliders.map(function (sl, index) {
                                        return (<option key={index} value={sl.sort_order + 1}>{sl.name}</option>);
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

    </>)
}
export default SliderCreate;