export default function Tab2() {
    return (
        <div className="tab2">

            <Course name='Front-End Căn Bản' image='/img/img3.png' date='Khai giảng ngày 09/09/2019' time="54 giờ" video='35 video' student='20 học viên' width='50%' nameWidth="50%" status='Tiếp Tục Học' />
            <Course name='Front-End Nâng cao' image='/img/img7.png' date='Khai giảng ngày 09/09/2019' time="54 giờ" video='35 video' student='20 học viên' width='30%' nameWidth="30%" status='Tiếp Tục Học' />

        </div>
    )
}


function Course({ name, date, time, video, student, nameWidth, status, image, width }) {
    return (
        <div className="item">
            <div className="cover">
                <img src={image} alt="" />
            </div>
            <div className="info">
                <a href="#" className="name">
                    {name}
                </a>
                <div className="date">{date}</div>
                <div className="row">
                    <div className>
                        <img src="img/clock.svg" alt="" className="icon" />{time}
                    </div>
                    <div className>
                        <img src="img/play.svg" alt="" className="icon" />{video}
                    </div>
                    <div className>
                        <img src="img/user.svg" alt="" className="icon" />{student}
                    </div>
                </div>
                <div className="process">
                    <div className="line">
                        <div className="rate" style={{ width: width }} />
                    </div>
                    {nameWidth}
                </div>
                <div className="btn overlay round btn-continue">
                    {status}
                </div>
            </div>
        </div>
    )
}