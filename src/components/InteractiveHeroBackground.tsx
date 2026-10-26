import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function InteractiveHeroBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let renderer: THREE.WebGLRenderer | null = null;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: false,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      // Fallback if WebGL is unavailable: the CSS aura handles visual ambiance
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 400);
    camera.position.set(0, -3.5, 46);
    camera.lookAt(0, 1.5, 0);
    renderer.setClearColor(0x000000, 0);

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;
    const narrow = width < 768;

    // Grid of points configuration inspired by solidtech.digital
    const COLS = narrow ? 104 : 168;
    const ROWS = narrow ? 60 : 96;
    const SPAN_X = 104;
    const SPAN_Y = 60;
    const count = COLS * ROWS;

    const pos = new Float32Array(count * 3);
    const rand = new Float32Array(count);

    let idx = 0;
    for (let y = 0; y < ROWS; y++) {
      for (let x = 0; x < COLS; x++) {
        // Slight organic jitter to break strict grid lines without losing field cohesion
        const jx = (Math.random() - 0.5) * (SPAN_X / COLS) * 0.55;
        const jy = (Math.random() - 0.5) * (SPAN_Y / ROWS) * 0.55;
        pos[idx * 3] = (x / (COLS - 1) - 0.5) * SPAN_X + jx;
        pos[idx * 3 + 1] = (y / (ROWS - 1) - 0.5) * SPAN_Y + jy;
        pos[idx * 3 + 2] = 0;
        rand[idx] = Math.random();
        idx++;
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("aRand", new THREE.BufferAttribute(rand, 1));

    const uniforms = {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(999, 999) },
      uPointer: { value: 0 },
      uSize: { value: narrow ? 2.1 : 2.45 },
      uDpr: { value: 1 },
      uColor: { value: new THREE.Color(0x23525f) }, // Zaytek dark teal
      uHi: { value: new THREE.Color(0x4fd1c5) },    // Zaytek vibrant teal
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexShader: /* glsl */ `
        uniform float uTime, uSize, uDpr, uPointer;
        uniform vec2  uMouse;
        attribute float aRand;
        varying float vGlow, vFade;

        void main () {
          vec3 p = position;

          // Multi-octave wave undulating across the field
          float w  = sin(p.x * 0.168 + uTime * 0.40) * cos(p.y * 0.205 - uTime * 0.29);
          w += 0.42 * sin(p.x * 0.355 - uTime * 0.25) * cos(p.y * 0.31 + uTime * 0.19);
          p.z += w * 2.8;

          // Dynamic repulsion under mouse cursor
          vec2  d    = p.xy - uMouse;
          float dist = length(d);
          float infl = exp(-dist * dist / 150.0) * uPointer;
          p.xy += normalize(d + 0.0001) * infl * 5.5;
          p.z  += infl * 7.2;

          // Smooth edge dissolve so particles fade seamlessly into darkness
          float r = length(position.xy / vec2(52.0, 30.0));
          vFade = 1.0 - smoothstep(0.52, 1.0, r);

          // Luminosity lift on wave crests and active mouse proximity
          float lift = 0.34 + 0.66 * smoothstep(-2.8, 3.2, p.z);
          vGlow = lift * (0.62 + 0.38 * aRand) + infl * 1.35;

          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position  = projectionMatrix * mv;
          gl_PointSize = uSize * uDpr * (0.75 + vGlow * 1.1) * (46.0 / -mv.z);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uColor, uHi;
        varying float vGlow, vFade;

        void main () {
          vec2  c = gl_PointCoord - 0.5;
          float d = length(c);
          if (d > 0.5) discard;
          float a = pow(smoothstep(0.5, 0.0, d), 1.9);
          vec3  col = mix(uColor, uHi, clamp(vGlow * 0.85, 0.0, 1.0));
          gl_FragColor = vec4(col, a * vFade * (0.12 + vGlow * 0.48));
        }
      `,
    });

    const field = new THREE.Points(geo, material);
    field.rotation.x = -0.42; // Tilted in 3D perspective plane like solidtech.digital
    scene.add(field);

    const resize = () => {
      if (!container || !renderer) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      renderer.setPixelRatio(dpr);
      renderer.setSize(width, height, false);
      uniforms.uDpr.value = dpr;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    // Interactive pointer plane intersection
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const ray = new THREE.Raycaster();
    const ndc = new THREE.Vector2();
    const hit = new THREE.Vector3();
    const target = new THREE.Vector2(999, 999);
    let wantedPointer = 0;

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if (!canvas) return;
      const clientX = "touches" in e ? e.touches[0]?.clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0]?.clientY : e.clientY;
      if (clientX === undefined || clientY === undefined) return;

      const r = canvas.getBoundingClientRect();
      if (
        clientX < r.left - 40 ||
        clientX > r.right + 40 ||
        clientY < r.top - 40 ||
        clientY > r.bottom + 40
      ) {
        wantedPointer = 0;
        return;
      }

      ndc.x = ((clientX - r.left) / r.width) * 2 - 1;
      ndc.y = -((clientY - r.top) / r.height) * 2 + 1;
      ray.setFromCamera(ndc, camera);

      if (ray.ray.intersectPlane(plane, hit)) {
        field.worldToLocal(hit);
        target.set(hit.x, hit.y);
        wantedPointer = 1;
      }
    };

    const onPointerLeave = () => {
      wantedPointer = 0;
    };

    window.addEventListener("mousemove", onPointerMove, { passive: true });
    window.addEventListener("touchmove", onPointerMove, { passive: true });
    window.addEventListener("mouseleave", onPointerLeave, { passive: true });
    window.addEventListener("touchend", onPointerLeave, { passive: true });

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = Math.min(clock.getDelta(), 0.1);
      uniforms.uTime.value += delta;

      // Smooth damping for pointer coordinates and activity
      uniforms.uMouse.value.lerp(target, 0.08);
      uniforms.uPointer.value += (wantedPointer - uniforms.uPointer.value) * 0.06;

      renderer?.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("mouseleave", onPointerLeave);
      window.removeEventListener("touchend", onPointerLeave);

      geo.dispose();
      material.dispose();
      renderer?.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 bg-[#080E10]"
      aria-hidden="true"
    >
      {/* Deep gradient background base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060B0D] via-[#091518] to-[#0B191D]" />

      {/* Hero Aura: soft radial atmospheric teal illumination */}
      <div
        className="hero-aura absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 50% 35%, rgba(79, 209, 197, 0.14) 0%, rgba(35, 82, 95, 0.08) 35%, transparent 70%),
            radial-gradient(circle at 20% 60%, rgba(56, 178, 165, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(79, 209, 197, 0.06) 0%, transparent 50%)
          `,
        }}
      />

      {/* Subtle architectural tech grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          backgroundPosition: "center",
        }}
      />

      {/* Three.js 3D Undulating Particle Wave Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block pointer-events-none"
      />

      {/* Bottom veil fade: smoothly blends the hero field into the next section */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, transparent 65%, rgba(11, 25, 29, 0.85) 90%, #0B191D 100%)",
        }}
      />
    </div>
  );
}
