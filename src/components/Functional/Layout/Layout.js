import React from "react";
import './style.css'
import Sidebar from "../Sidebar/Sidebar";

const Layout = (props) => {
    const {menuItems} = props;

    return (
        <div className={'main'}>
            <div className={'sidebar'}>
                <Sidebar items={menuItems}/>
            </div>


            <div className={'page-content'}>
                {props.children}
            </div>

        </div>
    )
}

export default Layout;