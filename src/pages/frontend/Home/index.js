

import { useEffect, useState } from "react";
import ProductHome from "./ProductHome";
import CategoryService from "../../../services/CategoryService";

function Home() {
    const [categorys, setCategorys] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const result = await CategoryService.getCategoryByParentId(0);
      setCategorys(result.data.categorys);
    } catch (error) {
      // Xử lý lỗi ở đây
      console.log(error);
    }
  };

  fetchData();
}, []);

    return (
        <section className="maincontent">
         
            {categorys.map(function (category, index) {
                return <ProductHome key={index} category={category} />
            })}

        </section>
    );
}

export default Home;