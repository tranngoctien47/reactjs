export default function Course({ name, image, des, teacher_name, teacher_img, slug }) {
    return (
        <div className="col-md-4 course">
            <div className="wrap">
                <a className="cover" href="#">
                    <img src={image} alt="" />
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