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
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-matteBlack mb-4 leading-tight">
                        Dra. Elizabeth Páez: <span className="text-burgundy italic">17 Años de Resultados</span> y Seguridad Jurídica
                    </h1>
                    <div className="mb-6 space-y-2">
                        <p className="text-base md:text-lg text-gray-700 font-medium">
                            <span className="text-burgundy font-bold">Asesora Nacional</span> | Egresada de la Universidad Bicentenaria de Aragua (UBA)
                        </p>
                        <p className="text-sm md:text-base text-gray-600 border-l-4 border-gold pl-4">
                            Especialista en Gestión Mercantil y Regularización Agraria
                        </p>
                    </div>
                    <p className="text-base md:text-lg text-gray-600 mb-8 max-w-lg leading-relaxed italic">
                        "Elegancia que genera confianza. No es una web de servicios, es una credencial de prestigio."
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
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-burgundy/10 rounded-full blur-3xl opacity-50" />

                    {/* Image Container with Depth */}
                    <div className="relative z-10 p-2 rounded-2xl hover:scale-105 transition-transform duration-500 ease-out">
                        <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-gold/30">
                            <img
                                src="/hero-main.jpg"
                                alt="Dra. Elizabeth Páez - Gestión Jurídica Integral"
                                className="object-cover w-full h-auto"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
