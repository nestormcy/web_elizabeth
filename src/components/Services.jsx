import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Sprout, Home, Award } from 'lucide-react';

const services = [
    {
        icon: Building2,
        title: 'Derecho Mercantil y Laboral',
        desc: 'Soporte integral para empresas: desde la formación y permisología hasta la comercialización y capacitación.',
        keywords: ['SIGESAI', 'INSAI', 'SUNAGRO', 'Relaciones Laborales', 'Registro de Marcas'],
        image: '/hero-mercantil.jpg',
        highlight: false
    },
    {
        icon: Sprout,
        title: 'Derecho Agrario',
        desc: 'Expertiz en la regularización y defensa de la tenencia de tierras.',
        keywords: ['Revocatorias', 'Adjudicaciones', 'Levantamientos Topográficos', 'Delimitación de Linderos'],
        image: '/hero-protection.jpg',
        highlight: false
    },
    {
        icon: Home,
        title: 'Derecho Civil e Inmobiliario',
        desc: 'Protección integral de patrimonio y familia con certificación profesional.',
        keywords: ['Herencias', 'Divorcios', 'Uniones Estables', 'Adquisición de Bienes'],
        image: '/hero-inmobiliario.png',
        highlight: true,
        badge: 'CORREDORA INMOBILIARIA CERTIFICADA'
    },
];

const Services = () => {
    return (
        <section id="servicios" className="py-24 relative bg-cream">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-matteBlack mb-4">Áreas de Práctica</h2>
                    <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
                    <p className="max-w-xl mx-auto text-gray-600">Tres pilares estratégicos de excelencia jurídica.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-burgundy overflow-hidden"
                        >
                            {/* Service Image */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

                                {/* Badge for highlighted service */}
                                {service.badge && (
                                    <div className="absolute top-4 right-4 z-20">
                                        <div className="flex items-center gap-1 bg-gold/90 backdrop-blur-sm border border-gold rounded-full px-3 py-1 shadow-lg">
                                            <Award className="w-3 h-3 text-burgundy" />
                                            <span className="text-[9px] font-bold text-burgundy uppercase tracking-wider">Certificada</span>
                                        </div>
                                    </div>
                                )}

                                {/* Icon Overlay */}
                                <div className="absolute bottom-4 left-4 w-14 h-14 bg-burgundy/90 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-gold/60">
                                    <service.icon className="w-7 h-7 text-gold" />
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="p-6 relative bg-white">
                                {/* Wood background nuance */}
                                <div className="absolute inset-0 bg-wood-pattern bg-cover opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />

                                <h3 className="text-xl font-serif font-bold text-matteBlack mb-3 relative z-10">{service.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed relative z-10 mb-4">
                                    {service.desc}
                                </p>

                                {/* Keywords */}
                                <div className="flex flex-wrap gap-2 relative z-10">
                                    {service.keywords.map((keyword, i) => (
                                        <span
                                            key={i}
                                            className="text-xs bg-burgundy/5 text-burgundy px-2 py-1 rounded-full border border-burgundy/10"
                                        >
                                            {keyword}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
