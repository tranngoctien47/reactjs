import Course from "../khoahoc/components/Course"

export default function KhoaHoc() {
    return (
        <main className="homepage" id="main">
            <section className="section-1">
                <div className="container">
                    <h2 className="main-title">KHÓA HỌC CFD</h2>
                    <p className="top-des">
                        The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                        has
                        a more-or-less normal
            </p>
                    <div className="textbox">
                        <h3 className="sub-title">KHÓA HỌC</h3>
                        <h2 className="main-title">ONLINE</h2>
                    </div>
                    <div className="list row">
                        <Course name="Reactjs" des="One of the best corporate fashion brands in Syndney" image="/img/img1.png" teacher_img="/img/avt.png" teacher_name="Vương Đặng" />
                        <Course name="Web Responsive" des="One of the best corporate fashion brands in Syndney" image="/img/img.png" teacher_img="/img/avt.png" teacher_name="Vương Đặng" />
                        <Course name="Backend" des="One of the best corporate fashion brands in Syndney" image="/img/img2.png" teacher_img="/img/avt.png" teacher_name="Vương Đặng" />
                        <Course name="Nodejs" des="One of the best corporate fashion brands in Syndney" image="/img/img3.png" teacher_img="/img/avt.png" teacher_name="Vương Đặng" />
                        <Course name="PHP" des="One of the best corporate fashion brands in Syndney" image="/img/img4.png" teacher_img="/img/avt.png" teacher_name="Vương Đặng" />
                        <Course name="Java" des="One of the best corporate fashion brands in Syndney" image="/img/img6.png" teacher_img="/img/avt.png" teacher_name="Vương Đặng" />
                    </div>
                </div>
            </section>
            <section className="section-2 section-blue">
                <div className="container">
                    <div className="textbox white">
                        <h3 className="sub-title">KHÓA HỌC</h3>
                        <h2 className="main-title">OFFLINE</h2>
                    </div>
                    <div className="list row">
                        <Course name="Nodejs" des="One of the best corporate fashion brands in Syndney" image="/img/img3.png" teacher_img="/img/avt.png" teacher_name="Vương Đặng" />
                        <Course name="PHP" des="One of the best corporate fashion brands in Syndney" image="/img/img4.png" teacher_img="/img/avt.png" teacher_name="Vương Đặng" />
                        <Course name="Java" des="One of the best corporate fashion brands in Syndney" image="/img/img6.png" teacher_img="/img/avt.png" teacher_name="Vương Đặng" />
                    </div>
                    <div className="text-deco">C</div>
                </div>
            </section>
        </main>
    )
}