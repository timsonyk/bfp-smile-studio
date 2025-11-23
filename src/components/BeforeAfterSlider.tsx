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
      <div className="block sm:hidden text-center mb-3 text-sm text-muted-foreground animate-fade-in">
        Проведите пальцем, чтобы сравнить →
      </div>
      <div
        className="relative w-full aspect-[4/3] overflow-hidden rounded-xl md:rounded-2xl shadow-2xl cursor-col-resize select-none touch-pan-y"
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
      >
        {/* After Image */}
        <img src={afterImage} alt={`${alt} - После`} className="absolute inset-0 w-full h-full object-cover" />

        {/* Before Image with Clip */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img src={beforeImage} alt={`${alt} - До`} className="absolute inset-0 w-full h-full object-cover" />
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-2xl flex items-center justify-center">
            <div className="flex space-x-1">
              <div className="w-0.5 h-5 sm:h-6 bg-primary"></div>
              <div className="w-0.5 h-5 sm:h-6 bg-primary"></div>
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-black/60 backdrop-blur-sm text-white px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md text-xs sm:text-sm font-medium">
          До
        </div>
        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-black/60 backdrop-blur-sm text-white px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md text-xs sm:text-sm font-medium">
          После
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
