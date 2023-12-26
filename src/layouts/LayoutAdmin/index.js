import Menu from "../LayoutAdmin/Menu";
import Footer from "../LayoutAdmin/Footer";
import { Outlet } from "react-router-dom";

function LayoutAdmin()
{
    return<>
    <Menu/>
    <section className="maincontent">
        <div className="container-fluid my-2">
            <Outlet/>
        </div>
    </section>
    <Footer/>
     </>
}
export default LayoutAdmin;