import { useEffect } from "react";

function Happy() {
  useEffect(() => {
    const mainSection = document.getElementById("main-section");
    let colors = ["#1B2021", "#30343F", "#89023E", "#EA638C", "#FFD9DA"];
    let num = 0;

    setInterval(() => {
      mainSection.style.backgroundColor = colors[num % colors.length];
      num++;
    }, 1500);
  }, []);

  return (
    <section className="bg-colorThree duration-300" id="main-section">
      <div className="container mx-auto h-screen flex justify-center items-center flex-col">
        <h1 className="text-6xl text-white font-bold text-center">
          HAPPY BIRTHDAY! <span className="font-light text-3xl">SEIF</span>
        </h1>
        <h1 className="text-4xl text-white font-bold uppercase mt-8 text-center">
          let's get into the party 🎈
        </h1>
      </div>
    </section>
  );
}

export default Happy;
