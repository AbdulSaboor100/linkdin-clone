import React from 'react';
import { Col, Row } from 'reactstrap';
import LeftSection from '../left-section/left-section';
import styles from './main-section.module.scss';


const MainSection = () => {
    return (
        <div className={styles.main_section}>
                <LeftSection />
        </div>
    )
}

export default MainSection;
