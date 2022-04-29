import {FC} from 'react';
import styles from './index.module.scss'

interface ButtonProps {
    children?: string,
    mode?: 'primary' | 'secondary'
}

const Button: FC<ButtonProps> = (props) => {
    return <button
        className={[styles.Button, props.mode === 'secondary' ? styles.Secondary : ''].join(" ")}>{props.children}</button>;
};

export default Button
