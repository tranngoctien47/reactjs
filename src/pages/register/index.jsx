import { useState } from "react";

export default function Register() {

    let [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        facebook: '',
        payment: 'chuyen-khoan',
        note: '',
        coin: false,
        gender: 'male',
        gender2: '',
    });

    let [error, setError] = useState({
        name: '',
        phone: '',
        email: '',
        facebook: '',
        payment: '',
        note: '',
        coin: false,
    });

    function inputChange(e) {
        let name = e.target.name
        let value = e.target.value
        let type = e.target.type


        if (type === 'checkbox') {
            value = e.target.checked
        }


        setForm({
            ...form,
            [name]: value,

        })
    }


    // function pay() {
    //     document.querySelector('.register-course .wrap .select .sub').style.display = 'block'
    //     let text2 = document.querySelector('.register-course .wrap .select .head')


    //     let text = document.querySelectorAll('.sub a')
    //     text.forEach((item) => {
    //         item.addEventListener('click', function () {
    //             let text1 = item.innerHTML
    //             text2.innerHTML = item.innerHTML
    //             document.querySelector('.register-course .wrap .select .sub').style.display = 'none'

    //         })
    //     })



    // }


    function btnResgister() {

        let errorObj = {}

        if (!form.name) {
            errorObj.name = ('ho va ten khong duoc de trong')

        }
        if (!form.phone) {
            errorObj.phone = ('phone khong duoc de trong')
        }

        if (!form.email) {
            errorObj.email = ('Email khong duoc de trong')
        } else if (!/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/i.test(form.email)) {
            errorObj.email = ('Email không hợp lệ')
        }

        if (form.facebook && !/(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?([\w\-]*)?/i.test(form.facebook)) {
            errorObj.facebook = ('facebook khong hop le')
        }

        if (!form.phone) {
            errorObj.phone = ('phone khong duoc de trong')
        }




        console.log(form)
        setError(errorObj)

        if (Object.keys(errorObj).length === 0) {
            alert('thanh cong')
        }
    }

    function _selectPay(value) {
        setForm({
            ...form,
            payment: value
        })
    }


    return (
        <main className="register-course" id="main">
            <section>
                <div className="container">
                    <div className="wrap container">
                        <div className="main-sub-title">ĐĂNG KÝ</div>
                        <h1 className="main-title">Thực chiến front-end căn bản </h1>
                        <div className="main-info">
                            <div className="date"><strong>Khai giảng:</strong> 15/11/2020</div>
                            <div className="time"><strong>Thời lượng:</strong> 18 buổi</div>
                            <div className="time"><strong>Học phí:</strong> 6.000.000 VND</div>
                        </div>
                        <div className="form">
                            <label>
                                <p>Họ và tên<span>*</span></p>
                                <input value={form.name} onChange={inputChange} type="text" name="name" placeholder="Họ và tên bạn" />
                                {error.name && <p className="error-text">{error.name}</p>}
                            </label>
                            <label>
                                <p>Số điện thoại<span>*</span></p>
                                <input value={form.phone} onChange={inputChange} name='phone' type="text" placeholder="Số điện thoại" />
                                {error.phone && <p className="error-text">{error.phone}</p>}
                            </label>
                            <label>
                                <p>Email<span>*</span></p>
                                <input value={form.email} onChange={inputChange} name='email' type="text" placeholder="Email của bạn" />
                                {error.email && <p className="error-text">{error.email}</p>}
                            </label>
                            <label>
                                <p>URL Facebook<span>*</span></p>
                                <input value={form.facebook} onChange={inputChange} name='facebook' type="text" placeholder="https://facebook.com" />
                                {error.facebook && <p className="error-text">{error.facebook}</p>}
                            </label>
                            <label className="disable">
                                <p>Sử dụng COIN</p>
                                <div className="checkcontainer">
                                    Hiện có <strong>300 COIN</strong>
                                    {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                                    {/* Cần ít nhất 200 COIN để giảm giá */}
                                    <input type="checkbox" name='coin' checked={form.coin} onClick={inputChange} />
                                    <span className="checkmark" />
                                </div>
                            </label>
                            <label className="disable">
                                <p>Giới tính</p>
                                <div className="checkcontainer">

                                    <input type="radio" name='gender' value='male' checked={form.gender === 'male'} onClick={inputChange} /> Male
                                    <span className="checkmark" />
                                </div>
                                {/* <div className="checkcontainer radio2">

                                    <input type="radio" name='gender' value='female' checked={form.gender === 'female'} onClick={inputChange} /> Female
                                    <span className="checkmark" />


                                </div> */}
                                <label className="disable radio2">
                                    <div className="checkcontainer">

                                        <input type="radio" name='gender' value='female' checked={form.gender === 'female'} onClick={inputChange} /> Female
                                    <span className="checkmark" />
                                    </div>

                                </label>
                            </label>
                            <label className="disable">
                                <p>Giới tính</p>
                                <div className="checkcontainer">

                                    <select className='gender2' name='gender2' id='' onClick={inputChange}>
                                        <option value="" selected={form.gender2 === ""}>---Gender---</option>
                                        <option value="female" selected={form.gender2 === "female"}>  Female</option>
                                        <option value="male" selected={form.gender2 === "male"}>Male</option>
                                    </select>
                                </div>

                            </label>


                            <label>
                                <p>Hình thức thanh toán</p>
                                <div className="select">
                                    <div className="head">Chuyển khoản</div>
                                    <div className="sub">
                                        <a href="#" data-value='chuyen-khoan' onClick={_selectPay.bind(null, 'chuyen-khoan')}>Chuyển khoản</a>
                                        <a href="#" data-value='tien-mat' onClick={_selectPay.bind(null, 'tien-mat')}>Thanh toán tiền mặt</a>
                                    </div>
                                </div>
                            </label>
                            <label>
                                <p>Ý kiến cá nhân</p>
                                <input type="text" placeholder="Mong muốn cá nhân và lịch bạn có thể học." />

                            </label>
                            <div className="btn main rect" onClick={btnResgister}>đăng ký</div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}