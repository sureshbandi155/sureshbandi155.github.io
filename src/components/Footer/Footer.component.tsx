import React from 'react';

import { Grid, Header, Icon, List } from 'semantic-ui-react';

import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
    return (
        <div
            className={[
                styles['footerSec'],
                'sectionPadding allTextWhite',
            ].join(' ')}
        >
            <div className="wrapper">
                <Grid>
                    <Grid.Row>
                        <Grid.Column computer={8} tablet={8} mobile={16}>
                            <div className={'logoText'}>
                                <p>Socialize</p>
                                <div className={styles["logoTextSec"]}>
                                    <p>
                                        Learn, Play & Earn
                                    </p>
                                </div>
                            </div>

                        </Grid.Column>
                        <Grid.Column computer={8} tablet={8} mobile={16} className={[styles['links'], styles['rightAlign']].join(' ')}>
                            <div>
                                <Header as='h3' content='Contact Us' />
                                <List className={styles['navLinks']}>
                                    <List.Item><a href='mailto: support@socialize.com'>support@socialize.com</a></List.Item>
                                </List>
                                <div className={styles['socialShare']}>
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/Socialize-Metaverse-104740608884163/" target='_blank' rel="noreferrer">
                                                <Icon name="facebook f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/socialize_metaverse/" target='_blank' rel="noreferrer">
                                                <Icon name="instagram" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/Sociali63476552" target='_blank' rel="noreferrer">
                                                <Icon name="twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/socialize-metaverse-456bb9237/" target='_blank' rel="noreferrer">
                                                <Icon name="linkedin" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </div >
    );
};