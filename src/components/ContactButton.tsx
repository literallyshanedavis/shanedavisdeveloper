import React, { useState } from 'react';

export default function ContactButton() {
  const [isHovering, setIsHovering] = useState(false);
  const [copySuccess, setCopySuccess] = useState('');
  const email = "hello@shanedavis.co.uk";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopySuccess('Email copied to clipboard!');
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
    <div 
      onClick={copyToClipboard} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave} 
      className="w-min rounded-full border-black border-[1px] flex items-center justify-center px-8 py-4 cursor-pointer relative">
      <span className="font-medium text-lg">{copySuccess ? copySuccess : email}</span>
    </div>
  );
}
