import { Link } from "react-router-dom";
import MenuService from '../../services/MenuService';
import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

function Menu() {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await MenuService.getByParentId("mainmenu", 0);
        setMenus(result.data.menus);
      } catch (error) {
        // Xử lý lỗi nếu có
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <section className="mainmenu bg-success">
      <div className="container ">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand text-white d-md-none d-sm-block" to="/">
              Shop xinh
            </Link>
            <button
              className="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggle-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {menus.map(function (menu, index) {
                  return <MenuItem key={index} menu={menu} />
                })}

              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Menu;