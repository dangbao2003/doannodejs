
import React from 'react';
import Dichvu from "./dichvu";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaSave } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import ContactService from '../../../services/ContactService';

function Contact() {
    const { id } = useParams();
    console.log(id);
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [user_id, setUser_id] = useState('');
    const [phone, setPhone] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [replay_id, setReplayId] = useState('1');
    const [status, setStatus] = useState('0');

    const [contacts, setContacts] = useState([]);
    useEffect(function () {
        (async function () {
            await ContactService.getAll().then(function (result) {
                setContacts(result.data.contacts);
            });
        })();
    }, []);

    const Contact = async function (event) {
        event.preventDefault();// Không load trang
        var contact = new FormData();
        contact.append("name", name);
        contact.append("email", email);
        contact.append("user_id", user_id);
        contact.append("phone", phone);
        contact.append("title", title);
        contact.append("content", content);
        contact.append("replay_id", replay_id);
        contact.append("status", status);

        await ContactService.create(contact)
            .then(function (result) {
                alert(result.data.message);
                navigate('/', { replace: true });
            });
    }
    return (<>
        <Dichvu />
        <section id="content" class="clearfix container">
            <div class="row">
                <div class="col-md-5">
                    <h3>Chi tiết liên hệ </h3>
                    <hr class="line-right"></hr>
                    <h4 class="name-company">Thời Trang Xinh </h4>
                    <h4 class="product-list" style={{ fontSize: 'small' }}>Đầm Công Sở Dáng Chuẩn - Càng Ngắm Càng Xinh</h4>
                    <p>Add:168/25 Chế Lan Viên, P.Tây Thạnh, Q.Tân Phú, Hồ Chí Minh<br />
                        Email: Cskh@thoitrangxinh.net<br />
                        Phone: 028 710 86717 - 0983766717 - 0908755717</p><br />
                </div>
                <div class="col-md-7">
                    <hr class="line-left"></hr>
                    <div>
                    </div>
                    <p>
                        Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi, và chúng tôi sẽ liên lạc lại với bạn sớm nhất có thể.
                        <form method='post' onSubmit={Contact}>
                            <div className="col-md-12">
                                <div className="form-group" >
                                    <input
                                        type="text"
                                        name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="form-control"
                                        placeholder="name"
                                        id="name"
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="user_id"
                                        value={user_id}
                                        onChange={(e) => setUser_id(e.target.value)}
                                        className="form-control"
                                        placeholder="user_id"
                                        id="user_id"
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="form-control"
                                        placeholder="email"
                                        id="email"
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="form-control"
                                        placeholder="phone"
                                        id="phone"
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        className="form-control"
                                        placeholder="title"
                                        id="title"
                                    />
                                </div>

                                <div className="form-group">
                                    <textarea
                                        required=""
                                        rows="6"
                                        name="content"
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
                                        className="form-control"
                                        placeholder="Viết bình luận"
                                        id="content"
                                    ></textarea>
                                </div>
                            </div>

                            <div className="form-group">
                                <button type='submit' className="btn btn-sm btn-success">
                                    <span className="submit-text">
                                        Gửi liên hệ
                                    </span>
                                </button>
                            </div>
                        </form>



                    </p>
                </div>
            </div>
            <div className="content-contact content-page">
                <p className="text-center">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.9381164598913!2d106.62857073352095!3d10.816047856439988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752be1b51ad80d%3A0xf175049b892c2ca6!2sShop+Th%E1%BB%9Di+Trang+Xinh!5e0!3m2!1sen!2s!4v1531032012613"
                        width="1000"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                    ></iframe>
                </p>

            </div>

            <div class="content-page">
                <p>
                    <span style={{ fontSize: '12pt' }}>Để cho việc mua hàng của Quý khách diễn ra thuận tiện và nhanh chóng, Thời Trang Xinh hỗ trợ các phương thức thanh toán sau đây:</span><br />
                    <span style={{ fontSize: '12pt' }}><strong>A. Thanh toán tiền mặt khi nhận hàng (C.O.D):</strong> Đơn giản – An toàn</span><br />
                </p>
                <p>
                    <span style={{ fontSize: '12pt' }}>- Tên gọi COD là viết tắt của Cash On Delivery, nghĩa là thanh toán khi nhận hàng.&nbsp;</span><br />
                    <span style={{ fontSize: '12pt' }}>- Ngay sau khi nhận được đơn đặt hàng qua facebook, website, email... CSKH Xinh sẽ xác nhận với Quý khách qua điện thoại, tiến hành thực hiện đơn hàng và giao hàng.&nbsp;</span><br />
                </p>
                <p>
                    <span style={{ fontSize: '12pt' }}>Thời Trang Xinh chấp nhận hình thức thanh toán khi nhận hàng (COD) cho tất cả các đơn hàng trên toàn quốc.</span>
                </p>
                <p>
                    <span style={{ fontSize: '12pt' }}>- Quý khách có thể thanh toán tiền mặt trực tiếp khi mua hàng tại cửa hàng Thời Trang Xinh tại địa chỉ:</span>
                </p>
                <p>
                    <span style={{ fontSize: '12pt' }}>👉 HCM: 168/25 Chế Lan Viên, F Tây Thạnh, Tân Phú, HCM (từ 8h đến 17h)</span>
                </p>
                <p>
                    <span style={{ fontSize: '12pt' }}><strong>B. CHUYỂN KHOẢN NGÂN HÀNG</strong></span><br />
                </p>
                <p>
                    <span style={{ fontSize: '12pt' }}>Xinh có các tài khoản của một số ngân hàng phổ biến tại Việt Nam là: Vietcombank, AGRIBANK</span><br />
                </p>
                <p>
                    <span style={{ fontSize: '12pt' }}>Quý khách hàng có thể Chuyển khoản trực tiếp vào tài khoản ngân hàng của của Thời Trang Xinh tại các ngân hàng với nội dung:</span>
                </p>
                <p>
                    <span style={{ fontSize: '12pt' }}>Tên + SĐT đặt hàng</span>
                </p>
                <p>
                    <span style={{ fontSize: '12pt' }}>CSKH Xinh sẽ xác nhận với Quý khách qua điện thoại, tiến hành thực hiện đơn hàng và giao hàng.</span>
                </p>
                <p>
                    <span style={{ fontSize: '12pt' }}>Thông tin chi tiết các Số Tài Khoản Ngân Hàng của Thời Trang Xinh: </span>
                </p>
                <p>
                    <span style={{ fontSize: '12pt' }}><strong>Ngân Hàng Vietcombank (Chi nhánh Bến Chương Dương, Quận 1)</strong></span><br />
                </p>
                <p>
                    <span style={{ fontSize: '12pt' }}>STK: 0071005378474</span>
                </p>
                <p>
                    <span style={{ fontSize: '12pt' }}>Chủ tài khoản: Phạm Thị Phượng</span>
                </p>
                <p>
                    <span style={{ fontSize: '12pt' }}>---------------------------</span>
                </p>
                <p>
                    <span style={{ fontSize: '12pt' }}><strong>AGRIBANK HỒ CHÍ MINH</strong></span><br />
                </p>
                <p>
                    <span style={{ fontSize: '12pt' }}>STK:1606205599654</span>
                </p>
                <p>
                    <span style={{ fontSize: '12pt' }}>Chủ tài khoản: Phạm Huy Bằng</span>
                </p>
                <p>
                    <span style={{ fontSize: '12pt' }}>Ghi chú: Sau khi chuyển khoản, quý khách vui lòng thông báo cho chúng tôi việc chuyển tiền và số tài khoản của quý khách (bằng điện thoại, email, facebook …) để thuận tiện trong việc kiểm tra.</span>
                </p>
            </div>

        </section>

    </>)
}
export default Contact;