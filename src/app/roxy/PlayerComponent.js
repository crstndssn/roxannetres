"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

import play from "./resources/vectors/play__button.svg";
import pause from "./resources/vectors/pause__button.svg";
import stop from "./resources/vectors/stop__button.svg";

const PlayerComponent = ({ currentSong, colors }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (audioRef.current && currentSong?.url) {
      audioRef.current.src = currentSong.url; // Establecer explícitamente la URL
      audioRef.current
        .play()
        .then(() => {
          console.log("Reproducción automática iniciada");
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error("Error al reproducir automáticamente el audio:", error);
        });
    }
  }, [currentSong]);

  useEffect(() => {
    const handleTimeUpdate = () => {
      const currentTime = audioRef.current?.currentTime || 0;
      const duration = audioRef.current?.duration || 0;
      setProgress((currentTime / duration) * 100 || 0);
    };

    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.addEventListener("timeupdate", handleTimeUpdate);
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, []);

  const playAudio = () => {
    
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          console.log("Reproducción iniciada");
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error("Error al reproducir el audio:", error);
        });
    }
  };

  const pauseAudio = () => {
    
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      setProgress(0);
    }
  };

  const handleProgressClick = (e) => {
    if (!audioRef.current) return;

    const rect = e.target.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const duration = audioRef.current.duration || 0;
    const newTime = (clickX / rect.width) * duration;

    audioRef.current.currentTime = newTime;
    setProgress((newTime / duration) * 100 || 0);
  };

  return (
    <div
      className="player"
      style={{
        "--primary-color": colors.primary,
        "--secondary-color": colors.secondary,
        position: "fixed",
        bottom: 15,
        width: "92%",
        background: colors.secondary,
        color: colors.primary,
        border: `2px solid ${colors.primary}`,
        paddingTop: "13px",
        paddingBottom: "13px",
        textAlign: "center",
        borderRadius: '0.75rem',
        zIndex: 1000,
      }}
    >
      {currentSong ? (
        <div className="playercomponent">
          <div className="playercomponent__controls">
            {!isPlaying ? (
              <button
                onClick={playAudio}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1.5em",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Image
                  className="playercomponent__controls--play"
                  src={play}
                  alt="play"
                />
              </button>
            ) : (
              <button
                onClick={pauseAudio}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1.5em",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Image
                  className="playercomponent__controls--pause"
                  src={pause}
                  alt="pause"
                />
              </button>
            )}
            <button
              onClick={stopAudio}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "1.5em",
                marginLeft: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image
                className="playercomponent__controls--stop"
                src={stop}
                alt="stop"
              />
            </button>
          </div>

          <div className="playercomponent__title">
            <h4 style={{ color: colors.primary }}>{currentSong.title}</h4>
            <div
              className="progress-bar"
              onClick={handleProgressClick}
              style={{
                width: "100%",
                height: "10px",
                background: colors.primary,
                border: `1px solid ${colors.primary}`,
                borderRadius: "none",
                cursor: "pointer",
                position: "relative",
                margin: "0px",
              }}
            >
              <div
                className="progress"
                style={{
                  width: `${progress}%`,
                  height: "100%",
                  background: colors.secondary,
                }}
              ></div>
            </div>
          </div>

          <audio ref={audioRef} preload="auto" />
        </div>
      ) : (
        <h4 className="text-black dark:text-white">No hay ninguna canción seleccionada</h4>
      )}
    </div>
  );
};

export default PlayerComponent;
