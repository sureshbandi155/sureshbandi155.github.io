import React from 'react';
import { Layout } from '../../Layout/Layout.component';
import { Banner } from 'src/components/Banner/Banner.component';
import { Roadmap } from 'src/components/Roadmap/Roadmap.component';
// import { Blogs } from 'src/components/Blogs/Blogs.component';

export const Home: React.FC = () => {
    return (
        <>
            <Layout>
                <Banner />
                <Roadmap />
                {/* <Blogs /> */}
            </Layout>
        </>
    );
};