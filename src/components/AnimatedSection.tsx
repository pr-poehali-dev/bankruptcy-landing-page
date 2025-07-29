import React from 'react';
import { useInView } from '@/hooks/useInView';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fade-in-up' | 'fade-in-left' | 'fade-in-right' | 'scale-in';
  delay?: number;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  animation = 'fade-in-up', 
  delay = 0,
  className = '' 
}) => {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div 
      ref={ref}
      className={`${className} transition-all duration-700 ${
        isInView 
          ? `animate-${animation}` 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ 
        animationDelay: isInView ? `${delay}ms` : '0ms' 
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;