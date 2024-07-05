import React from "react";

interface TextHighlightProps {
  className?: string;
  img?: string;
  alt?: string;
  title: string;
  fontStyle: string;
}

const TextHighlight: React.FC<TextHighlightProps> = ({ className, img, alt, title, fontStyle }) => {
  return (
    <div className={`flex flex-row gap-4 items-center ${className}`}>
      {img && (
        <div className="w-14 h-14 lg:h-20 lg:w-20 rounded-full bg-white overflow-hidden flex-shrink-0">
          <img src={img} alt={alt} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="relative flex">
        <div className={`relative text-white z-10 ${fontStyle}`}>
          {title}
        </div>
        <div className="absolute inset-x-0 bottom-1 h-1/3 bg-primary z-0"></div>
      </div>
    </div>
  );
};

export default TextHighlight;
