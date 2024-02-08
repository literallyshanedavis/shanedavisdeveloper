import React, { useState } from 'react';

export default function ContactButton() {
  const [isHovering, setIsHovering] = useState(false);
  const [copySuccess, setCopySuccess] = useState('');
  const email = "hello@shanedavis.co.uk";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopySuccess('Copied to clipboard!');
      setTimeout(() => setCopySuccess(''), 2500); // Reset message after 2.5 seconds
    } catch (err) {
      console.error("Failed to copy email: ", err);
      setCopySuccess('Failed to copy. Use Ctrl+C.');
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className=''>
      <div 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave} 
        className="group w-[270px] rounded-full border-black border-[1px] flex items-center justify-center px-8 py-4 cursor-pointer relative overflow-hidden">
        <span className="font-medium text-lg">{copySuccess ? copySuccess : email}</span>
        {/* Hidden hover button which should overlap button above on group hover */}
        <div 
          onClick={copyToClipboard} 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave} 
          className="absolute bottom-0 left-0 right-0 w-[270px] rounded-full translate-y-24 duration-500 group-hover:translate-y-0 ease-in-out transition-all border-black border-[1px] bg-black text-white flex items-center justify-center px-8 py-4 cursor-pointer">
          <span className="font-medium text-lg">{copySuccess ? copySuccess : "Copy to clipboard"}</span>
        </div>
      </div>
    </div>
  );
}
