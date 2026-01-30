import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-lightGray flex flex-col font-sans overflow-x-hidden">
            <Header />
            <main className="flex-grow pt-20"> {/* pt-20 to account for fixed header */}
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
