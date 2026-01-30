import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const { scrollY } = useScroll();
    const yBg = useTransform(scrollY, [0, 500], [0, 200]); // Parallax Background
    const yText = useTransform(scrollY, [0, 500], [0, 100]); // Parallax Text

    return (
        <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-lightGray via-transparent to-transparent z-10" />
                <motion.div
                    style={{ y: yBg, backgroundImage: "url('/nature-bg.png')" }}
                    className="w-full h-full bg-cover bg-center opacity-20"
                />
            </div>

            <div className="container mx-auto px-6 z-10 flex flex-col md:flex-row items-center">
                {/* Left Content */}
                <motion.div
                    style={{ y: yText }}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="md:w-1/2"
                >
                    <div className="inline-block px-4 py-1 mb-4 border border-vinotinto/30 rounded-full text-vinotinto text-sm font-semibold tracking-wide bg-vinotinto/5 backdrop-blur-sm">
                        ABOGADA PENALISTA & CORPORATIVA
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-matteBlack mb-6 leading-tight">
                        Defensa Legal de <span className="text-vinotinto italic">Alta Precisión</span>
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed border-l-4 border-vinotinto pl-4">
                        Estrategia jurídica con visión integral. Protegemos su legado y libertad con una ética inquebrantable y resultados contundentes.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-vinotinto text-white font-medium rounded-sm shadow-xl hover:shadow-2xl hover:shadow-vinotinto/40 transition-all duration-300"
                    >
                        AGENDAR CONSULTA
                    </motion.button>
                </motion.div>

                {/* Right Image (Antigravity/Depth effect) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 mt-12 md:mt-0 relative"
                >
                    {/* Abstract blobs behind */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-vinotinto/5 rounded-full blur-3xl opacity-50" />

                    {/* Image Container with Depth */}
                    <div className="relative z-10 glass-panel p-4 rounded-2xl rotate-2 hover:rotate-0 transition-transform duration-500 ease-out">
                        <div className="bg-gray-200 rounded-xl overflow-hidden h-[600px] w-full flex items-center justify-center relative">
                            <img src="/lawyer-new.jpg" alt="Abogada" className="object-cover w-full h-full" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
