import { ClassicListenersCollector } from "@empirica/core/admin/classic";
export const Empirica = new ClassicListenersCollector();
import _ from "lodash";


Empirica.onGameStart(({ game }) => {


// generate a normal distribution between 0-8 with a mean of 4 
function generateRatioDistribution(mean, stdDev, range) {
  const values = [];

  for (let i = 0; i < range.length; i++) {
    const ratio = range[i];
    const probability = Math.exp(-(Math.pow(ratio - mean, 2) / (2 * Math.pow(stdDev, 2)))) / (stdDev * Math.sqrt(2 * Math.PI));
    values.push({ x: ratio, y: probability });
  }

  return values;
}

const meanRatio = 4;  
const stdDevRatio = 2;  

const rangeRatio = Array.from({ length: 9 }, (_, i) => i); 

// Generate distribution for the ratio of squirrels to rabbits
const distributionRatio = generateRatioDistribution(meanRatio, stdDevRatio, rangeRatio);

function sampleRandomRatio(distribution) {
  const rand = Math.random();
  let cumulativeProbability = 0;

  for (const entry of distribution) {
    cumulativeProbability += entry.y;
    if (rand <= cumulativeProbability) {
      return entry.x;
    }
  }

  // In case of rounding errors, return the last value
  return distribution[distribution.length - 1].x;
}


game.players.forEach((player,i) => {
  const nrabbits = Array.from({ length: 1 }, () => sampleRandomRatio(distributionRatio))[0];
  const nsquirrels = 8 - nrabbits;

const rabbits = _.repeat('🐇 ', nrabbits).split(' ');
const squirrels = _.repeat('🐿️ ', nsquirrels).split(' ');

console.log('nR:', nrabbits);
  console.log('nS:', nsquirrels);

 // create spaces with roughly 50% probability
  const nSpaces = 1/2 * [nrabbits+nsquirrels]
  const spaces = _.repeat('\u00A0 \u00A0 \u00A0 \u00A0', nSpaces)

  // scramble the order
  const emojiArray = _.shuffle(_.concat(rabbits, squirrels, spaces));

    player.set("name", "player " + i);
    player.set("emojiArray", emojiArray)
  });






  [1,2,3,4,5,6].forEach(i => {
    const round = game.addRound({
      idx: i,
      name: "Round " + i + ' / 6',
      task: "Chat"
    });
    round.addStage({ name: "send", duration: 30 });
    round.addStage({ name: "observe", duration: 300000 });
  });
})

Empirica.onRoundStart(({ round }) => {
  const players = round.currentGame.players;
  players.forEach((player, i) => {
    const otherPlayers = players.filter(p => p.id != player.id)
    console.log('setting player id', player.id, 'recipient to ',
                otherPlayers[(i + round.get('idx')) % otherPlayers.length].id)
    player.set('recipient', otherPlayers[(i + round.get('idx')) % otherPlayers.length].id);
  });
});

Empirica.onStageStart(({ stage }) => {});

Empirica.onStageEnded(({ stage }) => {});

Empirica.onRoundEnded(({ round }) => {});

Empirica.onGameEnded(({ game }) => {});
