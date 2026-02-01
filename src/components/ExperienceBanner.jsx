import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const ExperienceBanner = () => {
    return (
        <section className="relative py-12 bg-gradient-to-r from-darkWood via-burgundy to-darkWood overflow-hidden">
            {/* Wood Texture Overlay */}
            <div className="absolute inset-0 bg-wood-pattern opacity-20"></div>

            {/* Subtle Animated Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent animate-pulse"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4 text-center"
                >
                    <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center border-2 border-gold/40">
                        <Award className="w-8 h-8 text-gold" />
                    </div>

                    <div>
                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-1">
                            17 Años Traduciendo Conocimiento en Soluciones Exitosas
                        </h3>
                        <p className="text-gold/80 text-sm md:text-base font-light tracking-wide">
                            Seguridad y Dominio en cada proceso legal
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ExperienceBanner;
