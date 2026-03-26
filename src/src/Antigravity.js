import React, { useRef, useEffect } from 'react';

const Antigravity = ({
    count = 600,
    magnetRadius = 140,
    ringRadius = 150,
    waveSpeed = 0.6,
    waveAmplitude = 1.2,
    particleSize = 5.0,
    lerpSpeed = 0.06,
    color = "#00F0FF",
    autoAnimate = true,
    particleVariance = 1.5,
    rotationSpeed = 0,
    depthFactor = 1.2,
    pulseSpeed = 2,
    particleShape = "circle",
    fieldStrength = 40
}) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        let mx = -1000;
        let my = -1000;
        let animationFrameId;

        const init = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        const handleResize = () => init();

        // Track mouse anywhere on the window
        const handleMouseMove = (e) => {
            mx = e.clientX;
            my = e.clientY;
        };

        const handleMouseLeave = () => {
            mx = -1000;
            my = -1000;
        };

        const handleTouchMove = (e) => {
            if (e.touches.length > 0) {
                mx = e.touches[0].clientX;
                my = e.touches[0].clientY;
                if (e.cancelable) e.preventDefault();
            }
        };

        const handleTouchEnd = () => {
            mx = -1000;
            my = -1000;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);

        window.addEventListener('touchstart', handleTouchMove, { passive: false });
        window.addEventListener('touchmove', handleTouchMove, { passive: false });
        window.addEventListener('touchend', handleTouchEnd);

        init();

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // --- TRUE MASK BACKGROUND ---
            // 1. Draw a solid dark mask completely hiding the DOM content
            ctx.globalCompositeOperation = 'source-over';
            ctx.fillStyle = "rgba(4, 4, 4, 1)"; // Pure solid black out
            ctx.fillRect(0, 0, width, height);

            // 2. Punch transparent hole revealing DOM
            if (mx > -100) {
                ctx.globalCompositeOperation = 'destination-out';
                let gradient = ctx.createRadialGradient(mx, my, magnetRadius * 0.4, mx, my, magnetRadius * 1.5);
                gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
                gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(mx, my, magnetRadius * 1.5, 0, Math.PI * 2);
                ctx.fill();
            }

            // Cleanup & Loop
            ctx.globalCompositeOperation = 'source-over';
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('touchstart', handleTouchMove);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
            cancelAnimationFrame(animationFrameId);
        };
    }, [
        count, magnetRadius, ringRadius, waveSpeed, waveAmplitude,
        particleSize, lerpSpeed, color, autoAnimate, particleVariance,
        rotationSpeed, depthFactor, pulseSpeed, particleShape, fieldStrength
    ]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
        />
    );
};

export default Antigravity;
