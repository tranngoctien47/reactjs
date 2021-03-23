export default function Course({ name, image, des, status, teacher_name, teacher_img }) {
    return (
        <div className="col-md-4 course">
            <div className="wrap">
                <a className="cover" href="#">
                    <img src={image} alt="" />
                    {
                        status === 'dang-dien-ra' ? <span className="badge b2">Đang diễn ra</span>
                            : (
                                status === 'da-ket-thuc' ? <span className="badge b1">Đã kết thúc</span>
                                    : <span className="badge b3">Sắp khai giảng</span>
                            )
                    }

                    <div className="hover">
                        <div className="top">
                            <div className="user">
                                <img src="/img/icon-user-white.svg" alt="" />
                                12</div>
                            <div className="heart">
                                <img src="/img/icon-heart.svg" alt="" /> 100
                                </div>
                        </div>
                        <div className="share">
                            <img src="/img/icon-viewmore.svg" alt="" />
                        </div>
                    </div>
                </a>
                <div className="info">
                    <a className="name" href="#">
                        {name}
                    </a>
                    <p className="des">
                        {des}
                    </p>
                </div>
                <div className="bottom">
                    <div className="teacher">
                        <div className="avatar">
                            <img src={teacher_img} alt="" />
                        </div>
                        <div className="name">{teacher_name}</div>
                    </div>
                    <div className="register-btn">Đăng Ký</div>
                </div>
            </div>
        </div>
    )
}