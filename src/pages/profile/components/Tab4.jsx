export default function Tab4() {
    return (
        <div className="tab4" >
            <Payment name='Khóa học CFD1-offline' date='18/10/2020' money='1.500.000 VND' />
            <Payment name='Khóa học CFD1-offline' date='18/10/2020' money='1.500.000 VND' />
            <Payment name='Khóa học CFD1-offline' date='18/10/2020' money='1.500.000 VND' />
        </div>
    )
}

function Payment({ name, date, money }) {
    return (
        <div className="item itemhistory">
            <div className="name">{name}</div>
            <div className="date">{date}</div>
            <div className="money">{money}</div>
        </div>
    )
}