import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    { id: 1, title: 'Satpromax - Plateforme Pro', category: 'Plateforme E-Commerce', image: '/projects/satpromax.png', color: 'from-[#f4d0cb] to-[#fffaf8]', link: 'https://satpromax.com/' },
    { id: 2, title: 'Invitation Digitale Premium', category: 'Invitation Interactive', image: '/projects/invit.png', color: 'from-[#e1c6e5] to-[#f4d0cb]', link: 'http://localhost:5174/invitation/nedra-mehdi' },
    { id: 3, title: 'Skygros - Vente en Gros', category: 'Plateforme Web / E-Commerce', image: '/projects/skygros.png', color: 'from-[#c9a1ca] to-[#e1c6e5]', link: 'https://skygros.com/' },
    { id: 4, title: 'Application de Gestion', category: 'Développement Mobile', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop', color: 'from-[#d4af37]/40 to-[#fffaf8]', link: '#' },
];

const Galerie = () => {
    return (
        <div className="min-h-screen pt-20 md:pt-24 px-4 md:px-8 pb-16 md:pb-20 bg-[#fffaf8]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-6xl mx-auto"
            >
                <div className="text-center mb-10 md:mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#b8860b] mb-4">Notre Galerie</h1>
                    <p className="text-sm sm:text-base text-[#6d5c52] max-w-2xl mx-auto">
                        Découvrez nos réalisations en développement web et mobile, ainsi que nos créations d'invitations digitales interactives. Des sites vitrines sur-mesure aux applications complexes, nous donnons vie à vos idées.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${project.image})` }}
                            />

                            {/* Overlay Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-80 group-hover:opacity-90 transition-opacity duration-300`} />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <span className="text-sm font-medium tracking-widest uppercase text-[#4a403a] opacity-80 mb-2">
                                    {project.category}
                                </span>
                                <h3 className="text-3xl font-serif text-[#4a403a] font-bold">
                                    {project.title}
                                </h3>

                                {/* Hover Reveal Button */}
                                <div className="mt-4 overflow-hidden h-0 group-hover:h-12 transition-all duration-300">
                                    <a
                                        href={project.link}
                                        target={project.link !== '#' ? '_blank' : '_self'}
                                        rel={project.link !== '#' ? 'noopener noreferrer' : ''}
                                        className="inline-block bg-white/40 backdrop-blur-md px-5 py-2 rounded-full border border-white/50 text-[#4a403a] font-medium text-sm hover:bg-white/60 transition-colors cursor-pointer"
                                    >
                                        Découvrir le projet
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Galerie;
