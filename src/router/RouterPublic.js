import Contact from "../pages/frontend/Contact"
import Gioithieu from "../pages/frontend/Page/Gioithieu";
import Home from "../pages/frontend/Home"
import Product from "../pages/frontend/Product"
import ProductDetail from "../pages/frontend/Product/ProductDetail";
import ProductBrand from "../pages/frontend/ProductBrand";
import ProductCategory from "../pages/frontend/ProductCategory";
import Chinhsachmuahang from "../pages/frontend/Page/Chinhsachmuahang";
import Chinhsachbaohanh from "../pages/frontend/Page/Chinhsachbaohanh";
import Chinhsachvanchuyen from "../pages/frontend/Page/Chinhsachvanchuyen";
import Chinhsachdoitra from "../pages/frontend/Page/Chinhsachdoitra";


const RouterPublic=[
    {path:'/', component:Home},
    {path:'/san-pham', component:Product},  
    {path:'/danh-muc-san-pham/:slug', component:ProductCategory},
    {path:'/thuong-hieu/:slug', component:ProductBrand},
    {path: '/chi-tiet-san-pham/:slug', component:ProductDetail},
    {path:'/lien-he', component:Contact},
    {path:'/gioi-thieu', component:Gioithieu},
    {path:'/chinh-sach-mua-hang', component:Chinhsachmuahang},
    {path:'/chinh-sach-bao-hanh', component:Chinhsachbaohanh},
    {path:'/chinh-sach-van-chuyen', component:Chinhsachvanchuyen},
    {path:'/chinh-sach-doi-tra', component:Chinhsachdoitra},
];
export default RouterPublic;