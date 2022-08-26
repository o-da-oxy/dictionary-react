import React from 'react';
import s from './Navigation.module.css'
import {useNavigate} from "react-router-dom";

const Navigation = (props) => {
    let navigate = useNavigate();
    let clickHandler = () => {
        if (props.text === 'Start') {
            navigate('/dictionary');
        }
        else if (props.text === 'Back') {
            navigate('/');
        }
    }

    return (
        <div className={s.nav}>
            <button className={s.navButton} onClick={clickHandler}>{props.text}</button>
        </div>
    )
}

export default Navigation;