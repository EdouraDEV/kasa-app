import React from 'react';
import { useState, useEffect } from "react";
import '../../style/variables.scss';
import './Home.scss'
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';
import HomesGallery from '../../components/Gallery/HomesGallery';
import homeList from '../../DB/homeList.json'

function Home() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    setLocations(homeList);
  }, []);

    
    useEffect(() => {
        document.title = `KASA / Home`
    })
  return (<div>  
    <div className="BigContent">
                <Banner />
                <h1 className="BannerTitle" >Chez vous, <br className="Show"/> partout et ailleurs</h1>
                <div className="MainDivImg">
                    {/*ajout de l'image en scss pour pouvoir la centrer comme sur la maquette*/}
                    <div className="ClimbOne"></div>
                </div>
                {/*instancier le rendu visuel des locations en utilisant la methode map qui permet de boucler sur
            les toutes les locations présente dans le fichier json et je les affiche en important mon composant
            HomesComponents qui boucle sur les pictures présent dans le fichier json*/}
                <div className="BigBossMain">
                    <div className="MainDivHomes">
                        <div className="MainDivHomes_Infos">
                            {
                                locations.map((location) => <HomesGallery key = {location.id} location = {location} />
                                )}
                        </div>
                    </div>
                </div>
            </div>      
            <Footer />
        </div>
  );
}

export default Home;
