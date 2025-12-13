import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BlurredBand.css"; // We'll define CSS separately

interface ChainScrollProps {
  chainHeight?: number; // height of chain element in px
}

const ChainScroll: React.FC<ChainScrollProps> = ({ chainHeight = 800 }) => {
  const chainRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [chainProgress, setChainProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !chainRef.current) return;

      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // How far the container is in view
      const progress = Math.min(
        1,
        Math.max(0, (scrollY + windowHeight - containerTop) / (containerHeight + windowHeight - chainHeight))
      );

      setChainProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initialize

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [chainHeight]);

  return (
    <div ref={containerRef} style={{ position: "relative", height: `${chainHeight + 1000}px` }}>
      <div
        ref={chainRef}
        className="chain"
        style={{
          transform: `translateY(${chainProgress * (chainHeight)}px)`,
        }}
      >
        {/* Replace with your chain links */}
        {[...Array(10)].map((_, i) => (
          <div key={i} className="chain-link">
            🔗
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChainScroll;
