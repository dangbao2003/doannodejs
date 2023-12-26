import { useEffect, useState } from "react";
import { FaArrowLeft, FaSave } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import MenuService from "../../../services/MenuService";
import CategoryService from "../../../services/CategoryService";


function MenuCreate() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [type, setType] = useState('');
    const [table_id, setTable_id] = useState('');
    const [position, setPosition] = useState('');
    const [parent_id, setParent_id] = useState('');
    const [metakey, setMetakey] = useState('');
    const [metadesc, setMetadesc] = useState('');
    const [level, setLevel] = useState('');
    const [sort_order, setSort_order] = useState(0);
    const [status, setStatus] = useState(0);
    const MenuStore = async function (event) {
        event.preventDefault();// Không load trang

        var menu = new FormData();
        menu.append("name", name);
        menu.append("link", link);
        menu.append("type", type);
        menu.append("table_id", table_id);
        menu.append("position", position);
        menu.append("parent_id", parent_id);
        menu.append("metakey", metakey);
        menu.append("metadesc", metadesc);
        menu.append("level", level);
        menu.append("sort_order", sort_order);
        menu.append("status", status);

        await MenuService.create(menu)
            .then(function (result) {
                alert(result.data.message);
                navigate('/admin/menu', { replace: true });
            });
    }
    const [menus, setMenus] = useState([]);
    useEffect(function () {
        (async function () {
            await MenuService.getAll().then(function (result) {
                setMenus(result.data.menus);
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
    //console.log("Re-Render"+name);
    return (<>
        <form method="post" onSubmit={MenuStore}>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                THÊM MENU
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
                                    <strong> link</strong>
                                </label>
                                <input type="text" name="name"
                                    value={link}
                                    onChange={(e) => setLink(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="type">
                                    <strong> type</strong>
                                </label>
                                <input type="text" name="name"
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="table_id">
                                    <strong> table_id</strong>
                                </label>
                                <input type="number" name="table_id"
                                    value={table_id}
                                    onChange={(e) => setTable_id(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="position">
                                    <strong> position</strong>
                                </label>
                                <select name="status"
                                    value={position}
                                    onChange={(e) => setPosition(e.target.value)}
                                    className="form-control">
                                    <option value="0">None</option>
                                    <option value="mainmenu">mainmenu</option>
                                    <option value="footer">footer</option>
                                </select>

                            </div>
                            <div className="mb-2">
                                <label htmlFor="parent_id">
                                    <strong> Parent_id</strong>
                                </label>
                                <select
                                    name="parent_id"
                                    value={parent_id}
                                    onChange={(e) => setParent_id(e.target.value)}
                                    className="form-control"
                                >
                                    <option value="0">None</option>
                                    {categorys.map(function (ca, index) {
                                        return <option key={index} value={ca.id}>{ca.name}</option>;
                                    })}
                                </select>
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
                        <div className="col-md-2">
                            <div className="mb-1">
                                <label htmlFor="sort_order">
                                    <strong> Sắp xếp</strong>
                                </label>
                                <select name="sort_order" value={sort_order}
                                    onChange={(e) => setSort_order(e.target.value)}
                                    className="form-control">
                                    <option value="0">None</option>
                                    {menus.map(function (me, index) {
                                        return (<option key={index} value={me.sort_order + 1}>{me.name}</option>);
                                    })}
                                </select>
                            </div>
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
    </>);
}
export default MenuCreate;
