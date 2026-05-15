"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, Sphere } from "@react-three/drei";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import Lenis from "lenis";
import {
  ArrowUpRight,
  Github,
  Mail,
  MessageCircle,
  Sparkles,
  Waves
} from "lucide-react";
import { useEffect, useMemo, useRef } from "react";
import type { Group } from "three";

const navItems = ["About", "Skills", "Projects", "Contact"];

const technologies = [
  "Next.js",
  "React",
  "Tailwind",
  "TypeScript",
  "Three.js",
  "MongoDB",
  "Framer Motion",
  "GSAP"
];

const skillClusters = [
  {
    title: "Interface Systems",
    items: ["Next.js", "React", "TypeScript", "Tailwind"],
    copy: "Fast App Router experiences with clean component architecture."
  },
  {
    title: "Motion Direction",
    items: ["Framer Motion", "GSAP", "Lenis", "R3F"],
    copy: "Subtle reveals, magnetic interaction, and depth that stays calm."
  },
  {
    title: "Product Logic",
    items: ["MongoDB", "APIs", "Auth", "Deployment"],
    copy: "Practical backends, polished flows, and production-minded delivery."
  }
];

const projects = [
  {
    title: "Aural Desk",
    description: "A focused dashboard for creators to plan, ship, and review work with cinematic calm.",
    stack: ["Next.js", "Motion", "MongoDB"],
    accent: "from-cyanice/30 via-silver/10 to-transparent"
  },
  {
    title: "Glass Forge",
    description: "A design-forward component lab for reusable visual systems and premium interactions.",
    stack: ["React", "Tailwind", "GSAP"],
    accent: "from-water/30 via-white/10 to-transparent"
  },
  {
    title: "Signal Flow",
    description: "A sleek analytics surface with responsive data states, clear hierarchy, and soft depth.",
    stack: ["TypeScript", "Charts", "R3F"],
    accent: "from-silver/25 via-cyanice/10 to-transparent"
  }
];

function Atmosphere() {
  const group = useRef<Group>(null);

  useFrame(({ clock, pointer }) => {
    if (!group.current) return;
    group.current.rotation.x = Math.sin(clock.elapsedTime * 0.25) * 0.12 + pointer.y * 0.08;
    group.current.rotation.y = clock.elapsedTime * 0.12 + pointer.x * 0.12;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.45}>
      <group ref={group}>
        <Sphere args={[1.35, 48, 48]} position={[0, 0, 0]}>
          <MeshTransmissionMaterial
            backside
            thickness={0.36}
            chromaticAberration={0.025}
            anisotropy={0.18}
            distortion={0.28}
            distortionScale={0.2}
            temporalDistortion={0.08}
            color="#9eeaff"
            roughness={0.12}
            transmission={0.76}
            opacity={0.68}
          />
        </Sphere>
        <mesh position={[1.55, -0.32, -0.8]} rotation={[0.45, 0.2, 0.72]}>
          <torusGeometry args={[0.78, 0.018, 16, 96]} />
          <meshBasicMaterial color="#7de3ff" transparent opacity={0.32} />
        </mesh>
      </group>
    </Float>
  );
}

function Scene() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5.2], fov: 42 }} dpr={[1, 1.7]}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[4, 3, 4]} intensity={1.4} color="#dff7ff" />
        <Atmosphere />
      </Canvas>
    </div>
  );
}

function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);
}

function CursorLight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 24 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 24 });

  useEffect(() => {
    const update = (event: PointerEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };
    window.addEventListener("pointermove", update);
    return () => window.removeEventListener("pointermove", update);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed z-50 hidden h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyanice/10 blur-3xl md:block"
      style={{ x: springX, y: springY }}
    />
  );
}

