"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { store } from "../../app/firebase";

// import Genesis from "./time/genesis";
// import Mercurio from "./mercurio";
// import Blue from "./blue";
// import Semillas from "./semillas";
// import Florecer from "./florecer";
// import Viento from "./viento";
// import Futuro from "./futuro";

// NEW COMPONENTS
import Genesis from "./time/genesis";
import Blue from "./time/blue";

import PlayerComponent from "./PlayerComponent";

import lock from "./resources/vectors/lock.svg";


import { auth } from "../firebase";
import Ahora from "./time/ahora";

const Page = () => {
  // // nueva configuración
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  // const [currentEmail, setCurrentEmail] = useState(null);
  const [isPremium, setIsPremium] = useState(false);

  const [usuario, setUsuario] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [userSub, setUserSub] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [currentEmail, setCurrentEmail] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  const [currentSong, setCurrentSong] = useState("");
  const [colors, setColors] = useState("");

  return (
    <div>
      <div className="alterocio">
        <div className="pb-20 px-4 md:px-0 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

          <Link href={'/kam/genesis'} className="bg-black flex gap-3 justify-center items-center text-center flex-col py-10 rounded-xl">
            <h1 className="kam-font text-[#FAD691] text-4xl tracking-tighter">DORADO</h1>
          </Link>

          <Link href={'/kam/mercurio'} className="bg-[#D4F3D5] flex gap-3 justify-center items-center text-center flex-col py-10 rounded-xl">
            <h1 className="kam-font text-[#8E58FF] text-4xl tracking-tighter">MAR</h1>
          </Link>

          <Link href={'/kam/blue'} className="bg-[#D00303] flex gap-3 justify-center items-center text-center flex-col py-10 rounded-xl">
            <h1 className="kam-font text-black text-4xl tracking-tighter">VELVET</h1>
          </Link>
        </div>

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
