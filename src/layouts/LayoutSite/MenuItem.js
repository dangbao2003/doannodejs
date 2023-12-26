import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuService from '../../services/MenuService';

function MenuItem(props) {
    const rowmenu = props.menu
    const [menus, setMenus] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await MenuService.getByParentId("mainmenu", rowmenu.id);
          setMenus(result.data.menus);
        } catch (error) {
          // Xử lý lỗi nếu có
          console.error(error);
        }
      };
    
      fetchData();
    }, []);
    
  if(menus==null){
    return(
        <li className="nav-item">
          <Link className="nav-link text-white" to={rowmenu.link}>{rowmenu.name}</Link>
        </li>
    )
  }
  else{
    return (
        <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle text-white" to={rowmenu.link}role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {rowmenu.name}
            </Link>
            <ul className="dropdown-menu">
                {menus.map(function(menu1, index){
                    return <li><Link className="dropdown-item" key={index} to={menu1.link}>{menu1.name}</Link></li>
                })}
            </ul>
        </li>
        
    );
  }
}

export default MenuItem;