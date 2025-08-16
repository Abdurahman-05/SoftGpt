// Card.tsx
import React from "react";

type CardProps = {
  title?: string; // optional
  className?: string; // optional
  children?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ title, children ,className = ""}) => {
  return (
    <div className={`bg-white p-4 pl-0 rounded-lg shadow-sm ${className}`}>
      {/* Show title if provided */}
      {title && (
        <div className="h-fit w-fit border-l-4 border-primary mt-2 pl-2 font-semibold text-gray-800">
          {title}
        </div>
      )}
      
      {children && <div className="mt-3 px-3">{children}</div>}
    </div>
  );
};

export default Card;
