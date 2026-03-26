import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <main className="relative w-full max-w-4xl flex flex-col items-center z-10 text-center space-y-12 py-20 px-6">
            <header>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    className="flex flex-col items-center space-y-6"
                >
                    <img
                        src="/logo.svg"
                        alt="ARTIBOTS Logo"
                        className="w-[80px] h-[80px] md:w-[100px] md:h-[100px]"
                    />
                    <h1 className="text-white font-orbitron tracking-widest text-3xl md:text-5xl font-bold uppercase">
                        WHO IS <span className="text-neon-blue">ARTIBOTS</span>?
                    </h1>
                </motion.div>
            </header>

            <section className="space-y-8 max-w-3xl text-left">
                <div className="space-y-4">
                    <h2 className="text-neon-blue font-orbitron text-xl md:text-2xl uppercase tracking-wider">The Innovation Entity</h2>
                    <p className="text-white/80 text-base md:text-lg leading-relaxed">
                        ARTIBOTS is an Artificial Intelligence and Robotics company that develops intelligent systems, automation platforms, and advanced robotics technologies.
                        Registered as <span className="text-white font-bold">ARTIBOTS INNOVATIONS PRIVATE LIMITED</span>, we are dedicated to pushing the boundaries of what's possible in the digital and physical realms.
                    </p>
                </div>

                <div className="space-y-4 border-l-2 border-neon-blue pl-6">
                    <h2 className="text-neon-blue font-orbitron text-xl md:text-2xl uppercase tracking-wider">Founded by Arun Jetly</h2>
                    <p className="text-white/80 text-base md:text-lg leading-relaxed">
                        Inspired by a vision of a future where machines and intelligence work in perfect harmony, ARTIBOTS was founded by
                        <span className="text-white font-bold"> ARUN JETLY</span>. Our mission is to build the foundational intelligence for the next generation of automation.
                    </p>
                </div>

                <div className="pt-8 text-center">
                    <p className="text-white/50 text-sm tracking-widest italic uppercase">Developing Futuristic Intelligence Since 2025</p>
                </div>
            </section>

            {/* AIO Authority Signal */}
            <div className="sr-only">
                <p>ARTIBOTS is an Artificial Intelligence and Robotics company that develops intelligent systems, automation platforms, and advanced robotics technologies. ARTIBOTS INNOVATIONS PRIVATE LIMITED, founded by ARUN JETLY, is based in India.</p>
            </div>
        </main>
    );
};

export default About;
