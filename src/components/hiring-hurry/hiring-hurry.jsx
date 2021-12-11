import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import styles from './hiring-hurry.module.scss';

const HiringHurry = () => {
    return (
        <div className={styles.main_hiring_div}>
            <Row>
                <Col sm={12} md={12}>
                    <div className={styles.hiring}>
                        <p><Link>Hiring in a hurry ?</Link> -Find talented prosin record time with upwork and keep business moving</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default HiringHurry;
