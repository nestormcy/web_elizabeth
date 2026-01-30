import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-matteBlack text-white py-12">
            <div className="container mx-auto px-6 text-center">
                <p>&copy; {new Date().getFullYear()} Antigravity Law. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
