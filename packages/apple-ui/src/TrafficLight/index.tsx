import React, {FC} from 'react';
import styles from './index.module.scss'


interface TrafficLightProps {
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined,
    color?: 'red' | 'yellow' | 'green',
    disabled?: boolean
}

const TrafficLight: FC<TrafficLightProps> = (props) => {
    const colorStyles = {
        'red': styles.Red,
        'yellow': styles.Yellow,
        'green': styles.Green,
        'default': ''
    }

    return <button className={[styles.TrafficLight, colorStyles[props.color ?? 'default']].join(" ")}
                   disabled={props.disabled}
                   onClick={props.onClick}></button>;
};

export default TrafficLight
