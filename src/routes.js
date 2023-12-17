// import
import Re_sonuocact, { Component }  from 'react';
import Dashboard from "views/Dashboard/Dashboard.js";
import LoaiPhong from "views/Dashboard/LoaiPhong.js";
import Phong from "views/Dashboard/Phong.js";
import SoDien from "views/Dashboard/SoDien.js";
import TienIch from "views/Dashboard/TienIch";
import Profile from "views/Dashboard/Profile.js";
import SignIn from "views/Pages/SignIn.js";
import SignUp from "views/Pages/SignUp.js";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color='inherit' />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/phong",
    name: "Phòng",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color='inherit' />,
    component: Phong,
    layout: "/admin",
  },
  {
    path: "/loaiphong",
    name: "Loai Phong",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color='inherit' />,
    component: LoaiPhong,
    layout: "/admin",
  },
  {
    path: "/sodien_sonuoc",
    name: "Số điện số nước",
    rtlName: "لوحة القيادة",
    icon: <CreditIcon color='inherit' />,
    component: SoDien,
    layout: "/admin",
  },
  {
    path: "/tienich",
    name: "Tiện ích",
    rtlName: "لوحة القيادة",
    icon: <CreditIcon color='inherit' />,
    component: TienIch,
    layout: "/admin",
  },
  {
    path: "/phieu_thue_tien",
    name: "Tiện ích",
    rtlName: "لوحة القيادة",
    icon: <CreditIcon color='inherit' />,
    component: TienIch,
    layout: "/admin",
  },
  {
    name: "ACCOUNT PAGES",
    category: "account",
    rtlName: "صفحات",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
        rtlName: "لوحة القيادة",
        icon: <PersonIcon color='inherit' />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
      },
      {
        path: "/signin",
        name: "Sign In",
        rtlName: "لوحة القيادة",
        icon: <DocumentIcon color='inherit' />,
        component: SignIn,
        layout: "/auth",
      },
      {
        path: "/signup",
        name: "Sign Up",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color='inherit' />,
        component: SignUp,
        layout: "/auth",
      },
    ],
  },
];
export default dashRoutes;
