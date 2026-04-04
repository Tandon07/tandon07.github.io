'use client';

import React, { useEffect, useRef } from 'react';
import { Globe } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ElementType;
}

interface SkillGlobeProps {
  skills: Skill[];
}

function computeSphericalPositions(count: number, radius: number) {
  const points = [];
  const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2; 
    const r = Math.sqrt(1 - y * y);
    const theta = phi * i;
    const x = Math.cos(theta) * r;
    const z = Math.sin(theta) * r;
    points.push([x * radius, y * radius, z * radius]);
  }
  return points;
}

export function SkillGlobe({ skills }: SkillGlobeProps) {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Determine a responsive radius based on screen width
    const isMobile = window.innerWidth < 768;
    const radius = isMobile ? 140 : 250; 
    const basePositions = computeSphericalPositions(skills.length, radius);
    
    let animationFrameId: number;
    let angleX = 0;
    let angleY = 0;
    
    // Auto rotation velocities
    const vX = 0.002;
    const vY = 0.003;

    const updatePositions = () => {
      angleX += vX;
      angleY += vY;
      
      const sinX = Math.sin(angleX);
      const cosX = Math.cos(angleX);
      const sinY = Math.sin(angleY);
      const cosY = Math.cos(angleY);

      basePositions.forEach((pos, i) => {
        const item = itemsRef.current[i];
        if (!item) return;

        // Rotate around Y
        let x1 = pos[0] * cosY - pos[2] * sinY;
        let z1 = pos[0] * sinY + pos[2] * cosY;
        let y1 = pos[1];

        // Rotate around X
        let y2 = y1 * cosX - z1 * sinX;
        let z2 = y1 * sinX + z1 * cosX;
        let x2 = x1;

        // Apply depth to scale and opacity
        const maxZ = radius;
        const zPercent = (z2 + maxZ) / (2 * maxZ); // 0 (back) to 1 (front)
        
        const scale = 0.5 + zPercent * 0.7; // 0.5 to 1.2
        const opacity = 0.2 + zPercent * 0.8; // 0.2 to 1.0
        
        item.style.transform = `translate3d(${x2}px, ${y2}px, ${z2}px) scale(${scale})`;
        item.style.opacity = opacity.toFixed(2);
        item.style.zIndex = Math.round(zPercent * 100).toString();
      });

      animationFrameId = requestAnimationFrame(updatePositions);
    };

    updatePositions();

    return () => cancelAnimationFrame(animationFrameId);
  }, [skills]);

  return (
    <div className="relative flex items-center justify-center w-full min-h-[400px] md:min-h-[600px] overflow-visible perspective-[1000px] py-12">
      {/* Central Glowing Globe */}
      <div className="absolute z-50 flex items-center justify-center w-20 h-20 md:w-32 md:h-32 rounded-full bg-blue-500/10 shadow-[0_0_60px_20px_rgba(59,130,246,0.2)] border border-blue-400/30">
        <Globe className="w-10 h-10 md:w-16 md:h-16 text-blue-400 animate-[spin_12s_linear_infinite]" />
      </div>

      {/* Orbiting items */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 flex items-center justify-center">
        {skills.map((skill, i) => {
          const Icon = skill.icon;
          return (
            <div
              key={i}
              ref={(el) => { itemsRef.current[i] = el; }}
              className="absolute left-0 top-0 flex flex-col items-center justify-center gap-1 group will-change-transform"
              style={{
                marginLeft: '-35px', // offset center (70px width / 2)
                marginTop: '-35px',
                width: '70px',
                height: '70px',
              }}
            >
              <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-gray-300 group-hover:text-white group-hover:bg-white/20 group-hover:scale-110 transition-colors shadow-lg">
                {Icon && <Icon className="text-xl md:text-2xl text-banana" />}
              </div>
              <span className="text-[10px] md:text-xs font-semibold text-gray-300 whitespace-nowrap bg-black/60 px-2 py-1 rounded-md backdrop-blur-sm shadow-md">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
