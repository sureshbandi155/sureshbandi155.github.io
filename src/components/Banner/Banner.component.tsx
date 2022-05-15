import React, { useEffect } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import Typewriter from 'typewriter-effect/dist/core';
import './Banner.scss';

// import SocialResp from 'src/assets/images/social-responsibility.svg';
import SocialResp1 from 'src/assets/images/social-network.svg';
import Blockchain from 'src/assets/images/Blockchain.svg';
import Exchange from 'src/assets/images/Exchange.svg';
import Megaverse from 'src/assets/images/metaverse.svg';
import Games from 'src/assets/images/games.svg';
import Art from 'src/assets/images/art.svg';
import Wallet from 'src/assets/images/wallet.svg';
import Soltions from 'src/assets/images/bitcoin-technology.svg';
import Swap from 'src/assets/images/mining-bitcoin.svg';

export const Banner: React.FC = () => {

    useEffect(() => {
        const typeWritterEle = document.getElementById('typeWriter');
        if (typeWritterEle) {
            var typewriter = new Typewriter(typeWritterEle, {
                loop: true,
                delay: 75,
            });

            typewriter
                .pauseFor(500)
                .typeString('Publishing NFTs')
                .pauseFor(300)
                .deleteChars(15)
                .typeString('A Crypto SWAP Platform')
                .pauseFor(300)
                .deleteChars(22)
                .typeString('Socialize Metaverse')
                .pauseFor(300)
                .deleteChars(19)
                .typeString('Socialize Solutions')
                .pauseFor(300)
                .deleteChars(19)
                .typeString('Socialize Exchange, Wallet')
                .pauseFor(300)
                .deleteChars(26)
                .typeString('Socialize Blockchain, Games, Music')
                .pauseFor(300)
                .deleteChars(34)
                .pauseFor(1000)
                .start();
        }
    }, []);

    return (
        <div className='bannerSection sectionPadding'>
            <div className="wrapper">
                <Grid>
                    <Grid.Row className='verticalAlign'>
                        <Grid.Column computer={8} tablet={8} mobile={16} className={'leftCol'}>
                            <div >
                                <Header as="h1" content='Unlocking the full potential of blockchain by' />
                                <div id='typeWriter' className={'typewritter'}>
                                </div>

                            </div>
                        </Grid.Column>
                        <Grid.Column computer={8} tablet={8} mobile={16} className={'rightCol'}>
                            <div className={"orbit"}>
                                <div className={"center-image"}>
                                    {/* <img src={SocialResp} alt="" />  */}
                                    <img src={SocialResp1} alt="" />
                                </div>
                                <ul>
                                    <li>
                                        <div><img src={Art} alt="" className='imgWidth' /></div>
                                        <p>Publishing NFTs</p>
                                    </li>
                                    <li>
                                        <div><img src={Swap} alt="" className='imgWidth' /></div>
                                        <p>Crypto SWAP</p>
                                    </li>
                                    <li>
                                        <div><img src={Megaverse} alt="" className='imgWidth' /></div>
                                        <p>Metaverse</p>
                                    </li>
                                    <li>
                                        <div><img src={Soltions} alt="" className='imgWidth' /></div>
                                        <p>Solutions</p>
                                    </li>
                                    <li>
                                        <div><img src={Exchange} alt="" /></div>
                                        <p>Exchange</p>
                                    </li>
                                    <li>
                                        <div><img src={Wallet} alt="" /></div>
                                        <p>Wallet</p>
                                    </li>
                                    <li>
                                        <div><img src={Blockchain} alt="" /></div>
                                        <p>Blockchain</p>
                                    </li>
                                    <li>
                                        <div><img src={Games} alt="" className='mobileImg' /></div>
                                        <p>Games, Music</p>
                                    </li>
                                </ul>
                            </div>
                            {/* <div className={styles['rightCol']}>
                                <video autoPlay loop>
                                    <source src={video} type='video/mp4' />
                                </video>
                            </div> */}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </div>
    );
}