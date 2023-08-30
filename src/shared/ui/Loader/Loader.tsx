import styles from './Loader.module.scss';

interface LoaderProps {
    className?: string,
}

export const Loader = ({className}: LoaderProps) => {
    return (
        <span className={styles.loader}></span>
    );
};

