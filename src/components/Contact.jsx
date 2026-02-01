import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        area: '',
        telefono: '',
        email: '',
        mensaje: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Implement form submission logic
        console.log('Form submitted:', formData);
        alert('Gracias por su consulta. Nos pondremos en contacto pronto.');
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contacto" className="py-24 bg-cream relative overflow-hidden">
            {/* Subtle Wood Pattern Background */}
            <div className="absolute inset-0 bg-wood-pattern opacity-5"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-matteBlack mb-4">
                        Agende su Consulta Estratégica
                    </h2>
                    <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
                    <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                        Primer paso hacia la protección de su patrimonio y la seguridad jurídica de su empresa.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-2xl shadow-xl border-2 border-burgundy/10"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-matteBlack mb-2">
                                    Nombre Completo
                                </label>
                                <input
                                    type="text"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-burgundy/20 rounded-lg focus:outline-none focus:border-burgundy transition-colors bg-cream/30"
                                    placeholder="Ej: María González"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-matteBlack mb-2">
                                    Área de Práctica
                                </label>
                                <select
                                    name="area"
                                    value={formData.area}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-burgundy/20 rounded-lg focus:outline-none focus:border-burgundy transition-colors bg-cream/30"
                                >
                                    <option value="">Seleccione un área</option>
                                    <option value="mercantil">Derecho Mercantil y Laboral</option>
                                    <option value="agrario">Derecho Agrario</option>
                                    <option value="civil">Derecho Civil e Inmobiliario</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-matteBlack mb-2">
                                        Teléfono
                                    </label>
                                    <input
                                        type="tel"
                                        name="telefono"
                                        value={formData.telefono}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-burgundy/20 rounded-lg focus:outline-none focus:border-burgundy transition-colors bg-cream/30"
                                        placeholder="+58 412 1234567"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-matteBlack mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-burgundy/20 rounded-lg focus:outline-none focus:border-burgundy transition-colors bg-cream/30"
                                        placeholder="correo@ejemplo.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-matteBlack mb-2">
                                    Mensaje
                                </label>
                                <textarea
                                    name="mensaje"
                                    value={formData.mensaje}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full px-4 py-3 border-2 border-burgundy/20 rounded-lg focus:outline-none focus:border-burgundy transition-colors bg-cream/30 resize-none"
                                    placeholder="Cuéntenos brevemente sobre su caso..."
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-burgundy text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-darkWood transition-colors shadow-lg hover:shadow-xl"
                            >
                                <Send className="w-5 h-5" />
                                Enviar Consulta
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-gradient-to-br from-burgundy to-darkWood p-8 rounded-2xl text-white relative overflow-hidden">
                            <div className="absolute inset-0 bg-wood-pattern opacity-20"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold mb-6">Información de Contacto</h3>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 border border-gold/40">
                                            <Phone className="w-5 h-5 text-gold" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gold text-sm">Teléfono</p>
                                            <p className="text-white/90">+58 424 7251643</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 border border-gold/40">
                                            <Mail className="w-5 h-5 text-gold" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gold text-sm">Email</p>
                                            <p className="text-white/90">contacto@elizabethpaez.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 border border-gold/40">
                                            <MapPin className="w-5 h-5 text-gold" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gold text-sm">Alcance</p>
                                            <p className="text-white/90">Asesoría Nacional | Sede Trujillo, Venezuela</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gold/20">
                            <h4 className="text-xl font-serif font-bold text-matteBlack mb-4">Horario de Atención</h4>
                            <div className="space-y-2 text-gray-600">
                                <p><span className="font-semibold text-burgundy">Lunes - Viernes:</span> 8:00 AM - 6:00 PM</p>
                                <p><span className="font-semibold text-burgundy">Sábados:</span> 9:00 AM - 1:00 PM</p>
                                <p className="text-sm italic text-gray-500 mt-4">
                                    *Consultas urgentes fuera de horario: Previa coordinación
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
