import React, {FC} from 'react';
import styles from './index.module.scss'

interface PanelProps {
    children?: React.ReactNode,
    blur?: boolean
}

interface PanelBodyProps {
    children?: React.ReactNode,
}

const Body: FC<PanelBodyProps> = (props) => {
    return <div className={styles.PanelBody}>{props.children}</div>
}


const Panel: FC<PanelProps> & { Body: typeof Body } = (props) => {
    return <div className={props.blur ? styles.PanelBlur : styles.Panel}>{props.children}</div>;
};

Panel.Body = Body;

export default Panel
