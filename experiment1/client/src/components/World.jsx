import React from "react";
import { useGame, usePlayer } from "@empirica/core/player/classic/react";
import _ from "lodash";

export function World() {
  const game = useGame();
  const player = usePlayer();

  // turn critter distribution into emoji arrays
  const critterDistribution = player.get('emojiArray')
 

  return (
    <div style={{
           backgroundImage: 'url("/freepik.png")', backgroundColor: '#268b07',
           width: '90%', height: '90%',
           borderRadius: '20px', display: 'flex', flexWrap: 'wrap',
           justifyContent: 'center', alignItems: 'center'}}>
      {[...Array(1)].map((_, index) => (
        <span key={index} style={{ fontSize: '70px' }}>
          {critterDistribution}
        </span>
      ))}
    </div>
  );
}

