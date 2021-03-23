import { Route, Switch, useRouteMatch } from "react-router"
import { NavLink } from "react-router-dom"
import Tab1 from "./Tab1"
import Tab2 from "./Tab2"
import Tab3 from "./Tab3"
import Tab4 from "./Tab4"
import Tab5 from "./Tab5"

export default function Tab() {
    let { url } = useRouteMatch();


    return (
        <div className="tab">
            <div className="tab-title">
                <NavLink exact to={url} >Thông tin tài khoản</NavLink>
                <NavLink to={`${url}/course`}>Khóa học của bạn</NavLink>
                <NavLink to={`${url}/project`}>Dự án đã làm</NavLink>
                <NavLink to={`${url}/history-Payment`}>Lịch sử thanh toán</NavLink>
                <NavLink to={`${url}/coin`}>Quản lý COIN của tôi</NavLink>
            </div>
            <div className="tab-content">
                <Switch>
                    <Route path={`${url}/course`} component={Tab2} />
                    <Route path={`${url}/project`} component={Tab3} />
                    <Route path={`${url}/history-Payment`} component={Tab4} />
                    <Route path={`${url}/coin`} component={Tab5} />
                    <Route exact path={url} component={Tab1} />
                </Switch>

            </div>
        </div>
    )
}




