import React from "react";
import "./videofooter.css";
//import {MusicNoteIcon} from '@mui/icons-material/MusicNote';

function videofooter() {
  return (
    <div className="videofooter">
      <div className="videofooter_text">
        <h3>@Layane Fervale</h3>
        <p>Descrição do video</p>
        <div className="videofoot_music">
        
          <div className="videoMusicFooter_text">
           <p>Titulo da musica</p>

          </div>
        </div>
      </div>
      <img 
       className="videofooter_record"
       alt="imagem de um vinil girando"
       src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
      />
    </div>
  );
}

export default videofooter;
