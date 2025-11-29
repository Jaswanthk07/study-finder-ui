"use client";

import {
  useEffect,
  useRef,
  useState,
  Suspense,
  useMemo,
  useCallback,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Html, Line } from "@react-three/drei";
import * as THREE from "three";
import { X } from "lucide-react";
import { AnimatedStats } from "./animated-counter";

gsap.registerPlugin(ScrollTrigger);

const studentData = [
  {
    lat: 40.7128,
    lng: -74.006,
    name: "Alex Chen",
    city: "New York, USA",
    studying: "Machine Learning",
    friends: 3,
  },
  {
    lat: 51.5074,
    lng: -0.1278,
    name: "Emma Wilson",
    city: "London, UK",
    studying: "Data Structures",
    friends: 5,
  },
  {
    lat: 35.6762,
    lng: 139.6503,
    name: "Yuki Tanaka",
    city: "Tokyo, Japan",
    studying: "Web Development",
    friends: 2,
  },
  {
    lat: -33.8688,
    lng: 151.2093,
    name: "Liam Brown",
    city: "Sydney, Australia",
    studying: "Calculus II",
    friends: 4,
  },
  {
    lat: 48.8566,
    lng: 2.3522,
    name: "Marie Dupont",
    city: "Paris, France",
    studying: "Physics",
    friends: 3,
  },
  {
    lat: 1.3521,
    lng: 103.8198,
    name: "Wei Ming",
    city: "Singapore",
    studying: "Algorithms",
    friends: 6,
  },
  {
    lat: 19.4326,
    lng: -99.1332,
    name: "Carlos Garcia",
    city: "Mexico City",
    studying: "Statistics",
    friends: 4,
  },
  {
    lat: -23.5505,
    lng: -46.6333,
    name: "Ana Silva",
    city: "São Paulo, Brazil",
    studying: "Chemistry",
    friends: 5,
  },
  {
    lat: 28.6139,
    lng: 77.209,
    name: "Priya Sharma",
    city: "New Delhi, India",
    studying: "Biology",
    friends: 7,
  },
  {
    lat: 31.2304,
    lng: 121.4737,
    name: "Li Wei",
    city: "Shanghai, China",
    studying: "Economics",
    friends: 3,
  },
  {
    lat: -1.2921,
    lng: 36.8219,
    name: "Amani Ochieng",
    city: "Nairobi, Kenya",
    studying: "Computer Science",
    friends: 4,
  },
  {
    lat: 52.52,
    lng: 13.405,
    name: "Hans Mueller",
    city: "Berlin, Germany",
    studying: "Philosophy",
    friends: 2,
  },
  {
    lat: 55.7558,
    lng: 37.6173,
    name: "Dmitry Petrov",
    city: "Moscow, Russia",
    studying: "Mathematics",
    friends: 3,
  },
  {
    lat: -34.6037,
    lng: -58.3816,
    name: "Sofia Rodriguez",
    city: "Buenos Aires",
    studying: "Literature",
    friends: 4,
  },
  {
    lat: 25.2048,
    lng: 55.2708,
    name: "Ahmed Hassan",
    city: "Dubai, UAE",
    studying: "Business",
    friends: 5,
  },
  {
    lat: 37.5665,
    lng: 126.978,
    name: "Ji-Eun Kim",
    city: "Seoul, Korea",
    studying: "Design",
    friends: 6,
  },
];

const landMasses = [
  // North America
  { lat: 45, lng: -100, size: 0.5, color: "#22c55e" },
  { lat: 35, lng: -95, size: 0.4, color: "#16a34a" },
  { lat: 55, lng: -115, size: 0.35, color: "#22c55e" },
  { lat: 40, lng: -75, size: 0.3, color: "#16a34a" },
  // South America
  { lat: -10, lng: -60, size: 0.45, color: "#22c55e" },
  { lat: -25, lng: -55, size: 0.35, color: "#16a34a" },
  // Europe
  { lat: 50, lng: 10, size: 0.35, color: "#22c55e" },
  { lat: 55, lng: 25, size: 0.3, color: "#16a34a" },
  // Africa
  { lat: 5, lng: 20, size: 0.5, color: "#22c55e" },
  { lat: -15, lng: 25, size: 0.4, color: "#16a34a" },
  { lat: 25, lng: 15, size: 0.35, color: "#22c55e" },
  // Asia
  { lat: 35, lng: 100, size: 0.55, color: "#22c55e" },
  { lat: 55, lng: 90, size: 0.45, color: "#16a34a" },
  { lat: 25, lng: 80, size: 0.35, color: "#22c55e" },
  { lat: 40, lng: 140, size: 0.25, color: "#16a34a" },
  // Australia
  { lat: -25, lng: 135, size: 0.4, color: "#22c55e" },
];

