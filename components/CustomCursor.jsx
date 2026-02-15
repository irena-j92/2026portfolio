"use client";
import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [trail, setTrail] = useState([]);
  const idCounter = useRef(0); // Add a counter for unique IDs

  useEffect(() => {
    const updatePosition = (e) => {
      const newPos = { 
        x: e.clientX, 
        y: e.clientY, 
        id: `${Date.now()}-${idCounter.current++}` // Combine timestamp with counter
      };
      setPosition(newPos);
      setTrail(prev => [...prev, newPos]);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest("a, button")) {
        setIsHoveringLink(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest("a, button")) {
        setIsHoveringLink(false);
      }
    };

    window.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    const cleanup = setInterval(() => {
      setTrail(prev => {
        const now = Date.now();
        return prev.filter(point => {
          const timestamp = parseInt(point.id.split('-')[0]);
          return now - timestamp < 1000;
        });
      });
    }, 50);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      clearInterval(cleanup);
    };
  }, []);

  return (
    <>
      {/* {trail.map((point) => {
        const timestamp = parseInt(point.id.split('-')[0]);
        const age = Date.now() - timestamp;
        const opacity = Math.max(0, 1 - age / 1000);
        return (
          <div
            key={point.id}
            className="pointer-events-none fixed z-40 w-2 h-2 rounded-[1px]"
            style={{
              left: `${point.x}px`,
              top: `${point.y}px`,
              transform: 'translate(-50%, -50%)',
              backgroundColor: '#00ccff',
              opacity: opacity * 0.6,
            }}
          />
        );
      })} */}
      <div
        className={`pointer-events-none rounded-full fixed z-50 w-10 h-10 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out ${
          isHoveringLink
            ? "bg-white scale-50 backdrop-blur-sm"
            : "bg-white/10"
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
}