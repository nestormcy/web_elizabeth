import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Gavel, FileText, Globe, Building } from 'lucide-react';

const services = [
    { icon: Scale, title: 'Derecho Penal', desc: 'Defensa estratégica en procesos complejos.' },
    { icon: Building, title: 'Derecho Corporativo', desc: 'Blindaje legal para estructuras empresariales.' },
    { icon: Gavel, title: 'Litigios Civiles', desc: 'Resolución de conflictos con enfoque en resultados.' },
    { icon: FileText, title: 'Contratos Internacionales', desc: 'Seguridad jurídica en operaciones globales.' },
    { icon: Globe, title: 'Compliance', desc: 'Normativa y prevención de riesgos corporativos.' },
];

const Services = () => {
    return (
        <section id="servicios" className="py-24 relative bg-lightGray">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-matteBlack mb-4">Nuestros Servicios</h2>
                    <div className="w-24 h-1 bg-vinotinto mx-auto mb-6"></div>
                    <p className="max-w-xl mx-auto text-gray-600">Excelencia técnica aplicada a cada área de práctica.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-vinotinto overflow-hidden"
                        >
                            {/* Wood background nuance */}
                            <div className="absolute inset-0 bg-wood-pattern bg-cover opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />

                            <div className="w-16 h-16 bg-lightGray rounded-full flex items-center justify-center mb-6 z-10 relative group-hover:bg-vinotinto transition-colors duration-300">
                                <service.icon className="w-8 h-8 text-vinotinto group-hover:text-white transition-colors duration-300" />
                            </div>

                            <h3 className="text-xl font-serif font-bold text-matteBlack mb-3 relative z-10">{service.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
