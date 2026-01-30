import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Philosophy = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section id="filosofía" className="relative py-32 overflow-hidden flex items-center justify-center">
            {/* Parallax Nature Background */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    style={{ y, backgroundImage: "url('/nature-bg.png')" }}
                    className="w-full h-[120%] bg-cover bg-center absolute top-[-10%]"
                >
                    {/* Fallback gradient if image not loaded */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#2d3a2d] to-[#1a1a1a]" />
                </motion.div>
                <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/10 backdrop-blur-md border border-white/20 p-12 md:p-16 max-w-4xl mx-auto text-center rounded-sm text-white"
                >
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Naturaleza de la Justicia</h2>
                    <p className="text-lg md:text-xl font-light leading-relaxed mb-8">
                        "La ley, como la naturaleza, no admite atajos. Creemos en un crecimiento orgánico de cada caso, fundamentado en raíces sólidas de conocimiento y una ética que perdura en el tiempo."
                    </p>
                    <div className="font-serif italic text-2xl text-whitetext-opacity-80">
                        - Fundadora
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Philosophy;
