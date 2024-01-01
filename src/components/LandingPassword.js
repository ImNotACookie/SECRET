import { useEffect, useState } from "react";
import Happy from "./Happy";

function LandingPassword() {
  const [password, setPassword] = useState("");

  useEffect(() => {}, []);

  function toggleAudio() {
    const music = document.getElementById("music");
    const btn = document.getElementById("toggle-music");

    if (music.paused) {
      btn.textContent = "on";
      music.play();
      return;
    }
    btn.textContent = "off";
    music.pause();
  }

  return (
    <>
      {password !== "1.1.24YAMIISCOOL" ? (
        <section className="bg-gradient-to-r from-colorOne from-50% to-colorTwo to-50%">
          <div className="container mx-auto h-screen flex justify-center items-center flex-col gap-6">
            <label className="text-4xl text-colorFour font-bold text-center">
              You Need A Password To Enter
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(() => e.target.value)}
              placeholder="???"
              className="border-2 border-colorFour px-3 text-2xl py-2 w-64 rounded-3xl focus:outline-none text-colorThree"
            />
          </div>
        </section>
      ) : null}
      {password === "1.1.24YAMIISCOOL" ? (
        <>
          <Happy />
          <audio id="music" autoPlay loop>
            <source src="./MEGALOVANIA.mp3" type="audio/mp3" />
          </audio>
          <button
            id="toggle-music"
            className="fixed bottom-3 right-3 w-14 h-14 rounded-[50%] bg-colorOne text-colorFive font-bold text-xl border-2 border-colorFive"
            onClick={toggleAudio}
          >
            on
          </button>
        </>
      ) : null}
    </>
  );
}

export default LandingPassword;
