import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryService from "../../services/CategoryService";

function ListCategory() {
    const [listcategory, setListCategory] = useState([]);
    useEffect(function () {
        (async function () {
            try {
                const result = await CategoryService.getCategoryByParentId(0);
                setListCategory(result.data.categorys);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [])
    return (<>
        <div className="container mt-3">
            <div className="listcategory mb-1">
                <h4 className="bg-success p-2 m-0 text-center rounded" style={{color:"CaptionText"}}>DANH MUC</h4>
                <ul className="list-group">
                    {listcategory.map(function (cat, index) {
                        return (
                            <li className="list-group-item" key={index}>
                                <Link
                                    to={"/danh-muc-san-pham/" + cat.slug}
                                    style={{ textDecoration: "none" }}
                                    className="category-link"
                                >
                                    {cat.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>


    </>)
}
export default ListCategory;