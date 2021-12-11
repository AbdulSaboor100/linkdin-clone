import React from 'react'
import styles from './navbar.module.scss';
import { Row , Col } from 'reactstrap';

const MainNavbar = () => {
    return (
        <div className={styles.main_navbar}>
            <Row>
                <Col sm={12} md={6}>
                        <div className={styles.div1}>
                            <div>
                                <img src="/Assets/linkedin.png" alt="linkedin.png" />
                            </div>
                            <div>
                                <input type="text" placeholder="search" />
                            </div>
                        </div>
                </Col>
                <Col sm={12} md={6}>
                        <div className={styles.div2}>
                            <ul>
                             
                                <li><img src="/Assets/nav-home.svg" /> <span className={styles.user_span1}>Home</span></li>
                                <li><img src="/Assets/nav-network.svg" /> <span className={styles.user_span2}>Network</span></li>
                                <li><img src="/Assets/nav-jobs.svg" /> <span className={styles.user_span3}>Jobs</span></li>
                                <li><img src="/Assets/nav-messaging.svg" /> <span className={styles.user_span4}>Messaging</span></li>
                                <li><img src="/Assets/nav-notifications.svg" /> <span className={styles.user_span5}>Notifications</span></li>
                                <li><img src="/Assets/user.svg" /> <span className={styles.user_span6}>Me</span></li>
                                <li><img src="/Assets/nav-work.svg" /> <span className={styles.user_span7}>Work</span></li>
                            </ul>
                        </div>
                </Col>
            </Row>
        </div>

        
    )
}

export default MainNavbar;
