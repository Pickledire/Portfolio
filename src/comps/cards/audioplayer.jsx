import React, { useState, useRef, useEffect } from 'react';
import './audioplayer.css';


const CustomAudioPlayer = ({ volume = 1 }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef(null);
  
    useEffect(() => {
      const audio = audioRef.current;
      if (!audio) return;
      
      const updateTime = () => {
        if (audio.duration && !isNaN(audio.duration)) {
          setCurrentTime(audio.currentTime);
          setProgress((audio.currentTime / audio.duration) * 100);
        }
      };
  
      const updateDuration = () => {
        if (audio.duration && !isNaN(audio.duration)) {
          setDuration(audio.duration);
          // Only seek if audio is long enough (20 minutes = 1200 seconds)
          if (audio.duration > 1200) {
            audio.currentTime = 1200;
          }
        }
      };

      const handleError = () => {
        // Audio failed to load - gracefully handle
        setDuration(0);
        setProgress(0);
      };
  
      audio.addEventListener('timeupdate', updateTime);
      audio.addEventListener('loadedmetadata', updateDuration);
      audio.addEventListener('error', handleError);
  
      return () => {
        audio.removeEventListener('timeupdate', updateTime);
        audio.removeEventListener('loadedmetadata', updateDuration);
        audio.removeEventListener('error', handleError);
      };
    }, []);

    // Sync volume with external control
    useEffect(() => {
      const audio = audioRef.current;
      if (audio) {
        audio.volume = Math.max(0, Math.min(1, volume));
      }
    }, [volume]);
  
    const togglePlay = () => {
      const audio = audioRef.current;
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    };
  
    const formatTime = (time) => {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };
  
    return (
      <div className="book-content">
        <div className="book-info">
          <p className="book-description">An excerpt from my current writing project. This audio sample offers a preview of the narrative style and themes I'm exploring.</p>
          <p className="book-meta">For access to the full manuscript or to discuss collaboration opportunities, please reach out through the contact section.</p>
        </div>
        <div className="book-divider"></div>
        <div className="custom-audio-player">
          <button 
            className="play-btn" 
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
          >
            {isPlaying ? '⏸' : '▶'}
          </button>
          <div className="progress-container">
            <div className="progress-bar" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
              <div className="progress-fill" style={{width: `${progress}%`}}></div>
            </div>
            <div className="time-display">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
          <audio ref={audioRef} src="/book/The Book Chapter One Draft Audio Test Two.mp3" />
        </div>
      </div>
    );
  };

export default CustomAudioPlayer;