const continentOutlines = [
  // North America
  [
    [70, -140],
    [55, -130],
    [40, -125],
    [25, -110],
    [25, -80],
    [45, -66],
    [55, -60],
    [70, -80],
    [70, -140],
  ],
  // South America
  [
    [10, -70],
    [-5, -80],
    [-23, -70],
    [-55, -68],
    [-35, -57],
    [-5, -35],
    [10, -70],
  ],
  // Europe
  [
    [70, -10],
    [50, 2],
    [36, -6],
    [36, 25],
    [55, 40],
    [70, 30],
    [70, -10],
  ],
  // Africa
  [
    [35, -10],
    [30, 32],
    [12, 44],
    [-25, 35],
    [-35, 18],
    [5, -5],
    [35, -10],
  ],
  // Asia
  [
    [70, 60],
    [70, 140],
    [35, 135],
    [10, 105],
    [25, 68],
    [40, 50],
    [70, 60],
  ],
  // Australia
  [
    [-12, 130],
    [-25, 153],
    [-38, 145],
    [-35, 118],
    [-12, 130],
  ],
];

interface StudentPopupProps {
  student: (typeof studentData)[0] | null;
  onClose: () => void;
}

function StudentPopup({ student, onClose }: StudentPopupProps) {
  if (!student) return null;

  return (
    <div className="w-56 rounded-[1.25rem] bg-slate-50/80 dark:bg-slate-800/60 p-4 shadow-sm border-2 border-slate-400 dark:border-slate-600">
      <button
        onClick={onClose}
        className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
      >
        <X className="h-3 w-3" />
      </button>
      <div className="flex items-center gap-3 mb-3">
        <div className="h-10 w-10 rounded-full bg-linear-to-br from-sky-400 to-indigo-500 flex items-center justify-center text-white font-semibold">
          {student.name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-slate-900 dark:text-white text-sm">
            {student.name}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {student.city}
          </p>
        </div>
      </div>
      <div className="space-y-2 text-xs">
        <div className="rounded-lg bg-slate-50 dark:bg-slate-700/50 p-2">
          <p className="text-slate-500 dark:text-slate-400">
            Currently studying
          </p>
          <p className="font-medium text-slate-900 dark:text-white">
            {student.studying}
          </p>
        </div>
        <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Studying with {student.friends} friends
        </div>
      </div>
    </div>
  );
}

function latLngToXYZ(
  lat: number,
  lng: number,
  radius: number
): [number, number, number] {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return [x, y, z];
}

function LandMasses() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {landMasses.map((land, idx) => {
        const [x, y, z] = latLngToXYZ(land.lat, land.lng, 2.01);
        return (
          <mesh key={idx} position={[x, y, z]}>
            <circleGeometry args={[land.size, 16]} />
            <meshBasicMaterial
              color={land.color}
              transparent
              opacity={0.6}
              side={THREE.DoubleSide}
            />
          </mesh>
        );
      })}
    </group>
  );
}

function WorldOutlines() {
  const outlinePoints = useMemo(() => {
    return continentOutlines.map((continent) =>
      (continent as [number, number][]).map(([lat, lng]) =>
        latLngToXYZ(lat, lng, 2.02)
      )
    );
  }, []);

  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {outlinePoints.map((points, idx) => (
        <Line
          key={idx}
          points={points}
          color="#4ade80"
          lineWidth={1}
          opacity={0.7}
          transparent
        />
      ))}
    </group>
  );
}

