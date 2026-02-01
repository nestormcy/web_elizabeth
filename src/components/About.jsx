import React from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Users, Shield } from 'lucide-react';

const About = () => {
    const achievements = [
        { icon: TrendingUp, number: '17+', label: 'Años de Experiencia' },
        { icon: Users, number: '500+', label: 'Casos Exitosos' },
        { icon: Shield, number: '100%', label: 'Compromiso Ético' },
        { icon: Award, number: '3', label: 'Certificaciones' },
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-burgundy via-darkWood to-burgundy relative overflow-hidden">
            {/* Wood Texture Overlay */}
            <div className="absolute inset-0 bg-wood-pattern opacity-20"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gold/40">
                            <img
                                src="/hero-agrario.jpg"
                                alt="Dra. Elizabeth Páez - Derecho Agrario"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-gold rounded-full p-6 shadow-2xl border-4 border-white">
                            <Award className="w-12 h-12 text-burgundy" />
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-white"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            Experiencia que <span className="text-gold italic">Protege</span> su Futuro
                        </h2>
                        <p className="text-lg text-white/90 mb-6 leading-relaxed">
                            Con **17 años de trayectoria ininterrumpida**, la Dra. Elizabeth Páez ha consolidado una práctica legal que trasciende fronteras regionales, ofreciendo asesoría nacional en las áreas más estratégicas del derecho venezolano.
                        </p>
                        <p className="text-base text-white/80 mb-8 leading-relaxed">
                            Egresada de la **Universidad Bicentenaria de Aragua (UBA)** y certificada como **Corredora Inmobiliaria**, combina conocimiento académico con experiencia práctica en gestión mercantil, regularización agraria y protección patrimonial.
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {achievements.map((achievement, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white/10 backdrop-blur-sm border border-gold/30 rounded-xl p-4 text-center hover:bg-white/20 transition-colors"
                                >
                                    <achievement.icon className="w-8 h-8 text-gold mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-gold mb-1">{achievement.number}</div>
                                    <div className="text-xs text-white/80">{achievement.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
