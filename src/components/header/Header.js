import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <div className={s.header}>
            <h1 className={s.name}>The Dictionary</h1>
            <h4 className={s.info}>Knows everything</h4>
        </div>
    )
}

export default Header;