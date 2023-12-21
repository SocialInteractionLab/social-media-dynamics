import { ClassicListenersCollector } from "@empirica/core/admin/classic";
export const Empirica = new ClassicListenersCollector();
import _ from "lodash";


Empirica.onGameStart(({ game }) => {
  const critters = {nRabbits: 3, nSquirrels: 1}
  const rabbits = _.repeat('🐇 ', critters['nRabbits']).split(' ')
  const squirrels = _.repeat('🐿️ ', critters['nSquirrels']).split(' ')

 // create spaces with roughly 50% probability
  const nSpaces = 1/2 * _.sum(_.values(critters))
  const spaces = _.repeat('\u00A0 \u00A0 \u00A0 \u00A0', nSpaces)

  // scramble the order
  const emojiArray = _.shuffle(_.concat(rabbits, squirrels, spaces));

  game.players.forEach((player, i) => {
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
