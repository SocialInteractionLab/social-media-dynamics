import { ClassicListenersCollector } from "@empirica/core/admin/classic";
export const Empirica = new ClassicListenersCollector();

Empirica.onGameStart(({ game }) => {
  const round = game.addRound({
    name: "Chat",
    task: "Chat",
  });
  round.addStage({ name: "Chat -- phase 1", duration: 20 });
  round.addStage({ name: "Chat -- phase 2", duration: 20 });
  round.addStage({ name: "Chat -- phase 3", duration: 20 });
});




Empirica.onRoundStart(({ game, round }) => {
  players.forEach(player => {
    const roomId = _.findIndex(rooms, room => _.includes(room, player._id));
    player.set('roomId', 'room' + roomId);
    player.set('partner', player.get('partnerList')[round.index]),
    player.set('role', player.get('roleList')[round.index])
    player.set('clicked', false);
  });
});


Empirica.onStageStart(({ stage }) => {});


Empirica.onStageEnded(({ stage }) => {});

Empirica.onRoundEnded(({ round }) => {});

Empirica.onGameEnded(({ game }) => {});
