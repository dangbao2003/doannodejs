import { Outlet } from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
import Coppyright from "./Coppyright";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './LayoutSite.css';
import Content from "./Content";


function LayoutSite()
{
    return<>
    <Header/>
    <Menu/>
    <Outlet/>
    <Content/>
    <Footer/>
    <Coppyright/>

     </>
}
export default LayoutSite;