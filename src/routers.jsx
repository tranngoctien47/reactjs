import MainLayout from "./layout/MainLayout";
import CourseDetail from "./pages/coursedetail";
import Home from "./pages/home";
import KhoaHoc from "./pages/khoahoc";
import Pay from "./pages/pay";
import Profile from "./pages/profile";
import Project from "./pages/project";
import Register from "./pages/register";
import Team from "./pages/team";
import Contact from "./pages/contact";
import Email from "./pages/email";
import Page404 from "./pages/Page404";
import Coin from "./pages/coin";




const routers = [
    {
        path: '/email',
        component: Email
    },

    {
        path: '/',
        component: MainLayout,
        routers: [

            {
                path: '/team',
                component: Team
            },
            {
                path: '/contact',
                component: Contact
            },
            {
                path: '/profile',
                component: Profile
            },
            {
                path: '/khoaHoc',
                component: KhoaHoc
            },
            {
                path: '/project',
                component: Project
            },
            {
                path: '/register',
                component: Register
            },
            {
                path: '/pay',
                component: Pay
            },
            {
                path: '/coursedetail',
                component: CourseDetail
            },
            {
                path: '/coin',
                component: Coin
            },
            {
                path: '/',
                component: Home,
                exact: true

            },
            {
                component: Page404
            },

        ]
    },


]

export default routers