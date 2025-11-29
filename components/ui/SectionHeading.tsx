import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  alignment = 'center',
  light = false
}) => {
  const alignClass = alignment === 'center' ? 'text-center items-center' : 'text-left items-start';
  const titleColor = light ? 'text-white' : 'text-burgundy';
  const subtitleColor = light ? 'text-cream/90' : 'text-charcoal';
  const lineColor = light ? 'bg-gold' : 'bg-burgundy';

  return (
    <div className={`flex flex-col ${alignClass} mb-12 md:mb-16`}>
      <div className={`w-[60px] h-[3px] ${lineColor} mb-6`}></div>
      <h2 className={`${titleColor} font-playfair text-3xl md:text-5xl font-bold mb-4 leading-tight`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`${subtitleColor} font-lora text-lg md:text-xl max-w-2xl leading-relaxed`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};