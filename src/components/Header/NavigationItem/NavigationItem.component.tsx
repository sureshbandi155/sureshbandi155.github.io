import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavigationItem.module.scss';

export const NavigationItem = (props: any) => (
    <li className={styles['navigationItem']}>
        <NavLink activeClassName={styles['activeItem']} exact={props.exact} to={props.link}>{props.children}</NavLink>
    </li>
);
