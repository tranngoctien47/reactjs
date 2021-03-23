import { useContext } from "react";
import { Redirect } from "react-router";
import { Context } from "../../core/AppProvider";



import Infor from "./components/Infor";
import Tab from "./components/Tab";

export default function Profile() {
    let { login } = useContext(Context)
    if (!login) return <Redirect path='/' />
    return (
        <main className="profile" id="main">
            <section>
                <Infor />
                <div className="container">
                    <Tab />
                </div>
            </section>
        </main>
    )
}