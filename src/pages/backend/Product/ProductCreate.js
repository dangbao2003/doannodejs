import { useEffect, useState } from "react";
import { FaArrowLeft, FaSave } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import ProductService from "../../../services/ProductService";
import BrandService from "../../../services/BrandService";
import CategoryService from "../../../services/CategoryService";

function ProductCreate() {
    const navigate = useNavigate();
    const [category_id, setCategory_id] = useState('');
    const [brand_id, setBrand_id] = useState('');
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [price, setPrice] = useState(0);
    const [price_sale, setPrice_sale] = useState(0);
    const [qty, setQty] = useState('');
    const [detail, setDetail] = useState('');
    const [metakey, setMetakey] = useState('');
    const [metadesc, setMetadesc] = useState('');
    const [status, setStatus] = useState(1);

    const ProductStore = async function (event) {
        event.preventDefault();// Không load trang
        const image = document.querySelector("#image");
        var product = new FormData();
        product.append("category_id", category_id);
        product.append("brand_id", brand_id);
        product.append("name", name);
        product.append("slug", slug);
        product.append("price", price);
        product.append("price_sale", price_sale);
        product.append("qty", qty);
        product.append("detail", detail);
        product.append("metakey", metakey);
        product.append("metadesc", metadesc);
        product.append("status", status);
        if (image.files.length === 0) {
            product.append("image", "")
        }
        else {
            product.append("image", image.files[0]);
        }
        // brand.forEach(function(v,k){
        //     console.log(k+"------"+v);
        // });
        await ProductService.create(product)
            .then(function (result) {
                alert(result.data.message);
                navigate('/admin/product', { replace: true });
            });
    }
    const [products, setProducts] = useState([]);
    useEffect(function () {
        (async function () {
            await ProductService.getAll().then(function (result) {
                setProducts(result.data.products);
            });
        })();
    }, []);

    const [categorys, setCategorys] = useState([]);
    useEffect(function () {
        (async function () {
            await CategoryService.getAll().then(function (result) {
                setCategorys(result.data.categorys);
            });
        })();
    }, []);

    const [brands, setBrands] = useState([]);
    useEffect(function () {
        (async function () {
            await BrandService.getAll().then(function (result) {
                setBrands(result.data.brands);
            });
        })();
    }, []);


    return (<>
        <form method="post" onSubmit={ProductStore}>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                THÊM SAN PHAM
                            </strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <Link className="btn btn-info btn-sm me-2" to="/admin/product">
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
                                <label htmlFor="category_id">
                                    <strong> category_id</strong>
                                </label>
                                <select
                                    name="category_id"
                                    value={category_id}
                                    onChange={(e) => setCategory_id(e.target.value)}
                                    className="form-control"
                                >
                                    <option value="0">None</option>
                                    {categorys.map(function (ca, index) {
                                        return <option key={index} value={ca.id}>{ca.name}</option>;
                                    })}
                                </select>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="brand_id">
                                    <strong> Thuong hieu</strong>
                                </label>
                                <select
                                    name="brand_id"
                                    value={brand_id}
                                    onChange={(e) => setBrand_id(e.target.value)}
                                    className="form-control"
                                >
                                    <option value="0">None</option>
                                    {brands.map(function (br, index) {
                                        return <option key={index} value={br.id}>{br.name}</option>;
                                    })}
                                </select>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="name">
                                    <strong>name</strong>
                                </label>
                                <textarea name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="slug">
                                    <strong> slug</strong>
                                </label>
                                <textarea name="slug"
                                    value={slug}
                                    onChange={(e) => setSlug(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="price">
                                    <strong> price</strong>
                                </label>
                                <textarea name="price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="price_sale">
                                    <strong> price_sale</strong>
                                </label>
                                <textarea name="price_sale"
                                    value={price_sale}
                                    onChange={(e) => setPrice_sale(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="qty">
                                    <strong> qty</strong>
                                </label>
                                <textarea name="qty"
                                    value={qty}
                                    onChange={(e) => setQty(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="detail">
                                    <strong> detail</strong>
                                </label>
                                <textarea name="detail"
                                    value={detail}
                                    onChange={(e) => setDetail(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="metakey">
                                    <strong> metakey</strong>
                                </label>
                                <textarea name="metakey"
                                    value={metakey}
                                    onChange={(e) => setMetakey(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="metadesc">
                                    <strong> metadesc</strong>
                                </label>
                                <textarea name="metadesc"
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
export default ProductCreate;