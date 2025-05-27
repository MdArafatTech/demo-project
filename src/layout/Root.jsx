import React from 'react';
import { Outlet, RouterProvider } from 'react-router';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet>

            </Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;