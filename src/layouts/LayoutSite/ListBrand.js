import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BrandService from "../../services/BrandService";

function ListBrand() {
    const [brands, setbrands] = useState([]);
    useEffect(function () {
        (async function () {
            try {
                const result = await BrandService.getAll();
                setbrands(result.data.brands);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [])
    return (<>
        <div className="container mt-3" >
            <div className="listbrand mb-5">
            <h4 className="bg-success p-2 m-0 text-center rounded" style={{color:"CaptionText"}}>THUONG HIEU</h4>
                <ul className="list-group">
                    {brands.map(function (br, index) {
                        return (<li className="list-group-item" key={index}>
                            <Link to={"/thuong-hieu/" + br.slug}
                                style={{ textDecoration: "none" }}
                                className="brand-link"
                            > {br.name}
                            </Link>
                        </li>)
                    })}
                </ul>
            </div>
        </div>
    </>)
}
export default ListBrand;