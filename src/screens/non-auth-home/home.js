import React from 'react';
import styles from './home.module.scss';
import { Row , Col } from 'reactstrap';

const MainHome = () => {
    return (
        <div className={styles.main_non_auth_home}>
            <Row>
                <Col sm={12} md={12}>
                    <div className={styles.home}>
                        <div className={styles.home_div1}>
                            <img src="/Assets/login-logo.svg" alt="login-logo.svg"/>
                        </div>
                        <div className={styles.home_div2}>
                            <ul>
                                <li>Join now </li>
                                <li><span>Sign in</span></li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={6}>
                    <div className={styles.content_area}>
                        <div className={styles.content_div1}>
                            <h1>Welcome to your professional community</h1>
                        </div>
                        <div className={styles.content_div2}>
                            <ul>
                                <li><i class="fab fa-google"></i> Sign in with Google</li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <div className={styles.main_pic}>
                        <div className={styles.image}>
                            <img src="/Assets/login-hero.svg" />
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default MainHome;
