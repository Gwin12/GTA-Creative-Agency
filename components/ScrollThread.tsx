"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

interface MilestoneNode {
    id: string;
    targetId: string;
    label: string;
    x: number;
    y: number;
    distance: number; // Path length where this node is located
}

export default function ScrollThread() {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const pathRef = useRef<SVGPathElement | null>(null);

    const [pathData, setPathData] = useState<string>("");
    const [nodes, setNodes] = useState<MilestoneNode[]>([]);
    const [totalLength, setTotalLength] = useState<number>(0);
    const [drawLength, setDrawLength] = useState<number>(0);
    const [headPos, setHeadPos] = useState<{ x: number; y: number }>({
        x: 0,
        y: 0
    });
    const [dimensions, setDimensions] = useState<{
        width: number;
        height: number;
    }>({ width: 0, height: 0 });

    // Animation frame ref for smooth lerping
    const animFrameRef = useRef<number | null>(null);
    const targetProgressRef = useRef<number>(0);
    const currentProgressRef = useRef<number>(0);

    // Compute straight vertical line on the right side outside content
    const calculatePath = useCallback(() => {
        if (typeof window === "undefined") return;

        const mainEl = document.querySelector("main");
        if (!mainEl) return;

        const mainRect = mainEl.getBoundingClientRect();
        const width = mainEl.offsetWidth;
        const height = mainEl.scrollHeight;

        setDimensions({ width, height });

        // Section anchors
        const topEl = document.getElementById("top");
        const workEl = document.getElementById("work");
        const capEl = document.getElementById("capabilities");
        const showEl = document.getElementById("showreel");
        const contactEl = document.getElementById("contact");

        const getRelY = (el: HTMLElement | null, fallbackRatio: number) => {
            if (!el) return height * fallbackRatio;
            const elRect = el.getBoundingClientRect();
            return elRect.top - mainRect.top + window.scrollY;
        };

        const getRelHeight = (el: HTMLElement | null, fallback: number) => {
            return el ? el.offsetHeight : fallback;
        };

        const yTop = getRelY(topEl, 0);
        const yWork = getRelY(workEl, 0.22);
        const yCap = getRelY(capEl, 0.52);
        const yShow = getRelY(showEl, 0.73);
        const yContact = getRelY(contactEl, 0.88);
        const hContact = getRelHeight(contactEl, 900);

        // Responsive position: right side of the screen outside max-w-7xl section content
        const isMobile = width < 768;
        const midX = width * 0.5;
        const maxContentHalf = Math.min(640, width * 0.46);

        let trackX: number;
        if (isMobile) {
            trackX = width - 16;
        } else if (width >= 1480) {
            // Wide desktop: position comfortably 44px outside max-w-7xl (1280px / 2 = 640px)
            trackX = Math.min(width - 32, midX + 640 + 44);
        } else {
            // Standard screens: hug outer right margin
            trackX = Math.min(
                width - 20,
                Math.max(width * 0.96, midX + maxContentHalf + 18)
            );
        }

        const startY = yTop + 140;
        const endY = yContact + hContact - (isMobile ? 60 : 100);

        // Straight vertical line path
        const fullD = `M ${trackX} ${startY} L ${trackX} ${endY}`;
        setPathData(fullD);

        const rawMilestones: {
            id: string;
            targetId: string;
            label: string;
            x: number;
            y: number;
        }[] = [
            {
                id: "hero",
                targetId: "top",
                label: "01 // VISION",
                x: trackX,
                y: yTop + 140
            },
            {
                id: "work",
                targetId: "work",
                label: "02 // SELECTED WORKS",
                x: trackX,
                y: yWork + 80
            },
            {
                id: "cap",
                targetId: "capabilities",
                label: "03 // STUDIO DOSSIER",
                x: trackX,
                y: yCap + 80
            },
            {
                id: "showreel",
                targetId: "showreel",
                label: "04 // 4K ARRIRAW",
                x: trackX,
                y: yShow + 80
            },
            {
                id: "contact",
                targetId: "contact",
                label: "05 // DIRECT DESK",
                x: trackX,
                y: yContact + 80
            }
        ];

        // Compute exact lengths and milestone distances
        requestAnimationFrame(() => {
            if (!pathRef.current) return;
            const len = pathRef.current.getTotalLength();
            setTotalLength(len);

            const computedNodes: MilestoneNode[] = rawMilestones.map(m => ({
                ...m,
                distance: Math.max(0, m.y - startY)
            }));

            setNodes(computedNodes);
        });
    }, []);

    // Update on mount, resize, and scroll
    useEffect(() => {
        const frameId = requestAnimationFrame(() => {
            calculatePath();
        });

        const handleResize = () => {
            calculatePath();
        };

        window.addEventListener("resize", handleResize, { passive: true });

        // Also observe mutations in main to adjust on dynamic content loading
        const mainEl = document.querySelector("main");
        let resizeObserver: ResizeObserver | null = null;
        if (mainEl && typeof ResizeObserver !== "undefined") {
            resizeObserver = new ResizeObserver(() => {
                calculatePath();
            });
            resizeObserver.observe(mainEl);
        }

        return () => {
            cancelAnimationFrame(frameId);
            window.removeEventListener("resize", handleResize);
            if (resizeObserver) resizeObserver.disconnect();
        };
    }, [calculatePath]);

    // Smooth scroll interpolation loop
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = Math.max(
                1,
                document.documentElement.scrollHeight - window.innerHeight
            );
            // Substantial forward lead (~72% of viewport) so the thread stays visibly ahead of user's scroll
            const leadOffset = window.innerHeight * 0.72;
            const progress = Math.min(
                1,
                Math.max(
                    0,
                    (scrollY + leadOffset) / (maxScroll + leadOffset * 0.8)
                )
            );
            targetProgressRef.current = progress;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        // Fast, responsive lerp update frame (0.22) so it reacts immediately without lag
        const animate = () => {
            const diff = targetProgressRef.current - currentProgressRef.current;
            currentProgressRef.current += diff * 0.22;

            if (pathRef.current && totalLength > 0) {
                const curDist = Math.max(
                    1,
                    Math.min(
                        totalLength,
                        currentProgressRef.current * totalLength
                    )
                );
                setDrawLength(curDist);

                try {
                    const pt = pathRef.current.getPointAtLength(curDist);
                    setHeadPos({ x: pt.x, y: pt.y });
                } catch {
                    // ignore transient measurement error
                }
            }

            animFrameRef.current = requestAnimationFrame(animate);
        };

        animFrameRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (animFrameRef.current)
                cancelAnimationFrame(animFrameRef.current);
        };
    }, [totalLength]);

    if (!pathData || dimensions.width === 0) return null;

    return (
        <div
            className="absolute inset-0 pointer-events-none z-[4] overflow-hidden"
            style={{ height: dimensions.height }}
            aria-hidden="true"
        >
            <svg
                ref={svgRef}
                className="w-full h-full overflow-visible"
                width={dimensions.width}
                height={dimensions.height}
                viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    {/* Glowing Filter for shining starlight effect */}
                    <filter
                        id="thread-glow"
                        x="-100%"
                        y="-100%"
                        width="300%"
                        height="300%"
                    >
                        <feGaussianBlur stdDeviation="2.5" result="blur1" />
                        <feGaussianBlur stdDeviation="6.5" result="blur2" />
                        <feMerge>
                            <feMergeNode in="blur2" />
                            <feMergeNode in="blur1" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    {/* Intense Radial Glow for the snake's luminous head */}
                    <radialGradient id="head-glow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                        <stop
                            offset="40%"
                            stopColor="#fbbf24"
                            stopOpacity="0.85"
                        />
                        <stop
                            offset="70%"
                            stopColor="#fbbf24"
                            stopOpacity="0.3"
                        />
                        <stop
                            offset="100%"
                            stopColor="#fbbf24"
                            stopOpacity="0"
                        />
                    </radialGradient>

                    {/* Linear Gradient for glowing snake stroke */}
                    <linearGradient
                        id="snake-stroke-grad"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                    >
                        <stop
                            offset="0%"
                            stopColor="#ffffff"
                            stopOpacity="0.95"
                        />
                        <stop
                            offset="25%"
                            stopColor="#fef08a"
                            stopOpacity="0.85"
                        />
                        <stop
                            offset="50%"
                            stopColor="#ffffff"
                            stopOpacity="0.95"
                        />
                        <stop
                            offset="75%"
                            stopColor="#fbbf24"
                            stopOpacity="0.85"
                        />
                        <stop
                            offset="100%"
                            stopColor="#ffffff"
                            stopOpacity="0.95"
                        />
                    </linearGradient>

                    {/* Milestone Active Glow */}
                    <radialGradient id="node-glow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                        <stop
                            offset="50%"
                            stopColor="#fbbf24"
                            stopOpacity="0.6"
                        />
                        <stop
                            offset="100%"
                            stopColor="#fbbf24"
                            stopOpacity="0"
                        />
                    </radialGradient>
                </defs>

                {/* 1) Subtle Ambient Ghost Track (delicate translucent guideline) */}
                <path
                    d={pathData}
                    stroke="rgba(255, 255, 255, 0.08)"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="3 6"
                    fill="none"
                />

                {/* 2) Hidden reference path used for accurate getPointAtLength & length math */}
                <path ref={pathRef} d={pathData} stroke="none" fill="none" />

                {/* 3) The Shining Snake Path (drawn with scroll progress) */}
                {totalLength > 0 && (
                    <>
                        {/* Outer soft bloom stroke */}
                        <path
                            d={pathData}
                            stroke="rgba(251, 191, 36, 0.35)"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeDasharray={totalLength}
                            strokeDashoffset={Math.max(
                                0,
                                totalLength - drawLength
                            )}
                            filter="url(#thread-glow)"
                            fill="none"
                        />

                        {/* Inner crisp shining core stroke */}
                        <path
                            d={pathData}
                            stroke="url(#snake-stroke-grad)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeDasharray={totalLength}
                            strokeDashoffset={Math.max(
                                0,
                                totalLength - drawLength
                            )}
                            filter="url(#thread-glow)"
                            fill="none"
                        />
                    </>
                )}

                {/* 4) Milestone Nodes (Nodes as in user's reference image) */}
                {nodes.map(node => {
                    const isPassed = drawLength >= node.distance;
                    return (
                        <g
                            key={node.id}
                            className="transition-all duration-700 ease-out"
                        >
                            {/* Outer halo when active */}
                            {isPassed && (
                                <circle
                                    cx={node.x}
                                    cy={node.y}
                                    r="14"
                                    fill="url(#node-glow)"
                                    opacity="0.85"
                                    className="animate-pulse"
                                />
                            )}

                            {/* Node Bead Ring */}
                            <circle
                                cx={node.x}
                                cy={node.y}
                                r={isPassed ? 5 : 3.5}
                                fill={
                                    isPassed
                                        ? "#ffffff"
                                        : "rgba(255, 255, 255, 0.35)"
                                }
                                stroke={
                                    isPassed
                                        ? "#fbbf24"
                                        : "rgba(255, 255, 255, 0.15)"
                                }
                                strokeWidth={isPassed ? "1.5" : "1"}
                                filter={
                                    isPassed ? "url(#thread-glow)" : undefined
                                }
                                className="transition-all duration-500"
                            />

                            {/* Minimalist Micro Label tag when reached */}
                            {isPassed && (
                                <g
                                    transform={`translate(${node.x > dimensions.width * 0.7 ? node.x - 120 : node.x + 14}, ${
                                        node.y + 4
                                    })`}
                                    className="opacity-80 transition-opacity duration-700"
                                >
                                    <text
                                        fill="#f5f5f4"
                                        fontSize="9.5"
                                        fontFamily="monospace"
                                        letterSpacing="0.16em"
                                        className="select-none font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
                                    >
                                        {node.label}
                                    </text>
                                </g>
                            )}
                        </g>
                    );
                })}

                {/* 5) Shining Snake Head (Radiant beacon leading the movement) */}
                {drawLength > 10 && headPos.x !== 0 && (
                    <g transform={`translate(${headPos.x}, ${headPos.y})`}>
                        {/* Animated soft expanding radar pulse */}
                        <circle
                            r="22"
                            fill="rgba(255, 255, 255, 0.12)"
                            className="animate-ping"
                            style={{ animationDuration: "2s" }}
                        />

                        {/* Glowing amber halo */}
                        <circle
                            r="14"
                            fill="url(#head-glow)"
                            filter="url(#thread-glow)"
                        />

                        {/* Crisp white-hot starlight spark */}
                        <circle
                            r="4.5"
                            fill="#ffffff"
                            filter="url(#thread-glow)"
                        />
                        <circle r="2" fill="#ffffff" />
                    </g>
                )}
            </svg>
        </div>
    );
}
