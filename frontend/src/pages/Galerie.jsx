import React from 'react';
import { motion } from 'framer-motion';

const featured = [
    {
        id: 'invit',
        title: 'Invitation Digitale Premium',
        category: 'Invitation Interactive',
        description: 'Une enveloppe qui s\'ouvre, une vidéo d\'ambiance, RSVP en temps réel. L\'invitation de mariage réinventée.',
        video: '/projects/Recording 2026-03-04 232704.mp4',
        screenshots: ['/projects/invit_1.png', '/projects/invit_2.png', '/projects/invit3.png', '/projects/invit_4.png'],
        link: 'https://islem-raouia-wedding-invitation.vercel.app/',
        badge: '✉️',
        accent: 'from-[#e1c6e5] to-[#f4d0cb]',
    },
    {
        id: 'gallery',
        title: 'Galerie Digitale',
        category: 'Galerie Photo Événementielle',
        description: 'Un album photo collaboratif et sécurisé pour vos événements. Vos invités partagent, vous gardez chaque souvenir.',
        video: '/projects/Recording 2026-03-04 232043.mp4',
        screenshots: [
            '/projects/Screenshot 2026-03-04 232334.png',
            '/projects/Screenshot 2026-03-04 232424.png',
            '/projects/Screenshot 2026-03-04 232455.png',
            '/projects/Screenshot 2026-03-04 232530.png',
        ],
        link: 'https://auradigitalgallerie.vercel.app/',
        badge: '🖼️',
        accent: 'from-[#b8860b]/20 to-[#f4d0cb]',
    },
];

const others = [
    { id: 1, title: 'Satpromax - Plateforme Pro', category: 'Plateforme E-Commerce', image: '/projects/satpromax.png', color: 'from-[#f4d0cb] to-[#fffaf8]', link: 'https://satpromax.com/' },
    { id: 2, title: 'Skygros - Vente en Gros', category: 'Plateforme Web / E-Commerce', image: '/projects/skygros.png', color: 'from-[#c9a1ca] to-[#e1c6e5]', link: 'https://skygros.com/' },
];

const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.65, delay: i * 0.12, ease: 'easeOut' } }),
};

const Galerie = () => {
    return (
        <div className="min-h-screen pt-20 md:pt-24 px-4 md:px-8 pb-20 bg-gradient-to-br from-[#fffaf8] via-[#fdf4f2] to-[#f3dfec]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-6xl mx-auto"
            >
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 border border-[#f4d0cb] text-[#c9a1ca] text-xs font-semibold tracking-widest uppercase mb-3">
                        Portfolio
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#b8860b] mb-4">Nos Réalisations</h1>
                    <p className="text-sm sm:text-base text-[#6d5c52] max-w-2xl mx-auto">
                        Découvrez nos projets phares — des invitations digitales élégantes aux galeries photos collaboratives — ainsi que l'ensemble de nos créations web sur-mesure.
                    </p>
                </div>

                {/* ── FEATURED PROJECTS ── */}
                <div className="flex flex-col gap-20 mb-20">
                    {featured.map((proj, idx) => (
                        <motion.div
                            key={proj.id}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            custom={idx}
                            viewport={{ once: true }}
                            className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch gap-8 lg:gap-12 bg-white/40 backdrop-blur-sm border border-white/60 rounded-3xl p-6 md:p-8 shadow-[0_16px_48px_rgba(225,198,229,0.2)]`}
                        >
                            {/* Video */}
                            <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                                <video
                                    src={proj.video}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Info */}
                            <div className="flex flex-col justify-center gap-5 w-full lg:w-1/2">
                                <span className={`inline-block w-fit px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-gradient-to-r ${proj.accent} text-[#5b4d45]`}>
                                    {proj.badge} {proj.category}
                                </span>
                                <h2 className="text-2xl md:text-3xl font-serif text-[#4a403a] leading-snug">{proj.title}</h2>
                                <p className="text-[#6d5c52] text-base leading-relaxed">{proj.description}</p>

                                {/* Screenshot strip */}
                                <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-none">
                                    {proj.screenshots.map((src, i) => (
                                        <img
                                            key={i}
                                            src={src}
                                            alt={`${proj.title} aperçu ${i + 1}`}
                                            className="h-20 md:h-24 rounded-xl shadow-md flex-shrink-0 border border-white/60 object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    ))}
                                </div>

                                <a
                                    href={proj.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-1 w-fit px-6 py-3 rounded-full bg-gradient-to-r from-[#b8860b] to-[#c9a1ca] text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 text-sm"
                                >
                                    Voir la démo →
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ── DIVIDER ── */}
                <div className="flex items-center gap-4 mb-12">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#e1c6e5] to-transparent" />
                    <span className="text-xs text-[#c9a1ca] font-semibold tracking-widest uppercase whitespace-nowrap">Autres Projets</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#e1c6e5] to-transparent" />
                </div>

                {/* ── OTHER PROJECTS GRID ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {others.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            custom={index}
                            viewport={{ once: true }}
                            className="group relative h-[360px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${project.image})` }}
                            />
                            <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-80 group-hover:opacity-90 transition-opacity duration-300`} />
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <span className="text-sm font-medium tracking-widest uppercase text-[#4a403a] opacity-80 mb-2">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-serif text-[#4a403a] font-bold">{project.title}</h3>
                                <div className="mt-4 overflow-hidden h-0 group-hover:h-12 transition-all duration-300">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-white/40 backdrop-blur-md px-5 py-2 rounded-full border border-white/50 text-[#4a403a] font-medium text-sm hover:bg-white/60 transition-colors"
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
