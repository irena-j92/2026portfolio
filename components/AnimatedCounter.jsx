// "use client";

// import { animate, useInView, useIsomorphicLayoutEffect } from "framer-motion";
// import { useRef } from "react";

// const AnimatedCounter = ({ from, to, animationOptions, onComplete }) => {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true });

//   useIsomorphicLayoutEffect(() => {
//     const element = ref.current;

//     if (!element || !inView) return;

//     // Set initial value
//     element.textContent = String(from);

//     // Respect reduced motion preferences
//     if (window.matchMedia("(prefers-reduced-motion)").matches) {
//       element.textContent = String(to);
//       if (onComplete) onComplete();
//       return;
//     }

//     const controls = animate(from, to, {
//       duration: 1.2, // better UX for preloaders
//       ease: "easeOut",
//       ...animationOptions,
//       onUpdate(value) {
//         element.textContent = value.toFixed(0);
//       },
//       onComplete() {
//         if (onComplete) onComplete();
//       },
//     });

//     // Cleanup on unmount
//     return () => {
//       controls.stop();
//     };
//   }, [inView, from, to, animationOptions, onComplete]);

//   return <span ref={ref} />;
// };

// export default AnimatedCounter;
