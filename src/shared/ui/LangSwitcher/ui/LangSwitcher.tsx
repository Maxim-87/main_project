import {classNames} from "shared/lib/classNames/classNames";
import styles from './LangSwitcher.module.scss';
import {useTranslation} from "react-i18next";
import React from "react";
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface LangSwitcherProps {
    className?: string,
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const {t, i18n} = useTranslation();

    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }
    return (
        <Button
            className={classNames(styles.langSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={changeLanguage}>
            {t('Язык')}
        </Button>
    );
};

