import React, { useState, useRef, useEffect } from 'react';
import { LinkItem } from '../data/links';
import LinkCard from './LinkCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MobileCarouselProps {
  links: LinkItem[];
}

const MobileCarousel: React.FC<MobileCarouselProps> = ({ links }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [];

  for (let i = 0; i < links.length; i += 3) {
    const chunk = links.slice(i, i + 3);
    while (chunk.length < 3) {
      chunk.push({ id: `placeholder-${i + chunk.length}`, title: '', description: '', url: '', icon: '' });
    }
    slides.push(chunk);
  }

  const maxSlide = slides.length - 1;
  const carouselRef = useRef<HTMLDivElement>(null);
  const startX = useRef<number | null>(null);
  const endX = useRef<number | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      startX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      endX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      if (startX.current !== null && endX.current !== null) {
        const diff = startX.current - endX.current;
        if (diff > 50) nextSlide();
        else if (diff < -50) prevSlide();
      }
      startX.current = null;
      endX.current = null;
    };

    const node = carouselRef.current;
    if (node) {
      node.addEventListener('touchstart', handleTouchStart);
      node.addEventListener('touchmove', handleTouchMove);
      node.addEventListener('touchend', handleTouchEnd);
    }
    return () => {
      if (node) {
        node.removeEventListener('touchstart', handleTouchStart);
        node.removeEventListener('touchmove', handleTouchMove);
        node.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [currentSlide]);

  return (
    <div className="relative w-full overflow-hidden pb-12">
      <div
        ref={carouselRef}
        className="flex transition-transform duration-500 ease-in-out"
        
      >
        {slides.map((chunk, slideIndex) => (
          <div key={slideIndex} className="w-full flex-shrink-0 box-border overflow-visible">
            <div className="grid grid-rows-3 gap-4 px-4">
              {chunk.map((link, index) => (
                <div key={link.id} className="w-full">
                  {link.title ? <LinkCard link={link} delay={index} /> : null}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-orange-500 hover:text-orange-600 z-10"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-orange-500 hover:text-orange-600 z-10"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2">
        {Array.from({ length: maxSlide + 1 }).map((_, i) => (
          <button
            key={i}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === currentSlide ? 'bg-orange-500' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileCarousel;
