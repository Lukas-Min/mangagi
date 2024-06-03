import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <section className="absolute top-0 left-0 w-full h-full flex justify-center items-center px-10">
            <div className="mx-auto max-w-screen-sm text-center">
                <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-blush">404</h1>
                <p className="mb-4 text-3xl tracking-tight font-bold text-amaranth md:text-4xl">Something&apos;s missing.</p>
                <p className="mb-4 text-lg font-light">Sorry, we can&apos;t find {window.location.pathname}. You&apos;ll find lots to explore on the home page.</p>
                <Link to={'/'}><div className="inline-flex bg-amaranth hover:bg-primary-800 focus:ring-1 focus:outline-none hover:ring-rose hover:ring-1 focus:ring-rose font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4">Back to Homepage</div></Link>
            </div>
        </section>
    );
};

export default Error404;
