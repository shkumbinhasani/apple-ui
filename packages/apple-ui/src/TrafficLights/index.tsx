import {FC} from 'react';
import styles from './index.module.scss'
import TrafficLight from "../TrafficLight";

interface TrafficLightsProps {
    disable: boolean,
    onRed: () => any,
    onYellow: () => any,
    onGreen: () => any
}


const TrafficLights: FC<TrafficLightsProps> = (props) => {
    return <div className={styles.TrafficLights}>
        <TrafficLight color={'red'} onClick={props.onRed} disabled={props.disable}/>
        <TrafficLight color={'yellow'} onClick={props.onYellow} disabled={props.disable}/>
        <TrafficLight color={'green'} onClick={props.onGreen} disabled={props.disable}/>
    </div>;
};

export default TrafficLights
