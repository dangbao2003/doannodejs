import { Link } from "react-router-dom";
import Dichvu from "../../Contact/dichvu";

function Chinhsachvanchuyen() {
    return (<>

        <div className="wrap-breadcrumb ">
            <div className="clearfix container">
                <div className="row main-header">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pd5  ">
                        <ol className="breadcrumb breadcrumb-arrows">
                            <li><Link to="/" target="_self">Trang chủ</Link></li>
                            <p>/</p>
                            <li className="active"><span>Chinhsachvanchuyen</span></li>
                        </ol>
                    </div>
                </div>
            </div>

        </div>
        <Dichvu />

        <section id="content" class="clearfix container">
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12 " id="layout-page">
                    <span class="header-page clearfix">
                        <h1>Phương Thức Giao Hàng Và Phí SHIP</h1>
                    </span>
                    <div class="content-page">
                        <p><span style={{fontSize: "12pt"}}><strong>1 - Phương Thức Giao Hàng</strong></span></p><p><span style={{fontSize: "12pt"}}>- Xinh Giao hàng và thanh toán tận nơi trên phạm vi toàn quốc ( Nhận hàng mới thanh toán tiền )</span></p><p><span style={{fontSize: "12pt"}}>- Sau khi bạn đặt hàng, trong vòng 24 giờ chúng tôi sẽ liên lạc lại để kiểm tra thông tin và thỏa thuận thêm những điều khoản khác có liên quan.</span></p><p><span style={{fontSize: "12pt"}}>- Một số trường hợp đặc biệt như giá trị đơn hàng quá lớn &amp; thời gian giao hàng vào buổi tối, địa chỉ giao hàng trong ngõ hoặc có thể dẫn đến nguy hiểm. Chúng tôi sẽ chủ động liên lạc với quý khách để thống nhất lại thời gian giao hàng cụ thể.</span></p><p><span style={{fontSize: "12pt"}}>- Trong trường hợp giao hàng chậm trễ mà không báo trước, quý khách có thể từ chối nhận hàng và chúng tôi sẽ hoàn trả toàn bộ số tiền mà quý khách trả trước (nếu có) trong vòng 7 ngày.</span></p><p><span style={{fontSize: "12pt"}}>- XINH cam kết tất cả hàng hóa gởi đến quý khách đều là hàng chuẩn form dáng 100% mang thương hiệu độc quyền tại Xinh.</span></p><p><span style={{fontSize: "12pt"}}><strong>2 - PHÍ SHIP - VẬN CHUYỂN</strong></span></p><p><span style={{fontSize: "12pt"}}><strong>A.</strong> FREE SHIP cho các đơn hàng:</span></p><p><span style={{fontSize: "12pt"}}>- Dùng phương thức chuyển khoản trước</span></p><p><span style={{fontSize: "12pt"}}>- Khi khách hàng mua từ 2 sản phẩm trở lên</span></p><p><span style={{fontSize: "12pt"}}><strong>B.</strong> PHÍ SHIP TOÀN QUỐC</span></p><p><span style={{fontSize: "12pt"}}>Thời Trang Xinh áp dụng Phí Ship đồng giá toàn quốc ( Có hỗ trợ khách hàng)</span></p><p><span style={{fontSize: "16pt"}}><span style={{color:"#e74c3c"}}><strong>Phí SHIP Đồng Giá :30.000 Đ</strong>&nbsp;</span>cho mỗi đơn hàng ( Áp&nbsp;dụng Toàn Quốc)</span></p><p><span style={{fontSize: "16pt"}}>Thời gian giao hàng: từ 1 - 2 ngày với các đơn hàng nội thành các thành phố lớn. Từ 3 - 5 ngày với khách hàng ở tỉnh tùy địa chỉ nhận hàng.</span></p>
                    </div>
                </div>
            </div>
        </section>

    </>)
}
export default Chinhsachvanchuyen;