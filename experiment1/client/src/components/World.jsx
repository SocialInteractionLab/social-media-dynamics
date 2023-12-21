import React from "react";
import { useGame, usePlayer } from "@empirica/core/player/classic/react";
import _ from "lodash";

export function World() {
  const game = useGame();
  const player = usePlayer();

  // turn critter distribution into emoji arrays
  const critterDistribution = player.get('critters')
  const rabbits = _.repeat('🐇 ', critterDistribution['nRabbits']).split(' ')
  const squirrels = _.repeat('🐿️ ', critterDistribution['nSquirrels']).split(' ')

  // create spaces with roughly 50% probability
  const nSpaces = 1/2 * _.sum(_.values(critterDistribution))
  const spaces = _.repeat('\u00A0 \u00A0 \u00A0 \u00A0', nSpaces)

  // scramble the order
  const emojiArray = _.shuffle(_.concat(rabbits, squirrels, spaces));

  return (
    <div style={{
           backgroundImage: 'url("/freepik.png")', backgroundColor: '#268b07',
           width: '90%', height: '90%',
           borderRadius: '20px', display: 'flex', flexWrap: 'wrap',
           justifyContent: 'center', alignItems: 'center'}}>
      {[...Array(1)].map((_, index) => (
        <span key={index} style={{ fontSize: '70px' }}>
          {emojiArray}
        </span>
      ))}
    </div>
  );
}

