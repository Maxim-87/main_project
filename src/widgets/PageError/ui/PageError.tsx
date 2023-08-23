import {classNames} from "shared/lib/classNames/classNames";
import styles from './PageError.module.scss';
import {Button} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

interface PageErrorProps {
    className?: string,
}

export const PageError = ({className}: PageErrorProps) => {
    const {t} = useTranslation();
    
    const reloadPage = () => {
        location.reload();
    }
    
    return (
        <div className={classNames(styles.pageError)}>
            <p>{t("Произошла непредвиденная ошибка")}</p>
            <Button
                onClick={reloadPage}>
                {t("Перезагрузить страницу")}
            </Button>
        </div>
    );
};

