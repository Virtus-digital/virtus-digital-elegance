import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface CarouselItem {
  id: number;
  titleKey: string;
  image: string;
  mobileImage?: string;
  url?: string;
}

interface Carousel3DProps {
  items: CarouselItem[];
  radius?: number;
  autoRotate?: boolean;
  rotateSpeed?: number;
  itemWidth?: number;
  itemHeight?: number;
  mobileItemWidth?: number;
  mobileItemHeight?: number;
}

const Carousel3D = ({ 
  items, 
  radius = 240, 
  autoRotate = true, 
  rotateSpeed = -60, 
  itemWidth = 120, 
  itemHeight = 170,
  mobileItemWidth = 120,
  mobileItemHeight = 170
}: Carousel3DProps) => {
  const { t } = useLanguage();
  const dragContainerRef = useRef<HTMLDivElement>(null);
  const spinContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [rotationX, setRotationX] = useState(-10);
  const [rotationY, setRotationY] = useState(0);
  const [currentRadius, setCurrentRadius] = useState(radius);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const dragContainer = dragContainerRef.current;
    const spinContainer = spinContainerRef.current;
    
    if (!dragContainer || !spinContainer) return;

    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const dragContainer = dragContainerRef.current;
    const spinContainer = spinContainerRef.current;
    
    if (!dragContainer || !spinContainer) return;

    // Set container styles based on device
    const currentWidth = isMobile ? mobileItemWidth : itemWidth;
    const currentHeight = isMobile ? mobileItemHeight : itemHeight;
    
    spinContainer.style.width = `${currentWidth}px`;
    spinContainer.style.height = `${currentHeight}px`;

    // Initialize items positioning
    const items = spinContainer.querySelectorAll('.carousel-item');
    items.forEach((item, index) => {
      const element = item as HTMLElement;
      element.style.transform = `rotateY(${index * (360 / items.length)}deg) translateZ(${currentRadius}px)`;
      element.style.transition = 'transform 1s';
      element.style.transitionDelay = `${(items.length - index) / 4}s`;
    });

    // Auto rotation
    if (autoRotate) {
      const animationName = rotateSpeed > 0 ? 'spin' : 'spinRevert';
      spinContainer.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
    }

  }, [items, currentRadius, itemWidth, itemHeight, autoRotate, rotateSpeed, isMobile, mobileItemWidth, mobileItemHeight]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    const startX = e.clientX;
    const startY = e.clientY;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      
      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;
      
      setRotationY(prev => prev + deltaX * 0.1);
      setRotationX(prev => Math.max(-180, Math.min(0, prev - deltaY * 0.1)));
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -20 : 20;
    setCurrentRadius(prev => Math.max(150, Math.min(400, prev + delta)));
  };

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center" style={{ perspective: '1000px' }}>
      <div 
        ref={dragContainerRef}
        className="relative flex mx-auto cursor-grab active:cursor-grabbing"
        style={{
          transform: `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`,
          transformStyle: 'preserve-3d'
        }}
        onMouseDown={handleMouseDown}
        onWheel={handleWheel}
      >
        <div 
          ref={spinContainerRef}
          className="relative flex mx-auto"
          style={{ 
            transformStyle: 'preserve-3d',
            width: `${itemWidth}px`,
            height: `${itemHeight}px`
          }}
        >
          {items.map((item, index) => (
            <div
              key={item.id}
              className="carousel-item absolute left-0 top-0 w-full h-full"
              style={{
                transformStyle: 'preserve-3d',
                transform: `rotateY(${index * (360 / items.length)}deg) translateZ(${currentRadius}px)`,
                transition: 'transform 1s',
                transitionDelay: `${(items.length - index) / 4}s`,
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                WebkitBoxReflect: 'below 5px linear-gradient(transparent, transparent, rgba(0,0,0,0.2))'
              }}
            >
              <img 
                src={isMobile && item.mobileImage ? item.mobileImage : item.image} 
                alt={t(item.titleKey)}
                className="w-full h-full object-cover object-top rounded-lg hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-300"
              />
            </div>
          ))}
        </div>
        
        {/* Ground effect */}
        <div 
          className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            width: `${currentRadius * 2}px`,
            height: `${currentRadius * 2}px`,
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
            transform: 'rotateX(90deg)',
            borderRadius: '50%'
          }}
        />
      </div>
      
    </div>
  );
};

export default Carousel3D;
