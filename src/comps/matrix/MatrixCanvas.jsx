import React, { useRef, useEffect } from 'react';
import './Matrix.css';

const MatrixCanvas = ({ isActive }) => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);

  const theColors = ['#cefbe4', '#81ec72', '#5cd646', '#54d13c', '#4ccc32', '#43c728'];
  const textStrip = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ%$@#&*+=<>|\\/~^_[]{}()!?.,:;';
  
  let stripCount = 0;
  let stripX = [];
  let stripY = [];
  let dY = [];
  let stripFontSize = [];

  useEffect(() => {
    if (!isActive || !canvasRef.current) {
      // Clean up animation when deactivated
      if (animationFrameRef.current) {
        clearTimeout(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      return;
    }

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    // Get full document height - use a reasonable calculation
    const getDocumentHeight = () => {
      const body = document.body;
      const html = document.documentElement;
      const height = Math.max(
        body.scrollHeight || 0,
        body.offsetHeight || 0,
        html.clientHeight || 0,
        html.scrollHeight || 0,
        html.offsetHeight || 0,
        window.innerHeight || 0
      );
      // Cap at reasonable maximum (50k pixels) to prevent infinite height
      return Math.min(height, 50000);
    };
    
    // Set canvas size to full page height
    const resizeCanvas = () => {
      if (!canvas || !isActive) return;
      canvas.width = window.innerWidth;
      const docHeight = getDocumentHeight();
      canvas.height = docHeight;
      canvas.style.height = `${docHeight}px`; // Ensure CSS height matches
    };
    
    // Initialize strips - must be called after canvas is resized
    const initializeStrips = () => {
      if (!canvas || canvas.width === 0) return;
      
      stripCount = Math.floor(canvas.width / 20);
      stripX = [];
      stripY = [];
      dY = [];
      stripFontSize = [];

      for (let i = 0; i < stripCount; i++) {
        stripX[i] = Math.floor(Math.random() * canvas.width);
        stripY[i] = Math.floor(Math.random() * canvas.height);
        dY[i] = Math.floor(Math.random() * 7) + 3;
        stripFontSize[i] = Math.floor(Math.random() * 16) + 8;
      }
    };
    
    // Resize canvas immediately, then initialize strips
    resizeCanvas();
    initializeStrips();
    
    // Throttle resize updates
    let resizeTimeout;
    const throttledResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (isActive && canvasRef.current) {
          resizeCanvas();
          // Reinitialize strips if canvas size changed significantly
          const newHeight = getDocumentHeight();
          if (Math.abs(newHeight - canvas.height) > 100) {
            initializeStrips();
          }
        }
      }, 200);
    };
    
    window.addEventListener('resize', throttledResize);

    const drawStrip = (x, y, fontSize) => {
      for (let k = 0; k <= 20; k++) {
        const randChar = textStrip[Math.floor(Math.random() * textStrip.length)];
        if (context.fillText) {
          switch (k) {
            case 0:
              context.fillStyle = theColors[0]; break;
            case 1:
              context.fillStyle = theColors[1]; break;
            case 3:
              context.fillStyle = theColors[2]; break;
            case 7:
              context.fillStyle = theColors[3]; break;
            case 13:
              context.fillStyle = theColors[4]; break;
            case 17:
              context.fillStyle = theColors[5]; break;
            default:
              context.fillStyle = theColors[0];
          }
          context.fillText(randChar, x, y);
        }
        y -= fontSize;
      }
    };

    const draw = () => {
      if (!isActive || !canvasRef.current || canvas.width === 0 || stripCount === 0) {
        return;
      }
      
      // Clear the canvas and set the properties
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.shadowOffsetX = context.shadowOffsetY = 0;
      context.shadowBlur = 8;
      context.shadowColor = '#94f475';
      
      for (let j = 0; j < stripCount; j++) {
        context.font = stripFontSize[j] + 'px monospace';
        context.textBaseline = 'top';
        context.textAlign = 'center';
        
        if (stripY[j] > canvas.height + 100) {
          stripX[j] = Math.floor(Math.random() * canvas.width);
          stripY[j] = -100;
          dY[j] = Math.floor(Math.random() * 7) + 3;
          stripFontSize[j] = Math.floor(Math.random() * 16) + 8;
          drawStrip(stripX[j], stripY[j], stripFontSize[j]);
        } else {
          drawStrip(stripX[j], stripY[j], stripFontSize[j]);
        }
        
        stripY[j] += dY[j];
      }
      
      animationFrameRef.current = setTimeout(draw, 70);
    };

    draw();

    return () => {
      window.removeEventListener('resize', throttledResize);
      clearTimeout(resizeTimeout);
      if (animationFrameRef.current) {
        clearTimeout(animationFrameRef.current);
      }
    };
  }, [isActive]);

  return (
    <canvas 
      ref={canvasRef} 
      className={`matrix-canvas ${isActive ? 'active' : ''}`}
    />
  );
};

export default MatrixCanvas;

