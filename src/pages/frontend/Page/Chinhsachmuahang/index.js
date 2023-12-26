import { Link } from "react-router-dom";
import Dichvu from "../../Contact/dichvu";

function Chinhsachmuahang() {
    return (<>

        <div className="wrap-breadcrumb ">
            <div className="clearfix container">
                <div className="row main-header">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pd5  ">
                        <ol className="breadcrumb breadcrumb-arrows">
                            <li><Link to="/" target="_self">Trang chủ</Link></li>
                            <p>/</p>
                            <li className="active"><span>Chinhsachmuahang</span></li>
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
                        <h1>Hướng Đãn Mua Hàng &amp; Mua Hàng Với Mã Giảm Giá Của Xinh</h1>
                    </span>
                    <div class="content-page">
                        <p><span style={{fontSize: "12pt"}}>Xin chào quý khách hàng !</span></p><p><span style={{fontSize: "12pt"}}>Đây là phần hướng dẫn chi tiết mua hàng trên website của Thời Trang Xinh dùng điện thoại di đông và máy tính. Hàng tháng Xinh thường có chương trình giảm giá vào những ngày nhất định kèm theo đó có tặng khách hàng mã giảm giá tùy theo chương trình.</span></p><p><span style={{fontSize: "12pt"}}>Mỗi khi khách hàng nhận được MÃ GIẢM GIÁ của Xinh chỉ cần làm vài bước đơn giản là được giảm trực tiếp trên đơn hàng của mình.</span></p><p><span style={{fontSize: "12pt"}}>Sau đây Xinh sẽ hướng dẫn quý khách đặt mua hàng với mã giảm giá khị Xinh gửi tặng quý khách hàng.</span></p><p><span style={{fontSize: "12pt"}}>Vui lòng xem chi tiết Video sau:</span></p><p><span style={{fontSize: "12pt"}}><strong>1-&nbsp; Hướng dẫn&nbsp;Mua hàng TRÊN ĐIỆN THOẠI DI ĐỘNG &nbsp;tại&nbsp;website</strong></span></p><p style={{textAlign: "center"}}><span class="mce-preview-object mce-object-iframe"><iframe src="//www.youtube.com/embed/7bZWUVHWukA" allowfullscreen="allowfullscreen" width="360" height="640" frameborder="0"></iframe></span></p><p style={{textAlign: "left"}}><span style={{fontSize: "12pt"}}><strong>2- Hướng dẫn Mua hàng TRÊN MÁY TÍNH tại&nbsp;website</strong></span></p><p style={{textAlign: "center"}}><span style={{fontSize: "12pt"}}><strong><span class="mce-preview-object mce-object-iframe"><iframe src="//www.youtube.com/embed/PMtnNMsZjRM" allowfullscreen="allowfullscreen" width="560" height="314" frameborder="0"></iframe></span></strong></span></p><p>&nbsp;</p>
                    </div>
                </div>
            </div>
        </section>

    </>)
}
export default Chinhsachmuahang;