import React, {FC} from 'react';
import styles from './index.module.scss'

interface TitleBarProps {
    title: string,
    trafficLights: React.ReactNode,
}

const TitleBar: FC<TitleBarProps> = (props) => {
    return <div className={styles.TitleBar}>
        <div className={styles.left}>
            {props.trafficLights}
        </div>
        <div className={styles.text}>
            {props.title}
        </div>
        <div className={styles.right}>

        </div>
    </div>;
};

export default TitleBar
