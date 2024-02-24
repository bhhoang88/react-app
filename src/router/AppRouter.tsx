// src/AppRouter.tsx
import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
} from "react-router-dom";
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import Home from '../pages/home/Home';
import NewsDetail from '../pages/news/NewsDetail/NewsDetail';
import News from '../pages/news/NewsList/News';
import ProductDetail from '../pages/product/ProductDetail/ProductDetail';
import ProductList from '../pages/product/ProductList/ProductList';
import Header from './../components/nav/Header';
import Footer from './../components/footer/Footer';
import Banner from '../components/banner/Banner';
import SocialNetworkFixed from '../components/nav/SocialNetworkFixed';


const Layout = () => {
    return (
        <>
            <Header />
            <Banner />
            <Outlet />
            <Footer />
            <SocialNetworkFixed />
        </>
    );
};
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/collections",
                element: <ProductList />,
            },
            {
                path: "/collections/:id",
                element: <ProductDetail />,
            },
            {
                path: "/news",
                element: <News />,
            },
            {
                path: "/news/:id",
                element: <NewsDetail />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
        ],
    },
]);

const AppRouter: React.FC = () => {
    return (
        <RouterProvider router={router} />
    );
};

export default AppRouter;