function Shell() {
  useSmoothScroll();

  useEffect(() => {
    gsap.fromTo(
      ".gsap-soft",
      { y: 18, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.85, ease: "power3.out", stagger: 0.08, delay: 0.08 }
    );
  }, []);

  return (
    <main className="relative overflow-hidden">
      <CursorLight />
      <div className="noise" />
      <div className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-ink/55 backdrop-blur-2xl">
        <nav className="mx-auto flex h-16 w-[min(1120px,calc(100%-40px))] items-center justify-between">
          <a href="#hero" className="font-mono text-sm text-silver">
            Vishfolio
          </a>
          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 md:flex">
            {navItems.map((item) => (
              <a
                className="rounded-full px-4 py-2 text-sm text-mist transition hover:bg-white/10 hover:text-white"
                href={`#${item.toLowerCase()}`}
                key={item}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-16">
      <Scene />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_38%,rgba(125,227,255,0.14),transparent_26rem)]" />
      <div className="section-shell z-10 flex min-h-[calc(100vh-64px)] items-center py-16">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative z-10">
            <motion.div className="gsap-soft eyebrow mb-5 inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              Personal developer portfolio
            </motion.div>
            <h1 className="gsap-soft text-balance max-w-4xl text-6xl font-semibold leading-[0.95] tracking-[-0.04em] text-white md:text-8xl">
              Building modern cinematic interfaces.
            </h1>
            <p className="gsap-soft mt-7 max-w-2xl text-lg leading-8 text-mist md:text-xl">
              Vishfolio is a clean digital identity for crafting smooth products,
              subtle motion, and developer-focused experiences with a premium edge.
            </p>
            <div className="gsap-soft mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="magnetic inline-flex items-center gap-2 rounded-full border border-cyanice/30 bg-cyanice/14 px-5 py-3 text-sm font-medium text-white"
              >
                View Projects <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="magnetic inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.045] px-5 py-3 text-sm font-medium text-silver"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="relative min-h-[420px]">
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/[0.025] shadow-premium backdrop-blur-md md:h-96 md:w-96" />
            <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyanice/15" />
            {technologies.map((tech, index) => (
              <FloatingTech key={tech} index={index} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingTech({ tech, index }: { tech: string; index: number }) {
  const angle = (index / technologies.length) * Math.PI * 2;
  const radius = index % 2 === 0 ? 188 : 142;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <motion.div
      className="glass absolute left-1/2 top-1/2 rounded-full px-4 py-2 text-sm text-silver"
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{
        opacity: 1,
        scale: 1,
        x,
        y,
        rotate: [0, index % 2 ? -2 : 2, 0]
      }}
      transition={{
        opacity: { delay: 0.2 + index * 0.06 },
        scale: { delay: 0.2 + index * 0.06 },
        rotate: { duration: 5 + index * 0.35, repeat: Infinity, ease: "easeInOut" }
      }}
      whileHover={{ scale: 1.08, y: y - 5 }}
    >
      {tech}
    </motion.div>
  );
}

function About() {
  return (
    <section id="about" className="relative">
      <div className="section-shell">
        <div className="mb-10">
          <p className="eyebrow">About</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.03em] text-white md:text-6xl">
            Clean engineering with a designer&apos;s sense of timing.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Current focus", "Building modern web apps with smooth flows, crisp typography, and production-ready structure."],
            ["Technologies enjoyed", "Next.js, React, TypeScript, Tailwind, Three.js, MongoDB, Framer Motion, and GSAP."],
            ["Design philosophy", "Make interfaces feel alive through restraint: fewer effects, better rhythm, clearer intent."]
          ].map(([title, copy]) => (
            <motion.article
              className="glass rounded-lg p-6"
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h3 className="text-lg font-medium text-white">{title}</h3>
              <p className="mt-4 leading-7 text-mist">{copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="eyebrow">Skills</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white md:text-6xl">
              A stack arranged for speed, taste, and motion.
            </h2>
          </div>
          <div className="relative grid gap-4 md:grid-cols-2">
            {skillClusters.map((cluster, index) => (
              <motion.article
                className={`glass rounded-lg p-5 ${index === 2 ? "md:col-span-2" : ""}`}
                key={cluster.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-lg font-medium text-white">{cluster.title}</h3>
                <p className="mt-3 text-sm leading-6 text-mist">{cluster.copy}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {cluster.items.map((item) => (
                    <span
                      className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-sm text-silver"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative">
      <div className="section-shell">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Projects</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white md:text-6xl">
              Premium showcase cards with room to breathe.
            </h2>
          </div>
          <p className="max-w-sm leading-7 text-mist">
            Curated samples shaped around polished motion, clear hierarchy, and developer-minded execution.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <TiltProject project={project} index={index} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TiltProject({
  project,
  index
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-80, 80], [4, -4]);
  const rotateY = useTransform(x, [-80, 80], [-4, 4]);

  const onMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;
    x.set(event.clientX - bounds.left - bounds.width / 2);
    y.set(event.clientY - bounds.top - bounds.height / 2);
  };

  return (
    <motion.article
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY }}
      className="glass group rounded-lg p-4 [transform-style:preserve-3d]"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
    >
      <div className={`relative h-56 overflow-hidden rounded-md bg-gradient-to-br ${project.accent}`}>
        <div className="absolute inset-5 rounded-md border border-white/10 bg-ink/50 backdrop-blur-xl" />
        <div className="absolute left-7 top-7 flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-cyanice/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
        </div>
        <div className="absolute bottom-7 left-7 right-7 h-24 rounded-md border border-white/10 bg-white/[0.055] p-4">
          <div className="h-3 w-28 rounded-full bg-white/35" />
          <div className="mt-4 h-2 w-full rounded-full bg-white/15" />
          <div className="mt-2 h-2 w-2/3 rounded-full bg-cyanice/22" />
        </div>
        <Waves className="absolute right-8 top-8 h-10 w-10 text-cyanice/55 transition duration-300 group-hover:scale-110" />
      </div>
      <div className="p-2 pt-5">
        <h3 className="text-2xl font-semibold tracking-[-0.02em] text-white">{project.title}</h3>
        <p className="mt-3 min-h-20 leading-7 text-mist">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span className="rounded-full bg-white/[0.055] px-3 py-1.5 text-xs text-silver" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function Contact() {
  const links = useMemo(
    () => [
      { label: "GitHub", href: "https://github.com/", icon: Github },
      { label: "Email", href: "mailto:hello@vishfolio.dev", icon: Mail },
      { label: "Discord / X", href: "https://x.com/", icon: MessageCircle }
    ],
    []
  );

  return (
    <section id="contact" className="relative">
      <div className="section-shell pb-16">
        <div className="glass relative overflow-hidden rounded-lg p-8 md:p-12">
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyanice/10 blur-3xl" />
          <p className="eyebrow">Contact</p>
          <h2 className="relative mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.03em] text-white md:text-6xl">
            Let&apos;s build something smooth, useful, and memorable.
          </h2>
          <div className="relative mt-9 flex flex-wrap gap-3">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  className="magnetic inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.045] px-5 py-3 text-sm font-medium text-silver"
                  href={link.href}
                  key={link.label}
                >
                  <Icon className="h-4 w-4 text-cyanice" />
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return <Shell />;
}
