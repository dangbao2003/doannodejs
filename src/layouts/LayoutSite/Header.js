import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.webp';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


function Header() {
    const [searchValue, setSearchValue] = useState('');

    function handleSearchInputChange(event) {
        setSearchValue(event.target.value);
    }
    function handleSearchSubmit(event) {
        event.preventDefault();
        // Thực hiện xử lý tìm kiếm với giá trị trong searchValue
        // Hiển thị kết quả sản phẩm tìm kiếm
      }
    return (<>
        <section>
            <div className=" container">
                <div className="row">
                    <div className="col-md-3">
                        <img src={Logo} className="img-fluid" alt="LOGO" />
                    </div>
                    <div className="col-md-4" style={{ marginTop: '20px' }}>
                        <form onSubmit={handleSearchSubmit}>
                            <input
                                type="text"
                                placeholder="Search.."
                                name="search"
                                style={{ width: '200px' }}
                                value={searchValue}
                                onChange={handleSearchInputChange}
                            />
                            <button type="submit">Tìm Kiếm<i className="fa fa-search"></i></button>
                        </form>


                    </div>
                    <div className="col-md-4">
                        <div className="navholder" style={{ marginTop: "15px", }}>
                            <div style={{ fontSize: "13px" }}>
                                <Link to="#" style={{ color: "#333333", marginRight: "10px", textDecoration: "none", borderRight: "1px solid #333333", paddingRight: "10px" }}>
                                    <i className="fa fa-phone" aria-hidden="true" ></i> 02871086717
                                </Link>
                                <Link className="reg" href="/account/register" title="Đăng ký" style={{ color: "#333333", marginRight: "10px", textDecoration: "none", borderRight: "1px solid #333333", paddingRight: "10px" }}>
                                    ĐĂNG KÝ
                                </Link>
                                <Link className="log" href="/account/login" title="Đăng nhập" style={{ color: "#333333", textDecoration: "none" }}>
                                    ĐĂNG NHẬP
                                </Link>
                            </div>
                            <hr className="line-right" style={{ width: "250px", borderTop: "1px dashed #000" }}></hr>
                            <div className="header_line" style={{ textAlign: "left", fontSize: "12px" }}>
                                <p >ĐỔI TRẢ HÀNG HOẶC HOÀN TIỀN<span className="mar-l5" style={{ color: "red" }}> TRONG 3 NGÀY</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div className="cart" style={{ fontSize: "60px" }}>
                            <FontAwesomeIcon icon={faShoppingCart} />

                        </div>
                    </div>
                </div>
            </div>
        </section >
    </>)

}
export default Header;