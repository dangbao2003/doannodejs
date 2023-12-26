import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import MenuService from "../../services/MenuService";
import MenuItem from "./MenuItem";


function Footer() {
    const [menus, setMenus] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await MenuService.getByParentId("footer", 0);
                setMenus(result.data.menus);
            } catch (error) {
                // Xử lý lỗi nếu có
                console.error(error);
            }
        };
        fetchData();
    }, []);
    return (<>

        <section className="bg-dark">
            <div className=" container">
                <div className="row">
                    <div className="col-sm-3" style={{ color: '#A1A1A1', fontSize: 'small', textDecoration: 'none' }}>
                        <h4 style={{ color: '#FFFFFF', marginTop: '20px' }}>Công Ty Cổ Phần ILEAD</h4>
                        <p style={{ background: 'url(//theme.hstatic.net/1000296531/1000427833/14/loca.png?v=2076) no-repeat left center' }}>
                            <p style={{ marginLeft: '20px' }}>168/25 Chế Lan Viên, P. Tây Thạnh, Tân Phú, TP HCM</p>
                        </p>
                        <p style={{ marginLeft: '20px' }}> - Giấy CN ĐKKD số: 0311951294</p>
                        <p style={{ marginLeft: '20px' }}>- Cấp Ngày 31-08-2012 </p>
                        <p style={{ marginLeft: '20px' }}>- Nơi Cấp: Phòng ĐKKD, Sở KHĐT Thành Phố Hồ Chí Minh </p>
                        <p style={{ background: "url(//theme.hstatic.net/1000296531/1000427833/14/loca.png?v=2076) no-repeat left center" }}>
                            <p style={{ marginLeft: '20px' }}>168/25 Chế Lan Viên, P. Tây Thạnh, Tân Phú, TP HCM</p></p>
                        <p style={{ background: "url(//theme.hstatic.net/1000296531/1000427833/14/phone.png?v=2076) no-repeat left center" }}>
                            <p style={{ marginLeft: '20px' }}>028 710 86717</p></p>
                        <p style={{ background: "url(//theme.hstatic.net/1000296531/1000427833/14/mail.png?v=2076) no-repeat left center" }}>
                            <p style={{ marginLeft: '20px' }}>cskh@thoitrangxinh.net</p></p>
                        <p style={{ background: "url(//theme.hstatic.net/1000296531/1000427833/14/web.png?v=2076) no-repeat left center" }}>
                            <p style={{ marginLeft: '20px' }}>https://thoitrangxinh.net</p></p>

                    </div>
                    <div className="col-sm-2" style={{ color: '#A1A1A1', fontSize: 'small', textDecoration: 'none' }}>
                        <h6 style={{ color: '#A1A1A1', fontSize: 'small', textDecoration: 'none', marginTop: '25px' }}>LIÊN KẾT</h6>
                        <p>
                            <div>
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ color: '#A1A1A1', fontSize: 'small', textDecoration: 'none' }}>
                                    {menus.map(function (menu, index) {
                                        return <MenuItem key={index} menu={menu} />
                                    })}

                                </ul>
                            </div>
                        </p>
                    </div>
                    <div className="col-sm-2" style={{ color: '#A1A1A1', fontSize: 'small', textDecoration: 'none' }}>
                        <h6 style={{ color: '#A1A1A1', fontSize: 'small', textDecoration: 'none', marginTop: '25px' }}>THÔNG TIN</h6>
                        <p>
                            <Link to="/pages/about-us" style={{ color: '#A1A1A1', fontSize: 'small', textDecoration: 'none', marginTop: '30px' }}>Hướng Dẫn Mua Hàng</Link><br />
                            <Link to="/collections/vay-dam-xuan-he" style={{ color: '#A1A1A1', fontSize: 'small', textDecoration: 'none' }}>Thông Số Size Đầm Chuẩn</Link><br />
                            <Link to="/collections/dam-thu-dong" style={{ color: '#A1A1A1', fontSize: 'small', textDecoration: 'none' }}>Cảnh Báo Hàng Giả Mạo</Link><br />
                            <Link to="/collections/noi-y-xinh-quan-lot-ao-nguc" style={{ color: '#A1A1A1', fontSize: 'small', textDecoration: 'none' }}>Cam Kết Sản Phẩm</Link><br />
                            <Link to="https://thoitrangxinh.net/pages/sale-tri-an" style={{ color: '#A1A1A1', fontSize: 'small', textDecoration: 'none' }}>Hướng Dẫn Đổi - Trả</Link><br />
                        </p>
                    </div>
                    <div className="col-sm-3" style={{ color: '#A1A1A1', fontSize: 'small', textDecoration: 'none' }}>
                        <h6 style={{ color: '#A1A1A1', fontSize: 'small', textDecoration: 'none', marginTop: '25px' }}>QUY ĐỊNH & CHÍNH SÁCH</h6>
                        <p>
                            <Link to="/chinh-sach-bao-hanh" style={{ color: '#A1A1A1', fontSize: 'small', textDecoration: 'none', marginTop: '30px' }}>Chinh sach bao hanh</Link><br />
                            <Link to="/chinh-sach-van-chuyen" style={{ color: '#A1A1A1', fontSize: 'small', textDecoration: 'none' }}>Chính Sách Giao Hàng</Link><br />
                            <Link to="/chinh-sach-doi-tra" style={{ color: '#A1A1A1', fontSize: 'small', textDecoration: 'none' }}>Đổi Hàng & Hoàn Tiền</Link><br />
                            <Link to="/chinh-sach-mua-hang" style={{ color: '#A1A1A1', fontSize: 'small', textDecoration: 'none' }}>Chính Sách Mua Hang</Link><br />
                            
                        </p>
                    </div>
                    <div className="col-sm-2" style={{ color: '#A1A1A1', fontSize: 'small', textDecoration: 'none' }}>
                        <h6 style={{ color: '#A1A1A1', fontSize: 'small', textDecoration: 'none', marginTop: '25px' }}>CHỨNG NHẬN</h6>
                        <p>
                            <Link to="http://online.gov.vn/Home/WebDetails/80445"><img src="https://file.hstatic.net/1000296531/file/logosalenoti_72f1b9d616b84c199d68044b7c333689.png" width='170px' alt="Đã Thông Báo Với Bộ Công Thương" /></Link>
                        </p>
                    </div>
                </div>
            </div>
        </section >
    </>)
}
export default Footer;