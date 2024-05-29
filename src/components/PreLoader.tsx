import React, { useEffect } from 'react';
import '../styles/PreLoader.css';
import videoBackground from '../assets/desktop-backgrounds/video-backgrounds/Pre-Loader/prospera-main-bg-1.mp4';
import logo from '../assets/images/Pre-Loader Images/logo.png';
import h4ck3rhuman from '../assets/images/Pre-Loader Images/h4ck3rhuman.png';
import { useRouter } from 'next/router';

interface PreLoaderProps {
  onComplete: () => void;
}

const PreLoader: React.FC<PreLoaderProps> = ({ onComplete }) => {
  const router = useRouter();

  const handleButtonClick = () => {
    const userResponse = prompt("DO YOU WISH TO PROSPER HUMAN?");
    if (userResponse === "YES" || userResponse === "Yes" || userResponse === "yes") {
      onComplete();
      router.push('/login');
    } else {
      alert("User Authorization Denied. You have failed human. Try Again!");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };

  useEffect(() => {
    const disableContextMenu = (event: MouseEvent) => event.preventDefault();
    document.addEventListener('contextmenu', disableContextMenu);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && (
        event.key === 'u' || event.key === 's' || event.key === 'i' || 
        event.key === 'c' || event.key === 'j' || event.key === 'k' || 
        event.key === 'h' || event.key === 'a')) {
        event.preventDefault();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    if (process.env.NODE_ENV === 'production') {
      const originalConsoleLog = console.log;
      Object.defineProperty(window, 'console', {
        get: function() {
          throw new Error('Console is disabled');
        },
        set: function(val) {
          originalConsoleLog(val);
        }
      });
    }

    return () => {
      document.removeEventListener('contextmenu', disableContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="preloader-container">
      <div className="video-background">
        <video autoPlay muted loop playsInline id="background-video">
          <source src={videoBackground} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <img src={h4ck3rhuman as unknown as string} alt="Background Image" className="background-image" />
      <img src={logo as unknown as string} alt="Prospera Logo" className="logo" />
      <button className="glowing-btn" onClick={handleButtonClick}>
        <span className="glowing-txt">P<span className="faulty-letter">ROSPER</span>A</span>
      </button>
    </div>
  );
};

export default PreLoader;
