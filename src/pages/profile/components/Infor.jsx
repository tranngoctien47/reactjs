import { useContext } from "react"
import { Context } from "../../../core/AppProvider";



export default function Infor() {
    let { user } = useContext(Context);
    return (
        <div className="top-info">
            <div className="avatar">
                {/* <span class="text">H</span> */}
                <img src="img/avatar-lg.png" alt="" />
                <div className="camera" />
            </div>
            <div className="name">{user.name}</div>
            <p className="des">Thành viên của team CFD1-OFFLINE</p>
        </div>
    )
}