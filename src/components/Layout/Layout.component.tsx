import React from 'react';
import { Header } from '../Header/Header.component';
import { Footer } from '../Footer/Footer.component';


export const Layout: React.FC = (props: any) => (
    <>
        <Header />
        <main>{props.children}</main>
        <Footer />
    </>

)