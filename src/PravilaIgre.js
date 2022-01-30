import React from "react";
import slika from './slika.png'
import './PravilaIgre.css'

function PravilaIgre() {
  return (
    <div>
      <div className="naslov"></div>
      <div className="slika">
          <img width={300} src={slika}/>
      </div>
      <div className="sadrzaj">
        Papir, kamen, makaze je igra u kojoj učestvuju dva ili više igrača koristeći jednu ruku. Igrači istovremeno
        pokazuju jedan od tri elementa: makaze (kažiprst i srednji prst koji formiraju latinično slovo V), kamen
        (skupljeni prsti u pesnicu) ili papir (ispružena šaka). U srpskom jeziku se ova igra, najčešće među decom.
        Pravila igre su sledeća: igrač koji je formirao kamen pobeđuje onog koji formira makaze („kamen lomi makaze”), a
        gubi od onog koji ima papir („papir prekriva kamen”) dok igrač sa makazama pobeđuje igrača sa papirom („makaze
        seku papir”). Ukoliko oba igrača pokažu isti element, ishod je nerešen rezultat. Ova igra se može koristiti kao
        metoda biranja poput bacanja novčića. Igra se može i uzastopno pobeđivati uz određene veštine prepoznavanja
        nesvesnog ponašanja igrača kao što su npr. stalno odigravanje istog simbola.
      </div>
    </div>
  );
}

export default PravilaIgre;
