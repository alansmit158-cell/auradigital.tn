import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            // Basic simulation calling health check until backend fully handles the POST request
            const res = await fetch('http://localhost:5000/api/health');
            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    return (
        <div className="min-h-screen pt-20 md:pt-24 px-4 md:px-8 pb-10 md:pb-12 flex flex-col items-center bg-[#fffaf8]">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#b8860b] mb-4 text-center px-2"
            >
                Parlons de Votre Projet
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-sm sm:text-base text-[#6d5c52] mb-8 md:mb-10 text-center max-w-lg px-2"
            >
                Vous souhaitez une <strong>invitation digitale</strong> pour votre mariage, une <strong>galerie photo</strong> privée pour votre événement, ou un projet web sur-mesure ? Remplissez ce formulaire et nous vous répondrons rapidement.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="w-full max-w-xl bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-xl shadow-[#e1c6e5]/20 border border-[#fcebe9]"
            >
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-6">
                    <div>
                        <label className="block text-sm font-medium tracking-wide text-[#5b4d45] mb-2">Nom Complet</label>
                        <input
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-[#fcebe9] focus:outline-none focus:ring-2 focus:ring-[#f4d0cb] bg-[#fffaf8] text-[#4a403a] transition-all"
                            placeholder="Votre nom"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium tracking-wide text-[#5b4d45] mb-2">Email</label>
                        <input
                            type="email"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-[#fcebe9] focus:outline-none focus:ring-2 focus:ring-[#f4d0cb] bg-[#fffaf8] text-[#4a403a] transition-all"
                            placeholder="votre@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium tracking-wide text-[#5b4d45] mb-2">Message ou Détails de l'événement</label>
                        <textarea
                            rows="5"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-[#fcebe9] focus:outline-none focus:ring-2 focus:ring-[#f4d0cb] bg-[#fffaf8] text-[#4a403a] transition-all"
                            placeholder="Décrivez votre besoin..."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full py-4 mt-2 rounded-xl bg-gradient-to-r from-[#e1c6e5] to-[#f4d0cb] text-[#5b4d45] font-semibold tracking-wide hover:shadow-[0_10px_20px_rgba(225,198,229,0.3)] transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {status === 'loading' ? 'Envoi...' : 'Envoyer la demande'}
                    </button>

                    {status === 'success' && (
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-medium text-center text-sm mt-4">
                            ✨ Message envoyé avec succès ! Nous vous recontacterons très vite.
                        </motion.p>
                    )}
                    {status === 'error' && (
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 font-medium text-center text-sm mt-4">
                            Une erreur est survenue. Veuillez vérifier votre connexion.
                        </motion.p>
                    )}
                </form>
            </motion.div>
        </div>
    );
};

export default Contact;
