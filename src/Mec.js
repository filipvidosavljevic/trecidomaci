import React, { useState } from "react";
import kamen from "./kamen.jpg";
import papir from "./papir.jpg";
import makaze from "./makaze.jpg";

const niz = [
  { src: kamen, name: "kamen" },
  { src: papir, name: "papir" },
  { src: makaze, name: "makaze" },
];

function Mec({
  randomIntFromInterval,
  izracunajPobednika,
  mojIzbor,
  setMojIzbor,
  izborProtivnika,
  setIzborProtivnika,
}) {
  return (
    <div className="igra">
      <div className="izborOblika">
        <div className="mojIzbor">
          <div>Izaberite znak</div>
          {niz.map((znak) => {
            return (
              <div onClick={() => setMojIzbor(znak.name)}>
                <img className={mojIzbor == znak.name && "selektovan"} width={150} src={znak.src} />
              </div>
            );
          })}
        </div>
        <>
          {izborProtivnika ? (
            <button
              onClick={() => {
                setIzborProtivnika(null);
                setMojIzbor(null);
              }}>
              Pocisti
            </button>
          ) : (
            <button
              disabled={!mojIzbor}
              onClick={() => {
                const broj = randomIntFromInterval(0, 2);
                setIzborProtivnika(broj);
                izracunajPobednika(mojIzbor, niz[broj]?.name);
              }}>
              Odigraj
            </button>
          )}
        </>

        <div className="izabraniZnakovi">
          <div className="izabraniZnak">
            Moj izbor: {mojIzbor}
            <img width={150} src={niz.find((item) => item.name == mojIzbor)?.src} />
          </div>
          <div className="izabraniZnak">
            Protivnikov izbor: {niz[izborProtivnika]?.name}
            <img width={150} src={niz[izborProtivnika]?.src} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mec;
