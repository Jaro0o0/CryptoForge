"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { DEFAULT_ETH_CAMERA } from "./constants";

const ETHCanvas = dynamic(() => import("./ETHCanvas"), {
  ssr: false,
  loading: () => <div className="w-full h-full animate-pulse bg-white/[0.02] rounded-lg" />,
});

function CanvasPlaceholder({ className, style }) {
  return <div className={`w-full h-full animate-pulse bg-white/[0.02] rounded-lg ${className ?? ""}`} style={style} />;
}

export default function LazyETHCanvas({
  camera = DEFAULT_ETH_CAMERA,
  className,
  style,
  loadOnVisible = true,
  rootMargin = "200px",
}) {
  const ref = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(!loadOnVisible);

  useEffect(() => {
    if (!loadOnVisible) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [loadOnVisible, rootMargin]);

  return (
    <div ref={ref} className={className} style={style}>
      {shouldLoad ? <ETHCanvas camera={camera} className="w-full h-full" /> : <CanvasPlaceholder />}
    </div>
  );
}
