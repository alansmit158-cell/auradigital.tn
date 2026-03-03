import React from 'react';
import { motion } from 'framer-motion';

const galleryItems = [
    { title: 'Satpromax - Accueil', image: '/projects/satpromax_1.png', link: 'https://satpromax.com' },
    { title: 'Satpromax - Catalogue', image: '/projects/satpromax_2.png', link: 'https://satpromax.com' },
    { title: 'Satpromax - Suite', image: '/projects/satpromax_3.png', link: 'https://satpromax.com' },
    { title: 'Skygros - Accueil', image: '/projects/skygros_1.png', link: 'https://skygros.com' },
    { title: 'Skygros - Produits', image: '/projects/skygros_2.png', link: 'https://skygros.com' },
    { title: 'Skygros - Boutique', image: '/projects/skygros_3.png', link: 'https://skygros.com' },
    { title: 'Invitation - Enveloppe', image: '/projects/invit_1.png', link: 'http://localhost:5174/invitation/nedra-mehdi' },
    { title: 'Invitation - Ouverture', image: '/projects/invit_2.png', link: 'http://localhost:5174/invitation/nedra-mehdi' },
    { title: 'Invitation - Détails', image: '/projects/invit_3.png', link: 'http://localhost:5174/invitation/nedra-mehdi' },
    { title: 'Invitation - Programme', image: '/projects/invit_4.png', link: 'http://localhost:5174/invitation/nedra-mehdi' },
];

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col items-center pt-10 md:pt-16 bg-gradient-to-br from-[#fffaf8] via-[#fdf4f2] to-[#f3dfec] px-4 md:px-8">

            {/* Hero Section Content */}
            <div className="w-full max-w-6xl flex flex-col items-center text-center z-10 relative">
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
            </div>

            {/* Hero Visual Wrapper */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="w-full max-w-6xl h-auto min-h-[500px] mt-8 mb-24 relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(225,198,229,0.3)] border border-white/50 bg-white/40 backdrop-blur-md flex flex-col items-center justify-center py-10"
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-[#fcebe9]/80 to-[#e1c6e5]/30 z-0 pointer-events-none" />

                <div className="z-10 text-center px-4 w-full relative">



                    {/* Infinite Scrolling Gallery */}
                    <div className="w-full overflow-hidden mt-12 relative">
                        {/* Fade edges */}
                        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white/60 to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#fcebe9]/60 to-transparent z-10 pointer-events-none"></div>

                        <div className="flex w-max animate-marquee space-x-6 md:space-x-8 px-4">
                            {/* Original Set */}
                            {galleryItems.map((item, index) => (
                                <a key={`orig-${index}`} href={item.link} target="_blank" rel="noopener noreferrer" className="relative h-60 md:h-80 w-[340px] md:w-[480px] rounded-2xl overflow-hidden shadow-xl flex-shrink-0 group cursor-pointer border border-white/60 block">
                                    <div className="absolute inset-0 bg-cover bg-top transition-transform duration-[3s] ease-in-out group-hover:bg-bottom group-hover:scale-105" style={{ backgroundImage: `url(${item.image})` }}></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>

                                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex justify-between items-center group-hover:delay-100">
                                        <span className="text-sm md:text-base font-bold tracking-wide text-[#b8860b]">{item.title}</span>
                                        <span className="text-xs font-semibold text-white bg-gradient-to-r from-[#e1c6e5] to-[#f4d0cb] px-3 py-1.5 rounded-full shadow-sm">Visiter &rarr;</span>
                                    </div>
                                </a>
                            ))}
                            {/* Duplicated Set for infinite loop */}
                            {galleryItems.map((item, index) => (
                                <a key={`dup-${index}`} href={item.link} target="_blank" rel="noopener noreferrer" className="relative h-60 md:h-80 w-[340px] md:w-[480px] rounded-2xl overflow-hidden shadow-xl flex-shrink-0 group cursor-pointer border border-white/60 block">
                                    <div className="absolute inset-0 bg-cover bg-top transition-transform duration-[3s] ease-in-out group-hover:bg-bottom group-hover:scale-105" style={{ backgroundImage: `url(${item.image})` }}></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>

                                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex justify-between items-center group-hover:delay-100">
                                        <span className="text-sm md:text-base font-bold tracking-wide text-[#b8860b]">{item.title}</span>
                                        <span className="text-xs font-semibold text-white bg-gradient-to-r from-[#e1c6e5] to-[#f4d0cb] px-3 py-1.5 rounded-full shadow-sm">Visiter &rarr;</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

        </div>
    );
};

export default Home;
