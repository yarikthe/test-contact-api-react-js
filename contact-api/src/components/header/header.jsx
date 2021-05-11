import React from 'react';
import h from "./header.module.css";
import {Button} from "antd";

const Header = (props) => {
    return (
        <header className={h.header}>
            <h1>Test task on React.js - Contact API</h1>
        </header>
    );
}

export default Header;