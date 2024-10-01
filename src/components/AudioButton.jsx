import React, { useState, useEffect, useRef } from "react";

import { playing, paused } from "../constants/svg";

const AudioButton = (props) => {
  const { audioSrc } = props;
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(audioSrc));
  const previousAudioRef = useRef(null);

  useEffect(() => {
    // Cleanup: pause audio if the component is unmounted or audio changes
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const handleAudioToggle = () => {
    if (
      previousAudioRef.current &&
      previousAudioRef.current !== audioRef.current
    ) {
      previousAudioRef.current.pause();
      previousAudioRef.current.currentTime = 0;
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      previousAudioRef.current = audioRef.current;
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <button onClick={handleAudioToggle}>{isPlaying ? paused : playing}</button>
  );
};

export default AudioButton;
