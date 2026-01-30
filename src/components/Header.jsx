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
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "glass-panel bg-white/90 py-2 shadow-md" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">

                {/* Left placeholder for balance */}
                <div className="w-1/3 hidden md:block"></div>

                {/* Center Text */}
                <div className="flex flex-col items-center justify-center text-center w-full md:w-1/3">
                    <h1 className={clsx(
                        "font-serif font-bold transition-all duration-300 whitespace-nowrap",
                        isScrolled ? "text-2xl text-vinotinto" : "text-3xl text-[#C5A059]"
                    )}>
                        Abg. Elizabeth Paez
                    </h1>
                    <span className={clsx(
                        "text-[10px] tracking-[0.2em] uppercase transition-all duration-300",
                        isScrolled ? "text-gray-600" : "text-[#C5A059]/90"
                    )}>
                        Asesor Nacional Especialista
                    </span>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex space-x-8 w-1/3 justify-end items-center">
                    {['Inicio', 'Servicios', 'Filosofía', 'Contacto'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className={clsx(
                                "font-medium transition-colors relative group text-sm",
                                isScrolled ? "text-matteBlack hover:text-vinotinto" : "text-white/90 hover:text-[#C5A059]"
                            )}
                        >
                            {item}
                            <span className={clsx(
                                "absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                                isScrolled ? "bg-vinotinto" : "bg-[#C5A059]"
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
