import React, { useState, useRef, useEffect } from "react";

import { playing, paused, downloadsvg } from "../constants/svg";

// Global reference to track the currently playing audio
let currentlyPlayingAudio = null;

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
};

const AudioPlayer = (props) => {
  const { audioSrc, track } = props;
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0); // Total duration of the audio
  const [currentTime, setCurrentTime] = useState(0); // Elapsed time
  const audioRef = useRef(null);
  const progressRef = useRef(null);

  // Download function
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = audioSrc; // Path to your audio file
    link.download = `${track} by BenGospel`; // Name of the file to be downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Play or pause the audio
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      if (currentlyPlayingAudio && currentlyPlayingAudio !== audioRef.current) {
        // Pause the currently playing audio if different from this one
        setIsPlaying(false);
        currentlyPlayingAudio.pause();
        currentlyPlayingAudio = null;
      }
      audioRef.current.play();
      currentlyPlayingAudio = audioRef.current;
      setIsPlaying(true);
    }
  };

  // Update progress bar and current time as audio plays
  const handleTimeUpdate = () => {
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    setProgress((currentTime / duration) * 100);
    setCurrentTime(currentTime);
  };

  // When audio is loaded, set the duration
  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  // Seek functionality when user clicks on the progress bar
  const handleProgressClick = (e) => {
    const rect = progressRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newTime = (clickX / width) * duration;
    audioRef.current.currentTime = newTime;
    setProgress((newTime / duration) * 100);
    setCurrentTime(newTime);
  };

  // Reset play button when audio ends
  const handleAudioEnd = () => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
    currentlyPlayingAudio = null; // Reset the global reference
  };

  useEffect(() => {
    const audioElement = audioRef.current;
    audioElement.addEventListener("timeupdate", handleTimeUpdate);
    audioElement.addEventListener("ended", handleAudioEnd);

    return () => {
      audioElement.removeEventListener("timeupdate", handleTimeUpdate);
      audioElement.removeEventListener("ended", handleAudioEnd);
    };
  }, []);

  return (
    <div className="w-full p-2 bg-slate-300 rounded-lg rounded-t-none shadow-lg text-center">
      <audio
        ref={audioRef}
        src={audioSrc}
        onLoadedMetadata={handleLoadedMetadata}
      />

      <div className="flex items-center justify-between">
        {/* Display elapsed time and total duration */}
        <div className="text-sm text-gray-700 mb-2">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>

        <div className="mb space-x-4">
          <button>
            {/* <Link to={audioSrc}>{downloadsvg}</Link> */}
            <a href="#" onClick={handleDownload}>
              {downloadsvg}
            </a>
          </button>
          <button
            onClick={togglePlayPause}
            className=" text-white bg-[red] rounded-full hover:bg-blue-600 transition"
          >
            {isPlaying ? paused : playing}
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div
        className="w-full h-2 bg-white rounded-lg cursor-pointer"
        ref={progressRef}
        onClick={handleProgressClick}
      >
        <div
          className="h-full bg-[red] rounded-lg transition-all duration-200 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
