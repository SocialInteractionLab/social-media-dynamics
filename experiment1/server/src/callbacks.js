import { ClassicListenersCollector } from "@empirica/core/admin/classic";
export const Empirica = new ClassicListenersCollector();

Empirica.onGameStart(({ game }) => {

  game.players.forEach((player, i) => {
    player.set("name", "player " + i);
  });

  [1,2,3,4,5,6].forEach(i => {
    const round = game.addRound({
      idx: i,
      name: "Round " + i + ' / 6',
      task: "Chat"
    });
    round.addStage({ name: "send", duration: 30 });
    round.addStage({ name: "observe", duration: 30 });
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
