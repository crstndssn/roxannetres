"use client";

import React, { useState, useRef, useEffect } from "react";

import play from "./resources/vectors/play__button.svg";
import pause from "./resources/vectors/pause__button.svg";
import stop from "./resources/vectors/stop__button.svg";
import Image from "next/image";

const PlayerComponent = ({ currentSong, colors }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleTimeUpdate = () => {
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      setProgress((currentTime / duration) * 100);
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
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pauseAudio = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const stopAudio = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
    setProgress(0);
  };

  const handleProgressClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
    setProgress((newTime / audioRef.current.duration) * 100);
  };

  return (
    <div
      className="player"
      style={{
        "--primary-color": colors.primary,
        "--secondary-color": colors.secondary,
        position: "fixed",
        bottom: 0,
        width: "100%",
        background: colors.secondary,
        color: colors.primary,
        borderTop: `2px solid ${colors.primary}`,
        paddingTop: "13px",
        paddingBottom: "13px",
        textAlign: "center",
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
                  srcset=""
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
                  srcset=""
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
                srcset=""
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

          <audio ref={audioRef} src={currentSong.url} />
        </div>
      ) : (
        <h4>No hay ninguna canción seleccionada</h4>
      )}
    </div>
  );
};

export default PlayerComponent;
