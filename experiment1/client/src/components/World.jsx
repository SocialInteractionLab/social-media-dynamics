import React from "react";
import { useGame, usePlayer } from "@empirica/core/player/classic/react";

export function World() {
  const game = useGame();
  const player = usePlayer();

  const generateRandomEmoji = () => { 
    const isRabbit = Math.random() < 0.5;
    const isSpace = Math.random() < 0.5;
    if (isSpace) {
      return '⠀⠀';
    } else {
      return isRabbit ? '🐇' : '🐿️';
    }
  };

  const numberOfEmojis = Math.floor(Math.random() * 8) + 1
  const critterDistribution = player.get('critters')
  console.log(critterDistribution)

  return (
    <div  style={{ backgroundImage: 'url("/freepik.png")', backgroundColor: '#268b07', width: '90%', height: '90%', borderRadius: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
      {[...Array(numberOfEmojis)].map((_, index) => (
        <span key={index} style={{ fontSize: '40px' }}>
          {generateRandomEmoji()}
        </span>
      ))}
    </div>
  );
}

