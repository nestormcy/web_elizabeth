import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu } from 'lucide-react';
import clsx from 'clsx';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 relative overflow-hidden",
                isScrolled ? "glass-panel bg-white/90 py-2 shadow-md" : "bg-gradient-to-r from-darkWood to-burgundy py-6"
            )}
        >
            {/* Wood Texture Overlay */}
            {!isScrolled && (
                <div className="absolute inset-0 bg-wood-pattern opacity-30 pointer-events-none"></div>
            )}
            <div className="container mx-auto px-6 flex items-center justify-between">

                {/* Left placeholder for balance */}
                <div className="w-1/3 hidden md:block"></div>

                {/* Center Text */}
                <div className="flex flex-col items-center justify-center text-center w-full md:w-1/3 relative z-10">
                    <h1 className={clsx(
                        "font-serif font-bold transition-all duration-300 whitespace-nowrap",
                        isScrolled ? "text-2xl text-burgundy" : "text-3xl text-gold"
                    )}>
                        Abg. Elizabeth Paez
                    </h1>
                    <span className={clsx(
                        "text-[10px] tracking-[0.2em] uppercase transition-all duration-300",
                        isScrolled ? "text-gray-600" : "text-gold/90"
                    )}>
                        Asesora Nacional Especialista
                    </span>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex space-x-8 w-1/3 justify-end items-center relative z-10">
                    {['Inicio', 'Servicios', 'Filosofía', 'Contacto'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className={clsx(
                                "font-medium transition-colors relative group text-sm",
                                isScrolled ? "text-matteBlack hover:text-burgundy" : "text-white/90 hover:text-gold"
                            )}
                        >
                            {item}
                            <span className={clsx(
                                "absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                                isScrolled ? "bg-burgundy" : "bg-gold"
                            )} />
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-matteBlack absolute right-6">
                    <Menu className={isScrolled ? "text-matteBlack" : "text-white"} />
                </button>
            </div>
        </motion.header>
    );
};

export default Header;
