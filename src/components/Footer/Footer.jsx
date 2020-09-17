import React from 'react';

import classes from './Footer.module.css';

const Footer = () => {
    return (
        <footer>
            <div>
                <div className={classes.copyright}>
                    Copyright &#169; 2020, Serge Najimov
                </div>
            </div>
            <div className={classes.right}>
                <div className={classes.item}>
                    <p>najimovserge@gmail.com</p>
                </div>
                <div className={classes.item}>
                    <p>+36 30 676 98 76</p>
                </div>
                <div className={classes.item}>
                    <a href="#linkedIn">in</a>
                </div>
                <div className={classes.itemLast}>
                    <a href='#github'>git</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;