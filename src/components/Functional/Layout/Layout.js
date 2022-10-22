import React from "react";
import './style.css'

const Layout = (props) => {





    return (
        <div className={'main'}>
            <div className={'sidebar'}>
                <ul>
                    <li>Menu Item 1</li>
                    <li>Menu Item 2</li>
                    <li>Menu Item 3</li>
                    <li>Menu Item 4</li>
                    <li>Menu Item 5</li>
                </ul>
            </div>
            <div className={'page-content'}>
                {props.children}
            </div>
        </div>
    )
}

export default Layout;