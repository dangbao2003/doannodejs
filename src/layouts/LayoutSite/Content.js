import { Link } from "react-router-dom";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
function Content() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Xử lý logic khi form được submit
        // Gửi dữ liệu đăng ký nhận tin
    };
    const handleClick = () => {
        // Xử lý logic khi nút được nhấn
        // Gọi hàm "nhantin()"
    };
    return (<>
        <section id="blog_news" style={{ background: '#e3e3e3' }}>
            <div className="container">
                <div className="row" >
                    <div className="col-md-11">
                        <div className="row" style={{ marginTop: '20px' }}>
                            <h2 style={{ color: '#0053fe' }}>TIN TỨC &amp; KHUYẾN MÃI MỚI NHẤT</h2>
                            <hr className="line-right" style={{ width: "850px" }}></hr>

                            <div className="row">

                                <div className="col-md-5">
                                    <div className="first_arrticle">
                                        <div className="img_feature"><img src="//file.hstatic.net/1000296531/article/damchonguoibeo_large.jpg" alt="Đầm Công Sở Dành Cho Người Béo Bụng" width='400px' /></div>
                                        <span style={{ fontSize: '10pt' }}><strong>ĐẦM CÔNG SỞ DÀNH CHO NGƯỜI BÉO BỤNG</strong></span><br />
                                        <div className="description">Đối với những nàng có thân hình hơi béo một chút, đặc biệt là vòng 2 phì nhiêu thì hãy tự tin diện váy đầm sau khi tham khảo bài "Đầm công sở dành cho người béo bụng" này...</div>
                                    </div>
                                </div>

                                <div className="col-md-5" style={{ overflow: "auto", maxHeight: "400px" }}>
                                    <div className="wrap_newmore">
                                        <div className="news_flex">
                                            <div className="news">
                                                <div className="wapanh" style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                                    <Link to="/blogs/tin-thoi-trang/cach-chon-vay-cho-nang-beo-bung-cong-so">
                                                        <img src="//file.hstatic.net/1000296531/article/bo3_01acfbd97dcd41739b629bc6ccad4ee3_a9d08c6732ee4a5d9f98889da9e691fa_medium.jpg" alt="CÁCH CHỌN VÁY CHO NÀNG BÉO BỤNG CÔNG SỞ" className="mCS_img_loaded" style={{ width: "100px" }} />
                                                    </Link>
                                                    <p style={{ marginLeft: "10px" }}>
                                                        <span style={{ fontSize: '9pt' }}><strong>
                                                            CÁCH CHỌN VÁY CHO NÀNG BÉO BỤNG CÔNG SỞ</strong></span><br />
                                                        <p style={{ fontSize: '9pt' }}>	Mách nàng béo chọn váy tạo cảm giác eo thon dáng gọn nhất ?Sau đây Xinh xin chia sẻ một chút về cách chọn váy cho chị em béo bụng,...</p>
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                        <hr className="line-right" style={{ width: "930px" }}></hr>
                                        <div className="news_flex">
                                            <div className="news">
                                                <div className="wapanh" style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                                    <Link to="/blogs/tin-thoi-trang/nang-dang-lua-chon-bo-canh-di-tiec-nhung-lai-khong-thich-cau-ky-long-lay">
                                                        <img src="//file.hstatic.net/1000296531/article/1111_001aa9c077d24d49aab4f0fb89a891b3_5186aea6806040d3aec66c0902d6b326_medium.jpg" alt="CÁCH CHỌN VÁY CHO NÀNG BÉO BỤNG CÔNG SỞ" className="mCS_img_loaded" style={{ width: "100px" }} />
                                                    </Link>
                                                    <p style={{ marginLeft: "10px" }}>
                                                        <span style={{ fontSize: '9pt' }}><strong>
                                                            NÀNG ĐANG LỰA CHỌN BỘ CÁNH ĐI TIỆC NHƯNG LẠI KHÔNG THÍCH CẦU KỲ - LỘNG LẪY ???</strong></span><br />
                                                        <p style={{ fontSize: '9pt' }}>		Có rất nhiều cách để thể hiện vẻ đẹp riêng của mình trong những bữa tiệc tùng sắp tới...Nhưng nàng lại thuộc típ không thích sự phô trương - cầu...</p>
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                        <hr className="line-right" style={{ width: "930px" }}></hr>

                                        <div className="news_flex">
                                            <div className="news">
                                                <div className="wapanh" style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                                    <Link to="/blogs/tin-thoi-trang/cach-chon-vay-cho-nang-beo-bung-cong-so">
                                                        <img src="//file.hstatic.net/1000296531/article/beo-bung-mac-sao-cho-dep_c8391d2e4ec8432d9d0a1f43fcfaa2fa_90be12ca219245a8a6fc6f7cb80c53d8_medium.jpg" style={{ width: "100px" }} />
                                                    </Link>
                                                    <p style={{ marginLeft: "10px" }}>
                                                        <span style={{ fontSize: '9pt' }}><strong>
                                                            Béo Bụng -  Vai thô - Chọn Đầm Thế Nào Để Đẹp ?</strong></span><br />
                                                        <p style={{ fontSize: '9pt' }}>		Ông bà ta xưa có câu “ ăn cho mình, mặc cho người”, tức về ăn uống thì phải nghĩ tới bản thân mình, ăn gì tốt cho sức khỏe,...</p>
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                        <hr className="line-right" style={{ width: "930px" }}></hr>

                                        <div className="news_flex">
                                            <div className="news">
                                                <div className="wapanh" style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                                    <Link to="/blogs/tin-thoi-trang/cach-chon-vay-cho-nang-beo-bung-cong-so">
                                                        <img src="//file.hstatic.net/1000296531/article/nangbeo_24ec3a2ea3a9483e91a219676796e2a5_medium.jpg" alt="CÁCH CHỌN VÁY CHO NÀNG BÉO BỤNG CÔNG SỞ" className="mCS_img_loaded" style={{ width: "100px" }} />
                                                    </Link>
                                                    <p style={{ marginLeft: "10px" }}>
                                                        <span style={{ fontSize: '9pt' }}><strong>
                                                            Tâm Sự Chọn Đầm Của Nàng Béo Sau Sinh</strong></span><br />
                                                        <p style={{ fontSize: '9pt' }}>"Bên em không có size lớn, size đại, size ngoại cỡ như chị, size của chị chắc phải đặt hàng trước ạ ...." những câu trả lời như xoáy sâu..."</p>
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                        <hr className="line-right" style={{ width: "930px" }}></hr>

                                        <div className="news_flex">
                                            <div className="news">
                                                <div className="wapanh" style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                                    <Link to="/blogs/tin-thoi-trang/cach-chon-vay-cho-nang-beo-bung-cong-so">
                                                        <img src="//file.hstatic.net/1000296531/article/bung-beo_medium.jpg" alt="CÁCH CHỌN VÁY CHO NÀNG BÉO BỤNG CÔNG SỞ" className="mCS_img_loaded" width="100px" />
                                                    </Link>
                                                    <p style={{ marginLeft: "10px" }}>
                                                        <span style={{ fontSize: '9pt' }}><strong>
                                                            CÁCH CHỌN VÁY CHO CHỊ EM BÉO BỤNG</strong></span><br />
                                                        <p style={{ fontSize: '9pt' }}>	Mách nàng béo chọn váy tạo cảm giác eo thon dáng gọn nhất ?Ngày nay, hầu hết chị em phụ nữ vừa phải lo công việc nhà, vừa phải đi làm...</p>
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                        <hr className="line-right" style={{ width: "930px" }}></hr>

                                        <div className="news_flex">
                                            <div className="news">
                                                <div className="wapanh" style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                                    <Link to="/blogs/tin-thoi-trang/cach-chon-vay-cho-nang-beo-bung-cong-so">
                                                        <img src="//file.hstatic.net/1000296531/article/cover_medium.jpg" alt="CÁCH CHỌN VÁY CHO NÀNG BÉO BỤNG CÔNG SỞ" className="mCS_img_loaded" width="100px" />
                                                    </Link>
                                                    <p style={{ marginLeft: "10px" }}>
                                                        <span style={{ fontSize: '9pt' }}><strong>
                                                            CÔNG THỨC PHỐI ĐỒ CHO THU - ĐÔNG</strong></span><br />
                                                        <p style={{ fontSize: '9pt' }}>		Chọn áo khoác phù hợp, cân bằng chất liệu giữa các món đồ là những bí quyết giúp bạn gái mặc nhiều lớp quần áo mà vẫn thẩm mỹ.Shop Xinh...</p>
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                        <hr className="line-right" style={{ width: "930px" }}></hr>



                                    </div>
                                </div>


                                <div className="col-md-2">
                                    <div className="facebookfan">
                                        <div id="fb-root"></div>
                                        <div
                                            className="fb-page fb_iframe_widget"
                                            data-href="https://www.facebook.com/thoitrangxinh.net"
                                            height="400"
                                            data-tabs="timeline"
                                            data-small-header="false"
                                            data-adapt-container-width="true"
                                            data-hide-cover="false"
                                            data-show-facepile="true"
                                            fb-xfbml-state="rendered"
                                            fb-iframe-plugin-query="adapt_container_width=true&amp;app_id=&amp;container_width=263&amp;height=400&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fthoitrangxinh.net&amp;locale=vi_VN&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline"
                                        >
                                            <span style={{ verticalAlign: "bottom", width: "263px", height: "400px" }}>
                                                <iframe
                                                    name="f139676fa2782a8"
                                                    width="1000px"
                                                    height="400px"
                                                    data-testid="fb:page Facebook Social Plugin"
                                                    title="fb:page Facebook Social Plugin"
                                                    frameBorder="0"
                                                    allowtransparency="true"
                                                    allowFullScreen="true"
                                                    scrolling="no"
                                                    allow="encrypted-media"
                                                    src="https://www.facebook.com/v3.3/plugins/page.php?adapt_container_width=true&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df1ec9b6521baff4%26domain%3Dthoitrangxinh.net%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fthoitrangxinh.net%252Ff33be0a6c399324%26relation%3Dparent.parent&amp;container_width=263&amp;height=400&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fthoitrangxinh.net&amp;locale=vi_VN&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline"
                                                    style={{ border: "none", visibility: "visible", width: "263px", height: "400px" }}
                                                    className=""
                                                ></iframe>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                            </div>






                        </div>
                    </div>

                </div>
            </div>


        </section>

        <div className="container" style={{ marginTop: "20px", height: "50px" }}>
            <div className="row">
                <div className="col">
                    <div className="column">
                        <div>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span> ĐĂNG KÝ NHẬN TIN KHUYẾN MÃI</span>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="column">
                        <form name="frm_dknt" id="frm_dknt" method="post" action="/account/contact" onSubmit={handleSubmit}>
                            <input type="hidden" id="contact_tags" name="contact[tags]" value="khách hàng tiềm năng, bản tin" />
                            <input type="email" placeholder="Nhập email của bạn" id="email_nhantin" required name="contact[email]" />
                            <button name="submit_nhantin" id="submit_nhantin" onClick={handleClick} >
                                <i className="fa fa-paper-plane" aria-hidden="true" style={{ color: "#ff551f" }}>Gửi</i>
                            </button>
                            <div className="clear"></div>
                        </form>
                    </div>
                </div>

                <div className="col">
                    <div className="column">
                        <div className="mxh_dk hidden-sm hidden-xs">
                            <Link to="https://www.facebook.com/thoitrangxinh.net/">
                                <img src="//theme.hstatic.net/1000296531/1000427833/14/fb.png?v=2089" alt="THỜI TRANG XINH" style={{ marginRight: "10px", height: "40px", width: "40px" }} />
                            </Link>

                            <Link to="https://www.youtube.com/thoitrangxinhnet">
                                <img src="//theme.hstatic.net/1000296531/1000427833/14/ytb.png?v=2089" alt="THỜI TRANG XINH" style={{ marginRight: "10px", height: "40px", width: "40px" }} />
                            </Link>

                            <Link to="https://shopee.vn/thoitrangxinh.net">
                                <img src="https://file.hstatic.net/1000296531/file/shopee_a20ed896fa6f40c6934bcb1f746be5a7.png" alt="THỜI TRANG XINH" style={{ marginRight: "10px", height: "40px", width: "40px" }} />
                            </Link>
                            <Link to="https://www.lazada.vn/thoitrangxinhnet1620723776/?q=All-Products&amp;langFlag=vi&amp;from=wangpu&amp;lang=vi&amp;pageTypeId=2">
                                <img src="https://file.hstatic.net/1000296531/file/lazada_66ee09576d204feb946718482447b108.png" alt="THỜI TRANG XINH" style={{ marginRight: "10px", height: "40px", width: "40px" }} />
                            </Link>
                            <Link to="https://tiki.vn/cua-hang/thoitrangxinh">
                                <img src="https://file.hstatic.net/1000296531/file/tiki_5c6d882458f744f3873cb2784e673e6e.png" alt="THỜI TRANG XINH" style={{ marginRight: "10px", height: "40px", width: "40px" }} />
                            </Link>
                            <Link to="https://www.sendo.vn/shop/thoi-trang-xinh">
                                <img src="https://file.hstatic.net/1000296531/file/sendo_f7192ef82a094dfaa5ee8622b3588049.png" alt="THỜI TRANG XINH" style={{ marginRight: "10px", height: "40px", width: "40px" }} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default Content;