function TravelingParticle({
  start,
  end,
  delay,
  speed = 0.5,
}: {
  start: [number, number, number];
  end: [number, number, number];
  delay: number;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const progressRef = useRef(delay);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    progressRef.current += delta * speed;
    const t = (Math.sin(progressRef.current) + 1) / 2;

    const midPoint: [number, number, number] = [
      (start[0] + end[0]) / 2,
      (start[1] + end[1]) / 2,
      (start[2] + end[2]) / 2,
    ];
    const midLength = Math.sqrt(
      midPoint[0] ** 2 + midPoint[1] ** 2 + midPoint[2] ** 2
    );
    const arcHeight = 2.6;
    const normalizedMid: [number, number, number] = [
      (midPoint[0] / midLength) * arcHeight,
      (midPoint[1] / midLength) * arcHeight,
      (midPoint[2] / midLength) * arcHeight,
    ];

    const oneMinusT = 1 - t;
    meshRef.current.position.set(
      oneMinusT * oneMinusT * start[0] +
        2 * oneMinusT * t * normalizedMid[0] +
        t * t * end[0],
      oneMinusT * oneMinusT * start[1] +
        2 * oneMinusT * t * normalizedMid[1] +
        t * t * end[1],
      oneMinusT * oneMinusT * start[2] +
        2 * oneMinusT * t * normalizedMid[2] +
        t * t * end[2]
    );
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.035, 6, 6]} />
      <meshBasicMaterial color="#00ffff" transparent opacity={0.95} />
    </mesh>
  );
}

function ConnectionArc({
  start,
  end,
}: {
  start: [number, number, number];
  end: [number, number, number];
}) {
  const points = useMemo(() => {
    const curvePoints: [number, number, number][] = [];
    const segments = 16;

    const midPoint: [number, number, number] = [
      (start[0] + end[0]) / 2,
      (start[1] + end[1]) / 2,
      (start[2] + end[2]) / 2,
    ];
    const midLength = Math.sqrt(
      midPoint[0] ** 2 + midPoint[1] ** 2 + midPoint[2] ** 2
    );
    const arcHeight = 2.5;
    const normalizedMid: [number, number, number] = [
      (midPoint[0] / midLength) * arcHeight,
      (midPoint[1] / midLength) * arcHeight,
      (midPoint[2] / midLength) * arcHeight,
    ];

    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const oneMinusT = 1 - t;
      curvePoints.push([
        oneMinusT * oneMinusT * start[0] +
          2 * oneMinusT * t * normalizedMid[0] +
          t * t * end[0],
        oneMinusT * oneMinusT * start[1] +
          2 * oneMinusT * t * normalizedMid[1] +
          t * t * end[1],
        oneMinusT * oneMinusT * start[2] +
          2 * oneMinusT * t * normalizedMid[2] +
          t * t * end[2],
      ]);
    }
    return curvePoints;
  }, [start, end]);

  return (
    <Line
      points={points}
      color="#fbbf24"
      lineWidth={1.5}
      opacity={0.5}
      transparent
    />
  );
}

function NodeConnections() {
  const connections = useMemo(() => {
    const conns: {
      start: [number, number, number];
      end: [number, number, number];
      delay: number;
    }[] = [];
    const positions = studentData.map((s) => latLngToXYZ(s.lat, s.lng, 2.1));

    // Create network-like connections
    for (let i = 0; i < positions.length; i++) {
      // Connect to 2 nearby nodes for network effect
      const target1 = (i + 2) % positions.length;
      const target2 = (i + 5) % positions.length;

      conns.push({
        start: positions[i],
        end: positions[target1],
        delay: Math.random() * Math.PI * 2,
      });
      if (i % 2 === 0) {
        conns.push({
          start: positions[i],
          end: positions[target2],
          delay: Math.random() * Math.PI * 2,
        });
      }
    }
    return conns;
  }, []);

  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {connections.map((conn, idx) => (
        <group key={idx}>
          <ConnectionArc start={conn.start} end={conn.end} />
          {/* Multiple particles per connection for busy network effect */}
          <TravelingParticle
            start={conn.start}
            end={conn.end}
            delay={conn.delay}
            speed={0.4}
          />
          <TravelingParticle
            start={conn.end}
            end={conn.start}
            delay={conn.delay + Math.PI}
            speed={0.35}
          />
        </group>
      ))}
    </group>
  );
}

function Globe() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.03;
    }
  });

  return (
    <group>
      {/* Atmosphere glow - light blue */}
      <Sphere args={[2.15, 32, 32]}>
        <meshBasicMaterial
          color="#38bdf8"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Outer atmosphere */}
      <Sphere args={[2.08, 32, 32]}>
        <meshBasicMaterial
          color="#0ea5e9"
          transparent
          opacity={0.12}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Main globe - ocean blue */}
      <Sphere ref={meshRef} args={[2, 48, 48]}>
        <meshStandardMaterial color="#0369a1" roughness={0.8} metalness={0.1} />
      </Sphere>

      {/* Darker ocean depth layer */}
      <Sphere args={[1.99, 32, 32]}>
        <meshBasicMaterial color="#0c4a6e" transparent opacity={0.3} />
      </Sphere>
    </group>
  );
}

