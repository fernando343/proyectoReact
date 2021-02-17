import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const Layout = ({children}) => (
    <div>
        <Header />
        <div className="mt-6 container">
            {children}
        </div>
        <Footer />
    </div>
);


export default Layout;