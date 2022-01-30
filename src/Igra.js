import React, { useState } from "react";
import "./Igra.css";
import Mec from "./Mec";

function Igra() {
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const izracunajPobednika = (prvi, drugi) => {
    if (prvi == drugi) {
      setRezultatText("Nereseno");
      return;
    } else if (
      (prvi == "kamen" && drugi == "papir") ||
      (prvi == "papir" && drugi == "makaze") ||
      (prvi == "makaze" && drugi == "kamen")
    ) {
      setProtivnickiPoeni(protivnickiPoeni + 1);
      setRezultatText("Protivnik je pobedio");
      return;
    } else {
      setMojiPoeni(mojiPoeni + 1);
      setRezultatText("Pobeda");
      return;
    }
  };

  const [mojiPoeni, setMojiPoeni] = useState(0);
  const [protivnickiPoeni, setProtivnickiPoeni] = useState(0);

  const [mojIzbor, setMojIzbor] = useState(null);
  const [izborProtivnika, setIzborProtivnika] = useState(null);

  const [rezultatText, setRezultatText] = useState("");

  return (
    <div className="kontejner">
      <Mec mojIzbor={mojIzbor} setMojIzbor={setMojIzbor} izborProtivnika={izborProtivnika} setIzborProtivnika={setIzborProtivnika} randomIntFromInterval={randomIntFromInterval} izracunajPobednika={izracunajPobednika} />

      <div className="rezultati">
        <div>{rezultatText}</div>
        <div className="mojiPoeni">Moji poeni: {mojiPoeni}</div>
        <div className="protivnickiPoeni">Protivnicki poeni: {protivnickiPoeni}</div>
      </div>
    </div>
  );
}

export default Igra;
