import React, { useState, useEffect } from 'react';

export default function ContactButton() {
  const [isHovering, setIsHovering] = useState(false);
  const [copySuccess, setCopySuccess] = useState('');
  const [isMobile, setIsMobile] = useState(false); // Detect if the user is on a mobile device
  const email = "hello@shanedavis.co.uk";

  useEffect(() => {
    // Function to determine if the device is mobile based on screen width
    const updateDeviceType = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Call the function on component mount
    updateDeviceType();

    // Add event listener for window resize to adjust for changing window sizes or orientation changes
    window.addEventListener('resize', updateDeviceType);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', updateDeviceType);
  }, []);

  const copyToClipboard = async () => {
    if (isMobile) {
      // On mobile, let the native behavior of the mailto link handle the action
      return;
    }
    try {
      await navigator.clipboard.writeText(email);
      setCopySuccess('Copied to clipboard!');
      setTimeout(() => setCopySuccess(''), 1000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
      setCopySuccess('Failed to copy. Use Ctrl+C.');
    }
  };


  return (
    <div className='animate-fadeInDelay opacity-0'>
      {isMobile ? (
        // Render as a simple clickable mailto link for mobile devices
        <a href={`mailto:${email}`} className="w-[270px] rounded-full border-black border-[1px] flex items-center justify-center px-8 py-4 cursor-pointer">
          <span className="font-medium text-lg">{email}</span>
        </a>
      ) : (
        // Render the interactive button for desktop devices
        <div 
          className={`group w-[270px] rounded-full border-black ${copySuccess ? 'border-0': 'border-[1px]'} flex items-center justify-center px-8 py-4 cursor-pointer relative overflow-hidden`}>
          <span className="font-medium text-lg">{email}</span>
          <div 
            onClick={copyToClipboard} 
            className={`z-50 absolute bottom-0 left-0 right-0 w-[270px] rounded-full translate-y-24 duration-500 group-hover:translate-y-0 ease-in-out transition-all ${copySuccess ? 'bg-green-600 text-white' : 'bg-black border-black border-[1px] text-white'} flex items-center justify-center px-8 py-4 cursor-pointer`}>
            <span className="font-medium text-lg">{copySuccess ? copySuccess : "Copy to clipboard"}</span>
          </div>
        </div>
      )}
    </div>
  );
}