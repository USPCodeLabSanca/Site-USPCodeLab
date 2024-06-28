import React, { useEffect, useRef, useState } from "react";


interface TextHighlightProps {
  className? : string,
  img?: string,
  alt?: string,
  title: string,
  fontStyle: string,
}

const TextHighlight: React.FC<TextHighlightProps> = ({ className, img, alt, title, fontStyle }: TextHighlightProps) => {
  const titleRef = useRef<HTMLDivElement>(null);
  const [titleWidth, setTitleWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (titleRef.current) {
        setTitleWidth(titleRef.current.offsetWidth);
      }
    };

    // Call updateWidth initially and whenever title changes
    updateWidth();

    // Recalculate width when the window is resized
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, [title]);


  return (
    <div className={`flex flex-row gap-4 items-center ${className}`}>
      {img ?
        <>
          <div className='w-20 h-20 rounded-full bg-white'>
            <img src={img} alt={alt}></img>
          </div>
        </> :
        <></>}
      <div className='relative flex'>
        <div ref={titleRef} className={`relative text-white z-10 ${fontStyle}`}>{title}</div>
        <div style={{ width: titleWidth }} className={`absolute inset-x-0 bottom-1 h-1/3 bg-primary z-0`}></div>
      </div>
    </div>
  )
}

export default TextHighlight