import React from 'react';
import { Col, Row } from 'reactstrap';
import styles from './left-section.module.scss';

const LeftSection = () => {
    return (
        <div className={styles.left_section}>
            <Row>
                <Col sm={12} md={3}>
                    <div className={styles.section_one}>
                        <div className={styles.sec_one_div1}>
                            <div className={styles.div1}>

                            </div>
                            <div className={styles.div2}>
                                <img src="/Assets/photo.svg" />
                            </div>
                            <div className={styles.div3}>
                                <div style={{textAlign:'center'}}>
                                    <p>Welcome, Abdul Saboor!</p>
                                </div>
                                <div style={{textAlign:'center'}}>
                                    <button>Add a photo</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.sec_one_div2}>
                            <div className={styles.div1}><p>Connections</p></div>
                            <div className={styles.div2}>
                            <div className={styles.innerDiv1}>
                                <p>Grow your network</p>
                            </div>
                            <div className={styles.innerDiv2}>
                                <img src="/Assets/widget-icon.svg" />
                            </div>
                            </div>
                        </div>
                        <div className={styles.sec_one_div3}>
                            <div className={styles.div1}>
                                <p><img src="/Assets/item-icon.svg" />My Items</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.section_two}>
                        <div className={styles.sec_two_div1}>
                            <p>Groups</p>
                        </div>
                        <div className={styles.sec_two_div2}>
                            <div>
                                <p>Events</p>
                            </div>
                            <div>
                                <img src="/Assets/plus-icon.svg" />
                            </div>
                        </div>
                        <div className={styles.sec_two_div3}>
                            <p>Follows Hashtages</p>
                        </div>
                        <div className={styles.sec_two_div4}>
                            <p>Discover more</p>
                        </div>
                    </div>
                </Col>
                {/* <Col sm={12} md={6}>
                    <div className={styles.main_middle_section}>
                    </div>
                </Col>  */}
            </Row>
        </div>
    )
}

export default LeftSection;
