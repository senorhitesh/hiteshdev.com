(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Footer/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$Footer$2f$deskbreak$2d$coder$2d$idle$2e$gif$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$Footer$2f$deskbreak$2d$coder$2d$idle$2e$gif__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/Footer/deskbreak-coder-idle.gif.mjs { IMAGE => "[project]/public/Footer/deskbreak-coder-idle.gif (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$Footer$2f$deskbreak$2d$coder$2d$waving$2e$gif$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$Footer$2f$deskbreak$2d$coder$2d$waving$2e$gif__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/Footer/deskbreak-coder-waving.gif.mjs { IMAGE => "[project]/public/Footer/deskbreak-coder-waving.gif (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const playPullSound = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        // Rising pitch for the stretching tension
        osc.frequency.setValueAtTime(750, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(450, ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.16);
    } catch (e) {
        console.warn("Audio Context failed", e);
    }
};
const playSnapSound = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        // Snap contact pop
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(350, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.09);
        // Boing/vibration decay
        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.type = "sine";
        osc2.frequency.setValueAtTime(120, ctx.currentTime);
        // Create a vibrating pitch wobble
        osc2.frequency.linearRampToValueAtTime(150, ctx.currentTime + 0.05);
        osc2.frequency.linearRampToValueAtTime(100, ctx.currentTime + 0.1);
        osc2.frequency.linearRampToValueAtTime(120, ctx.currentTime + 0.15);
        gain2.gain.setValueAtTime(0.06, ctx.currentTime);
        gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
        osc2.connect(gain2);
        gain2.connect(ctx.destination);
        osc2.start();
        osc2.stop(ctx.currentTime + 0.21);
    } catch (e) {
        console.warn("Audio Context failed", e);
    }
};
const Footer = ({ cn = "" })=>{
    _s();
    const [isHovering, setisHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const div = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `max-w-2xl relative gap-3 flex justify-between items-center  w-full mx-auto    ${cn ? `${cn}` : "relative"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-mono text-neutral-900 dark:text-neutral-300 ",
                        children: "© Hitesh Suthar"
                    }, void 0, false, {
                        fileName: "[project]/components/Footer/Footer.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-mono text-neutral-900 dark:text-neutral-300 ",
                        children: "Built with Chai & ❤"
                    }, void 0, false, {
                        fileName: "[project]/components/Footer/Footer.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Footer/Footer.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                drag: true,
                onDragStart: playPullSound,
                onDragEnd: playSnapSound,
                onMouseEnter: ()=>{
                    setisHovering(true);
                },
                onMouseLeave: ()=>{
                    setisHovering(false);
                },
                ref: div,
                className: "h-15 w-15 cursor-grab",
                dragConstraints: {
                    top: -10,
                    left: -10,
                    right: 10,
                    bottom: 10
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    loading: "eager",
                    src: isHovering ? __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$Footer$2f$deskbreak$2d$coder$2d$waving$2e$gif$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$Footer$2f$deskbreak$2d$coder$2d$waving$2e$gif__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src : __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$Footer$2f$deskbreak$2d$coder$2d$idle$2e$gif$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$Footer$2f$deskbreak$2d$coder$2d$idle$2e$gif__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
                    alt: "Coding",
                    className: "-scale-x-100 pointer-events-none"
                }, void 0, false, {
                    fileName: "[project]/components/Footer/Footer.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/Footer/Footer.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Footer/Footer.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Footer, "IbtQVjPmlUB2SOzVAt1hU6XdWNA=");
_c = Footer;
const __TURBOPACK__default__export__ = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Global/BelowBlur.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
const DEFAULT_CONFIG = {
    position: 'bottom',
    strength: 2,
    height: '6rem',
    divCount: 5,
    exponential: false,
    zIndex: 1000,
    animated: false,
    duration: '0.3s',
    easing: 'ease-out',
    opacity: 1,
    curve: 'linear',
    responsive: false,
    target: 'parent',
    className: '',
    style: {}
};
const PRESETS = {
    top: {
        position: 'top',
        height: '6rem'
    },
    bottom: {
        position: 'bottom',
        height: '6rem'
    },
    left: {
        position: 'left',
        height: '6rem'
    },
    right: {
        position: 'right',
        height: '6rem'
    },
    subtle: {
        height: '4rem',
        strength: 1,
        opacity: 0.8,
        divCount: 3
    },
    intense: {
        height: '10rem',
        strength: 4,
        divCount: 8,
        exponential: true
    },
    smooth: {
        height: '8rem',
        curve: 'bezier',
        divCount: 10
    },
    sharp: {
        height: '5rem',
        curve: 'linear',
        divCount: 4
    },
    header: {
        position: 'top',
        height: '8rem',
        curve: 'ease-out'
    },
    footer: {
        position: 'bottom',
        height: '8rem',
        curve: 'ease-out'
    },
    sidebar: {
        position: 'left',
        height: '6rem',
        strength: 2.5
    },
    'page-header': {
        position: 'top',
        height: '10rem',
        target: 'page',
        strength: 3
    },
    'page-footer': {
        position: 'bottom',
        height: '10rem',
        target: 'page',
        strength: 3
    }
};
const CURVE_FUNCTIONS = {
    linear: (p)=>p,
    bezier: (p)=>p * p * (3 - 2 * p),
    'ease-in': (p)=>p * p,
    'ease-out': (p)=>1 - Math.pow(1 - p, 2),
    'ease-in-out': (p)=>p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2
};
const mergeConfigs = (...configs)=>{
    return configs.reduce((acc, config)=>({
            ...acc,
            ...config
        }), {});
};
const getGradientDirection = (position)=>{
    const directions = {
        top: 'to top',
        bottom: 'to bottom',
        left: 'to left',
        right: 'to right'
    };
    return directions[position] || 'to bottom';
};
const debounce = (fn, wait)=>{
    let t;
    return (...a)=>{
        clearTimeout(t);
        t = setTimeout(()=>fn(...a), wait);
    };
};
const useResponsiveDimension = (responsive, config, key)=>{
    _s();
    const [val, setVal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(config[key]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useResponsiveDimension.useEffect": ()=>{
            if (!responsive) return;
            const calc = {
                "useResponsiveDimension.useEffect.calc": ()=>{
                    const w = window.innerWidth;
                    let v = config[key];
                    const cap = {
                        "useResponsiveDimension.useEffect.calc.cap": (s)=>s.charAt(0).toUpperCase() + s.slice(1)
                    }["useResponsiveDimension.useEffect.calc.cap"];
                    const k = cap(key);
                    if (w <= 480 && config['mobile' + k]) v = config['mobile' + k];
                    else if (w <= 768 && config['tablet' + k]) v = config['tablet' + k];
                    else if (w <= 1024 && config['desktop' + k]) v = config['desktop' + k];
                    setVal(v);
                }
            }["useResponsiveDimension.useEffect.calc"];
            const deb = debounce(calc, 100);
            calc();
            window.addEventListener('resize', deb);
            return ({
                "useResponsiveDimension.useEffect": ()=>window.removeEventListener('resize', deb)
            })["useResponsiveDimension.useEffect"];
        }
    }["useResponsiveDimension.useEffect"], [
        responsive,
        config,
        key
    ]);
    return responsive ? val : config[key];
};
_s(useResponsiveDimension, "KCyovYlvTeOkYf9aE4eMe2FnTgU=");
const useIntersectionObserver = (ref, shouldObserve = false)=>{
    _s1();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!shouldObserve);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIntersectionObserver.useEffect": ()=>{
            if (!shouldObserve || !ref.current) return;
            const observer = new IntersectionObserver({
                "useIntersectionObserver.useEffect": ([entry])=>setIsVisible(entry.isIntersecting)
            }["useIntersectionObserver.useEffect"], {
                threshold: 0.1
            });
            observer.observe(ref.current);
            return ({
                "useIntersectionObserver.useEffect": ()=>observer.disconnect()
            })["useIntersectionObserver.useEffect"];
        }
    }["useIntersectionObserver.useEffect"], [
        ref,
        shouldObserve
    ]);
    return isVisible;
};
_s1(useIntersectionObserver, "qWfkRchSz1HMIf5S7ILAWwQPHDg=");
const GradualBlur = (props)=>{
    _s2();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GradualBlur.useMemo[config]": ()=>{
            const presetConfig = props.preset && PRESETS[props.preset] ? PRESETS[props.preset] : {};
            return mergeConfigs(DEFAULT_CONFIG, presetConfig, props);
        }
    }["GradualBlur.useMemo[config]"], [
        props
    ]);
    const responsiveHeight = useResponsiveDimension(config.responsive, config, 'height');
    const responsiveWidth = useResponsiveDimension(config.responsive, config, 'width');
    const isVisible = useIntersectionObserver(containerRef, config.animated === 'scroll');
    const blurDivs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GradualBlur.useMemo[blurDivs]": ()=>{
            const divs = [];
            const increment = 100 / config.divCount;
            const currentStrength = isHovered && config.hoverIntensity ? config.strength * config.hoverIntensity : config.strength;
            const curveFunc = CURVE_FUNCTIONS[config.curve] || CURVE_FUNCTIONS.linear;
            for(let i = 1; i <= config.divCount; i++){
                let progress = i / config.divCount;
                progress = curveFunc(progress);
                let blurValue;
                if (config.exponential) {
                    blurValue = Number(Math.pow(2, progress * 4)) * 0.0625 * currentStrength;
                } else {
                    blurValue = 0.0625 * (progress * config.divCount + 1) * currentStrength;
                }
                const p1 = Math.round((increment * i - increment) * 10) / 10;
                const p2 = Math.round(increment * i * 10) / 10;
                const p3 = Math.round((increment * i + increment) * 10) / 10;
                const p4 = Math.round((increment * i + increment * 2) * 10) / 10;
                let gradient = `transparent ${p1}%, black ${p2}%`;
                if (p3 <= 100) gradient += `, black ${p3}%`;
                if (p4 <= 100) gradient += `, transparent ${p4}%`;
                const direction = getGradientDirection(config.position);
                const divStyle = {
                    maskImage: `linear-gradient(${direction}, ${gradient})`,
                    WebkitMaskImage: `linear-gradient(${direction}, ${gradient})`,
                    backdropFilter: `blur(${blurValue.toFixed(3)}rem)`,
                    opacity: config.opacity,
                    transition: config.animated && config.animated !== 'scroll' ? `backdrop-filter ${config.duration} ${config.easing}` : undefined
                };
                divs.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0",
                    style: divStyle
                }, i, false, {
                    fileName: "[project]/components/Global/BelowBlur.tsx",
                    lineNumber: 222,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)));
            }
            return divs;
        }
    }["GradualBlur.useMemo[blurDivs]"], [
        config,
        isHovered
    ]);
    const containerStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GradualBlur.useMemo[containerStyle]": ()=>{
            const isVertical = [
                'top',
                'bottom'
            ].includes(config.position);
            const isHorizontal = [
                'left',
                'right'
            ].includes(config.position);
            const isPageTarget = config.target === 'page';
            const baseStyle = {
                position: isPageTarget ? 'fixed' : 'absolute',
                pointerEvents: config.hoverIntensity ? 'auto' : 'none',
                opacity: isVisible ? 1 : 0,
                transition: config.animated ? `opacity ${config.duration} ${config.easing}` : undefined,
                zIndex: isPageTarget ? config.zIndex + 100 : config.zIndex,
                ...config.style
            };
            if (isVertical) {
                baseStyle.height = responsiveHeight;
                baseStyle.width = responsiveWidth || '100%';
                baseStyle[config.position] = 0;
                baseStyle.left = 0;
                baseStyle.right = 0;
            } else if (isHorizontal) {
                baseStyle.width = responsiveWidth || responsiveHeight;
                baseStyle.height = '100%';
                baseStyle[config.position] = 0;
                baseStyle.top = 0;
                baseStyle.bottom = 0;
            }
            return baseStyle;
        }
    }["GradualBlur.useMemo[containerStyle]"], [
        config,
        responsiveHeight,
        responsiveWidth,
        isVisible
    ]);
    const { hoverIntensity, animated, onAnimationComplete, duration } = config;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GradualBlur.useEffect": ()=>{
            if (isVisible && animated === 'scroll' && onAnimationComplete) {
                const t = setTimeout({
                    "GradualBlur.useEffect.t": ()=>onAnimationComplete()
                }["GradualBlur.useEffect.t"], parseFloat(duration) * 1000);
                return ({
                    "GradualBlur.useEffect": ()=>clearTimeout(t)
                })["GradualBlur.useEffect"];
            }
        }
    }["GradualBlur.useEffect"], [
        isVisible,
        animated,
        onAnimationComplete,
        duration
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: `gradual-blur relative isolate ${config.target === 'page' ? 'gradual-blur-page' : 'gradual-blur-parent'} ${config.className}`,
        style: containerStyle,
        onMouseEnter: hoverIntensity ? ()=>setIsHovered(true) : undefined,
        onMouseLeave: hoverIntensity ? ()=>setIsHovered(false) : undefined,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-full",
                children: blurDivs
            }, void 0, false, {
                fileName: "[project]/components/Global/BelowBlur.tsx",
                lineNumber: 275,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            props.children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: props.children
            }, void 0, false, {
                fileName: "[project]/components/Global/BelowBlur.tsx",
                lineNumber: 276,
                columnNumber: 26
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Global/BelowBlur.tsx",
        lineNumber: 268,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s2(GradualBlur, "1UoKlkVouai2fcOR8xz0nJLuJJ0=", false, function() {
    return [
        useResponsiveDimension,
        useResponsiveDimension,
        useIntersectionObserver
    ];
});
_c = GradualBlur;
const GradualBlurMemo = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(GradualBlur);
_c1 = GradualBlurMemo;
GradualBlurMemo.displayName = 'GradualBlur';
GradualBlurMemo.PRESETS = PRESETS;
GradualBlurMemo.CURVE_FUNCTIONS = CURVE_FUNCTIONS;
const __TURBOPACK__default__export__ = GradualBlurMemo;
const injectStyles = ()=>{
    if (typeof document === 'undefined') return;
    const id = 'gradual-blur-styles';
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id;
    el.textContent = `.gradual-blur{pointer-events:none;transition:opacity .3s ease-out}.gradual-blur-inner{pointer-events:none}`;
    document.head.appendChild(el);
};
if (typeof document !== 'undefined') {
    injectStyles();
}
var _c, _c1;
__turbopack_context__.k.register(_c, "GradualBlur");
__turbopack_context__.k.register(_c1, "GradualBlurMemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Global/ShineText.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$animation$2d$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-animation-frame.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const ShinyText = ({ text, disabled = false, speed = 2, className = "", color = "#b5b5b5", shineColor = "#ffffff", spread = 120, yoyo = false, pauseOnHover = false, direction = "left", delay = 0 })=>{
    _s();
    const [isPaused, setIsPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const elapsedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const directionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(direction === "left" ? 1 : -1);
    const animationDuration = speed * 1000;
    const delayDuration = delay * 1000;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$animation$2d$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimationFrame"])({
        "ShinyText.useAnimationFrame": (time)=>{
            if (disabled || isPaused) {
                lastTimeRef.current = null;
                return;
            }
            if (lastTimeRef.current === null) {
                lastTimeRef.current = time;
                return;
            }
            const deltaTime = time - lastTimeRef.current;
            lastTimeRef.current = time;
            elapsedRef.current += deltaTime;
            // Animation goes from 0 to 100
            if (yoyo) {
                const cycleDuration = animationDuration + delayDuration;
                const fullCycle = cycleDuration * 2;
                const cycleTime = elapsedRef.current % fullCycle;
                if (cycleTime < animationDuration) {
                    // Forward animation: 0 -> 100
                    const p = cycleTime / animationDuration * 100;
                    progress.set(directionRef.current === 1 ? p : 100 - p);
                } else if (cycleTime < cycleDuration) {
                    // Delay at end
                    progress.set(directionRef.current === 1 ? 100 : 0);
                } else if (cycleTime < cycleDuration + animationDuration) {
                    // Reverse animation: 100 -> 0
                    const reverseTime = cycleTime - cycleDuration;
                    const p = 100 - reverseTime / animationDuration * 100;
                    progress.set(directionRef.current === 1 ? p : 100 - p);
                } else {
                    // Delay at start
                    progress.set(directionRef.current === 1 ? 0 : 100);
                }
            } else {
                const cycleDuration = animationDuration + delayDuration;
                const cycleTime = elapsedRef.current % cycleDuration;
                if (cycleTime < animationDuration) {
                    // Animation phase: 0 -> 100
                    const p = cycleTime / animationDuration * 100;
                    progress.set(directionRef.current === 1 ? p : 100 - p);
                } else {
                    // Delay phase - hold at end (shine off-screen)
                    progress.set(directionRef.current === 1 ? 100 : 0);
                }
            }
        }
    }["ShinyText.useAnimationFrame"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShinyText.useEffect": ()=>{
            directionRef.current = direction === "left" ? 1 : -1;
            elapsedRef.current = 0;
            progress.set(0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["ShinyText.useEffect"], [
        direction
    ]);
    // Transform: p=0 -> 150% (shine off right), p=100 -> -50% (shine off left)
    const backgroundPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(progress, {
        "ShinyText.useTransform[backgroundPosition]": (p)=>`${150 - p * 2}% center`
    }["ShinyText.useTransform[backgroundPosition]"]);
    const handleMouseEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ShinyText.useCallback[handleMouseEnter]": ()=>{
            if (pauseOnHover) setIsPaused(true);
        }
    }["ShinyText.useCallback[handleMouseEnter]"], [
        pauseOnHover
    ]);
    const handleMouseLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ShinyText.useCallback[handleMouseLeave]": ()=>{
            if (pauseOnHover) setIsPaused(false);
        }
    }["ShinyText.useCallback[handleMouseLeave]"], [
        pauseOnHover
    ]);
    const gradientStyle = {
        backgroundImage: `linear-gradient(${spread}deg, ${color} 0%, ${color} 35%, ${shineColor} 50%, ${color} 65%, ${color} 100%)`,
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
        className: `inline-block ${className}`,
        style: {
            ...gradientStyle,
            backgroundPosition
        },
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        children: text
    }, void 0, false, {
        fileName: "[project]/components/Global/ShineText.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ShinyText, "co3YAjti6vji+J2Ba/g5Ec1mEUs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$animation$2d$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimationFrame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = ShinyText;
const __TURBOPACK__default__export__ = ShinyText;
var _c;
__turbopack_context__.k.register(_c, "ShinyText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/NAVBAR.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const NAVBAR = ()=>{
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const navItems = [
        {
            href: "/",
            label: "Home"
        },
        {
            href: "/blogs",
            label: "Blogs"
        },
        {
            href: "/component",
            label: "Components"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full text-[14px] font-sans mx-auto flex items-center mt-3 justify-between max-w-2xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-1"
            }, void 0, false, {
                fileName: "[project]/components/NAVBAR.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: navItems.map(({ href, label })=>{
                    const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: href,
                        "aria-current": isActive ? "page" : undefined,
                        className: "group inline-flex flex-col items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: isActive ? "text-neutral-800 relative transition-colors  " : "text-neutral-600 relative transition-colors hover:text-neutral-800",
                            children: [
                                label,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `${isActive && "border border-neutral-400 w-full  border-dashed left-1/2 bottom-0.5 -translate-x-1/2 "}  absolute `
                                }, void 0, false, {
                                    fileName: "[project]/components/NAVBAR.tsx",
                                    lineNumber: 38,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/NAVBAR.tsx",
                            lineNumber: 30,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, href, false, {
                        fileName: "[project]/components/NAVBAR.tsx",
                        lineNumber: 24,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/components/NAVBAR.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/NAVBAR.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(NAVBAR, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = NAVBAR;
const __TURBOPACK__default__export__ = NAVBAR;
var _c;
__turbopack_context__.k.register(_c, "NAVBAR");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Profile/GithubContribution.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GithubContribution
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$github$2d$activity$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/github-activity.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function GithubContribution() {
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const explicitTheme = {
        light: [
            "#ffffff",
            "#d8ecff",
            "#a4d3ff",
            "#6ab7ff",
            "#1b91ff"
        ],
        dark: [
            "#161616",
            "#2a2a2a",
            "#525252",
            "#8a8a8a",
            "#d4d4d4"
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full overflow-hidden ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col mx-auto overflow-hidden w-full max-w-2xl relative flex-1 items-center justify-center bg-zinc-50 dark:bg-neutral-900",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex flex-1   w-full max-w-3xl flex-col items-center justify-center py-4 px-2 bg-white dark:bg-[#09090B] sm:items-start",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$github$2d$activity$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    showMonths: true,
                    year: 2026,
                    username: "senorhitesh"
                }, void 0, false, {
                    fileName: "[project]/components/Profile/GithubContribution.tsx",
                    lineNumber: 15,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Profile/GithubContribution.tsx",
                lineNumber: 14,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Profile/GithubContribution.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Profile/GithubContribution.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(GithubContribution, "JkSxfi8+JQlqgIgDOc3wQN+nVIw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = GithubContribution;
var _c;
__turbopack_context__.k.register(_c, "GithubContribution");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Profile/Profile.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$profile$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$profile$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/profile.jpeg.mjs { IMAGE => "[project]/public/profile.jpeg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Global$2f$ShineText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Global/ShineText.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$calcom$2f$embed$2d$react$2f$dist$2f$Cal$2e$es$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@calcom/embed-react/dist/Cal.es.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const phrases = [
    "Engineer",
    "Founder @helxstudio",
    "Cooking something"
];
const Profile = ()=>{
    _s();
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [phraseIdx, setPhraseIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Profile.useEffect": ()=>{
            const tick = {
                "Profile.useEffect.tick": ()=>{
                    const timeString = new Date().toLocaleTimeString("en-GB", {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true
                    });
                    setCurrentTime(`IST ${timeString}`);
                }
            }["Profile.useEffect.tick"];
            tick();
            const id = setInterval(tick, 1000);
            return ({
                "Profile.useEffect": ()=>clearInterval(id)
            })["Profile.useEffect"];
        }
    }["Profile.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Profile.useEffect": ()=>{
            const id = setInterval({
                "Profile.useEffect.id": ()=>{
                    setVisible(false);
                    setTimeout({
                        "Profile.useEffect.id": ()=>{
                            setPhraseIdx({
                                "Profile.useEffect.id": (i)=>(i + 1) % phrases.length
                            }["Profile.useEffect.id"]);
                            setVisible(true);
                        }
                    }["Profile.useEffect.id"], 350);
                }
            }["Profile.useEffect.id"], 2200);
            return ({
                "Profile.useEffect": ()=>clearInterval(id)
            })["Profile.useEffect"];
        }
    }["Profile.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Profile.useEffect": ()=>{
            ({
                "Profile.useEffect": async function() {
                    const cal = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$calcom$2f$embed$2d$react$2f$dist$2f$Cal$2e$es$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCalApi"])({
                        namespace: "quickchat"
                    });
                    cal("ui", {
                        hideEventTypeDetails: false,
                        layout: "month_view"
                    });
                }
            })["Profile.useEffect"]();
        }
    }["Profile.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white z-12 mt-10 dark:bg-[#09090B]\r\n\n                     w-full mx-auto  max-w-2xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap sm:flex-nowrap items-start justify-between gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-20 h-20 sm:w-26 sm:h-26 rounded-[14px] bg-zinc-100 relative    -zinc-200  -700 overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white absolute h-full blur-lg w-2 profile-sweep left-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Profile/Profile.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$profile$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$profile$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                            loading: "eager",
                                            alt: "Hitesh Suthar",
                                            className: "object-cover pointer-events-none w-full h-full"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Profile/Profile.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Profile/Profile.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -bottom-0.5 -right-0.5 w-2.75 h-2.75 rounded-full bg-green-500  -2  -white"
                                }, void 0, false, {
                                    fileName: "[project]/components/Profile/Profile.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Profile/Profile.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Global$2f$ShineText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    text: "✨ Hola, I'm",
                                    speed: 2,
                                    delay: 0,
                                    color: "#666666",
                                    shineColor: "#d6ddff",
                                    spread: 120,
                                    direction: "left",
                                    yoyo: false,
                                    pauseOnHover: false,
                                    disabled: false,
                                    className: "text-[10px] text-zinc-400 uppercase tracking-[0.06em] font-medium mb-0.5"
                                }, void 0, false, {
                                    fileName: "[project]/components/Profile/Profile.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-2xl sm:text-3xl font-Neue font-semibold dark:text-neutral-300 text-zinc-900 tracking-tight mb-0.5",
                                    children: "Hitesh Suthar"
                                }, void 0, false, {
                                    fileName: "[project]/components/Profile/Profile.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `text-[13px] sm:text-[14px] text-zinc-500 transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`,
                                    children: phrases[phraseIdx]
                                }, void 0, false, {
                                    fileName: "[project]/components/Profile/Profile.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Profile/Profile.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Profile/Profile.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono text-[11px] bg/ dark:bg-neutral-900    /60  -800 text-neutral-600 dark:text-neutral-400 px-2.5 py-1 rounded-full shrink-0",
                    children: currentTime
                }, void 0, false, {
                    fileName: "[project]/components/Profile/Profile.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Profile/Profile.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/Profile/Profile.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Profile, "NuIlkL21RHvMnF4pRYuhqOB+q04=");
_c = Profile;
const __TURBOPACK__default__export__ = Profile;
var _c;
__turbopack_context__.k.register(_c, "Profile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/lenis-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LenisProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis-react.mjs [app-client] (ecmascript)");
"use client";
;
;
function LenisProvider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactLenis"], {
        root: true,
        options: {
            lerp: 0.1,
            duration: 1.2,
            smoothWheel: true
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/lenis-provider.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = LenisProvider;
var _c;
__turbopack_context__.k.register(_c, "LenisProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/motion-primitives/accordion.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Accordion",
    ()=>Accordion,
    "AccordionContent",
    ()=>AccordionContent,
    "AccordionItem",
    ()=>AccordionItem,
    "AccordionTrigger",
    ()=>AccordionTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$MotionConfig$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/MotionConfig/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cn/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
"use client";
;
;
;
const AccordionContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function useAccordion() {
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AccordionContext);
    if (!context) {
        throw new Error("useAccordion must be used within an AccordionProvider");
    }
    return context;
}
_s(useAccordion, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
function AccordionProvider({ children, variants, expandedValue: externalExpandedValue, onValueChange }) {
    _s1();
    const [internalExpandedValue, setInternalExpandedValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const expandedValue = externalExpandedValue !== undefined ? externalExpandedValue : internalExpandedValue;
    const toggleItem = (value)=>{
        const newValue = expandedValue === value ? null : value;
        if (onValueChange) {
            onValueChange(newValue);
        } else {
            setInternalExpandedValue(newValue);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionContext.Provider, {
        value: {
            expandedValue,
            toggleItem,
            variants
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/motion-primitives/accordion.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_s1(AccordionProvider, "2seLO5VrPMY1I7pFC4nKclcAt5s=");
_c = AccordionProvider;
function Accordion({ children, className, transition, variants, expandedValue, onValueChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$MotionConfig$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionConfig"], {
        transition: transition,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("relative", className),
            "aria-orientation": "vertical",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionProvider, {
                variants: variants,
                expandedValue: expandedValue,
                onValueChange: onValueChange,
                children: children
            }, void 0, false, {
                fileName: "[project]/components/motion-primitives/accordion.tsx",
                lineNumber: 88,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/motion-primitives/accordion.tsx",
            lineNumber: 87,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/motion-primitives/accordion.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_c1 = Accordion;
function AccordionItem({ value, children, className }) {
    _s2();
    const { expandedValue } = useAccordion();
    const isExpanded = value === expandedValue;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("overflow-hidden", className),
        ...isExpanded ? {
            "data-expanded": ""
        } : {
            "data-closed": ""
        },
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.map(children, (child)=>{
            if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(child)) {
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(child, {
                    ...child.props,
                    value,
                    expanded: isExpanded,
                    extra: true
                });
            }
            return child;
        })
    }, void 0, false, {
        fileName: "[project]/components/motion-primitives/accordion.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_s2(AccordionItem, "3CecG0KuyZRR78t+YmshilqbdBM=", false, function() {
    return [
        useAccordion
    ];
});
_c2 = AccordionItem;
function AccordionTrigger({ children, className, ...props }) {
    _s3();
    const { toggleItem, expandedValue } = useAccordion();
    const value = props.value;
    const isExpanded = value === expandedValue;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        "aria-label": "accordian",
        onClick: ()=>value !== undefined && toggleItem(value),
        "aria-expanded": isExpanded,
        type: "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("group", className),
        ...isExpanded ? {
            "data-expanded": ""
        } : {
            "data-closed": ""
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/motion-primitives/accordion.tsx",
        lineNumber: 145,
        columnNumber: 5
    }, this);
}
_s3(AccordionTrigger, "0v8+SdAwKbSwV+Hk/kCD7h/iiRs=", false, function() {
    return [
        useAccordion
    ];
});
_c3 = AccordionTrigger;
function AccordionContent({ children, className, ...props }) {
    _s4();
    const { expandedValue, variants } = useAccordion();
    const value = props.value;
    const isExpanded = value === expandedValue;
    const BASE_VARIANTS = {
        expanded: {
            height: "auto",
            opacity: 1
        },
        collapsed: {
            height: 0,
            opacity: 0
        }
    };
    const combinedVariants = {
        expanded: {
            ...BASE_VARIANTS.expanded,
            ...variants?.expanded
        },
        collapsed: {
            ...BASE_VARIANTS.collapsed,
            ...variants?.collapsed
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        initial: false,
        children: isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
            initial: "collapsed",
            animate: "expanded",
            exit: "collapsed",
            variants: combinedVariants,
            className: className,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/motion-primitives/accordion.tsx",
            lineNumber: 185,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/motion-primitives/accordion.tsx",
        lineNumber: 183,
        columnNumber: 5
    }, this);
}
_s4(AccordionContent, "fgd1tQ3YWB9Jyw6y4RRhlmDewAk=", false, function() {
    return [
        useAccordion
    ];
});
_c4 = AccordionContent;
;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "AccordionProvider");
__turbopack_context__.k.register(_c1, "Accordion");
__turbopack_context__.k.register(_c2, "AccordionItem");
__turbopack_context__.k.register(_c3, "AccordionTrigger");
__turbopack_context__.k.register(_c4, "AccordionContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/theme-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
"use client";
;
;
function ThemeProvider({ children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/theme-provider.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
_c = ThemeProvider;
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/github-activity.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GitHubActivity",
    ()=>GitHubActivity,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cn/dist/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const DEFAULT_ACCENT = "#39d353";
const DEFAULT_CELL_SIZE = 11;
const DEFAULT_LABEL = "Top contributions in:";
const DEFAULT_MONTHS = 12;
const WEEKS_PER_MONTH = 365.25 / 12 / 7;
const STACK_LIMIT = 3;
const MIN_CARD_WIDTH = 320;
const MIN_LABEL_WEEKS = 3;
const CARD_PADDING = 32;
const gapFor = (cellSize)=>Math.max(2, Math.round(cellSize / 4));
// never zero: weeks.slice(-0) would hand back the whole history instead of nothing
const weeksFor = (months)=>Math.max(1, Math.ceil(months * WEEKS_PER_MONTH));
const useIsoLayoutEffect = ("TURBOPACK compile-time truthy", 1) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : "TURBOPACK unreachable";
const EASE_OUT = [
    0.22,
    1,
    0.36,
    1
];
const SPRING = {
    type: "spring",
    bounce: 0.2,
    duration: 0.62
};
const HEADER_SPRING = {
    ...SPRING,
    bounce: 0.45
};
const ROW_SPRING = {
    ...SPRING,
    bounce: 0.26,
    delay: 0.08
};
const ROW_OFFSET = 16;
const CELL_FADE = {
    duration: 0.2,
    ease: EASE_OUT
};
const TOOLTIP_FADE = {
    duration: 0.14,
    ease: EASE_OUT
};
const TOOLTIP_EDGE = 8;
const COLUMN_STAGGER = 0.012;
const LABEL_BLUR = 6;
const LABEL_REVEAL = {
    duration: 0.45,
    ease: EASE_OUT
};
const LEVELS = [
    0,
    1,
    2,
    3,
    4
];
const MONTH_NAMES = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
function toMonthLabels(weeks) {
    const labels = weeks.map(()=>null);
    const monthAt = (index)=>weeks[index]?.[0]?.date.slice(5, 7);
    let start = 0;
    for(let i = 1; i <= weeks.length; i++){
        if (i < weeks.length && monthAt(i) === monthAt(start)) continue;
        // a shorter run is narrower than the label itself, so it would sit under the next month
        if (i - start >= MIN_LABEL_WEEKS) {
            labels[start] = MONTH_NAMES[Number(monthAt(start)) - 1] ?? null;
        }
        start = i;
    }
    return labels;
}
const LEVEL_OPACITY = {
    0: 0,
    1: 0.3,
    2: 0.52,
    3: 0.76,
    4: 1
};
const DATE_FORMAT = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
});
function describeDay({ count, date }) {
    const noun = count === 1 ? "contribution" : "contributions";
    return `${count} ${noun} on ${DATE_FORMAT.format(new Date(`${date}T00:00:00`))}`;
}
const CALENDAR_API = "https://github-contributions-api.jogruber.de/v4";
const EVENTS_API = "https://api.github.com/users";
async function fetchCalendar(login) {
    const res = await fetch(`${CALENDAR_API}/${login}?y=last`);
    if (!res.ok) return null;
    const days = (await res.json())?.contributions ?? [];
    if (!days.length) return null;
    // columns are weeks, so the first day has to be a sunday or every column shears
    const start = days.findIndex((day)=>new Date(`${day.date}T00:00:00Z`).getUTCDay() === 0);
    return days.slice(start < 0 ? 0 : start).map((day)=>({
            date: day.date,
            count: day.count,
            level: Math.min(4, Math.max(0, day.level))
        }));
}
async function fetchRepos(login) {
    const res = await fetch(`${EVENTS_API}/${login}/events/public?per_page=100`);
    if (!res.ok) return [];
    const events = await res.json();
    const counts = new Map();
    for (const event of events){
        if (event.type !== "PushEvent" || !event.repo) continue;
        const commits = event.payload?.commits?.length ?? 1;
        counts.set(event.repo.name, (counts.get(event.repo.name) ?? 0) + commits);
    }
    return [
        ...counts.entries()
    ].sort(([, a], [, b])=>b - a).slice(0, STACK_LIMIT).map(([fullName, count])=>{
        const [owner, name] = fullName.split("/");
        return {
            name,
            count,
            href: `https://github.com/${fullName}`,
            // github has no repo logo, only an owner avatar, so own repos use the initial
            logo: owner.toLowerCase() === login.toLowerCase() ? undefined : // eslint-disable-next-line @next/next/no-img-element
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: `https://github.com/${owner}.png?size=64`,
                alt: ""
            }, void 0, false, {
                fileName: "[project]/components/ui/github-activity.tsx",
                lineNumber: 170,
                columnNumber: 13
            }, this)
        };
    });
}
function useGitHubUser(login) {
    _s();
    const [data, setData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useGitHubUser.useEffect": ()=>{
            if (!login) return;
            let active = true;
            Promise.all([
                fetchCalendar(login),
                fetchRepos(login)
            ]).then({
                "useGitHubUser.useEffect": ([contributions, repos])=>{
                    if (active && contributions) setData({
                        contributions,
                        repos
                    });
                }
            }["useGitHubUser.useEffect"]).catch({
                "useGitHubUser.useEffect": ()=>{}
            }["useGitHubUser.useEffect"]);
            return ({
                "useGitHubUser.useEffect": ()=>{
                    active = false;
                }
            })["useGitHubUser.useEffect"];
        }
    }["useGitHubUser.useEffect"], [
        login
    ]);
    return data;
}
_s(useGitHubUser, "WZ2PO9A64oHRexE1CE+yX3ebuoA=");
function emptyDays(weeks) {
    const today = new Date();
    return Array.from({
        length: weeks * 7
    }, (_, i)=>{
        const date = new Date(today);
        date.setDate(date.getDate() - (weeks * 7 - 1 - i));
        return {
            date: date.toISOString().slice(0, 10),
            count: 0,
            level: 0
        };
    });
}
function toScale(accent) {
    if (typeof accent === "string") {
        return LEVELS.map((level)=>({
                backgroundColor: accent,
                opacity: LEVEL_OPACITY[level]
            }));
    }
    const colors = accent.length > 4 ? accent : [
        "transparent",
        ...accent
    ];
    return LEVELS.map((level)=>{
        const color = colors[level] ?? colors.at(-1) ?? "transparent";
        return {
            backgroundColor: color,
            opacity: color === "transparent" ? 0 : 1
        };
    });
}
function toWeeks(contributions) {
    const weeks = [];
    for(let i = 0; i < contributions.length; i += 7){
        weeks.push(contributions.slice(i, i + 7));
    }
    return weeks;
}
function useFittedColumns(cellSize, gap) {
    _s1();
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const [columns, setColumns] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]();
    useIsoLayoutEffect({
        "useFittedColumns.useIsoLayoutEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const measure = {
                "useFittedColumns.useIsoLayoutEffect.measure": ()=>setColumns(Math.max(1, Math.floor((el.clientWidth + gap) / (cellSize + gap))))
            }["useFittedColumns.useIsoLayoutEffect.measure"];
            measure();
            const observer = new ResizeObserver(measure);
            observer.observe(el);
            return ({
                "useFittedColumns.useIsoLayoutEffect": ()=>observer.disconnect()
            })["useFittedColumns.useIsoLayoutEffect"];
        }
    }["useFittedColumns.useIsoLayoutEffect"], [
        cellSize,
        gap
    ]);
    return [
        ref,
        columns
    ];
}
_s1(useFittedColumns, "gcqVzvXrXHshzm6yUMVLzfH5zCQ=", false, function() {
    return [
        useIsoLayoutEffect
    ];
});
const Tooltip = ({ hovered, reduceMotion })=>{
    _s2();
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const [left, setLeft] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](hovered.x);
    useIsoLayoutEffect({
        "Tooltip.useIsoLayoutEffect": ()=>{
            const half = (ref.current?.offsetWidth ?? 0) / 2;
            const edge = TOOLTIP_EDGE + half;
            setLeft(Math.min(Math.max(hovered.x, edge), window.innerWidth - edge));
        }
    }["Tooltip.useIsoLayoutEffect"], [
        hovered
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none fixed z-50",
        style: {
            left,
            top: hovered.y,
            transform: "translate(-50%, calc(-100% - 8px))"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
            ref: ref,
            className: "whitespace-nowrap rounded-lg bg-foreground px-2 py-1 text-[11px] font-medium text-background shadow-md",
            initial: reduceMotion ? false : {
                opacity: 0,
                scale: 0.94
            },
            animate: {
                opacity: 1,
                scale: 1
            },
            exit: reduceMotion ? {
                opacity: 0
            } : {
                opacity: 0,
                scale: 0.94
            },
            transition: reduceMotion ? {
                duration: 0
            } : TOOLTIP_FADE,
            children: describeDay(hovered.day)
        }, void 0, false, {
            fileName: "[project]/components/ui/github-activity.tsx",
            lineNumber: 283,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/github-activity.tsx",
        lineNumber: 275,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)), document.body);
};
_s2(Tooltip, "DbTaSaL0TMo4Vub6F0OeN+4zRXQ=", false, function() {
    return [
        useIsoLayoutEffect
    ];
});
_c = Tooltip;
const ContributionGrid = ({ contributions, scale, cellSize, months, showMonths, label, reduceMotion })=>{
    _s3();
    const weeks = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "ContributionGrid.useMemo[weeks]": ()=>toWeeks(contributions)
    }["ContributionGrid.useMemo[weeks]"], [
        contributions
    ]);
    const gap = gapFor(cellSize);
    const [ref, columns] = useFittedColumns(cellSize, gap);
    const [hovered, setHovered] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]();
    const cap = Math.min(weeks.length, weeksFor(months));
    const visible = weeks.slice(-Math.min(cap, columns ?? cap));
    const sweepEnd = (visible.length - 1) * COLUMN_STAGGER + CELL_FADE.duration;
    const hover = (day)=>(event)=>{
            const cell = event.currentTarget.getBoundingClientRect();
            setHovered({
                day,
                x: cell.left + cell.width / 2,
                y: cell.top
            });
        };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-slot": "github-activity-grid",
        role: "img",
        "aria-label": label,
        className: "relative",
        children: [
            showMonths && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                className: "flex justify-center",
                style: {
                    gap,
                    marginBottom: gap
                },
                initial: reduceMotion ? false : {
                    opacity: 0,
                    filter: `blur(${LABEL_BLUR}px)`
                },
                animate: {
                    opacity: 1,
                    filter: "blur(0px)"
                },
                transition: {
                    ...LABEL_REVEAL,
                    delay: reduceMotion ? 0 : sweepEnd
                },
                children: toMonthLabels(visible).map((month, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative h-3 shrink-0",
                        style: {
                            width: cellSize
                        },
                        children: month && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute left-0 top-0 text-[10px] leading-none text-foreground/40",
                            children: month
                        }, void 0, false, {
                            fileName: "[project]/components/ui/github-activity.tsx",
                            lineNumber: 359,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, index, false, {
                        fileName: "[project]/components/ui/github-activity.tsx",
                        lineNumber: 353,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/components/ui/github-activity.tsx",
                lineNumber: 338,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center overflow-hidden",
                style: {
                    gap
                },
                onPointerLeave: ()=>setHovered(undefined),
                children: visible.map((week, weekIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        style: {
                            gap
                        },
                        children: week.map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                onPointerEnter: hover(day),
                                className: "shrink-0 rounded-[3px] bg-foreground/[0.08]",
                                style: {
                                    width: cellSize,
                                    height: cellSize
                                },
                                initial: reduceMotion ? false : {
                                    opacity: 0,
                                    scale: 0.4
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                transition: {
                                    ...CELL_FADE,
                                    delay: reduceMotion ? 0 : weekIndex * COLUMN_STAGGER
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full w-full rounded-[3px]",
                                    style: scale[day.level] ?? scale[0]
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/github-activity.tsx",
                                    lineNumber: 388,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, day.date, false, {
                                fileName: "[project]/components/ui/github-activity.tsx",
                                lineNumber: 376,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, weekIndex, false, {
                        fileName: "[project]/components/ui/github-activity.tsx",
                        lineNumber: 374,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/components/ui/github-activity.tsx",
                lineNumber: 368,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: hovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tooltip, {
                    hovered: hovered,
                    reduceMotion: reduceMotion
                }, "tooltip", false, {
                    fileName: "[project]/components/ui/github-activity.tsx",
                    lineNumber: 400,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/ui/github-activity.tsx",
                lineNumber: 398,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/github-activity.tsx",
        lineNumber: 330,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s3(ContributionGrid, "EvlyS9ZmO1Ltj2xTLo9e8FvfV8k=", false, function() {
    return [
        useFittedColumns
    ];
});
_c1 = ContributionGrid;
const GitHubActivity = ({ className, username, contributions: contributionsProp = [], repos: reposProp = [], year, accent = DEFAULT_ACCENT, cellSize = DEFAULT_CELL_SIZE, months = DEFAULT_MONTHS, showMonths = false, label = DEFAULT_LABEL, defaultOpen = false, open: openProp, onOpenChange, style, ...props })=>{
    _s4();
    const reduceMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const uid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]();
    const [openState, setOpenState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](defaultOpen);
    const open = openProp ?? openState;
    const toggle = ()=>{
        if (openProp === undefined) setOpenState(!open);
        onOpenChange?.(!open);
    };
    const needsFetch = !contributionsProp.length || !reposProp.length;
    const fetched = useGitHubUser(needsFetch ? username : undefined);
    const placeholder = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "GitHubActivity.useMemo[placeholder]": ()=>username ? emptyDays(weeksFor(months)) : []
    }["GitHubActivity.useMemo[placeholder]"], [
        username,
        months
    ]);
    const contributions = contributionsProp.length ? contributionsProp : fetched?.contributions ?? placeholder;
    const repos = reposProp.length ? reposProp : fetched?.repos ?? [];
    const scale = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "GitHubActivity.useMemo[scale]": ()=>toScale(accent)
    }["GitHubActivity.useMemo[scale]"], [
        accent
    ]);
    const transition = reduceMotion ? {
        duration: 0
    } : SPRING;
    const headerTransition = reduceMotion ? {
        duration: 0
    } : HEADER_SPRING;
    const rowTransition = reduceMotion ? {
        duration: 0
    } : ROW_SPRING;
    const kick = reduceMotion ? {} : {
        x: ROW_OFFSET,
        y: ROW_OFFSET
    };
    const listMotion = {
        initial: {
            opacity: 0,
            ...kick
        },
        animate: {
            opacity: 1,
            x: 0,
            y: 0
        },
        exit: {
            opacity: 0,
            ...kick
        }
    };
    const total = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "GitHubActivity.useMemo[total]": ()=>contributions.reduce({
                "GitHubActivity.useMemo[total]": (sum, day)=>sum + day.count
            }["GitHubActivity.useMemo[total]"], 0)
    }["GitHubActivity.useMemo[total]"], [
        contributions
    ]);
    const parsedYear = Number(contributions.at(-1)?.date.slice(0, 4));
    const displayYear = year ?? (Number.isFinite(parsedYear) ? parsedYear : null);
    const heading = `${total} contributions${displayYear ? ` in ${displayYear}` : ""}`;
    const gap = gapFor(cellSize);
    const columns = Math.min(Math.ceil(contributions.length / 7), weeksFor(months));
    const width = Math.max(MIN_CARD_WIDTH, columns * (cellSize + gap) - gap + CARD_PADDING);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "github-activity",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("relative max-w-full   bg-white  dark:bg-black", repos.length > 0 && "pb-[6px]", className),
        style: {
            width,
            ...style
        },
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContributionGrid, {
            contributions: contributions,
            scale: scale,
            cellSize: cellSize,
            months: months,
            showMonths: showMonths,
            label: heading,
            reduceMotion: reduceMotion
        }, void 0, false, {
            fileName: "[project]/components/ui/github-activity.tsx",
            lineNumber: 507,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/github-activity.tsx",
        lineNumber: 497,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s4(GitHubActivity, "0WFgU0AXEOBPILLUVLHKQzG8Ku8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"],
        useGitHubUser
    ];
});
_c2 = GitHubActivity;
;
const __TURBOPACK__default__export__ = GitHubActivity;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Tooltip");
__turbopack_context__.k.register(_c1, "ContributionGrid");
__turbopack_context__.k.register(_c2, "GitHubActivity");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/work-experience.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2d$primitives$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/motion-primitives/accordion.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function formatPeriod(start, end, isCurrent) {
    const label = isCurrent ? "Present" : end;
    // Dynamic duration logic could go here
    const duration = isCurrent ? "~6mos" : "~1 month";
    return {
        range: `${start} – ${label}`,
        duration
    };
}
const WorkExperience = ({ experience })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-full flex-col gap-3",
        children: experience.map((job)=>job.positions.map((pos)=>{
                const { range, duration } = formatPeriod(pos.employmentPeriod.start, pos.employmentPeriod.end, job.isCurrentEmployer);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2d$primitives$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Accordion"], {
                    className: "w-full focus-within:ring-1 ring-blue-500/20 overflow-hidden rounded-xl  border  border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950",
                    transition: {
                        type: "spring",
                        stiffness: 120,
                        damping: 20
                    },
                    variants: {
                        expanded: {
                            opacity: 1,
                            height: "auto"
                        },
                        collapsed: {
                            opacity: 0,
                            height: 0
                        }
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2d$primitives$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItem"], {
                        value: pos.id,
                        className: "group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2d$primitives$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                className: "w-full px-3 py-3 sm:px-4 flex flex-row items-center justify-between gap-3 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 min-w-0 flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-9 h-9 rounded-lg    -zinc-200 dark: -zinc-800 overflow-hidden flex items-center justify-center bg-zinc-50 dark:bg-zinc-900 shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    loading: "lazy",
                                                    src: job.companyLogo,
                                                    alt: `${job.companyName} logo`,
                                                    className: "object-contain w-6 h-6 sm:w-7 sm:h-7"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/work-experience.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/work-experience.tsx",
                                                lineNumber: 63,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-left min-w-0 flex-1 flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        target: "_blank",
                                                        href: job.companyWebsite,
                                                        className: "hover:underline decoration-zinc-400 underline-offset-2 block w-fit",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-semibold text-zinc-900 dark:text-zinc-50 leading-none truncate",
                                                            children: job.companyName
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/work-experience.tsx",
                                                            lineNumber: 79,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/work-experience.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-medium text-zinc-600 dark:text-zinc-400 truncate",
                                                                children: pos.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/work-experience.tsx",
                                                                lineNumber: 85,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] text-zinc-300 dark:text-zinc-700",
                                                                children: "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/work-experience.tsx",
                                                                lineNumber: 88,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[11px] text-zinc-500 dark:text-zinc-500 font-medium shrink-0",
                                                                children: duration
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/work-experience.tsx",
                                                                lineNumber: 91,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/work-experience.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] text-zinc-400 dark:text-zinc-600 mt-0.5 sm:hidden shrink-0",
                                                        children: range
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/work-experience.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/work-experience.tsx",
                                                lineNumber: 73,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/work-experience.tsx",
                                        lineNumber: 61,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 shrink-0 sm:ml-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden sm:inline text-[11px] font-medium text-zinc-400 dark:text-zinc-500 tabular-nums",
                                            children: range
                                        }, void 0, false, {
                                            fileName: "[project]/components/work-experience.tsx",
                                            lineNumber: 105,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/work-experience.tsx",
                                        lineNumber: 104,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/work-experience.tsx",
                                lineNumber: 60,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2d$primitives$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-4 pb-4 pt-1 sm:pl-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2 list-none",
                                            children: pos.description.split("\n").map((line)=>line.replace(/^- /, "").trim()).filter(Boolean).map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-zinc-300 dark:text-zinc-700 mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-current"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/work-experience.tsx",
                                                            lineNumber: 123,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        line
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/components/work-experience.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 27
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/components/work-experience.tsx",
                                            lineNumber: 113,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-1.5 mt-5",
                                            children: pos.skills.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-medium px-2 py-0.5 rounded-md bg-zinc-50 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400    -zinc-200/50 dark: -zinc-800",
                                                    children: skill
                                                }, skill, false, {
                                                    fileName: "[project]/components/work-experience.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/components/work-experience.tsx",
                                            lineNumber: 130,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/work-experience.tsx",
                                    lineNumber: 112,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/work-experience.tsx",
                                lineNumber: 111,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/work-experience.tsx",
                        lineNumber: 59,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0))
                }, pos.id, false, {
                    fileName: "[project]/components/work-experience.tsx",
                    lineNumber: 50,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0));
            }))
    }, void 0, false, {
        fileName: "[project]/components/work-experience.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = WorkExperience;
const __TURBOPACK__default__export__ = WorkExperience;
var _c;
__turbopack_context__.k.register(_c, "WorkExperience");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/Footer/deskbreak-coder-idle.gif (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/deskbreak-coder-idle.1s0om9jmm2lrx.gif");}),
"[project]/public/Footer/deskbreak-coder-idle.gif.mjs { IMAGE => \"[project]/public/Footer/deskbreak-coder-idle.gif (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$Footer$2f$deskbreak$2d$coder$2d$idle$2e$gif__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/Footer/deskbreak-coder-idle.gif (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$Footer$2f$deskbreak$2d$coder$2d$idle$2e$gif__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 192,
    height: 208,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/Footer/deskbreak-coder-waving.gif (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/deskbreak-coder-waving.0nlg63ggow5m0.gif");}),
"[project]/public/Footer/deskbreak-coder-waving.gif.mjs { IMAGE => \"[project]/public/Footer/deskbreak-coder-waving.gif (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$Footer$2f$deskbreak$2d$coder$2d$waving$2e$gif__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/Footer/deskbreak-coder-waving.gif (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$Footer$2f$deskbreak$2d$coder$2d$waving$2e$gif__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 192,
    height: 208,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/profile.jpeg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/profile.3gb9ffjwxs7xn.jpeg");}),
"[project]/public/profile.jpeg.mjs { IMAGE => \"[project]/public/profile.jpeg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$profile$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/profile.jpeg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$profile$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1254,
    height: 1254,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDdTxNpY+IrSf8ACVFrcjy/s3/LHO3+9nHX9adgP//Z"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0cp7bwb._.js.map