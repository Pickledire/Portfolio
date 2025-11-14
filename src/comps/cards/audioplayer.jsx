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
      
      const updateTime = () => {
        setCurrentTime(audio.currentTime);
        setProgress((audio.currentTime / audio.duration) * 100);
      };
  
      const updateDuration = () => {
        setDuration(audio.duration);
      };
  
      if (audio) {
        audio.addEventListener('timeupdate', updateTime);
        audio.addEventListener('loadedmetadata', updateDuration);
        audio.currentTime = 1200; // Start at 20 minutes
      }
  
      return () => {
        if (audio) {
          audio.removeEventListener('timeupdate', updateTime);
          audio.removeEventListener('loadedmetadata', updateDuration);
        }
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
        <h3>My Book</h3>
        <p>This is a short snippet of my book. It's a work in progress but if you're interested in reading it, you can contact me and I will send you a link!</p>
        </div>
        <div className="custom-audio-player">
          <button className="play-btn" onClick={togglePlay}>
            {isPlaying ? '⏸' : '▶'}
          </button>
          <div className="progress-container">
            <div className="progress-bar">
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