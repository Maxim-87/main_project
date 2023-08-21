import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from './NavBar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

interface NavBarProps {
    className?: string,
}

export const NavBar = ({className}: NavBarProps) => {
    return (
        <div className={classNames(styles.navbar)}>
            <div className={styles.links}>
                <AppLink className={styles.mainLink} to={'/'} theme={AppLinkTheme.SECONDARY}>Main page</AppLink>
                <AppLink to={"/about"} theme={AppLinkTheme.SECONDARY}> About page </AppLink>
            </div>
        </div>
    );
};

