(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/demoMeteor/src/components/solar-system.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SolarSystem",
    ()=>SolarSystem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/demoMeteor/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/demoMeteor/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/demoMeteor/node_modules/three/build/three.module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$examples$2f$jsm$2f$controls$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/demoMeteor/node_modules/three/examples/jsm/controls/OrbitControls.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const AU_SCALE = 15;
const createAsteroidDust = ()=>{
    const particles = 200000;
    const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
    const positions = new Float32Array(particles * 3);
    const material = new __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointsMaterial"]({
        color: 0x007BA7,
        size: 0.02,
        depthWrite: false,
        transparent: true,
        opacity: 0.45,
        alphaTest: 0.02
    });
    const marsOrbit = 1.524 * AU_SCALE;
    const jupiterOrbit = 5.203 * AU_SCALE;
    const neptuneOrbit = 30.07 * AU_SCALE;
    const mainBeltInner = marsOrbit + 0.5 * AU_SCALE;
    const mainBeltOuter = jupiterOrbit - 0.5 * AU_SCALE;
    for(let i = 0; i < particles; i++){
        const zone = Math.random();
        let dist = 0;
        let y = 0;
        const verticalSpread = 50;
        if (zone < 0.05) {
            dist = __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].randFloat(0, mainBeltInner);
            y = (Math.random() - 0.5) * Math.random() * verticalSpread * 0.1;
        } else if (zone < 0.7) {
            const innerBias = Math.pow(Math.random(), 0.5);
            dist = mainBeltInner + innerBias * (mainBeltOuter - mainBeltInner);
            y = (Math.random() - 0.5) * Math.pow(Math.random(), 2) * verticalSpread;
        } else if (zone < 0.995) {
            dist = __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].randFloat(jupiterOrbit - 0.5 * AU_SCALE, jupiterOrbit + 0.5 * AU_SCALE);
            y = (Math.random() - 0.5) * Math.random() * verticalSpread * 1.5;
        } else {
            dist = __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].randFloat(jupiterOrbit + 1 * AU_SCALE, neptuneOrbit);
            y = (Math.random() - 0.5) * Math.random() * verticalSpread * 1.2;
        }
        const angle = Math.random() * Math.PI * 2;
        positions[i * 3] = Math.cos(angle) * dist;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = Math.sin(angle) * dist;
    }
    geometry.setAttribute('position', new __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](positions, 3));
    const points = new __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Points"](geometry, material);
    points.userData = {
        id: 'asteroid_belt',
        name: 'Asteroid Belt'
    };
    return points;
};
const createMeteors = ()=>{
    const meteorCount = 500;
    const meteors = new __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    meteors.userData = {
        id: 'asteroid_belt',
        name: 'Asteroid Belt'
    };
    const meteorMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: 0x888888,
        roughness: 1.0,
        metalness: 0.0
    });
    const marsOrbit = 1.524 * AU_SCALE;
    const jupiterOrbit = 5.203 * AU_SCALE;
    const mainBeltInner = marsOrbit + 0.5 * AU_SCALE;
    const mainBeltOuter = jupiterOrbit - 0.5 * AU_SCALE;
    for(let i = 0; i < meteorCount; i++){
        const size = __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].randFloat(0.1, 0.4);
        const meteorGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcosahedronGeometry"](size, 0);
        const meteor = new __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](meteorGeometry, meteorMaterial);
        const dist = __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].randFloat(mainBeltInner, mainBeltOuter);
        const angle = Math.random() * Math.PI * 2;
        const y = __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].randFloatSpread(60);
        meteor.position.set(Math.cos(angle) * dist, y, Math.sin(angle) * dist);
        meteors.add(meteor);
    }
    return meteors;
};
const createKuiperMeteors = ()=>{
    const meteorCount = 200;
    const meteors = new __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    meteors.userData = {
        id: 'asteroid_belt',
        name: 'Outer Belt'
    };
    const meteorMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: 0xcccccc,
        emissive: 0x333333,
        roughness: 0.8,
        metalness: 0.1
    });
    const jupiterOrbit = 5.203 * AU_SCALE;
    const neptuneOrbit = 30.07 * AU_SCALE;
    const kuiperInner = jupiterOrbit + 2 * AU_SCALE;
    const kuiperOuter = neptuneOrbit + 5 * AU_SCALE;
    for(let i = 0; i < meteorCount; i++){
        const size = __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].randFloat(0.2, 0.5);
        const meteorGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcosahedronGeometry"](size, 0);
        const meteor = new __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](meteorGeometry, meteorMaterial);
        const dist = __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].randFloat(kuiperInner, kuiperOuter);
        const angle = Math.random() * Math.PI * 2;
        const y = __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].randFloatSpread(80);
        meteor.position.set(Math.cos(angle) * dist, y, Math.sin(angle) * dist);
        meteors.add(meteor);
    }
    return meteors;
};
const ASTEROID_IDS = [
    'osiris-apex',
    'eurybates',
    'orus',
    'mathilde',
    'patroclus',
    'ceres',
    'annefrank',
    'leucus',
    'itokawa',
    'eros',
    'bennu',
    'ryugu',
    'donaldjohanson',
    'braille',
    'polymele',
    'lutetia',
    'psyche',
    'ida',
    'gaspra',
    'apophis',
    'didymos',
    'vesta'
];
const COMET_IDS = [
    'churyumov-gerasimenko',
    'borrelly',
    'hartley2',
    'tempel1',
    'wild2'
];
const CometIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z"
            }, void 0, false, {
                fileName: "[project]/demoMeteor/src/components/solar-system.tsx",
                lineNumber: 144,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19.41 11H22v2h-2.59l-3.46 3.46-1.42-1.42L19.41 11zM18 6.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
            }, void 0, false, {
                fileName: "[project]/demoMeteor/src/components/solar-system.tsx",
                lineNumber: 145,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/demoMeteor/src/components/solar-system.tsx",
        lineNumber: 143,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = CometIcon;
function SolarSystem(param) {
    let { data, selectedObjectId, onSelectObject, hoveredObjectId, onHoverObject } = param;
    _s();
    const mountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [labels, setLabels] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const stateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        renderer: null,
        scene: new __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"](),
        camera: new __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](75, 1, 0.1, 100000),
        controls: null,
        raycaster: new __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Raycaster"](),
        textureLoader: new __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextureLoader"](),
        clickableObjects: [],
        celestialObjects: new Map(),
        orbitLines: new Map(),
        clock: new __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clock"](),
        startTime: Date.now()
    }).current;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SolarSystem.useEffect": ()=>{
            let renderer;
            let controls;
            const init = {
                "SolarSystem.useEffect.init": ()=>{
                    if (!mountRef.current || stateRef.renderer) return;
                    const { scene, camera } = stateRef;
                    renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGLRenderer"]({
                        antialias: true,
                        alpha: true
                    });
                    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
                    renderer.setPixelRatio(window.devicePixelRatio);
                    mountRef.current.appendChild(renderer.domElement);
                    stateRef.renderer = renderer;
                    camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
                    camera.position.set(30, 15, 65);
                    camera.lookAt(0, 0, 0);
                    camera.updateProjectionMatrix();
                    controls = new __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$examples$2f$jsm$2f$controls$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"](camera, renderer.domElement);
                    if (controls.domElement instanceof HTMLElement) {
                        controls.domElement.style.touchAction = 'none';
                    }
                    controls.enableDamping = true;
                    controls.dampingFactor = 0.05;
                    controls.minDistance = 10;
                    controls.maxDistance = 10000;
                    // Prevent controls from interfering with header area
                    const originalOnMouseDown = controls.mouseButtons.LEFT;
                    controls.mouseButtons.LEFT = __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOUSE"].ROTATE;
                    // Add custom event listener to check for header area
                    const handleControlsStart = {
                        "SolarSystem.useEffect.init.handleControlsStart": (event)=>{
                            const rect = mountRef.current.getBoundingClientRect();
                            const relativeY = event.clientY - rect.top;
                            if (relativeY < 64) {
                                // In header area, prevent default behavior
                                event.preventDefault();
                                event.stopPropagation();
                                return false;
                            }
                        }
                    }["SolarSystem.useEffect.init.handleControlsStart"];
                    renderer.domElement.addEventListener('mousedown', handleControlsStart, true);
                    renderer.domElement.addEventListener('touchstart', handleControlsStart, true);
                    stateRef.controls = controls;
                }
            }["SolarSystem.useEffect.init"];
            if (!stateRef.renderer) {
                init();
            }
            const handleClick = {
                "SolarSystem.useEffect.handleClick": (event)=>{
                    if (!mountRef.current || !stateRef.renderer) return;
                    // Check if click is in header area (top 64px) - if so, ignore the click
                    const rect = mountRef.current.getBoundingClientRect();
                    const relativeY = event.clientY - rect.top;
                    if (relativeY < 64) {
                        // Click is in header area, don't process it
                        return;
                    }
                    const mouse = new __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"]();
                    mouse.x = (event.clientX - rect.left) / rect.width * 2 - 1;
                    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
                    stateRef.raycaster.setFromCamera(mouse, stateRef.camera);
                    stateRef.raycaster.params.Points.threshold = 5;
                    const intersects = stateRef.raycaster.intersectObjects(stateRef.clickableObjects, true);
                    if (intersects.length > 0) {
                        let currentObject = intersects[0].object;
                        while(currentObject.parent && !currentObject.userData.id){
                            currentObject = currentObject.parent;
                        }
                        onSelectObject(currentObject.userData.id || null);
                    } else {
                        onSelectObject(null);
                    }
                }
            }["SolarSystem.useEffect.handleClick"];
            if (stateRef.renderer) {
                stateRef.renderer.domElement.addEventListener('click', handleClick, false);
            }
            const handleResize = {
                "SolarSystem.useEffect.handleResize": ()=>{
                    if (!mountRef.current || !stateRef.renderer) return;
                    stateRef.camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
                    stateRef.camera.updateProjectionMatrix();
                    stateRef.renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
                }
            }["SolarSystem.useEffect.handleResize"];
            window.addEventListener('resize', handleResize);
            const animate = {
                "SolarSystem.useEffect.animate": ()=>{
                    var _stateRef_controls, _stateRef_renderer;
                    if (!stateRef.renderer) return;
                    const animationFrameId = requestAnimationFrame(animate);
                    const newLabels = [];
                    const timeSpeed = 0.1;
                    const elapsedDays = (Date.now() - stateRef.startTime) / (1000 * 60 * 60 * 24);
                    stateRef.celestialObjects.forEach({
                        "SolarSystem.useEffect.animate": (objGroup, id)=>{
                            const objData = objGroup.userData;
                            if (objData.type === 'planet' || objData.type === 'comet') {
                                const a = objData.semiMajorAxis;
                                var _objData_eccentricity;
                                const e = (_objData_eccentricity = objData.eccentricity) !== null && _objData_eccentricity !== void 0 ? _objData_eccentricity : 0;
                                var _objData_orbitalInclination;
                                const i = __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].degToRad((_objData_orbitalInclination = objData.orbitalInclination) !== null && _objData_orbitalInclination !== void 0 ? _objData_orbitalInclination : 0);
                                const L = __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].degToRad(objData.meanLongitude);
                                const varpi = __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].degToRad(objData.longitudeOfPerihelion);
                                const Omega = __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].degToRad(objData.longitudeOfAscendingNode);
                                const P = objData.orbitalSpeed;
                                const M0 = L - varpi;
                                const n = 2 * Math.PI / (P * 365.25);
                                let M = (M0 + n * elapsedDays * timeSpeed) % (2 * Math.PI);
                                if (M < 0) M += 2 * Math.PI;
                                // Solve Kepler's equation iteratively
                                let E = M;
                                for(let k = 0; k < 5; k++){
                                    E = M + e * Math.sin(E);
                                }
                                const nu = 2 * Math.atan2(Math.sqrt(1 + e) * Math.sin(E / 2), Math.sqrt(1 - e) * Math.cos(E / 2));
                                const r = a * (1 - e * Math.cos(E));
                                const argOfPeri = varpi - Omega;
                                const x_orb = r * Math.cos(nu);
                                const y_orb = r * Math.sin(nu);
                                const x_ecl = x_orb * (Math.cos(argOfPeri) * Math.cos(Omega) - Math.sin(argOfPeri) * Math.sin(Omega) * Math.cos(i)) - y_orb * (Math.sin(argOfPeri) * Math.cos(Omega) + Math.cos(argOfPeri) * Math.sin(Omega) * Math.cos(i));
                                const z_ecl = x_orb * (Math.cos(argOfPeri) * Math.sin(Omega) + Math.sin(argOfPeri) * Math.cos(Omega) * Math.cos(i)) + y_orb * (Math.cos(argOfPeri) * Math.cos(Omega) * Math.cos(i) - Math.sin(argOfPeri) * Math.sin(Omega));
                                const y_ecl = x_orb * (Math.sin(argOfPeri) * Math.sin(i)) + y_orb * (Math.cos(argOfPeri) * Math.sin(i));
                                objGroup.position.set(x_ecl * AU_SCALE, y_ecl * AU_SCALE, z_ecl * AU_SCALE);
                            }
                            const vector = new __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
                            objGroup.getWorldPosition(vector);
                            const labelPos = vector.clone();
                            labelPos.y += objGroup.userData.size || 0;
                            newLabels.push({
                                id: objGroup.userData.id,
                                name: objGroup.userData.name,
                                color: objGroup.userData.color,
                                position: labelPos,
                                type: objGroup.userData.type
                            });
                        }
                    }["SolarSystem.useEffect.animate"]);
                    setLabels(newLabels);
                    (_stateRef_controls = stateRef.controls) === null || _stateRef_controls === void 0 ? void 0 : _stateRef_controls.update();
                    (_stateRef_renderer = stateRef.renderer) === null || _stateRef_renderer === void 0 ? void 0 : _stateRef_renderer.render(stateRef.scene, stateRef.camera);
                    return ({
                        "SolarSystem.useEffect.animate": ()=>{
                            cancelAnimationFrame(animationFrameId);
                        }
                    })["SolarSystem.useEffect.animate"];
                }
            }["SolarSystem.useEffect.animate"];
            const cleanupAnimation = animate();
            return ({
                "SolarSystem.useEffect": ()=>{
                    var _stateRef_controls;
                    if (cleanupAnimation) cleanupAnimation();
                    window.removeEventListener('resize', handleResize);
                    if (stateRef.renderer) {
                        stateRef.renderer.domElement.removeEventListener('click', handleClick);
                    }
                    (_stateRef_controls = stateRef.controls) === null || _stateRef_controls === void 0 ? void 0 : _stateRef_controls.dispose();
                }
            })["SolarSystem.useEffect"];
        }
    }["SolarSystem.useEffect"], [
        stateRef,
        onSelectObject,
        data
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SolarSystem.useEffect": ()=>{
            const { scene, clickableObjects, celestialObjects, orbitLines } = stateRef;
            // Dispose old scene children and clear maps
            while(scene.children.length > 0){
                var _geometry;
                const child = scene.children[0];
                scene.remove(child);
                if ('material' in child) {
                    const material = child.material;
                    if (Array.isArray(material)) material.forEach({
                        "SolarSystem.useEffect": (m)=>m.dispose()
                    }["SolarSystem.useEffect"]);
                    else if (material) material.dispose();
                }
                if ('geometry' in child) (_geometry = child.geometry) === null || _geometry === void 0 ? void 0 : _geometry.dispose();
            }
            celestialObjects.clear();
            clickableObjects.length = 0;
            orbitLines.clear();
            scene.add(new __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmbientLight"](0xffffff, 0.3));
            const sunLight = new __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointLight"](0xffd886, 5000, 10000);
            scene.add(sunLight);
            // Add belts and meteors to scene and clickable
            const asteroidDust = createAsteroidDust();
            scene.add(asteroidDust);
            clickableObjects.push(asteroidDust);
            const meteors = createMeteors();
            scene.add(meteors);
            clickableObjects.push(meteors);
            const kuiperMeteors = createKuiperMeteors();
            scene.add(kuiperMeteors);
            clickableObjects.push(kuiperMeteors);
            // Add celestial objects with orbits
            data.forEach({
                "SolarSystem.useEffect": (objData)=>{
                    let celestialObj = null;
                    const objectGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
                    if (objData.type === 'star') {
                        const starGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](objData.size, 32, 32);
                        const starMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                            color: 0xFFD700,
                            toneMapped: false
                        });
                        const starMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](starGeometry, starMaterial);
                        objectGroup.add(starMesh);
                        celestialObj = objectGroup;
                    } else if (objData.type === 'planet' || objData.type === 'comet') {
                        let geometry;
                        const isAsteroid = ASTEROID_IDS.includes(objData.id);
                        const isComet = COMET_IDS.includes(objData.id);
                        if (isAsteroid || isComet) {
                            geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcosahedronGeometry"](objData.size, 0);
                        } else {
                            geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](objData.size, 32, 32);
                        }
                        const material = new __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                            color: new __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](objData.color),
                            emissive: isAsteroid || isComet ? new __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0x000000) : new __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](objData.color),
                            emissiveIntensity: isAsteroid || isComet ? 0 : 0.6,
                            roughness: isAsteroid || isComet ? 1 : 0.5,
                            metalness: 0
                        });
                        const body = new __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geometry, material);
                        body.userData.isPlanetBody = true;
                        objectGroup.add(body);
                        if (objData.rings) {
                            const ringGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RingGeometry"](objData.rings.innerRadius, objData.rings.outerRadius, 64);
                            const pos = ringGeometry.attributes.position;
                            const v3 = new __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
                            for(let i = 0; i < pos.count; i++){
                                v3.fromBufferAttribute(pos, i);
                                ringGeometry.attributes.uv.setXY(i, v3.length() < objData.rings.innerRadius + 1 ? 0 : 1, 1);
                            }
                            const ringMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                                map: stateRef.textureLoader.load(objData.rings.textureUrl),
                                side: __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"],
                                transparent: true,
                                opacity: 0.8
                            });
                            const rings = new __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](ringGeometry, ringMaterial);
                            rings.rotation.x = Math.PI / 2;
                            body.add(rings);
                        }
                        const a = objData.semiMajorAxis;
                        var _objData_eccentricity;
                        const e = (_objData_eccentricity = objData.eccentricity) !== null && _objData_eccentricity !== void 0 ? _objData_eccentricity : 0;
                        var _objData_orbitalInclination;
                        const i = __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].degToRad((_objData_orbitalInclination = objData.orbitalInclination) !== null && _objData_orbitalInclination !== void 0 ? _objData_orbitalInclination : 0);
                        const Omega = __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].degToRad(objData.longitudeOfAscendingNode);
                        const varpi = __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].degToRad(objData.longitudeOfPerihelion);
                        const curvePoints = [];
                        const argOfPeri = varpi - Omega;
                        const pointCount = 200;
                        const orbitSections = isComet ? pointCount / 2 : pointCount;
                        for(let j = 0; j <= orbitSections; j++){
                            const M = j / pointCount * 2 * Math.PI;
                            let E = M;
                            for(let k = 0; k < 5; k++){
                                E = M + e * Math.sin(E);
                            }
                            const nu = 2 * Math.atan2(Math.sqrt(1 + e) * Math.sin(E / 2), Math.sqrt(1 - e) * Math.cos(E / 2));
                            const r = a * (1 - e * Math.cos(E));
                            const x_orb = r * Math.cos(nu);
                            const y_orb = r * Math.sin(nu);
                            const x_ecl = x_orb * (Math.cos(argOfPeri) * Math.cos(Omega) - Math.sin(argOfPeri) * Math.sin(Omega) * Math.cos(i)) - y_orb * (Math.sin(argOfPeri) * Math.cos(Omega) + Math.cos(argOfPeri) * Math.sin(Omega) * Math.cos(i));
                            const z_ecl = x_orb * (Math.cos(argOfPeri) * Math.sin(Omega) + Math.sin(argOfPeri) * Math.cos(Omega) * Math.cos(i)) + y_orb * (Math.cos(argOfPeri) * Math.cos(Omega) * Math.cos(i) - Math.sin(argOfPeri) * Math.sin(Omega));
                            const y_ecl = x_orb * (Math.sin(argOfPeri) * Math.sin(i)) + y_orb * (Math.cos(argOfPeri) * Math.sin(i));
                            curvePoints.push(new __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](x_ecl * AU_SCALE, y_ecl * AU_SCALE, z_ecl * AU_SCALE));
                        }
                        const orbitGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]().setFromPoints(curvePoints);
                        let opacity = 0.9;
                        let color = objData.color;
                        if (isAsteroid || isComet) {
                            opacity = 0.4;
                            color = '#888888';
                        }
                        if (objData.id === 'earth') opacity = 0.9;
                        const orbitMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
                            color: new __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](color),
                            transparent: true,
                            opacity
                        });
                        const orbitLine = new __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"](orbitGeometry, orbitMaterial);
                        scene.add(orbitLine);
                        orbitLines.set(objData.id, orbitLine);
                        celestialObj = objectGroup;
                    }
                    if (celestialObj) {
                        if (objData.id === 'sun') {
                            celestialObj.position.set(0, 0, 0);
                        }
                        celestialObj.userData = {
                            ...objData
                        };
                        scene.add(celestialObj);
                        celestialObjects.set(objData.id, celestialObj);
                        clickableObjects.push(celestialObj);
                    }
                }
            }["SolarSystem.useEffect"]);
        }
    }["SolarSystem.useEffect"], [
        data,
        stateRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SolarSystem.useEffect": ()=>{
            stateRef.orbitLines.forEach({
                "SolarSystem.useEffect": (line, id)=>{
                    const isHovered = id === hoveredObjectId;
                    const isSelected = id === selectedObjectId;
                    if (line.material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]) {
                        let baseOpacity = 0.9;
                        if (ASTEROID_IDS.includes(id) || COMET_IDS.includes(id)) baseOpacity = 0.4;
                        if (id === 'earth') baseOpacity = 0.9;
                        line.material.opacity = isHovered || isSelected ? 1.0 : baseOpacity;
                        line.material.needsUpdate = true;
                    }
                }
            }["SolarSystem.useEffect"]);
        }
    }["SolarSystem.useEffect"], [
        hoveredObjectId,
        selectedObjectId,
        stateRef.orbitLines
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SolarSystem.useEffect": ()=>{
            stateRef.celestialObjects.forEach({
                "SolarSystem.useEffect": (obj, id)=>{
                    const isSelected = id === selectedObjectId;
                    const body = obj.children.find({
                        "SolarSystem.useEffect.body": (c)=>c.isMesh
                    }["SolarSystem.useEffect.body"]);
                    if ((body === null || body === void 0 ? void 0 : body.material) instanceof __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]) {
                        const isAsteroid = ASTEROID_IDS.includes(obj.userData.id) || COMET_IDS.includes(obj.userData.id);
                        if (isSelected) {
                            body.material.emissive.setHex(0xffffff);
                            body.material.emissiveIntensity = 1;
                        } else {
                            const originalColor = obj.userData.color || 0xaaaaaa;
                            const emissiveColor = isAsteroid ? 0x000000 : new __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](originalColor);
                            body.material.emissive.set(emissiveColor);
                            body.material.emissiveIntensity = isAsteroid ? 0 : 0.6;
                        }
                        body.material.needsUpdate = true;
                    }
                    if (obj.userData.type === 'star') {
                        const starMesh = obj.children.find({
                            "SolarSystem.useEffect.starMesh": (c)=>c instanceof __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"]
                        }["SolarSystem.useEffect.starMesh"]);
                        if (starMesh && starMesh.material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]) {
                            starMesh.material.color.set(isSelected ? 0xffffff : 0xffd700);
                        }
                    }
                }
            }["SolarSystem.useEffect"]);
            const isBeltSelected = selectedObjectId === 'asteroid_belt';
            const belt = stateRef.scene.getObjectsByProperty('userData.id', 'asteroid_belt');
            belt.forEach({
                "SolarSystem.useEffect": (obj)=>{
                    if (obj instanceof __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Points"] && obj.material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointsMaterial"]) {
                        obj.material.color.setHex(isBeltSelected ? 0xffffff : 0x007ba7);
                        obj.material.opacity = isBeltSelected ? 0.7 : 0.45;
                    }
                    if (obj instanceof __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"] && selectedObjectId === 'asteroid_belt') {
                        obj.children.forEach({
                            "SolarSystem.useEffect": (child)=>{
                                if (child instanceof __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"] && child.material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]) {
                                    child.material.emissive.setHex(0xffffff);
                                    child.material.emissiveIntensity = 0.5;
                                }
                            }
                        }["SolarSystem.useEffect"]);
                    } else if (obj instanceof __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]) {
                        obj.children.forEach({
                            "SolarSystem.useEffect": (child)=>{
                                if (child instanceof __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"] && child.material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]) {
                                    child.material.emissive.setHex(0x000000);
                                    child.material.emissiveIntensity = 0;
                                }
                            }
                        }["SolarSystem.useEffect"]);
                    }
                }
            }["SolarSystem.useEffect"]);
        }
    }["SolarSystem.useEffect"], [
        selectedObjectId,
        stateRef.celestialObjects,
        stateRef.scene
    ]);
    const displayedLabels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SolarSystem.useMemo[displayedLabels]": ()=>{
            if (!mountRef.current || !stateRef.camera) return [];
            const screenLabels = labels.map({
                "SolarSystem.useMemo[displayedLabels].screenLabels": (label)=>{
                    const vector = label.position.clone().project(stateRef.camera);
                    if (vector.z > 1) return null;
                    return {
                        ...label,
                        screenX: (vector.x + 1) / 2 * mountRef.current.clientWidth,
                        screenY: (-vector.y + 1) / 2 * mountRef.current.clientHeight
                    };
                }
            }["SolarSystem.useMemo[displayedLabels].screenLabels"]).filter(Boolean);
            const nonOverlappingLabels = [];
            const labelSpacing = 20;
            screenLabels.sort({
                "SolarSystem.useMemo[displayedLabels]": (a, b)=>{
                    const aData = data.find({
                        "SolarSystem.useMemo[displayedLabels].aData": (d)=>d.id === a.id
                    }["SolarSystem.useMemo[displayedLabels].aData"]);
                    const bData = data.find({
                        "SolarSystem.useMemo[displayedLabels].bData": (d)=>d.id === b.id
                    }["SolarSystem.useMemo[displayedLabels].bData"]);
                    if ((aData === null || aData === void 0 ? void 0 : aData.type) === 'planet' && (bData === null || bData === void 0 ? void 0 : bData.type) !== 'planet') return -1;
                    if ((aData === null || aData === void 0 ? void 0 : aData.type) !== 'planet' && (bData === null || bData === void 0 ? void 0 : bData.type) === 'planet') return 1;
                    return a.position.distanceTo(stateRef.camera.position) - b.position.distanceTo(stateRef.camera.position);
                }
            }["SolarSystem.useMemo[displayedLabels]"]).forEach({
                "SolarSystem.useMemo[displayedLabels]": (label)=>{
                    let overlaps = false;
                    for (const existingLabel of nonOverlappingLabels){
                        if (Math.sqrt(Math.pow(label.screenX - existingLabel.screenX, 2) + Math.pow(label.screenY - existingLabel.screenY, 2)) < labelSpacing) {
                            overlaps = true;
                            break;
                        }
                    }
                    if (!overlaps) nonOverlappingLabels.push(label);
                }
            }["SolarSystem.useMemo[displayedLabels]"]);
            return nonOverlappingLabels;
        }
    }["SolarSystem.useMemo[displayedLabels]"], [
        labels,
        stateRef.camera,
        data
    ]);
    const getLabelColor = (label)=>{
        if (selectedObjectId === label.id) return 'hsl(var(--primary))';
        if (ASTEROID_IDS.includes(label.id)) return '#FFFFFF';
        if (COMET_IDS.includes(label.id)) return '#FFFFFF';
        return label.color;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: mountRef,
        className: "absolute top-0 left-0 w-full h-full z-10",
        style: {
            touchAction: 'none'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-0 left-0 w-full h-full pointer-events-none",
            children: displayedLabels.map((label)=>{
                const isAsteroid = ASTEROID_IDS.includes(label.id);
                const isComet = label.type === 'comet';
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute flex items-center gap-1.5 p-1 rounded-sm transition-all duration-300 pointer-events-auto cursor-pointer uppercase tracking-wider text-xs hover:font-bold ".concat((isAsteroid || isComet ? 'font-normal' : 'font-medium') + (hoveredObjectId && hoveredObjectId !== label.id || selectedObjectId && selectedObjectId !== label.id ? ' opacity-50' : ' opacity-100')),
                    style: {
                        transform: "translate(10px, -50%) translate(".concat(label.screenX, "px, ").concat(label.screenY, "px)"),
                        color: getLabelColor(label),
                        opacity: selectedObjectId && selectedObjectId !== label.id ? 0.5 : 1
                    },
                    onClick: (e)=>{
                        e.stopPropagation();
                        onSelectObject(label.id);
                    },
                    onMouseEnter: ()=>onHoverObject(label.id),
                    onMouseLeave: ()=>onHoverObject(null),
                    children: [
                        isComet && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CometIcon, {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/demoMeteor/src/components/solar-system.tsx",
                            lineNumber: 654,
                            columnNumber: 25
                        }, this),
                        label.name
                    ]
                }, label.id, true, {
                    fileName: "[project]/demoMeteor/src/components/solar-system.tsx",
                    lineNumber: 633,
                    columnNumber: 11
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/demoMeteor/src/components/solar-system.tsx",
            lineNumber: 628,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/demoMeteor/src/components/solar-system.tsx",
        lineNumber: 626,
        columnNumber: 3
    }, this);
}
_s(SolarSystem, "SeigUqLH6ShaxcxRlQ4nILdHeCA=");
_c1 = SolarSystem;
var _c, _c1;
__turbopack_context__.k.register(_c, "CometIcon");
__turbopack_context__.k.register(_c1, "SolarSystem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/demoMeteor/src/components/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/demoMeteor/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const MeteorLogo = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 100 100",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "50",
                cy: "50",
                r: "48",
                stroke: "white",
                strokeWidth: "4"
            }, void 0, false, {
                fileName: "[project]/demoMeteor/src/components/header.tsx",
                lineNumber: 11,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M30 70 L40 50 L50 70 L60 50 L70 70",
                stroke: "white",
                strokeWidth: "4",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/demoMeteor/src/components/header.tsx",
                lineNumber: 12,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/demoMeteor/src/components/header.tsx",
        lineNumber: 5,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = MeteorLogo;
function Header(param) {
    let { onNavigateHome } = param;
    const navButtons = [
        {
            name: "Home",
            onClick: ()=>onNavigateHome ? onNavigateHome() : alert("Home clicked")
        },
        {
            name: "Globe",
            onClick: ()=>window.open("/map5.html", "_blank")
        },
        {
            name: "Mitigation",
            onClick: ()=>window.open("/mitigation.html", "_blank")
        },
        {
            name: "Hazard zone",
            onClick: ()=>alert("Hazard zone clicked")
        },
        {
            name: "Past events",
            onClick: ()=>window.open("/file.html", "_blank")
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-16 px-4 md:px-6 bg-transparent",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MeteorLogo, {
                        className: "w-8 h-8"
                    }, void 0, false, {
                        fileName: "[project]/demoMeteor/src/components/header.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-base font-bold text-white/40 tracking-wider",
                        children: "EYES ON METEORS"
                    }, void 0, false, {
                        fileName: "[project]/demoMeteor/src/components/header.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/demoMeteor/src/components/header.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex items-center gap-2",
                children: navButtons.map((button)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: button.onClick,
                        className: "group relative px-4 py-2 bg-gradient-to-r from-slate-800/30 to-slate-700/30 border border-slate-600/40 rounded-lg backdrop-blur-sm transition-all duration-300 hover:from-purple-400/15 hover:to-purple-300/15 hover:border-purple-400/40 hover:shadow-lg hover:shadow-purple-400/15 hover:scale-105 active:scale-95",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative z-10 text-slate-200 group-hover:text-purple-200 font-medium tracking-wide text-xs uppercase",
                                children: button.name
                            }, void 0, false, {
                                fileName: "[project]/demoMeteor/src/components/header.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-purple-400/8 to-purple-300/8 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            }, void 0, false, {
                                fileName: "[project]/demoMeteor/src/components/header.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            }, void 0, false, {
                                fileName: "[project]/demoMeteor/src/components/header.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this)
                        ]
                    }, button.name, true, {
                        fileName: "[project]/demoMeteor/src/components/header.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/demoMeteor/src/components/header.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/demoMeteor/src/components/header.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c1 = Header;
var _c, _c1;
__turbopack_context__.k.register(_c, "MeteorLogo");
__turbopack_context__.k.register(_c1, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/demoMeteor/src/lib/solar-system-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "solarSystemData",
    ()=>solarSystemData
]);
'use client';
// Simplified scaling for better visual separation
const AU_SCALE = 15; // Arbitrary unit for spacing in the 3D scene
const solarSystemData = [
    {
        id: 'sun',
        name: 'Sun',
        type: 'star',
        size: 2,
        distance: 0,
        color: '#FFD700',
        orbitalSpeed: 0,
        rotationSpeed: 0.05,
        description: 'The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core.',
        diameter: 1392700,
        mass: '1989000',
        semiMajorAxis: 0,
        eccentricity: 0,
        orbitalInclination: 0,
        meanLongitude: 0,
        longitudeOfPerihelion: 0,
        longitudeOfAscendingNode: 0
    },
    {
        id: 'mercury',
        name: 'Mercury',
        type: 'planet',
        size: 0.5,
        distance: 2.5 * AU_SCALE,
        color: '#9932CC',
        orbitalSpeed: 0.241,
        rotationSpeed: 0.1,
        description: 'Mercury is the smallest planet in the Solar System and nearest to the Sun. Its orbit takes 87.97 Earth days, the shortest of all the Sun\'s planets.',
        diameter: 4879,
        mass: '0.330',
        dayLength: 4222.6,
        semiMajorAxis: 0.387,
        eccentricity: 0.206,
        orbitalInclination: 7.00,
        meanLongitude: Math.random() * 360,
        longitudeOfPerihelion: 77.46,
        longitudeOfAscendingNode: 48.33,
        perihelion: 0.31,
        aphelion: 0.47
    },
    {
        id: 'venus',
        name: 'Venus',
        type: 'planet',
        size: 1,
        distance: 4 * AU_SCALE,
        color: '#C19A6B',
        orbitalSpeed: 0.615,
        rotationSpeed: 0.08,
        description: 'Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the second-brightest natural object in the night sky after the Moon, Venus can cast shadows and can be, on rare occasion, visible to the naked eye in broad daylight.',
        diameter: 12104,
        mass: '4.87',
        dayLength: 5832.0,
        semiMajorAxis: 0.723,
        eccentricity: 0.007,
        orbitalInclination: 3.39,
        meanLongitude: Math.random() * 360,
        longitudeOfPerihelion: 131.53,
        longitudeOfAscendingNode: 76.68,
        perihelion: 0.72,
        aphelion: 0.73
    },
    {
        id: 'earth',
        name: 'Earth',
        type: 'planet',
        size: 1,
        distance: 5.5 * AU_SCALE,
        color: '#1E90FF',
        orbitalSpeed: 1.000,
        rotationSpeed: 0.5,
        description: 'Our home, Earth, is the third planet from the Sun and the only astronomical object known to harbor life. About 29.2% of Earth\'s surface is land consisting of continents and islands.',
        diameter: 12742,
        mass: '5.97',
        dayLength: 24.0,
        semiMajorAxis: 1.000,
        eccentricity: 0.017,
        orbitalInclination: 0.00,
        meanLongitude: Math.random() * 360,
        longitudeOfPerihelion: 102.95,
        longitudeOfAscendingNode: -11.26,
        perihelion: 0.98,
        aphelion: 1.02
    },
    {
        id: 'mars',
        name: 'Mars',
        type: 'planet',
        size: 0.7,
        distance: 7 * AU_SCALE,
        color: '#D2691E',
        orbitalSpeed: 1.881,
        rotationSpeed: 0.45,
        description: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being only larger than Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".',
        diameter: 6779,
        mass: '0.642',
        dayLength: 24.7,
        semiMajorAxis: 1.524,
        eccentricity: 0.093,
        orbitalInclination: 1.85,
        meanLongitude: Math.random() * 360,
        longitudeOfPerihelion: -23.92,
        longitudeOfAscendingNode: 49.58,
        perihelion: 1.38,
        aphelion: 1.67
    },
    {
        id: 'itokawa',
        name: 'Itokawa',
        type: 'planet',
        size: 0.1,
        distance: 3.5 * AU_SCALE,
        color: '#888888',
        orbitalSpeed: 1.53,
        rotationSpeed: 0.2,
        description: '25143 Itokawa is a sub-kilometer near-Earth asteroid of the Apollo group and a rubble pile. It was the first asteroid to be the target of a sample-return mission, the Japanese space probe Hayabusa.',
        diameter: 0.33,
        semiMajorAxis: 1.324,
        eccentricity: 0.28,
        orbitalInclination: 1.62,
        meanLongitude: Math.random() * 360,
        longitudeOfPerihelion: 162.8,
        longitudeOfAscendingNode: 69.08,
        discoveryYear: 1998,
        perihelion: 0.95,
        aphelion: 1.70
    },
    {
        id: 'eros',
        name: 'Eros',
        type: 'planet',
        size: 0.2,
        distance: 6.2 * AU_SCALE,
        color: '#888888',
        orbitalSpeed: 1.76,
        rotationSpeed: 0.2,
        description: '433 Eros is a stony asteroid of the Amor group, and the first discovered and second-largest near-Earth object with a mean-diameter of approximately 16.8 kilometers. It was visited by the NEAR Shoemaker space probe in 1998.',
        diameter: 16.8,
        semiMajorAxis: 1.458,
        eccentricity: 0.223,
        orbitalInclination: 10.83,
        meanLongitude: Math.random() * 360,
        longitudeOfPerihelion: 178.6,
        longitudeOfAscendingNode: 304.3,
        discoveryYear: 1898,
        perihelion: 1.13,
        aphelion: 1.78
    },
    {
        id: 'bennu',
        name: 'Bennu',
        type: 'planet',
        size: 0.1,
        distance: 5.8 * AU_SCALE,
        color: '#888888',
        orbitalSpeed: 1.2,
        rotationSpeed: 0.2,
        description: '101955 Bennu is a carbonaceous asteroid in the Apollo group discovered in 1999. It is a potentially hazardous object that has a cumulative probability of 1 in 1,800 of impacting Earth between 2178 and 2290.',
        diameter: 0.49,
        semiMajorAxis: 1.126,
        eccentricity: 0.204,
        orbitalInclination: 6.03,
        meanLongitude: Math.random() * 360,
        longitudeOfPerihelion: 66.22,
        longitudeOfAscendingNode: 2.06,
        discoveryYear: 1999,
        perihelion: 0.90,
        aphelion: 1.36
    },
    {
        id: 'ryugu',
        name: 'Ryugu',
        type: 'planet',
        size: 0.1,
        distance: 6.0 * AU_SCALE,
        color: '#888888',
        orbitalSpeed: 1.3,
        rotationSpeed: 0.2,
        description: '162173 Ryugu is a near-Earth object and a potentially hazardous asteroid of the Apollo group. It is approximately 1 kilometer in diameter and is a dark C-type asteroid. Samples were returned to Earth by the Hayabusa2 spacecraft.',
        diameter: 0.9,
        semiMajorAxis: 1.19,
        eccentricity: 0.19,
        orbitalInclination: 5.88,
        meanLongitude: Math.random() * 360,
        longitudeOfPerihelion: 211.5,
        longitudeOfAscendingNode: 251.6,
        discoveryYear: 1999,
        perihelion: 0.96,
        aphelion: 1.42
    },
    {
        id: 'donaldjohanson',
        name: 'Donaldjohanson',
        type: 'planet',
        size: 0.1,
        distance: 7.5 * AU_SCALE,
        color: '#888888',
        orbitalSpeed: 3.26,
        rotationSpeed: 0.2,
        description: '52246 Donaldjohanson, provisional designation 1981 EQ5, is a stony Flora asteroid from the inner regions of the asteroid belt, approximately 4 kilometers in diameter. It is a target of the Lucy mission.',
        diameter: 4,
        semiMajorAxis: 2.19,
        eccentricity: 0.19,
        orbitalInclination: 3.96,
        meanLongitude: Math.random() * 360,
        longitudeOfPerihelion: 169.5,
        longitudeOfAscendingNode: 172.9,
        discoveryYear: 1981,
        perihelion: 1.77,
        aphelion: 2.61
    },
    {
        id: 'braille',
        name: 'Braille',
        type: 'planet',
        size: 0.1,
        distance: 8.3 * AU_SCALE,
        color: '#888888',
        orbitalSpeed: 3.58,
        rotationSpeed: 0.2,
        description: '9969 Braille is a small and highly elongated main-belt asteroid, classified as a Mars-crosser, that was discovered in 1992. It was visited by the Deep Space 1 spacecraft.',
        diameter: 1,
        semiMajorAxis: 2.34,
        eccentricity: 0.43,
        orbitalInclination: 15.0,
        meanLongitude: Math.random() * 360,
        longitudeOfPerihelion: 356.6,
        longitudeOfAscendingNode: 331.0,
        discoveryYear: 1992,
        perihelion: 1.33,
        aphelion: 3.35
    },
    {
        id: 'ceres',
        name: 'Ceres',
        type: 'planet',
        size: 0.3,
        distance: 8 * AU_SCALE,
        color: '#888888',
        orbitalSpeed: 4.6,
        rotationSpeed: 0.2,
        description: 'Ceres is the largest object in the asteroid belt between Mars and Jupiter and the only dwarf planet located in the inner Solar System. It is a C-type asteroid.',
        diameter: 940,
        semiMajorAxis: 2.77,
        eccentricity: 0.079,
        orbitalInclination: 10.59,
        meanLongitude: Math.random() * 360,
        longitudeOfPerihelion: 73.2,
        longitudeOfAscendingNode: 80.4,
        discoveryYear: 1801,
        perihelion: 2.55,
        aphelion: 2.99
    },
    {
        id: 'annefrank',
        name: 'Annefrank',
        type: 'planet',
        size: 0.1,
        distance: 8.2 * AU_SCALE,
        color: '#888888',
        orbitalSpeed: 3.28,
        rotationSpeed: 0.2,
        description: 'Annefrank is a main-belt asteroid discovered in 1942. It was named in memory of Anne Frank, the famous diarist who died in the Holocaust.',
        diameter: 4.8,
        semiMajorAxis: 2.21,
        eccentricity: 0.064,
        orbitalInclination: 4.23,
        meanLongitude: Math.random() * 360,
        longitudeOfPerihelion: 10.0,
        longitudeOfAscendingNode: 121.2,
        discoveryYear: 1942,
        perihelion: 2.07,
        aphelion: 2.35
    },
    {
        id: 'mathilde',
        name: 'Mathilde',
        type: 'planet',
        size: 0.2,
        distance: 8.5 * AU_SCALE,
        color: '#888888',
        orbitalSpeed: 4.31,
        rotationSpeed: 0.2,
        description: '253 Mathilde is a main-belt asteroid discovered in 1885. It has a relatively elliptical orbit that takes it as far as the orbit of Mars. It is a C-type asteroid.',
        diameter: 53,
        semiMajorAxis: 2.65,
        eccentricity: 0.267,
        orbitalInclination: 6.74,
        meanLongitude: Math.random() * 360,
        longitudeOfPerihelion: 181.2,
        longitudeOfAscendingNode: 179.8,
        discoveryYear: 1885,
        perihelion: 1.94,
        aphelion: 3.35
    },
    {
        id: 'lutetia',
        name: 'Lutetia',
        type: 'planet',
        size: 0.2,
        distance: 8.5 * AU_SCALE,
        color: '#888888',
        orbitalSpeed: 3.8,
        rotationSpeed: 0.2,
        description: '21 Lutetia is a large main-belt asteroid of an unusual spectral type. It measures about 100 kilometers in diameter. It was visited by the Rosetta spacecraft in 2010.',
        diameter: 96,
        semiMajorAxis: 2.43,
        eccentricity: 0.16,
        orbitalInclination: 3.06,
        meanLongitude: Math.random() * 360,
        longitudeOfPerihelion: 250.3,
        longitudeOfAscendingNode: 81.0,
        discoveryYear: 1852,
        perihelion: 2.04,
        aphelion: 2.82
    },
    {
        id: 'jupiter',
        name: 'Jupiter',
        type: 'planet',
        size: 4,
        distance: 10 * AU_SCALE,
        color: '#E28B33',
        orbitalSpeed: 11.86,
        rotationSpeed: 0.8,
        description: 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, but slightly less than one-thousandth the mass of the Sun.',
        diameter: 139820,
        mass: '1898',
        dayLength: 9.9,
        semiMajorAxis: 5.203,
        eccentricity: 0.048,
        orbitalInclination: 1.31,
        meanLongitude: Math.random() * 360,
        longitudeOfPerihelion: 14.75,
        longitudeOfAscendingNode: 100.56,
        perihelion: 4.95,
        aphelion: 5.46
    },
    {
        id: 'eurybates',
        name: 'Eurybates',
        type: 'planet',
        size: 0.3,
        distance: 9.9 * AU_SCALE,
        color: '#888888',
        orbitalSpeed: 11.88,
        rotationSpeed: 0.2,
        description: 'Eurybates is a Greek Jupiter Trojan asteroid. It is a C-type asteroid and one of the targets of the Lucy mission. It has a small satellite, named Queta.',
        diameter: 64,
        semiMajorAxis: 5.207,
        eccentricity: 0.088,
        orbitalInclination: 8.08,
        meanLongitude: Math.random() * 360,
        longitudeOfPerihelion: 27.6,
        longitudeOfAscendingNode: 44.9,
        discoveryYear: 1990,
        perihelion: 4.75,
        aphelion: 5.66
    },
    {
        id: 'patroclus',
        name: 'Patroclus',
        type: 'planet',
        size: 0.4,
        distance: 10.2 * AU_SCALE,
        color: '#888888',
        orbitalSpeed: 11.86,
        rotationSpeed: 0.2,
        description: 'Patroclus is a large binary Jupiter Trojan asteroid. It is a P-type asteroid, which are reddish in color, and are among the darkest objects in the solar system.',
        diameter: 140,
        semiMajorAxis: 5.25,
        eccentricity: 0.138,
        orbitalInclination: 22.04,
        meanLongitude: 303.4,
        longitudeOfPerihelion: -39.1,
        longitudeOfAscendingNode: 43.8,
        discoveryYear: 1906,
        perihelion: 4.52,
        aphelion: 5.97
    },
    {
        id: 'orus',
        name: 'Orus',
        type: 'planet',
        size: 0.2,
        distance: 9.8 * AU_SCALE,
        color: '#888888',
        orbitalSpeed: 11.75,
        rotationSpeed: 0.2,
        description: 'Orus is a Jupiter Trojan from the Greek camp, approximately 51 kilometers in diameter. It is a D-type asteroid, which are very dark and reddish in appearance. It is a target of the Lucy mission.',
        diameter: 51,
        semiMajorAxis: 5.17,
        eccentricity: 0.05,
        orbitalInclination: 8.47,
        meanLongitude: Math.random() * 360,
        longitudeOfPerihelion: 211.7,
        longitudeOfAscendingNode: 236.4,
        discoveryYear: 1977,
        perihelion: 4.91,
        aphelion: 5.43
    },
    {
        id: 'leucus',
        name: 'Leucus',
        type: 'planet',
        size: 0.2,
        distance: 11 * AU_SCALE,
        color: '#888888',
        orbitalSpeed: 11.69,
        rotationSpeed: 0.2,
        description: 'Leucus is another Jupiter Trojan from the Greek camp. It is a D-type asteroid, characterized by its very slow rotation, taking about 446 hours to complete one revolution. It is a target of the Lucy mission.',
        diameter: 40,
        semiMajorAxis: 5.16,
        eccentricity: 0.06,
        orbitalInclination: 11.56,
        meanLongitude: Math.random() * 360,
        longitudeOfPerihelion: 169.8,
        longitudeOfAscendingNode: 161.4,
        discoveryYear: 1977,
        perihelion: 4.85,
        aphelion: 5.47
    },
    {
        id: 'polymele',
        name: 'Polymele',
        type: 'planet',
        size: 0.2,
        distance: 10 * AU_SCALE,
        color: '#888888',
        orbitalSpeed: 11.9,
        rotationSpeed: 0.2,
        description: 'Polymele is a primitive Jupiter Trojan from the Greek camp, approximately 21 kilometers in diameter. It is a target of the Lucy mission and is known to have a small satellite.',
        diameter: 21,
        semiMajorAxis: 5.21,
        eccentricity: 0.09,
        orbitalInclination: 12.98,
        meanLongitude: Math.random() * 360,
        longitudeOfPerihelion: 187.3,
        longitudeOfAscendingNode: 111.4,
        discoveryYear: 1973,
        perihelion: 4.74,
        aphelion: 5.68
    },
    {
        id: 'saturn',
        name: 'Saturn',
        type: 'planet',
        size: 4,
        distance: 12.5 * AU_SCALE,
        color: '#B8860B',
        orbitalSpeed: 29.45,
        rotationSpeed: 0.75,
        rings: {
            innerRadius: 6,
            outerRadius: 10,
            textureUrl: 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/saturn_ring.png'
        },
        description: 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine times that of Earth. It only has one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive.',
        diameter: 116460,
        mass: '568',
        dayLength: 10.7,
        semiMajorAxis: 9.537,
        eccentricity: 0.054,
        orbitalInclination: 2.49,
        meanLongitude: Math.random() * 360,
        longitudeOfPerihelion: 92.49,
        longitudeOfAscendingNode: 113.72,
        perihelion: 9.02,
        aphelion: 10.05
    },
    {
        id: 'uranus',
        name: 'Uranus',
        type: 'planet',
        size: 3,
        distance: 15 * AU_SCALE,
        color: '#7FFFD4',
        orbitalSpeed: 84.02,
        rotationSpeed: 0.6,
        description: 'Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have bulk chemical compositions which differ from that of the larger gas giants Jupiter and Saturn.',
        diameter: 50724,
        mass: '86.8',
        dayLength: 17.2,
        semiMajorAxis: 19.19,
        eccentricity: 0.047,
        orbitalInclination: 0.77,
        meanLongitude: Math.random() * 360,
        longitudeOfPerihelion: 170.96,
        longitudeOfAscendingNode: 74.23,
        perihelion: 18.28,
        aphelion: 20.09
    },
    {
        id: 'neptune',
        name: 'Neptune',
        type: 'planet',
        size: 3,
        distance: 17.5 * AU_SCALE,
        color: '#6082B6',
        orbitalSpeed: 164.8,
        rotationSpeed: 0.55,
        description: 'Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, slightly more massive than its near-twin Uranus.',
        diameter: 49244,
        mass: '102',
        dayLength: 16.1,
        semiMajorAxis: 30.07,
        eccentricity: 0.009,
        orbitalInclination: 1.77,
        meanLongitude: Math.random() * 360,
        longitudeOfPerihelion: 44.97,
        longitudeOfAscendingNode: 131.72,
        perihelion: 29.81,
        aphelion: 30.33
    },
    {
        id: 'psyche',
        name: '16 Psyche',
        type: 'planet',
        size: 0.2,
        color: '#AAAAAA',
        description: '16 Psyche is a large metallic asteroid in the main asteroid belt, about 226 kilometers in diameter. It is the target of the NASA Psyche mission.',
        diameter: 226,
        semiMajorAxis: 2.92,
        eccentricity: 0.138,
        orbitalInclination: 3.1,
        orbitalSpeed: 5.0,
        rotationSpeed: 0.2,
        meanLongitude: Math.random() * 360,
        longitudeOfPerihelion: 226.7,
        longitudeOfAscendingNode: 150.3,
        distance: 8.8 * AU_SCALE,
        discoveryYear: 1852,
        perihelion: 2.52,
        aphelion: 3.32
    },
    {
        id: 'ida',
        name: 'Ida',
        type: 'planet',
        size: 0.2,
        color: '#AAAAAA',
        description: '243 Ida is a main-belt asteroid of the Koronis family. It was visited by the Galileo spacecraft in 1993 and found to have a small moon, Dactyl.',
        diameter: 31,
        semiMajorAxis: 2.86,
        eccentricity: 0.046,
        orbitalInclination: 1.14,
        orbitalSpeed: 4.84,
        rotationSpeed: 0.2,
        meanLongitude: Math.random() * 360,
        longitudeOfPerihelion: 195.4,
        longitudeOfAscendingNode: 324.4,
        distance: 8.7 * AU_SCALE,
        discoveryYear: 1884,
        perihelion: 2.73,
        aphelion: 2.99
    },
    {
        id: 'gaspra',
        name: 'Gaspra',
        type: 'planet',
        size: 0.1,
        color: '#AAAAAA',
        description: '951 Gaspra is an S-type asteroid that orbits very near the inner edge of the asteroid belt. Gaspra was the first asteroid to be closely approached by a spacecraft, when it was visited by Galileo in 1991.',
        diameter: 12.2,
        semiMajorAxis: 2.21,
        eccentricity: 0.174,
        orbitalInclination: 4.1,
        orbitalSpeed: 3.28,
        rotationSpeed: 0.2,
        meanLongitude: Math.random() * 360,
        longitudeOfPerihelion: 129.4,
        longitudeOfAscendingNode: 253.2,
        distance: 8.1 * AU_SCALE,
        discoveryYear: 1916,
        perihelion: 1.82,
        aphelion: 2.59
    },
    {
        id: 'apophis',
        name: 'Apophis',
        type: 'planet',
        size: 0.1,
        color: '#AAAAAA',
        description: '99942 Apophis is a near-Earth asteroid that caused a brief period of concern in December 2004 because initial observations indicated a probability up to 2.7% that it would hit Earth on April 13, 2029.',
        diameter: 0.37,
        semiMajorAxis: 0.922,
        eccentricity: 0.191,
        orbitalInclination: 3.33,
        orbitalSpeed: 0.89,
        rotationSpeed: 0.2,
        meanLongitude: Math.random() * 360,
        longitudeOfPerihelion: 126.4,
        longitudeOfAscendingNode: 204.4,
        distance: 5.0 * AU_SCALE,
        discoveryYear: 2004,
        perihelion: 0.75,
        aphelion: 1.1
    },
    {
        id: 'osiris-apex',
        name: 'OSIRIS-APEX',
        type: 'planet',
        size: 0.1,
        color: '#AAAAAA',
        description: 'The OSIRIS-APEX mission, formerly OSIRIS-REx, is now on an extended mission to study the near-Earth asteroid Apophis.',
        diameter: 0.37,
        semiMajorAxis: 0.922,
        eccentricity: 0.191,
        orbitalInclination: 3.33,
        orbitalSpeed: 0.89,
        rotationSpeed: 0.2,
        meanLongitude: Math.random() * 360,
        longitudeOfPerihelion: 126.4,
        longitudeOfAscendingNode: 204.4,
        distance: 5.0 * AU_SCALE,
        discoveryYear: 2023,
        perihelion: 0.75,
        aphelion: 1.1
    },
    {
        id: 'didymos',
        name: 'Didymos',
        type: 'planet',
        size: 0.1,
        color: '#AAAAAA',
        description: '65803 Didymos is a binary asteroid system. The primary body is about 780 meters in diameter; its small satellite, Dimorphos, is about 160 meters in diameter. It was the target of the DART mission.',
        diameter: 0.78,
        semiMajorAxis: 1.64,
        eccentricity: 0.38,
        orbitalInclination: 3.4,
        orbitalSpeed: 2.11,
        rotationSpeed: 0.2,
        meanLongitude: Math.random() * 360,
        longitudeOfPerihelion: 319.4,
        longitudeOfAscendingNode: 73.2,
        distance: 6.8 * AU_SCALE,
        discoveryYear: 1996,
        perihelion: 1.01,
        aphelion: 2.27
    },
    {
        id: 'vesta',
        name: 'Vesta',
        type: 'planet',
        size: 0.2,
        color: '#AAAAAA',
        description: '4 Vesta is one of the largest objects in the asteroid belt, with a mean diameter of 525 kilometres. It was discovered by the German astronomer Heinrich Wilhelm Olbers on 29 March 1807 and is named after Vesta, the virgin goddess of home and hearth from Roman mythology.',
        diameter: 525,
        semiMajorAxis: 2.36,
        eccentricity: 0.089,
        orbitalInclination: 7.14,
        orbitalSpeed: 3.63,
        rotationSpeed: 0.2,
        meanLongitude: Math.random() * 360,
        longitudeOfPerihelion: 151.0,
        longitudeOfAscendingNode: 103.8,
        distance: 8.4 * AU_SCALE,
        discoveryYear: 1807,
        perihelion: 2.15,
        aphelion: 2.57
    },
    {
        id: 'borrelly',
        name: 'Borrelly',
        type: 'comet',
        size: 0.1,
        color: '#AAAAAA',
        description: 'Comet Borrelly is a periodic comet, which was visited by the spacecraft Deep Space 1 in 2001. The comet nucleus is 8 km long and has a highly varied terrain.',
        semiMajorAxis: 3.61,
        eccentricity: 0.624,
        orbitalInclination: 30.3,
        longitudeOfAscendingNode: 76.5,
        longitudeOfPerihelion: 352.5,
        orbitalSpeed: 6.84,
        meanLongitude: Math.random() * 360,
        rotationSpeed: 0.2,
        distance: 9 * AU_SCALE,
        discoveryYear: 1904,
        perihelion: 1.36,
        aphelion: 5.86
    },
    {
        id: 'hartley2',
        name: 'Hartley 2',
        type: 'comet',
        size: 0.1,
        color: '#AAAAAA',
        description: 'Comet Hartley 2 is a small periodic comet that was visited by the Deep Impact spacecraft in 2010. Its nucleus is elongated and peanut-shaped.',
        semiMajorAxis: 3.46,
        eccentricity: 0.695,
        orbitalInclination: 13.6,
        longitudeOfAscendingNode: 219.7,
        longitudeOfPerihelion: 181.1,
        orbitalSpeed: 6.46,
        meanLongitude: Math.random() * 360,
        rotationSpeed: 0.2,
        distance: 8.9 * AU_SCALE,
        discoveryYear: 1986,
        perihelion: 1.06,
        aphelion: 5.87
    },
    {
        id: 'tempel1',
        name: 'Tempel 1',
        type: 'comet',
        size: 0.1,
        color: '#AAAAAA',
        description: 'Comet Tempel 1 is a periodic comet discovered in 1867. It was the target of the Deep Impact mission, which released an impactor into the comet nucleus to study its interior.',
        semiMajorAxis: 3.12,
        eccentricity: 0.52,
        orbitalInclination: 10.5,
        longitudeOfAscendingNode: 69.4,
        longitudeOfPerihelion: 179.1,
        orbitalSpeed: 5.58,
        meanLongitude: Math.random() * 360,
        rotationSpeed: 0.2,
        distance: 8.8 * AU_SCALE,
        discoveryYear: 1867,
        perihelion: 1.5,
        aphelion: 4.74
    },
    {
        id: 'wild2',
        name: 'Wild 2',
        type: 'comet',
        size: 0.1,
        color: '#AAAAAA',
        description: 'Comet Wild 2 is a comet named after Swiss astronomer Paul Wild, who discovered it in 1978. It was visited by the NASA Stardust spacecraft, which returned samples to Earth.',
        semiMajorAxis: 3.44,
        eccentricity: 0.54,
        orbitalInclination: 3.25,
        longitudeOfAscendingNode: 101.4,
        longitudeOfPerihelion: 157.3,
        orbitalSpeed: 6.41,
        meanLongitude: Math.random() * 360,
        rotationSpeed: 0.2,
        distance: 8.9 * AU_SCALE,
        discoveryYear: 1978,
        perihelion: 1.58,
        aphelion: 5.3
    },
    {
        id: 'churyumov-gerasimenko',
        name: '67P/C-G',
        type: 'comet',
        size: 0.1,
        color: '#AAAAAA',
        description: '67P/Churyumov–Gerasimenko is a Jupiter-family comet, originally from the Kuiper belt, with a current orbital period of 6.45 years. It was the destination of the European Space Agency\'s Rosetta mission.',
        semiMajorAxis: 3.46,
        eccentricity: 0.641,
        orbitalInclination: 7.04,
        longitudeOfAscendingNode: 55.19,
        longitudeOfPerihelion: 12.78,
        orbitalSpeed: 6.45,
        meanLongitude: Math.random() * 360,
        rotationSpeed: 0.2,
        distance: 9.0 * AU_SCALE,
        discoveryYear: 1969,
        perihelion: 1.24,
        aphelion: 5.68
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/demoMeteor/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/demoMeteor/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/demoMeteor/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/demoMeteor/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/demoMeteor/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/demoMeteor/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = (param, ref)=>{
    let { className, variant, size, asChild = false, ...props } = param;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/demoMeteor/src/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/demoMeteor/src/components/ui/scroll-area.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollArea",
    ()=>ScrollArea,
    "ScrollBar",
    ()=>ScrollBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/demoMeteor/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/demoMeteor/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/demoMeteor/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/demoMeteor/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const ScrollArea = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = (param, ref)=>{
    let { className, children, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative overflow-hidden", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                className: "h-full w-full rounded-[inherit]",
                children: children
            }, void 0, false, {
                fileName: "[project]/demoMeteor/src/components/ui/scroll-area.tsx",
                lineNumber: 17,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollBar, {}, void 0, false, {
                fileName: "[project]/demoMeteor/src/components/ui/scroll-area.tsx",
                lineNumber: 20,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Corner"], {}, void 0, false, {
                fileName: "[project]/demoMeteor/src/components/ui/scroll-area.tsx",
                lineNumber: 21,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/demoMeteor/src/components/ui/scroll-area.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = ScrollArea;
ScrollArea.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
const ScrollBar = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((param, ref)=>{
    let { className, orientation = "vertical", ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"], {
        ref: ref,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex touch-none select-none transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaThumb"], {
            className: "relative flex-1 rounded-full bg-border"
        }, void 0, false, {
            fileName: "[project]/demoMeteor/src/components/ui/scroll-area.tsx",
            lineNumber: 43,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/demoMeteor/src/components/ui/scroll-area.tsx",
        lineNumber: 30,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
_c2 = ScrollBar;
ScrollBar.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"].displayName;
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ScrollArea$React.forwardRef");
__turbopack_context__.k.register(_c1, "ScrollArea");
__turbopack_context__.k.register(_c2, "ScrollBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/demoMeteor/src/components/ui/carousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Carousel",
    ()=>Carousel,
    "CarouselContent",
    ()=>CarouselContent,
    "CarouselItem",
    ()=>CarouselItem,
    "CarouselNext",
    ()=>CarouselNext,
    "CarouselPrevious",
    ()=>CarouselPrevious
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/demoMeteor/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/demoMeteor/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/demoMeteor/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/demoMeteor/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/demoMeteor/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/demoMeteor/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/demoMeteor/src/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const CarouselContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
function useCarousel() {
    _s();
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](CarouselContext);
    if (!context) {
        throw new Error("useCarousel must be used within a <Carousel />");
    }
    return context;
}
_s(useCarousel, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const Carousel = /*#__PURE__*/ _s1(__TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = _s1((param, ref)=>{
    let { orientation = "horizontal", opts, setApi, plugins, className, children, ...props } = param;
    _s1();
    const [carouselRef, api] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
    }, plugins);
    const [canScrollPrev, setCanScrollPrev] = __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [canScrollNext, setCanScrollNext] = __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const onSelect = __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "Carousel.useCallback[onSelect]": (api)=>{
            if (!api) {
                return;
            }
            setCanScrollPrev(api.canScrollPrev());
            setCanScrollNext(api.canScrollNext());
        }
    }["Carousel.useCallback[onSelect]"], []);
    const scrollPrev = __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "Carousel.useCallback[scrollPrev]": ()=>{
            api === null || api === void 0 ? void 0 : api.scrollPrev();
        }
    }["Carousel.useCallback[scrollPrev]"], [
        api
    ]);
    const scrollNext = __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "Carousel.useCallback[scrollNext]": ()=>{
            api === null || api === void 0 ? void 0 : api.scrollNext();
        }
    }["Carousel.useCallback[scrollNext]"], [
        api
    ]);
    const handleKeyDown = __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "Carousel.useCallback[handleKeyDown]": (event)=>{
            if (event.key === "ArrowLeft") {
                event.preventDefault();
                scrollPrev();
            } else if (event.key === "ArrowRight") {
                event.preventDefault();
                scrollNext();
            }
        }
    }["Carousel.useCallback[handleKeyDown]"], [
        scrollPrev,
        scrollNext
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Carousel.useEffect": ()=>{
            if (!api || !setApi) {
                return;
            }
            setApi(api);
        }
    }["Carousel.useEffect"], [
        api,
        setApi
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Carousel.useEffect": ()=>{
            if (!api) {
                return;
            }
            onSelect(api);
            api.on("reInit", onSelect);
            api.on("select", onSelect);
            return ({
                "Carousel.useEffect": ()=>{
                    api === null || api === void 0 ? void 0 : api.off("select", onSelect);
                }
            })["Carousel.useEffect"];
        }
    }["Carousel.useEffect"], [
        api,
        onSelect
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CarouselContext.Provider, {
        value: {
            carouselRef,
            api: api,
            opts,
            orientation: orientation || ((opts === null || opts === void 0 ? void 0 : opts.axis) === "y" ? "vertical" : "horizontal"),
            scrollPrev,
            scrollNext,
            canScrollPrev,
            canScrollNext
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            onKeyDownCapture: handleKeyDown,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative", className),
            role: "region",
            "aria-roledescription": "carousel",
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/demoMeteor/src/components/ui/carousel.tsx",
            lineNumber: 137,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/demoMeteor/src/components/ui/carousel.tsx",
        lineNumber: 124,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
}, "72w3/pym1wz2ZcTGqySg56b8KiQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
})), "72w3/pym1wz2ZcTGqySg56b8KiQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c1 = Carousel;
Carousel.displayName = "Carousel";
const CarouselContent = /*#__PURE__*/ _s2(__TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = _s2((param, ref)=>{
    let { className, ...props } = param;
    _s2();
    const { carouselRef, orientation } = useCarousel();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: carouselRef,
        className: "overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/demoMeteor/src/components/ui/carousel.tsx",
            lineNumber: 161,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/demoMeteor/src/components/ui/carousel.tsx",
        lineNumber: 160,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "YNqN7/p8l2NfYueiPechI4IqsYo=", false, function() {
    return [
        useCarousel
    ];
})), "YNqN7/p8l2NfYueiPechI4IqsYo=", false, function() {
    return [
        useCarousel
    ];
});
_c3 = CarouselContent;
CarouselContent.displayName = "CarouselContent";
const CarouselItem = /*#__PURE__*/ _s3(__TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = _s3((param, ref)=>{
    let { className, ...props } = param;
    _s3();
    const { orientation } = useCarousel();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        role: "group",
        "aria-roledescription": "slide",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/demoMeteor/src/components/ui/carousel.tsx",
        lineNumber: 182,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "bPPpMbUdjWnfcwMzP4altEp5ZJs=", false, function() {
    return [
        useCarousel
    ];
})), "bPPpMbUdjWnfcwMzP4altEp5ZJs=", false, function() {
    return [
        useCarousel
    ];
});
_c5 = CarouselItem;
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = /*#__PURE__*/ _s4(__TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = _s4((param, ref)=>{
    let { className, variant = "outline", size = "icon", ...props } = param;
    _s4();
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        ref: ref,
        variant: variant,
        size: size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute  h-8 w-8 rounded-full", orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className),
        disabled: !canScrollPrev,
        onClick: scrollPrev,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/demoMeteor/src/components/ui/carousel.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: "Previous slide"
            }, void 0, false, {
                fileName: "[project]/demoMeteor/src/components/ui/carousel.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/demoMeteor/src/components/ui/carousel.tsx",
        lineNumber: 204,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "StVzzFT/dKvE6v0nHx014nh7DNA=", false, function() {
    return [
        useCarousel
    ];
})), "StVzzFT/dKvE6v0nHx014nh7DNA=", false, function() {
    return [
        useCarousel
    ];
});
_c7 = CarouselPrevious;
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = /*#__PURE__*/ _s5(__TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = _s5((param, ref)=>{
    let { className, variant = "outline", size = "icon", ...props } = param;
    _s5();
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        ref: ref,
        variant: variant,
        size: size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute h-8 w-8 rounded-full", orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className),
        disabled: !canScrollNext,
        onClick: scrollNext,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/demoMeteor/src/components/ui/carousel.tsx",
                lineNumber: 248,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: "Next slide"
            }, void 0, false, {
                fileName: "[project]/demoMeteor/src/components/ui/carousel.tsx",
                lineNumber: 249,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/demoMeteor/src/components/ui/carousel.tsx",
        lineNumber: 233,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "VthXVrvg+0LPsG5FRGeAaBGswm4=", false, function() {
    return [
        useCarousel
    ];
})), "VthXVrvg+0LPsG5FRGeAaBGswm4=", false, function() {
    return [
        useCarousel
    ];
});
_c9 = CarouselNext;
CarouselNext.displayName = "CarouselNext";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Carousel$React.forwardRef");
__turbopack_context__.k.register(_c1, "Carousel");
__turbopack_context__.k.register(_c2, "CarouselContent$React.forwardRef");
__turbopack_context__.k.register(_c3, "CarouselContent");
__turbopack_context__.k.register(_c4, "CarouselItem$React.forwardRef");
__turbopack_context__.k.register(_c5, "CarouselItem");
__turbopack_context__.k.register(_c6, "CarouselPrevious$React.forwardRef");
__turbopack_context__.k.register(_c7, "CarouselPrevious");
__turbopack_context__.k.register(_c8, "CarouselNext$React.forwardRef");
__turbopack_context__.k.register(_c9, "CarouselNext");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/demoMeteor/src/components/info-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InfoPanel",
    ()=>InfoPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/demoMeteor/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/demoMeteor/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/demoMeteor/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/demoMeteor/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/demoMeteor/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/demoMeteor/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/demoMeteor/src/components/ui/scroll-area.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$src$2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/demoMeteor/src/components/ui/carousel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/demoMeteor/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const StatItem = (param)=>{
    let { label, value, description } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col py-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-white/60 text-sm",
                children: label
            }, void 0, false, {
                fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm text-white/40",
                children: description
            }, void 0, false, {
                fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
                lineNumber: 19,
                columnNumber: 25
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-3xl font-medium mt-1",
                children: value
            }, void 0, false, {
                fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = StatItem;
const DiscoveryItem = (param)=>{
    let { title, text } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col py-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-white font-medium text-lg",
                children: title
            }, void 0, false, {
                fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-white/80 leading-relaxed mt-2",
                children: text
            }, void 0, false, {
                fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = DiscoveryItem;
const CometIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13.9999 25.6667C13.9999 25.6667 23.3333 19.8334 23.3333 13.4167V6.41669L13.9999 2.33335L4.66659 6.41669V13.4167C4.66659 19.8334 13.9999 25.6667Z",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                fill: "currentColor",
                fillOpacity: "0.1"
            }, void 0, false, {
                fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M24.3333 2.33335L19.6666 14.8334L11.8333 13.5L16.5 21.8334L6.83325 25.6667L18.4999 25.6667L21.1666 34.3334L25.3333 25.6667L34.8333 31.8334L29.4999 23.5L38.3333 20.3334L29.4999 18.5L34.8333 8.33335L26.1666 14.8334L24.3333 2.33335Z",
                stroke: "white",
                strokeOpacity: "0.8",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
                lineNumber: 49,
                columnNumber: 8
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c2 = CometIcon;
const AsteroidIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 28 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M13.9999 25.6667C13.9999 25.6667 23.3333 19.8334 23.3333 13.4167V6.41669L13.9999 2.33335L4.66659 6.41669V13.4167C4.66659 19.8334 13.9999 25.6667Z",
            stroke: "white",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
            lineNumber: 67,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
        lineNumber: 61,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = AsteroidIcon;
const PlanetIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }, void 0, false, {
                fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
                lineNumber: 87,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 12h20"
            }, void 0, false, {
                fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
                lineNumber: 88,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
            }, void 0, false, {
                fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
                lineNumber: 89,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c4 = PlanetIcon;
function InfoPanel(param) {
    let { object, onClose, solarSystemData } = param;
    var _object_diameter, _object_dayLength, _object_eccentricity, _object_perihelion, _object_aphelion, _object_orbitalInclination, _object_id_match;
    _s();
    const [api, setApi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    var _object_diameter_toLocaleString, _object_dayLength_toLocaleString;
    const essentialStats = [
        {
            type: 'description',
            label: "Discovery",
            value: object.description,
            condition: object.description
        },
        {
            type: 'stat',
            label: "Size",
            description: "Diameter",
            value: "".concat((_object_diameter_toLocaleString = (_object_diameter = object.diameter) === null || _object_diameter === void 0 ? void 0 : _object_diameter.toLocaleString()) !== null && _object_diameter_toLocaleString !== void 0 ? _object_diameter_toLocaleString : 'N/A', " km"),
            condition: object.diameter
        },
        {
            type: 'stat',
            label: "Rotation Period",
            description: "Length of one day",
            value: "".concat((_object_dayLength_toLocaleString = (_object_dayLength = object.dayLength) === null || _object_dayLength === void 0 ? void 0 : _object_dayLength.toLocaleString()) !== null && _object_dayLength_toLocaleString !== void 0 ? _object_dayLength_toLocaleString : 'N/A', " hours"),
            condition: object.dayLength
        },
        {
            type: 'stat',
            label: "Distance from Earth",
            description: "Current",
            value: '2.5 AU',
            condition: true
        },
        {
            type: 'stat',
            label: "Discovered",
            description: "Year",
            value: object.discoveryYear,
            condition: object.discoveryYear && (object.type === 'comet' || object.type !== 'planet')
        }
    ].filter((stat)=>stat.condition);
    var _object_eccentricity_toFixed, _object_perihelion_toFixed, _object_aphelion_toFixed, _object_orbitalInclination_toFixed;
    const orbitalPathStats = [
        {
            type: 'stat',
            label: "Orbital Period",
            description: "Time to complete one solar orbit",
            value: "".concat(object.orbitalSpeed.toFixed(2), " years"),
            condition: object.orbitalSpeed
        },
        {
            type: 'stat',
            label: "Eccentricity",
            description: "Orbit shape",
            value: (_object_eccentricity_toFixed = (_object_eccentricity = object.eccentricity) === null || _object_eccentricity === void 0 ? void 0 : _object_eccentricity.toFixed(3)) !== null && _object_eccentricity_toFixed !== void 0 ? _object_eccentricity_toFixed : 'N/A',
            condition: object.eccentricity !== undefined
        },
        {
            type: 'stat',
            label: "Perihelion",
            description: "Closest to Sun",
            value: "".concat((_object_perihelion_toFixed = (_object_perihelion = object.perihelion) === null || _object_perihelion === void 0 ? void 0 : _object_perihelion.toFixed(2)) !== null && _object_perihelion_toFixed !== void 0 ? _object_perihelion_toFixed : 'N/A', " AU"),
            condition: object.perihelion !== undefined
        },
        {
            type: 'stat',
            label: "Aphelion",
            description: "Farthest from Sun",
            value: "".concat((_object_aphelion_toFixed = (_object_aphelion = object.aphelion) === null || _object_aphelion === void 0 ? void 0 : _object_aphelion.toFixed(2)) !== null && _object_aphelion_toFixed !== void 0 ? _object_aphelion_toFixed : 'N/A', " AU"),
            condition: object.aphelion !== undefined
        },
        {
            type: 'stat',
            label: "Inclination",
            description: "Orbit tilt",
            value: "".concat((_object_orbitalInclination_toFixed = (_object_orbitalInclination = object.orbitalInclination) === null || _object_orbitalInclination === void 0 ? void 0 : _object_orbitalInclination.toFixed(2)) !== null && _object_orbitalInclination_toFixed !== void 0 ? _object_orbitalInclination_toFixed : 'N/A', "°"),
            condition: object.orbitalInclination !== undefined
        }
    ].filter((stat)=>stat.condition);
    const allSlides = [
        ...essentialStats,
        ...orbitalPathStats
    ];
    const essentialCount = essentialStats.length;
    const activeTab = current < essentialCount ? 'essential' : 'orbital';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InfoPanel.useEffect": ()=>{
            if (!api) {
                return;
            }
            setCount(api.scrollSnapList().length);
            setCurrent(api.selectedScrollSnap());
            api.on("select", {
                "InfoPanel.useEffect": ()=>{
                    setCurrent(api.selectedScrollSnap());
                }
            }["InfoPanel.useEffect"]);
        }
    }["InfoPanel.useEffect"], [
        api
    ]);
    const scrollPrev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InfoPanel.useCallback[scrollPrev]": ()=>{
            api === null || api === void 0 ? void 0 : api.scrollPrev();
        }
    }["InfoPanel.useCallback[scrollPrev]"], [
        api
    ]);
    const scrollNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InfoPanel.useCallback[scrollNext]": ()=>{
            api === null || api === void 0 ? void 0 : api.scrollNext();
        }
    }["InfoPanel.useCallback[scrollNext]"], [
        api
    ]);
    const handleTabClick = (tab)=>{
        if (tab === 'essential') {
            api === null || api === void 0 ? void 0 : api.scrollTo(0);
        } else {
            api === null || api === void 0 ? void 0 : api.scrollTo(essentialCount);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-auto max-h-[calc(100vh-8rem)] w-[350px] bg-zinc-900/80 text-white rounded-lg shadow-2xl flex flex-col p-6 backdrop-blur-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "ghost",
                size: "icon",
                onClick: onClose,
                className: "absolute top-4 right-4 h-10 w-10 text-white/60 hover:text-white bg-white/10 rounded-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
                        lineNumber: 150,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "sr-only",
                        children: "Close"
                    }, void 0, false, {
                        fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
                        lineNumber: 151,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
                lineNumber: 149,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 mt-4 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                    className: "h-full pr-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col h-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    object.type === 'comet' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CometIcon, {
                                        className: "w-10 h-10 opacity-80"
                                    }, void 0, false, {
                                        fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
                                        lineNumber: 158,
                                        columnNumber: 53
                                    }, this),
                                    object.type === 'planet' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlanetIcon, {
                                        className: "w-8 h-8 opacity-80"
                                    }, void 0, false, {
                                        fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
                                        lineNumber: 159,
                                        columnNumber: 54
                                    }, this),
                                    object.type !== 'comet' && object.type !== 'planet' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AsteroidIcon, {
                                        className: "w-8 h-8 opacity-80"
                                    }, void 0, false, {
                                        fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
                                        lineNumber: 160,
                                        columnNumber: 81
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            object.type !== 'comet' && object.id.match(/\d+/) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg text-white/80",
                                                children: (_object_id_match = object.id.match(/\d+/)) === null || _object_id_match === void 0 ? void 0 : _object_id_match[0]
                                            }, void 0, false, {
                                                fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
                                                lineNumber: 163,
                                                columnNumber: 83
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl",
                                                children: object.name
                                            }, void 0, false, {
                                                fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
                                                lineNumber: 164,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
                                        lineNumber: 162,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
                                lineNumber: 157,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-6 border-b border-white/10 my-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleTabClick('essential'),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("py-2 text-sm", activeTab === 'essential' ? 'text-white border-b-2 border-white' : 'text-white/60'),
                                        children: "Essential stats"
                                    }, void 0, false, {
                                        fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
                                        lineNumber: 169,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleTabClick('orbital'),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("py-2 text-sm", activeTab === 'orbital' ? 'text-white border-b-2 border-white' : 'text-white/60'),
                                        children: "Orbital path"
                                    }, void 0, false, {
                                        fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
                                        lineNumber: 178,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
                                lineNumber: 168,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$src$2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Carousel"], {
                                setApi: setApi,
                                className: "w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$src$2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CarouselContent"], {
                                    children: allSlides.map((slide, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$src$2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CarouselItem"], {
                                            children: slide.type === 'description' && typeof slide.value === 'string' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DiscoveryItem, {
                                                title: "Discovery",
                                                text: slide.value
                                            }, void 0, false, {
                                                fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
                                                lineNumber: 194,
                                                columnNumber: 41
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatItem, {
                                                label: slide.label,
                                                value: slide.value,
                                                description: slide.description
                                            }, void 0, false, {
                                                fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
                                                lineNumber: 196,
                                                columnNumber: 41
                                            }, this)
                                        }, index, false, {
                                            fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
                                            lineNumber: 192,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
                                    lineNumber: 190,
                                    columnNumber: 26
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
                                lineNumber: 189,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
                        lineNumber: 156,
                        columnNumber: 17
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
                    lineNumber: 155,
                    columnNumber: 14
                }, this)
            }, void 0, false, {
                fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
                lineNumber: 154,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center gap-4 mt-4 pt-4 border-t border-white/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        onClick: scrollPrev,
                        className: "h-8 w-8 rounded-full text-white/60 hover:text-white",
                        disabled: current === 0,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
                                lineNumber: 207,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Previous"
                            }, void 0, false, {
                                fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
                                lineNumber: 208,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
                        lineNumber: 206,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: Array.from({
                            length: count
                        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>api === null || api === void 0 ? void 0 : api.scrollTo(i),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-2 w-2 rounded-full", current === i ? 'bg-white' : 'bg-white/30')
                            }, i, false, {
                                fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
                                lineNumber: 212,
                                columnNumber: 21
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
                        lineNumber: 210,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        onClick: scrollNext,
                        className: "h-8 w-8 rounded-full text-white/60 hover:text-white",
                        disabled: current === count - 1,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
                                lineNumber: 216,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Next"
                            }, void 0, false, {
                                fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
                                lineNumber: 217,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
                        lineNumber: 215,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
                lineNumber: 205,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/demoMeteor/src/components/info-panel.tsx",
        lineNumber: 148,
        columnNumber: 5
    }, this);
}
_s(InfoPanel, "B4Srf1R8X8qMgZ2awm4c9PVS1aM=");
_c5 = InfoPanel;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "StatItem");
__turbopack_context__.k.register(_c1, "DiscoveryItem");
__turbopack_context__.k.register(_c2, "CometIcon");
__turbopack_context__.k.register(_c3, "AsteroidIcon");
__turbopack_context__.k.register(_c4, "PlanetIcon");
__turbopack_context__.k.register(_c5, "InfoPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/demoMeteor/src/components/landing-page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LandingPage",
    ()=>LandingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/demoMeteor/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/demoMeteor/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
'use client';
;
;
const MeteorLogo = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 100 100",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "50",
                cy: "50",
                r: "48",
                stroke: "white",
                strokeWidth: "4"
            }, void 0, false, {
                fileName: "[project]/demoMeteor/src/components/landing-page.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M30 70 L40 50 L50 70 L60 50 L70 70",
                stroke: "white",
                strokeWidth: "4",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/demoMeteor/src/components/landing-page.tsx",
                lineNumber: 13,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/demoMeteor/src/components/landing-page.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c = MeteorLogo;
function LandingPage(param) {
    let { isExiting } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 z-50 flex flex-col items-center justify-center bg-black text-white transition-opacity duration-1000 overflow-hidden ".concat(isExiting ? 'opacity-0' : 'opacity-100'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stars"
            }, void 0, false, {
                fileName: "[project]/demoMeteor/src/components/landing-page.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MeteorLogo, {
                    className: "h-20 w-20 opacity-80"
                }, void 0, false, {
                    fileName: "[project]/demoMeteor/src/components/landing-page.tsx",
                    lineNumber: 31,
                    columnNumber: 10
                }, this)
            }, void 0, false, {
                fileName: "[project]/demoMeteor/src/components/landing-page.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex flex-col items-center text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-light tracking-[0.3em] text-white/70",
                        children: "EYES"
                    }, void 0, false, {
                        fileName: "[project]/demoMeteor/src/components/landing-page.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mt-2 text-lg font-light tracking-[0.4em] text-white/50",
                        children: "ON"
                    }, void 0, false, {
                        fileName: "[project]/demoMeteor/src/components/landing-page.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "mt-4 text-5xl font-medium tracking-[1em] text-white",
                        children: "METEORS"
                    }, void 0, false, {
                        fileName: "[project]/demoMeteor/src/components/landing-page.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/demoMeteor/src/components/landing-page.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-10 flex flex-col items-center space-y-2 z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-light tracking-widest text-white/50",
                        children: "Scroll to enter"
                    }, void 0, false, {
                        fileName: "[project]/demoMeteor/src/components/landing-page.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: "h-6 w-6 text-white/50 animate-chevron"
                    }, void 0, false, {
                        fileName: "[project]/demoMeteor/src/components/landing-page.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/demoMeteor/src/components/landing-page.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/demoMeteor/src/components/landing-page.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c1 = LandingPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "MeteorLogo");
__turbopack_context__.k.register(_c1, "LandingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/demoMeteor/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/demoMeteor/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/demoMeteor/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$src$2f$components$2f$solar$2d$system$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/demoMeteor/src/components/solar-system.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$src$2f$components$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/demoMeteor/src/components/header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$src$2f$lib$2f$solar$2d$system$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/demoMeteor/src/lib/solar-system-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$src$2f$components$2f$info$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/demoMeteor/src/components/info-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$src$2f$components$2f$landing$2d$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/demoMeteor/src/components/landing-page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/demoMeteor/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/demoMeteor/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function Home() {
    _s();
    const [selectedObjectId, setSelectedObjectId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hoveredObjectId, setHoveredObjectId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showLanding, setShowLanding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isExiting, setIsExiting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showMitigation, setShowMitigation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleNavigateHome = ()=>{
        setShowLanding(true);
        setIsExiting(false);
        setSelectedObjectId(null);
        setShowMitigation(false);
    };
    const handleNavigateMitigation = ()=>{
        setShowMitigation(true);
        setShowLanding(false);
        setSelectedObjectId(null);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const handleScroll = {
                "Home.useEffect.handleScroll": ()=>{
                    if (showLanding) {
                        setIsExiting(true);
                        setTimeout({
                            "Home.useEffect.handleScroll": ()=>{
                                setShowLanding(false);
                            }
                        }["Home.useEffect.handleScroll"], 1000); // Duration of the fade-out animation
                    }
                }
            }["Home.useEffect.handleScroll"];
            window.addEventListener('wheel', handleScroll);
            window.addEventListener('touchmove', handleScroll);
            return ({
                "Home.useEffect": ()=>{
                    window.removeEventListener('wheel', handleScroll);
                    window.removeEventListener('touchmove', handleScroll);
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        showLanding
    ]);
    const selectedObjectData = __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$src$2f$lib$2f$solar$2d$system$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["solarSystemData"].find((obj)=>obj.id === selectedObjectId);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative w-screen h-screen overflow-hidden bg-black",
        children: [
            showLanding && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$src$2f$components$2f$landing$2d$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPage"], {
                isExiting: isExiting
            }, void 0, false, {
                fileName: "[project]/demoMeteor/src/app/page.tsx",
                lineNumber: 60,
                columnNumber: 23
            }, this),
            showMitigation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MitigationPage, {}, void 0, false, {
                fileName: "[project]/demoMeteor/src/app/page.tsx",
                lineNumber: 62,
                columnNumber: 26
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full transition-opacity duration-1000 ".concat(showLanding || showMitigation ? 'opacity-0' : 'opacity-100'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-0 w-full h-full z-30 pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$src$2f$components$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
                                    onNavigateHome: handleNavigateHome,
                                    onNavigateMitigation: handleNavigateMitigation
                                }, void 0, false, {
                                    fileName: "[project]/demoMeteor/src/app/page.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/demoMeteor/src/app/page.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                children: selectedObjectId && selectedObjectData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        x: -100
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    exit: {
                                        opacity: 0,
                                        x: -100
                                    },
                                    transition: {
                                        duration: 0.5,
                                        ease: 'easeInOut'
                                    },
                                    className: "absolute top-24 left-4 pointer-events-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$src$2f$components$2f$info$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InfoPanel"], {
                                        object: selectedObjectData,
                                        onClose: ()=>setSelectedObjectId(null),
                                        solarSystemData: __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$src$2f$lib$2f$solar$2d$system$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["solarSystemData"]
                                    }, void 0, false, {
                                        fileName: "[project]/demoMeteor/src/app/page.tsx",
                                        lineNumber: 82,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/demoMeteor/src/app/page.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/demoMeteor/src/app/page.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/demoMeteor/src/app/page.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$src$2f$components$2f$solar$2d$system$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolarSystem"], {
                        data: __TURBOPACK__imported__module__$5b$project$5d2f$demoMeteor$2f$src$2f$lib$2f$solar$2d$system$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["solarSystemData"],
                        onSelectObject: setSelectedObjectId,
                        selectedObjectId: selectedObjectId,
                        onHoverObject: setHoveredObjectId,
                        hoveredObjectId: hoveredObjectId
                    }, void 0, false, {
                        fileName: "[project]/demoMeteor/src/app/page.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/demoMeteor/src/app/page.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/demoMeteor/src/app/page.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(Home, "JP19hU4nnUWeRaaWx6A2GgOn0a4=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=demoMeteor_src_929dcd36._.js.map