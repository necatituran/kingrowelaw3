import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text' | 'glass';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "font-montserrat font-semibold text-base transition-all duration-200 ease-out inline-flex items-center justify-center tracking-wide relative overflow-hidden group";
  const padding = "py-4 px-10";
  const radius = "rounded-lg";

  // 3D Glass & Red Styles
  const variants = {
    // Burgundy - Strong 3D Look (#8B1F29)
    primary: `
      bg-[#8B1F29] text-white
      border border-white/10
      shadow-[0_6px_0_#6B1821,0_15px_20px_rgba(0,0,0,0.3)]
      translate-y-0
      hover:-translate-y-1 hover:shadow-[0_8px_0_#6B1821,0_20px_25px_rgba(0,0,0,0.3)] hover:bg-[#6B1821]
      active:translate-y-[4px] active:shadow-[0_2px_0_#6B1821,0_0px_0px_rgba(0,0,0,0)]
      ${padding} ${radius}
    `,
    // 3D Burgundy Glass (Secondary)
    secondary: `
      bg-burgundy/10 backdrop-blur-md
      border border-burgundy/30
      text-burgundy
      shadow-[0_4px_10px_rgba(0,0,0,0.05)]
      hover:bg-burgundy hover:text-white hover:border-transparent
      hover:shadow-[0_10px_25px_rgba(139,31,41,0.3)]
      ${padding} ${radius}
    `,
    // Strong Frosted Glass
    glass: `
      bg-white/10 backdrop-blur-xl
      border border-white/20
      text-white
      shadow-[0_8px_32px_0_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(255,255,255,0.1)]
      hover:bg-white/20 hover:border-white/40
      hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.2),inset_0_0_0_1px_rgba(255,255,255,0.2)]
      ${padding} ${radius}
    `,
    outline: `
      bg-transparent border-2 border-white/40 text-white 
      hover:bg-white hover:text-burgundy hover:border-white
      backdrop-blur-sm
      ${padding} ${radius}
    `,
    text: `bg-transparent text-copper hover:text-gold p-0 underline-offset-4 hover:underline`,
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {/* Subtle shine effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};