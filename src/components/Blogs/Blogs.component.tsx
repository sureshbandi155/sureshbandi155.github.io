import React from 'react';
// import './Blogs.module.scss';
import styles from './Blogs.module.scss';
import { Grid, Image, Label, Header } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export const Blogs: React.FC = () => {
    return (
        <div className="sectionPadding">
            <div className="wrapper">
                <div className="sectionHeading alignCenter">
                    <Header as="h6" content="Recent blog posts" className="noMargin" />
                    <Header as="h2" content="Learn more and get inspired." />
                </div>
                <Grid>
                    <Grid.Row>
                        <Grid.Column computer={8} tablet={8} mobile={16}>
                            <NavLink exact to="/singleBlog" className={styles['blogItems']}>
                                <div className={styles['imgSec']}>
                                    <Image src="https://images.prismic.io/byont-website/109c66b1-ca61-44a9-afda-8cff7603954b_04.png?auto=compress,format&rect=0,0,1280,720&w=1200&h=675" />
                                </div>
                                <div className={styles['rightblog']}>
                                    <Label className='tinyMarginBottom'>BlockChain</Label>
                                    <h4>
                                        A primer on blockchain and its value beyond cryptocurrencies
                                    </h4>
                                    <p>April 4, 2022</p>
                                </div>
                            </NavLink>
                        </Grid.Column>
                        <Grid.Column computer={8} tablet={8} mobile={16}>
                            <NavLink
                                exact
                                to="/singleBlog"
                                className={[styles['dFlex'], styles['blogItems'], 'mediumPaddingBottom'].join(' ')}
                            >
                                <img
                                    alt=""
                                    src="https://images.prismic.io/byont-website/b2f453ac-4ade-443a-9176-6ef444bf9bf6_03.png"
                                />
                                <div className={styles['blogcontent']}>
                                    <Label className='tinyMarginBottom'>Blockchain </Label>
                                    <h4>
                                        The adoption of blockchain technology by leading figures,
                                        businesses, and governments
                                    </h4>
                                    <p>April 4, 2022</p>
                                </div>
                            </NavLink>
                            <NavLink
                                exact
                                to="/singleBlog"
                                className={[styles['dFlex'], styles['blogItems'], 'mediumPaddingBottom'].join(' ')}
                            >
                                <img
                                    alt="Centralized exchanges versus decentralized exchanges"
                                    src="https://images.prismic.io/byont-website/4f7c4c3b-db95-42ef-b92d-6af1d02bcc18_01.png"
                                />
                                <div className={styles['blogcontent']}>
                                    <Label className='tinyMarginBottom'>Blockchain</Label>
                                    <h4>
                                        Centralization in a decentralized ecosystem: DEX vs CEX
                                    </h4>
                                    <p>April 4, 2022</p>
                                </div>
                            </NavLink>
                            <NavLink
                                exact
                                to="/singleBlog"
                                className={[styles['dFlex'], styles['blogItems'], 'mediumPaddingBottom'].join(' ')}
                            >
                                <img
                                    alt=""
                                    src="https://images.prismic.io/byont-website/928c7934-8f1d-4d3f-9d59-fcdecd6d6bbb_02.png?auto=compress,format&amp;rect=0,0,1280,720&amp;w=512&amp;h=288"
                                />
                                <div className={styles['blogcontent']}>
                                    <Label className='tinyMarginBottom'>DAOs</Label>
                                    <h4>
                                        What is a Decentralized Autonomous Organization (DAO)?
                                    </h4>
                                    <p>April 4, 2022</p>
                                </div>
                            </NavLink>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </div>
    );
};
