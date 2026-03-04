import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Assuming lucide-react is installed from before

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="w-full py-4 px-4 md:px-8 flex items-center justify-between bg-white/70 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-[#fcebe9]">
            <div className="flex items-center gap-2">
                <Link to="/" onClick={closeMenu}>
                    <img
                        src="/projects/00.png"
                        alt="Aura Digital Logo"
                        className="h-10 md:h-12 w-auto object-contain"
                    />
                </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6 text-[#5b4d45] font-medium tracking-wide items-center">
                <Link to="/" className="hover:text-[#b8860b] hover:bg-[#fcebe9] px-3 py-1 rounded-md transition-all">Accueil</Link>
                <Link to="/galerie" className="hover:text-[#b8860b] hover:bg-[#fcebe9] px-3 py-1 rounded-md transition-all">Nos Réalisations</Link>
                <Link to="/contact" className="bg-gradient-to-r from-[#e1c6e5] to-[#f4d0cb] text-[#5b4d45] px-5 py-2 rounded-full hover:shadow-md transition-all hover:scale-105">Lancer un Projet</Link>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
                className="md:hidden text-[#5b4d45]"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Navigation Dropdown */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg border-b border-[#fcebe9] flex flex-col items-center py-6 gap-6 md:hidden">
                    <Link to="/" onClick={closeMenu} className="text-lg font-medium text-[#5b4d45] hover:text-[#b8860b]">Accueil</Link>
                    <Link to="/galerie" onClick={closeMenu} className="text-lg font-medium text-[#5b4d45] hover:text-[#b8860b]">Nos Réalisations</Link>
                    <Link to="/contact" onClick={closeMenu} className="bg-gradient-to-r from-[#e1c6e5] to-[#f4d0cb] text-[#5b4d45] px-6 py-3 rounded-full font-medium shadow-sm">Lancer un Projet</Link>
                </div>
            )}
        </header>
    );
};

export default Header;
