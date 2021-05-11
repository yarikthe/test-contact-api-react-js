import React from 'react';
import f from './footer.module.css';

const Footer = (props) => {
    return (
        <footer className={f.footer}>
            <p className={f.text}>
                {props.name} © 2021. Lukyanchuk
            </p>
        </footer>
    );
}

export default Footer;