import { ClassicListenersCollector } from "@empirica/core/admin/classic";
export const Empirica = new ClassicListenersCollector();

Empirica.onGameStart(({ game }) => {
  [0,1,2,3,4,5].forEach(i => {
    const round = game.addRound({
      idx: i,
      name: "Send message",
      task: "Chat"
    });
    round.addStage({ name: "Chat -- phase 1", duration: 1000000 });
  });
})

Empirica.onRoundStart(({ round }) => {
  const players = round.currentGame.players;
  console.log(players)
  players.forEach((player, i) => {
    const otherPlayers = players.filter(p => p.id != player.id)
    console.log('setting player id', player.id, 'recipient to ', otherPlayers[(i + round.get('idx')) % otherPlayers.length].id)
    player.set('recipient', otherPlayers[(i + round.get('idx')) % otherPlayers.length].id);
  });
});


Empirica.onStageStart(({ stage }) => {});


Empirica.onStageEnded(({ stage }) => {});

Empirica.onRoundEnded(({ round }) => {});

Empirica.onGameEnded(({ game }) => {});
