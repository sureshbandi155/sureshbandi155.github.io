import React from 'react';
import styles from './Blogs.module.scss';
import { Grid, Label } from 'semantic-ui-react';
import { Layout } from '../Layout/Layout.component';

export const BlogDetail: React.FC = () => {
    return (
        <Layout>
            <div className="sectionPadding">
                <div className="wrapper">
                    <Grid>
                        <Grid.Column mobile={16} tablet={8}>
                            <div className={styles['singleBlog']}>
                                <p><time>October 4, 2021</time>
                                    <Label className='tinyMarginLeft'>Blockchain</Label></p><h1>A primer on blockchain and its value beyond cryptocurrencies</h1>
                                <p>Nowadays, it appears as if everyone is buying cryptocurrencies and Non-Fungible Tokens (NFTs). Big tech and even governments have joined too, but a blockchain is more than trading tokens on an exchange.</p>
                                <img alt="detail1" src="https://images.prismic.io/byont-website/109c66b1-ca61-44a9-afda-8cff7603954b_04.png?auto=compress,format&amp;rect=0,0,1280,720&amp;w=512&amp;h=288" />
                                <div>
                                    <p>After private investors started noticing cryptocurrencies after the initial boom of Bitcoin in 2013, many new cryptos appeared as altcoins (<strong>alt</strong>ernative&nbsp;<strong>coin</strong>s), attracting more private investors. A few years later, institutional traders joined the market too, and now even governments are buying these digital assets.</p>
                                    <p>Adoption by governments began with El Salvador accepting Bitcoin as a legal tender last year, which compelled many other countries to seriously consider making similar moves, including Paraguay, Brazil, Mexico, Panama, and more. But why is everyone trying to pick the fruits of this new technology? And what can you do with it?</p>
                                    <p>By the way, we have written an entire article on the adoption of blockchain technology.</p>
                                    <h2>What is a blockchain?</h2>
                                    <p>At its core, blockchain technology is about shared, immutable ledgers that help record transactions and track tangible and intangible assets like houses, cars, cash, land, copyright, intellectual property, and patents.</p>
                                    <p>In simple terms, you can use a blockchain to securely store and share data without a single party being able to tamper with it. Instead, multiple parties have to agree (<em>come to a consensus</em>) on a piece of data before it becomes valid, which is where the term decentralized originated. How the&nbsp;<em>consensus protocol</em>&nbsp;is implemented depends on the type of blockchain.</p>
                                    <p>We call this technology Distributed Ledger Technology or DLT in short. DLT enables the recording of many transactions on a distributed ledger without the power to alter the records. This tampering prohibition, also known as immutability, means one can not edit a transaction even if there was a mistake. Transactions can only be reverted when adding another transaction. These properties are beneficial for digital cash, which is why it is not a surprise that Bitcoin was the first to implement it.</p>
                                    <p>Another popular feature of blockchain technology that arose a few years ago is smart contracts. They are simple programs that run on the blockchain and are executed when predetermined conditions have been met. These self-executing automated contracts help speed up the process and remove the cost and time associated with a supervising intermediary.</p>
                                    <h2>Popular use-cases</h2>
                                    <p>Powered by these smart contracts, the most popular use case of blockchain technology is decentralized finance (Defi), which is an umbrella term for financial applications leveraging cryptocurrencies. Defi includes applications for lending and borrowing, community investments, crypto savings, stable coins, and much more. These projects usually live on the Ethereum, Polygon, or Binance blockchain, but many more chains exist.</p>
                                    <p>To give an idea of the size of Defi: at the end of the previous year, the total value locked in public Defi projects was USD 250 billion, compared to only USD 1 billion one and a half years prior in May 2020. The total crypto market numbers are even more impressive, reaching nearly&nbsp;<a target="_blank" rel="noopener noreferrer" href="https://coinmarketcap.com/">16,000</a>&nbsp;unique cryptocurrencies and a total market capitalization of around USD 2 trillion, about two-thirds of Apple. The number of exchanges that facilitate trade in these coins has already surpassed&nbsp;<a target="_blank" rel="noopener noreferrer" href="https://coinmarketcap.com/">440</a>.</p>
                                    <img alt="Top 25 most funded industries in blockchain / crypto according to BlockData." src="https://images.prismic.io/byont-website/dd9d0e03-d005-436e-ab78-7c240e1ebc84_top-25-most-funded-industries-in-blockchain-crypto.webp?auto=compress,format&amp;rect=1,0,1919,1279&amp;w=1200&amp;h=800" />
                                    <p>In a future article, we will go more in-depth about other interesting use-cases, like Non-Fungible Tokens (NFTs) and more.</p>
                                    <h2>Public versus Private blockchains</h2>
                                    <p>Like Bitcoin’s network, the public blockchains mentioned before are open for anyone to join and participate in the consensus protocol, provided they meet the essential qualification standards such as having considerable computational power. All data on these blockchains are public, making them a good fit for upcoming Decentralized Autonomous Organizations or DAOs in short (read our article on what they are). However, being public also makes them a big red target for hackers and enthusiasts looking for privacy and security vulnerabilities.</p>
                                    <p>Private blockchains, on the other hand, while staying decentralized and peer-to-peer, remain under the controlling governance of one organization. It is upon the organization to decide who will participate in the network, execute the consensus protocol and maintain the shared ledger. These private blockchains are often used to secure information within a single large organization.</p>
                                    <p>Lastly, The consortium blockchain expands the idea of controlled governance from one business to many. In this network setup, instead of a single or many parties, multiple pre-selected organizations have the authority to provide access to the blockchain. A consortium blockchain network proves beneficial when a small number of organizations have to agree on a piece of data. For example, when multiple companies work together with checking the health and safety information of food.</p>
                                    <h2>In conclusion</h2>
                                    <p>Why does all this matter? Blockchain technology is more than trading Shiba tokens on an exchange. For example, blockchain technology is already being used in businesses to trace every part of a supply chain, make asset transactions faster, prevent disruptions without spending on intermediate checkpoints, improve and ensure the authenticity of received information, and much more.</p>
                                    <p>Although it sometimes feels like the massive growth in crypto prices attracted some fundamentally weak projects and scams, most projects bring a level of innovation not seen in other areas. At Byont, we help businesses and startups globally successfully enter and navigate this blockchain ecosystem.</p>
                                    <p>Whether you have a killer idea or just exploring the possibilities of blockchain technology, we provide end-to-end assistance from concept to smart-contract development. We have successfully assisted startups and businesses with token launches, NFT publications, and smart-contract development across multiple chains.</p>
                                </div>
                            </div>
                        </Grid.Column>
                    </Grid>
                </div>
            </div>
        </Layout>
    )
};