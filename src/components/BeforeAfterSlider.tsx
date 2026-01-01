import { useState } from "react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  alt: string;
}

const BeforeAfterSlider = ({ beforeImage, afterImage, alt }: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  return (
    <div className="relative w-full">
      <div
        className="relative w-full aspect-[4/3] overflow-hidden cursor-col-resize select-none touch-pan-y"
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
      >
        {/* After Image */}
        <img
          src={afterImage}
          alt={`${alt} - После`}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Before Image with Clip */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={beforeImage}
            alt={`${alt} - До`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Slider Line - Minimal */}
        <div
          className="absolute top-0 bottom-0 w-px bg-background z-20"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-background border border-border flex items-center justify-center">
            <div className="flex space-x-0.5">
              <div className="w-px h-3 bg-foreground/50" />
              <div className="w-px h-3 bg-foreground/50" />
            </div>
          </div>
        </div>

        {/* Labels - Minimal */}
        <div className="absolute bottom-4 left-4 text-xs text-background/90 uppercase tracking-widest">
          До
        </div>
        <div className="absolute bottom-4 right-4 text-xs text-background/90 uppercase tracking-widest">
          После
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
