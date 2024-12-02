import React from "react";
import Header from "./componenets/Header/Header";
import Footer from "./componenets/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}

export default Layout