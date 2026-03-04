import React from 'react';
import { motion } from 'framer-motion';

const galleryItems = [
    { title: 'Skygros - Boutique', image: '/projects/skygros_3.png', link: 'https://skygros.com' },
    { title: 'Invitation Digitale', image: '/projects/invit_2.png', link: 'https://islem-raouia-wedding-invitation.vercel.app/' },
    { title: 'Invitation - Programme', image: '/projects/invit_4.png', link: 'https://islem-raouia-wedding-invitation.vercel.app/' },
    { title: 'Galerie Digitale', image: '/projects/Screenshot 2026-03-04 232334.png', link: 'https://auradigitalgallerie.vercel.app/' },
    { title: 'Galerie - Albums', image: '/projects/Screenshot 2026-03-04 232424.png', link: 'https://auradigitalgallerie.vercel.app/' },
];

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' },
    }),
};

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-[#fffaf8] via-[#fdf4f2] to-[#f3dfec]">

            {/* ── HERO ── */}
            <section className="w-full max-w-6xl flex flex-col items-center text-center z-10 relative pt-10 md:pt-16 px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-4 inline-block px-4 py-1.5 rounded-full bg-white/60 border border-[#f4d0cb] text-[#c9a1ca] text-sm font-medium tracking-widest uppercase"
                >
                    Bienvenue dans l'univers digital
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl sm:text-5xl md:text-7xl font-serif text-[#4a403a] mb-4 md:mb-6 !leading-tight"
                >
                    Créez une <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b8860b] to-[#c9a1ca]">Présence Inoubliable</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-base sm:text-lg md:text-xl text-[#6d5c52] max-w-2xl mb-8 md:mb-10"
                >
                    Aura Digital propulse votre activité avec des solutions web et mobiles sur-mesure, des sites vitrines élégants et des applications performantes.
                </motion.p>
            </section>

            {/* ── PROJETS PHARES ── */}
            <section className="w-full max-w-6xl px-4 md:px-8 py-16 flex flex-col gap-24">

                {/* Label */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 border border-[#f4d0cb] text-[#c9a1ca] text-xs font-semibold tracking-widest uppercase mb-3">
                        Nos Projets Phares
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif text-[#4a403a]">
                        Des solutions <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b8860b] to-[#c9a1ca]">qui marquent</span>
                    </h2>
                </motion.div>

                {/* ── PROJECT 1 : Invitation Digitale ── */}
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

                    {/* Video Left */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        custom={0}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 flex flex-col gap-4"
                    >
                        <div className="rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(225,198,229,0.35)] border border-white/60 bg-white/40 backdrop-blur-sm">
                            <video
                                src="/projects/Recording 2026-03-04 232704.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-lg border border-white/60 bg-white/40">
                            <video
                                src="/projects/Recording 2026-03-04 232840.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Text Right */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        custom={1}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 flex flex-col gap-5"
                    >
                        <span className="inline-block w-fit px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-[#e1c6e5] to-[#f4d0cb] text-[#5b4d45]">
                            ✉️ Invitation Digitale
                        </span>
                        <h3 className="text-2xl md:text-4xl font-serif text-[#4a403a] leading-snug">
                            Une invitation de mariage qui crée l'<span className="text-[#b8860b]">émotion</span>
                        </h3>
                        <p className="text-[#6d5c52] text-base md:text-lg leading-relaxed">
                            Fini le papier ! Offrez à vos invités une expérience digitale unique : une enveloppe qui s'ouvre, une vidéo d'ambiance, un programme interactif et une confirmation de présence (RSVP) en temps réel. Élégant, moderne et écologique.
                        </p>
                        <ul className="flex flex-col gap-2 text-sm text-[#5b4d45]">
                            {['Animation d\'ouverture de l\'enveloppe', 'Vidéo & musique d\'ambiance personnalisée', 'Programme de la cérémonie', 'RSVP interactif en temps réel', 'Design personnalisé aux couleurs du mariage'].map((feat) => (
                                <li key={feat} className="flex items-center gap-2">
                                    <span className="text-[#b8860b] text-base">✓</span> {feat}
                                </li>
                            ))}
                        </ul>
                        <a
                            href="https://islem-raouia-wedding-invitation.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 w-fit px-6 py-3 rounded-full bg-gradient-to-r from-[#b8860b] to-[#c9a1ca] text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
                        >
                            Voir la démo →
                        </a>
                    </motion.div>
                </div>

                {/* Screenshots strip for Invitation */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    custom={0}
                    viewport={{ once: true }}
                    className="flex gap-4 overflow-x-auto pb-2 -mt-10 scrollbar-none"
                >
                    {['/projects/invit_1.png', '/projects/invit_2.png', '/projects/invit3.png', '/projects/invit_4.png'].map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt={`Invitation aperçu ${i + 1}`}
                            className="h-44 md:h-56 rounded-2xl shadow-lg flex-shrink-0 border border-white/60 object-cover hover:scale-105 transition-transform duration-300"
                        />
                    ))}
                </motion.div>

                {/* ── DIVIDER ── */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#e1c6e5] to-transparent" />

                {/* ── PROJECT 2 : Galerie Digitale ── */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">

                    {/* Videos Right */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        custom={0}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 flex flex-col gap-4"
                    >
                        <div className="rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(184,134,11,0.2)] border border-white/60 bg-white/40 backdrop-blur-sm">
                            <video
                                src="/projects/Recording 2026-03-04 232043.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Text Left */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        custom={1}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 flex flex-col gap-5"
                    >
                        <span className="inline-block w-fit px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-[#b8860b]/20 to-[#f4d0cb] text-[#5b4d45]">
                            🖼️ Galerie Digitale
                        </span>
                        <h3 className="text-2xl md:text-4xl font-serif text-[#4a403a] leading-snug">
                            Revivez chaque instant, <span className="text-[#b8860b]">en toute intimité</span>
                        </h3>
                        <p className="text-[#6d5c52] text-base md:text-lg leading-relaxed">
                            Une galerie photo privée et sécurisée dédiée à votre événement. Vos invités partagent et téléchargent leurs photos en temps réel, vous créez ensemble un album collectif inoubliable.
                        </p>
                        <ul className="flex flex-col gap-2 text-sm text-[#5b4d45]">
                            {['Album public & album privé protégé par mot de passe', 'Upload de photos par les invités en direct', 'Compteur de photos en temps réel', 'Téléchargement sécurisé', 'Interface épurée et responsive'].map((feat) => (
                                <li key={feat} className="flex items-center gap-2">
                                    <span className="text-[#b8860b] text-base">✓</span> {feat}
                                </li>
                            ))}
                        </ul>
                        <a
                            href="https://auradigitalgallerie.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 w-fit px-6 py-3 rounded-full bg-gradient-to-r from-[#b8860b] to-[#c9a1ca] text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
                        >
                            Voir la démo →
                        </a>
                    </motion.div>
                </div>

                {/* Screenshots strip for Gallery */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    custom={0}
                    viewport={{ once: true }}
                    className="flex gap-4 overflow-x-auto pb-2 -mt-10 scrollbar-none"
                >
                    {[
                        '/projects/Screenshot 2026-03-04 232334.png',
                        '/projects/Screenshot 2026-03-04 232424.png',
                        '/projects/Screenshot 2026-03-04 232455.png',
                        '/projects/Screenshot 2026-03-04 232530.png',
                    ].map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt={`Galerie aperçu ${i + 1}`}
                            className="h-44 md:h-56 rounded-2xl shadow-lg flex-shrink-0 border border-white/60 object-cover hover:scale-105 transition-transform duration-300"
                        />
                    ))}
                </motion.div>

            </section>

            {/* ── SCROLLING GALLERY REEL ── */}
            <section className="w-full max-w-6xl h-auto min-h-[420px] mb-24 relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(225,198,229,0.3)] border border-white/50 bg-white/40 backdrop-blur-md flex flex-col items-center justify-center py-10 mx-4">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#fcebe9]/80 to-[#e1c6e5]/30 z-0 pointer-events-none" />

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative z-10 text-xs text-[#c9a1ca] font-semibold tracking-widest uppercase mb-6"
                >
                    Toutes nos réalisations
                </motion.p>

                <div className="z-10 w-full overflow-hidden relative">
                    <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white/60 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#fcebe9]/60 to-transparent z-10 pointer-events-none" />

                    <div className="flex w-max animate-marquee space-x-6 md:space-x-8 px-4">
                        {[...galleryItems, ...galleryItems].map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative h-52 md:h-72 w-[280px] md:w-[420px] rounded-2xl overflow-hidden shadow-xl flex-shrink-0 group cursor-pointer border border-white/60 block"
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-top transition-transform duration-[3s] ease-in-out group-hover:bg-bottom group-hover:scale-105"
                                    style={{ backgroundImage: `url(${item.image})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex justify-between items-center">
                                    <span className="text-sm md:text-base font-bold tracking-wide text-[#b8860b]">{item.title}</span>
                                    <span className="text-xs font-semibold text-white bg-gradient-to-r from-[#e1c6e5] to-[#f4d0cb] px-3 py-1.5 rounded-full shadow-sm">Visiter →</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
