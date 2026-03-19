'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

const FRAME_COUNT = 120; // 0 to 119

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll();
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Preload images
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const idx = i.toString().padStart(3, '0');
      img.src = `/sequence/frame_${idx}_delay-0.066s.png`;
      img.onload = () => {
        loadedCount++;
        checkLoaded();
      };
      img.onerror = () => {
        console.error("Failed to load:", img.src);
        loadedCount++;
        checkLoaded();
      };
      
      const checkLoaded = () => {
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
          setIsLoaded(true);
          // Initial draw requires a tiny delay to ensure canvas is ready
          requestAnimationFrame(() => drawFrame(0, loadedImages));
        }
      };
      loadedImages.push(img);
    }
  }, []);

  const drawFrame = (frameIndex: number, imgs: HTMLImageElement[] = images) => {
    if (!canvasRef.current || !imgs[frameIndex]) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imgs[frameIndex];
    
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
    // Add a slight dark overlay to make text pop
    ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isLoaded) return;
    // We want the sequence to finish before the end of the scroll (e.g. at 80%)
    // so the projects section can be viewed normally afterwards.
    // Let's map scroll 0 -> 0.8 to frame 0 -> 119.
    const progress = Math.min(latest / 0.8, 1);
    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.max(0, Math.floor(progress * FRAME_COUNT))
    );
    // Use requestAnimationFrame for smooth painting
    requestAnimationFrame(() => drawFrame(frameIndex));
  });

  const handleResize = () => {
    if (canvasRef.current) {
      // Set actual canvas size to display size
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      
      // Redraw current frame
      if (images.length > 0) {
        const currentProgress = scrollYProgress.get();
        const progress = Math.min(currentProgress / 0.8, 1);
        const frameIndex = Math.min(
          FRAME_COUNT - 1,
          Math.max(0, Math.floor(progress * FRAME_COUNT))
        );
        drawFrame(frameIndex, images);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // init size
    return () => window.removeEventListener('resize', handleResize);
  }, [images]);

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
