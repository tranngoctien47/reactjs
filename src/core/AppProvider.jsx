import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";



export let Context = React.createContext()
export default function AppProvider({ childens }) {
    let [auth, setAuth] = useState({
        login: false,
        user: null
    })


    function handleLogin() {
        setAuth({
            login: true,
            user: {
                name: "Đặng Thuyền Vương"
            }
        })
    }
    function logout() {
        setAuth({
            login: false,
            user: null
        })
    }




    return (
        <Context.Provider value={{ ...auth, handleLogin, logout }}>
            <BrowserRouter>
                {childens}
            </BrowserRouter>
        </Context.Provider>
    );
}