"use client";

import { useRef, useState } from "react";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";

interface VideoCardProps {
  videoSrc: string;
  title?: string;
  index: number;
}

export default function VideoCard({ videoSrc, title, index }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = async () => {
    setIsHovered(true);
    if (videoRef.current) {
      try {
        await videoRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Error playing video:", error);
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const handleClick = async () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        try {
          await videoRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.error("Error playing video:", error);
        }
      }
    }
  };

  return (
    <div
      className="group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-salon-red/30"
      // Event Listeners
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* Video */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover blur-md"
        muted
        playsInline
        loop
      >
        <source src={videoSrc} type="video/mp4" />
        Tu navegador no soporta el video.
      </video>

      {/* Dark Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-salon-black via-transparent to-transparent transition-opacity duration-300 ${
          isHovered ? "opacity-60" : "opacity-80"
        }`}
      />

      {/* Red Border on Hover */}
      <div
        className={`absolute inset-0 border-4 border-salon-red rounded-2xl transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Play/Pause Icon */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          isHovered && !isPlaying ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-16 h-16 rounded-full bg-salon-red/90 flex items-center justify-center backdrop-blur-sm">
          {isPlaying ? (
            <PauseIcon className="w-8 h-8 text-salon-white" />
          ) : (
            <PlayIcon className="w-8 h-8 text-salon-white ml-1" />
          )}
        </div>
      </div>

      {/* Title Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-salon-black to-transparent">
        <p className="text-salon-white font-semibold text-lg">
          {title || `Transformación ${index + 1}`}
        </p>
        <div className="h-1 w-12 bg-salon-red rounded-full mt-2" />
      </div>

      {/* Corner Decoration */}
      <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-8 h-8 border-t-2 border-l-2 border-salon-red rounded-tl-lg" />
      </div>

      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-8 h-8 border-t-2 border-r-2 border-salon-red rounded-tr-lg" />
      </div>
    </div>
  );
}
