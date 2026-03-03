import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full py-8 border-t border-[#fcebe9] bg-[#fffaf8]">
            <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center text-[#5b4d45]">
                <div className="mb-4 md:mb-0">
                    <span className="font-serif text-xl font-bold text-[#b8860b]">Aura Digital</span>
                    <p className="text-sm mt-1 opacity-80">Agence de création digitale, Développement Web & Mobile.</p>
                </div>
                <p className="text-sm opacity-80">© {new Date().getFullYear()} Aura Digital. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

export default Footer;
