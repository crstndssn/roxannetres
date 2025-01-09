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
import Mercurio from "./time/mercurio";
import Blue from "./time/blue";
import Semillas from "./time/semillas";
import Florecer from "./time/florecer";
import Viento from "./time/viento";
// import Futuro from "./time/futuro";
// import Ahora from "./time/ahora";

import PlayerComponent from "./PlayerComponent";

import lock from "./resources/vectors/lock.svg";

import Card from "./Card";

import { auth } from "../firebase";
import Futuro from "./time/futuro";
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

          <Link href={'/alterocio/genesis'} className="bg-genesis flex gap-3 justify-center items-center text-center flex-col py-10 rounded-xl">
            <h1 className="alter-font text-black text-4xl tracking-tighter">génesis</h1>
            <p className="text-black text-lg border px-4 py-0 w-fit tracking-tight rounded-full">2017</p>
          </Link>

          <Link href={'/alterocio/mercurio'} className="bg-mercurio flex gap-3 justify-center items-center text-center flex-col py-10 rounded-xl">
            <h1 className="alter-font text-black text-4xl tracking-tighter">mercúrio</h1>
            <p className="text-black text-lg border px-4 py-0 w-fit tracking-tight rounded-full">2018</p>
          </Link>

          <Link href={'/alterocio/blue'} className="bg-blue flex gap-3 justify-center items-center text-center flex-col py-10 rounded-xl">
            <h1 className="alter-font text-black text-4xl tracking-tighter">blue</h1>
            <p className="text-black text-lg border px-4 py-0 w-fit tracking-tight rounded-full">2019</p>
          </Link>

          <Link href={'/alterocio/semillas'} className="bg-semillas flex gap-3 justify-center items-center text-center flex-col py-10 rounded-xl">
            <h1 className="alter-font text-black text-4xl tracking-tighter">semillas</h1>
            <p className="text-black text-lg border px-4 py-0 w-fit tracking-tight rounded-full">2020</p>
          </Link>

          <Link href={'/alterocio/florecer'} className="bg-florecer flex gap-3 justify-center items-center text-center flex-col py-10 rounded-xl">
            <h1 className="alter-font text-black text-4xl tracking-tighter">florecer</h1>
            <p className="text-black text-lg border px-4 py-0 w-fit tracking-tight rounded-full">2021</p>
          </Link>

          <Link href={'/alterocio/viento'} className="bg-viento flex gap-3 justify-center items-center text-center flex-col py-10 rounded-xl">
            <h1 className="alter-font text-black text-4xl tracking-tighter">viento</h1>
            <p className="text-black text-lg border px-4 py-0 w-fit tracking-tight rounded-full">2022</p>
          </Link>

          <Link href={'/alterocio/futuro'} className="bg-futuro flex gap-3 justify-center items-center text-center flex-col py-10 rounded-xl">
            <h1 className="alter-font text-black text-4xl tracking-tighter">futuro</h1>
            <p className="text-black text-lg border px-4 py-0 w-fit tracking-tight rounded-full">2023</p>
          </Link>

          <Link href={'/alterocio/ahora'} className="bg-ahora flex gap-3 justify-center items-center text-center flex-col py-10 rounded-xl">
            <h1 className="alter-font text-black text-4xl tracking-tighter">ahora</h1>
            <p className="text-black text-lg border px-4 py-0 w-fit tracking-tight rounded-full">2024</p>
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
