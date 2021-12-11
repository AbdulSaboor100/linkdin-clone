import React from 'react';
import { Col, Row } from 'reactstrap';
import BottomNavbar from '../../components/bottom-navbar/bottom-navbar';
import HiringHurry from '../../components/hiring-hurry/hiring-hurry';
import MainSection from '../../components/main-section/main-section';
import MainNavbar from '../../components/navbar/navbar';
import styles from './auth-home.module.scss';

const AuthHome = () => {
    return (
        <div className={styles.main_auth_home}>
            <MainNavbar />
            <BottomNavbar />
            <HiringHurry />
            <MainSection />
        </div>
    )
}

export default AuthHome;



{/* <li><span className={styles.user_span1}>Home</span> <br /><img src="/Assets/nav-home.svg" /> </li>
<li> <span className={styles.user_span2}>Network</span><br /> <img src="/Assets/nav-network.svg" /></li>
<li><span className={styles.user_span3}>Jobs</span><br /> <img src="/Assets/nav-jobs.svg" /></li>
<li><span className={styles.user_span4}>Messaging</span><br /><img src="/Assets/nav-messaging.svg" /></li>
<li><span className={styles.user_span5}>Notifications</span><br /><img src="/Assets/nav-notifications.svg" /></li>
<li><span className={styles.user_span6}>Me</span><br /><img src="/Assets/user.svg" /></li>
<li><span className={styles.user_span7}>Work</span><br /><img src="/Assets/nav-work.svg" /></li> */}
