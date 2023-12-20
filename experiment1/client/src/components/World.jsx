import React from "react";
import { useGame, usePlayer } from "@empirica/core/player/classic/react";

export function World() {
  const game = useGame();
  const player = usePlayer();

  const critterDistribution = player.get('critters')
  const emojiMapping = {nRabbits: '🐇',nSquirrels: '🐿️'};


  //console.log(typeof critterDistribution)

const emojiArray = (critterDistribution) => {
  const emojiArray = [];

  for (const key in critterDistribution) {
    if (critterDistribution.hasOwnProperty(key) && emojiMapping[key]) {
      const emoji = emojiMapping[key];
      const count = critterDistribution[key];

      for (let i = 0; i < count; i++) {
        emojiArray.push(emoji);
        if (Math.random() < 0.5) {
          emojiArray.push('\u00A0 \u00A0 \u00A0 \u00A0');
        }
      }
    }
  }
   for (let i = emojiArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [emojiArray[i], emojiArray[j]] = [emojiArray[j], emojiArray[i]];
  }

  return emojiArray;
};



  return (
    <div  style={{ backgroundImage: 'url("/freepik.png")', backgroundColor: '#268b07', width: '90%', height: '90%', borderRadius: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
      {[...Array(1)].map((_, index) => (
        <span key={index} style={{ fontSize: '40px' }}>
          {emojiArray(critterDistribution)}
        </span>
      ))}
    </div>
  );
}

