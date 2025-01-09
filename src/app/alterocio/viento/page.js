"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { store } from "../../../app/firebase";


// NEW COMPONENTS
import Genesis from "../time/genesis";
import Mercurio from "../time/mercurio";
import Blue from "../time/blue";
import Semillas from "../time/semillas";
import Florecer from "../time/florecer";
import Viento from "../time/viento";
// import Futuro from "./time/futuro";
// import Ahora from "./time/ahora";

import PlayerComponent from "../PlayerComponent";

import lock from "../resources/vectors/lock.svg";

import Card from "../Card";

import { auth } from "../../firebase";

const Page = () => {
  // // nueva configuración
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [isPremium, setIsPremium] = useState(false);

  const [usuario, setUsuario] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [userSub, setUserSub] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [currentEmail, setCurrentEmail] = useState(null);
  const [loading, setLoading] = useState(true); 

  const [currentSong, setCurrentSong] = useState("");
  const [colors, setColors] = useState("");

  return (
    <div className="w-full flex justify-center items-center px-4 md:px-0">
      <div className="alterocio w-full">
        {userSub == false ? (
          <div className="container mx-auto">
            <Viento
              id="dorado1"
              setColors={setColors}
              setCurrentSong={setCurrentSong}
            />
          </div>
        ) : (
          <div>
           premium
          </div>
        )}
      </div>
      <PlayerComponent
        currentSong={currentSong}
        colors={colors}
        playIcon={{ play: "play_icon_url", pause: "pause_icon_url" }}
        volumeIcon="volume_icon_url"
        durationIcon="duration_icon_url"
      />
    </div>
  );
};

export default Page;
