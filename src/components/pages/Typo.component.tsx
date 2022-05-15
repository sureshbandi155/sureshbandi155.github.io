import React from 'react';
import { Header, Button } from 'semantic-ui-react';
import { Layout } from '../Layout/Layout.component';

export const Typo: React.FC = () => {
    return (
        <>
            <Layout>
                <div className="sectionPadding">
                    <div className="wrapper">
                        <Header as="h1" content="h1 - Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                        <Header as="h2" content="h2 - Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                        <Header as="h3" content="h3 - Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                        <Header as="h4" content="h4 - Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                        <Header as="h5" content="h5 - Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                        <Header as="h6" content="h6 - Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                        <div className="sectionHeading">
                            <Header as="h3" content="h3 - Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                        </div>
                        <Button primary>Contact us</Button>
                        <Button secondary>Click Here</Button>
                        <a href="">Lorem.</a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dolorem!</p>
                    </div>
                </div>

            </Layout>
        </>
    );
};