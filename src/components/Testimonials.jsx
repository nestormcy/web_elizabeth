import React from 'react';
import { motion } from 'framer-motion';
import { Star, Instagram } from 'lucide-react';

const testimonials = [
    { name: "Carlos M.", text: "Su estrategia legal salvó mi empresa. Una visión impecable.", role: "CEO Tech" },
    { name: "Elena R.", text: "Empatía y firmeza en el momento más difícil. Eternamente agradecida.", role: "Cliente Particular" },
    { name: "Grupo Inversor A.", text: "Resultados que superan expectativas. La mejor aliada corporativa.", role: "Corporativo" },
];

const feedLinks = [
    "https://www.instagram.com/p/DO_KNJXDcZ_/",
    "https://www.instagram.com/p/DMvftMaSIDB/",
    "https://www.instagram.com/p/DKAFHcUie--/",
    "https://www.instagram.com/p/DNEHS8hy0xu/"
];

const Testimonials = () => {
    return (
        <section id="testimonios" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                {/* Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-matteBlack mb-4">Lo Que Dicen Nuestros Aliados</h2>
                    <div className="w-24 h-1 bg-vinotinto mx-auto"></div>
                </div>

                {/* Carousel / Grid of Testimonials */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="bg-lightGray p-8 rounded-lg relative"
                        >
                            <div className="absolute top-[-15px] left-8 text-6xl text-vinotinto opacity-20 font-serif">"</div>
                            <p className="text-gray-700 italic mb-6 relative z-10">{t.text}</p>
                            <div className="flex items-center gap-1 mb-2">
                                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} className="fill-vinotinto text-vinotinto" />)}
                            </div>
                            <h4 className="font-bold text-matteBlack">{t.name}</h4>
                            <span className="text-xs text-vinotinto uppercase tracking-widest">{t.role}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Social Proof / Instagram Feed */}
                <div className="mt-24">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-2xl font-serif font-bold flex items-center gap-2">
                            <Instagram className="text-vinotinto" />
                            <span className="text-matteBlack">@elizabeth_paez_</span>
                        </h3>
                        <a href="https://www.instagram.com/elizabeth_paez_/" target="_blank" rel="noopener noreferrer" className="text-vinotinto hover:underline text-sm font-medium">Ver perfil &rarr;</a>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {feedLinks.map((link, i) => (
                            <a
                                key={i}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="aspect-[9/16] bg-gray-100 rounded-lg overflow-hidden hover:opacity-95 transition-all cursor-pointer relative group border border-gray-200 hover:border-vinotinto shadow-md hover:shadow-xl"
                            >
                                <img
                                    src={`/thumb${i + 1}.png`}
                                    alt={`Video ${i + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Overlay with Icon */}
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                                        <Instagram className="text-white w-6 h-6" />
                                    </div>
                                </div>

                                {/* View Post Badge */}
                                <div className="absolute bottom-4 left-0 right-0 text-center">
                                    <span className="bg-black/50 text-white text-[10px] px-3 py-1 rounded-full backdrop-blur-sm uppercase tracking-wider font-semibold">
                                        Ver Reel
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
