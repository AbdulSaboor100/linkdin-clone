import React from 'react';
import { Col, Row } from 'reactstrap';
import styles from './bottom-navbar.module.scss';

const BottomNavbar = () => {
    return (
        <div className={styles.main_bottom_navbar}>
            <Row>
                <Col sm={12} md={12}>
                    <div className={styles.div2}>
                        <ul>   
                            <li><img src="/Assets/nav-home.svg" /><br /> <span className={styles.user_span1}>Home</span></li>
                            <li><img src="/Assets/nav-network.svg" /><br /> <span className={styles.user_span2}>Network</span></li>
                            <li><img src="/Assets/nav-jobs.svg" /> <br /><span className={styles.user_span3}>Jobs</span></li>
                            <li><img src="/Assets/nav-messaging.svg" /><br /> <span className={styles.user_span4}>Messaging</span></li>
                            <li><img src="/Assets/nav-notifications.svg" /> <br /><span className={styles.user_span5}>Notifications</span></li>
                            <li><img src="/Assets/user.svg" /><br /> <span className={styles.user_span6}>Me</span></li>
                            <li><img src="/Assets/nav-work.svg" /> <br /><span className={styles.user_span7}>Work</span></li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default BottomNavbar;
