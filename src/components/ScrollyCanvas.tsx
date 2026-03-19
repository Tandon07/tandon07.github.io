'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

const FRAME_COUNT = 120; // 0 to 119

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll();
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(FRAME_COUNT).fill(null));
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    let initialDrawDone = false;
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
        const img = new Image();
        const idx = i.toString().padStart(3, '0');
        img.src = `/sequence/frame_${idx}_delay-0.066s.png`;
        img.onload = () => {
            loadedCount++;
            imagesRef.current[i] = img;
            
            // As soon as the exact first image loads, unlock UI!
            if (!initialDrawDone && imagesRef.current[0]) {
                initialDrawDone = true;
                setIsLoaded(true);
                requestAnimationFrame(() => drawFrame(0));
            }
            // Fallback unlock if frame 0 failed but others loaded
            else if (!initialDrawDone && loadedCount > 2) {
                initialDrawDone = true;
                setIsLoaded(true);
                requestAnimationFrame(() => drawFrame(0));
            }
        };
        img.onerror = () => {
            console.error("Failed to load:", img.src);
            loadedCount++;
            if (!initialDrawDone && loadedCount > 2) {
                initialDrawDone = true;
                setIsLoaded(true);
            }
        };
    }
  }, []);

  const drawFrame = (frameIndex: number) => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Gracefully find the closest loaded frame if the progressive download hasn't finished
    let imgToDraw = imagesRef.current[frameIndex];
    if (!imgToDraw) {
        for (let j = frameIndex; j >= 0; j--) {
            if (imagesRef.current[j]) { imgToDraw = imagesRef.current[j]; break; }
        }
        if (!imgToDraw) {
            for (let j = frameIndex; j < FRAME_COUNT; j++) {
               if (imagesRef.current[j]) { imgToDraw = imagesRef.current[j]; break; }
            }
        }
    }
    if (!imgToDraw) return;

    const img = imgToDraw;
    
    // object-fit: cover equivalent logic
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;
    
    let renderWidth = canvas.width;
    let renderHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      renderHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - renderHeight) / 2;
    } else {
      renderWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - renderWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isLoaded) return;
    const progress = Math.min(latest / 0.8, 1);
    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.max(0, Math.floor(progress * FRAME_COUNT))
    );
    requestAnimationFrame(() => drawFrame(frameIndex));
  });

  const handleResize = () => {
    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      
      const currentProgress = scrollYProgress.get();
      const progress = Math.min(currentProgress / 0.8, 1);
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.max(0, Math.floor(progress * FRAME_COUNT))
      );
      if (isLoaded) drawFrame(frameIndex);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); 
    return () => window.removeEventListener('resize', handleResize);
  }, [isLoaded]);

  return (
    <div className="relative w-full h-[500vh]">
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden z-0 bg-black">
        <canvas ref={canvasRef} className="block w-full h-full" />
        {/* Loading State */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black text-white">
            <div className="animate-pulse flex flex-col items-center">
              <div className="w-8 h-8 rounded-full border-4 border-t-white border-white/20 animate-spin mb-4" />
              <p className="text-sm font-light tracking-widest text-white/70 uppercase">Loading Experience</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
