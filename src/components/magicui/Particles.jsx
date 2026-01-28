"use client";

import React, { useEffect, useRef } from "react";

const Particles = ({
    className = "",
    quantity = 100,
    refresh = false,
    color = "#ffffff",
    vx = 0,
    vy = 0,
    style,
}) => {
    const canvasRef = useRef(null);
    const canvasContainerRef = useRef(null);
    const context = useRef(null);
    const circles = useRef([]);
    const mouse = useRef({ x: 0, y: 0 });
    const canvasSize = useRef({ w: 0, h: 0 });
    const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;
    const rafID = useRef(null);

    const initCanvas = () => {
        onResize();
        drawParticles();
    };

    const onResize = () => {
        if (canvasContainerRef.current && canvasRef.current && context.current) {
            circles.current.length = 0;
            canvasSize.current.w = canvasContainerRef.current.offsetWidth;
            canvasSize.current.h = canvasContainerRef.current.offsetHeight;
            canvasRef.current.width = canvasSize.current.w * dpr;
            canvasRef.current.height = canvasSize.current.h * dpr;
            canvasRef.current.style.width = `100%`;
            canvasRef.current.style.height = `100%`;
            context.current.scale(dpr, dpr);
        }
    };

    const animate = () => {
        draw();
        rafID.current = requestAnimationFrame(animate);
    }

    useEffect(() => {
        if (canvasRef.current) {
            context.current = canvasRef.current.getContext("2d");
        }
        initCanvas();
        animate();

        const resizeObserver = new ResizeObserver(() => {
            initCanvas();
        });

        if (canvasContainerRef.current) {
            resizeObserver.observe(canvasContainerRef.current);
        }

        const onMouseMove = (e) => {
            if (canvasRef.current) {
                const rect = canvasRef.current.getBoundingClientRect();
                mouse.current.x = e.clientX - rect.left;
                mouse.current.y = e.clientY - rect.top;
            }
        };
        window.addEventListener('mousemove', onMouseMove);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener('mousemove', onMouseMove);
            if (rafID.current) cancelAnimationFrame(rafID.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [color]);

    useEffect(() => {
        onResize();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refresh]);

    const circleParams = () => {
        const x = Math.floor(Math.random() * canvasSize.current.w);
        const y = Math.floor(Math.random() * canvasSize.current.h);
        const translateX = 0;
        const translateY = 0;
        const pSize = Math.floor(Math.random() * 2) + 0.5;
        const alpha = 0;
        const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
        const dx = (Math.random() - 0.5) * 0.1;
        const dy = (Math.random() - 0.5) * 0.1;
        const magnetism = 0.1 + Math.random() * 4;
        return {
            x,
            y,
            translateX,
            translateY,
            size: pSize,
            alpha,
            targetAlpha,
            dx,
            dy,
            magnetism,
        };
    };

    const drawParticles = () => {
        clearContext();
        const particleCount = quantity;
        for (let i = 0; i < particleCount; i++) {
            const circle = circleParams();
            drawCircle(circle);
        }
    };

    const drawCircle = (circle, update = false) => {
        if (context.current) {
            const { x, y, translateX, translateY, size, alpha } = circle;
            context.current.translate(translateX, translateY);
            context.current.beginPath();
            context.current.arc(x, y, size, 0, 2 * Math.PI);

            context.current.fillStyle = color.startsWith('#') ? `rgba(${hexToRgb(color)}, ${alpha})` : color;

            context.current.fill();
            context.current.setTransform(dpr, 0, 0, dpr, 0, 0);

            if (!update) {
                circles.current.push(circle);
            }
        }
    };

    const clearContext = () => {
        if (context.current) {
            context.current.clearRect(
                0,
                0,
                canvasSize.current.w,
                canvasSize.current.h
            );
        }
    };

    const draw = () => {
        clearContext();
        circles.current.forEach((circle) => {
            // Handle edges
            if (circle.x < -circle.size) circle.x = canvasSize.current.w + circle.size;
            if (circle.x > canvasSize.current.w + circle.size) circle.x = -circle.size;
            if (circle.y < -circle.size) circle.y = canvasSize.current.h + circle.size;
            if (circle.y > canvasSize.current.h + circle.size) circle.y = -circle.size;

            // Simple movement without magnetism for cleaner "dot dot" look
            circle.x += circle.dx + vx;
            circle.y += circle.dy + vy;

            // Blink effect
            if (Math.random() > 0.995) {
                circle.alpha = Math.random() * circle.targetAlpha;
            } else {
                if (circle.alpha < circle.targetAlpha) circle.alpha += 0.01;
            }

            drawCircle(circle, true);
        });
    };

    const hexToRgb = (hex) => {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result
            ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
                result[3],
                16
            )}`
            : '255, 255, 255';
    };

    return (
        <div className={className} ref={canvasContainerRef} aria-hidden="true" style={{ width: '100%', height: '100%', ...style }}>
            <canvas ref={canvasRef} />
        </div>
    );
};

export default Particles;