function GlobeMarkers({
  onMarkerClick,
  selectedStudent,
  onClosePopup,
}: {
  onMarkerClick: (student: (typeof studentData)[0]) => void;
  selectedStudent: (typeof studentData)[0] | null;
  onClosePopup: () => void;
}) {
  const markersRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (markersRef.current) {
      markersRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={markersRef}>
      {studentData.map((student, idx) => {
        const [x, y, z] = latLngToXYZ(student.lat, student.lng, 2.1);
        const isSelected = selectedStudent?.name === student.name;

        return (
          <group key={idx}>
            {/* Glow ring */}
            <mesh position={[x, y, z]}>
              <ringGeometry args={[0.08, 0.12, 16]} />
              <meshBasicMaterial
                color="#fbbf24"
                transparent
                opacity={0.4}
                side={THREE.DoubleSide}
              />
            </mesh>

            {/* Marker */}
            <mesh
              position={[x, y, z]}
              onClick={(e) => {
                e.stopPropagation();
                onMarkerClick(student);
              }}
              onPointerOver={(e) => {
                e.stopPropagation();
                document.body.style.cursor = "pointer";
              }}
              onPointerOut={() => {
                document.body.style.cursor = "default";
              }}
            >
              <sphereGeometry args={[isSelected ? 0.07 : 0.055, 12, 12]} />
              <meshBasicMaterial color={isSelected ? "#f59e0b" : "#fbbf24"} />
            </mesh>

            {/* Popup */}
            {isSelected && (
              <Html
                position={[x * 1.3, y * 1.3, z * 1.3]}
                center
                distanceFactor={8}
                style={{ pointerEvents: "auto" }}
              >
                <StudentPopup
                  student={selectedStudent}
                  onClose={onClosePopup}
                />
              </Html>
            )}
          </group>
        );
      })}
    </group>
  );
}

function GlobeCanvas() {
  const [selectedStudent, setSelectedStudent] = useState<
    (typeof studentData)[0] | null
  >(null);

  const handleMarkerClick = useCallback((student: (typeof studentData)[0]) => {
    setSelectedStudent((prev) =>
      prev?.name === student.name ? null : student
    );
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.5]}
      performance={{ min: 0.5 }}
      gl={{ antialias: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-3, 2, 4]} intensity={0.4} color="#38bdf8" />
      <pointLight position={[3, -2, 4]} intensity={0.3} color="#22c55e" />

      <group>
        <Globe />
        <LandMasses />
        <WorldOutlines />
        <NodeConnections />
        <GlobeMarkers
          onMarkerClick={handleMarkerClick}
          selectedStudent={selectedStudent}
          onClosePopup={() => setSelectedStudent(null)}
        />
      </group>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
        rotateSpeed={0.5}
      />
    </Canvas>
  );
}

function GlobeFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="relative h-48 w-48">
        <div className="absolute inset-0 rounded-full bg-linear-to-br from-sky-500 to-emerald-500 animate-pulse" />
        <div className="absolute inset-4 rounded-full bg-sky-600/50" />
      </div>
    </div>
  );
}

export function GlobeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
      gsap.fromTo(
        canvasRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: canvasRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="globe"
      ref={sectionRef}
      className="relative py-6 lg:py-8 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div ref={titleRef} className="mx-auto max-w-2xl text-center mb-12">
          <span className="inline-block rounded-full bg-amber-100 dark:bg-amber-900/30 px-4 py-1.5 text-sm font-semibold text-amber-700 dark:text-amber-400">
            Global Network
          </span>
          <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Join Learners{" "}
            <span className="bg-linear-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            Connect with study buddies across the globe. Drag to rotate and
            click markers to see who is studying.
          </p>
        </div>

        <div
          ref={canvasRef}
          className="relative mx-auto aspect-square max-w-2xl mt-6"
        >
          <Suspense fallback={<GlobeFallback />}>
            <GlobeCanvas />
          </Suspense>
        </div>

        <div className="mt-6">
          <AnimatedStats />
        </div>
      </div>
    </section>
  );
}
