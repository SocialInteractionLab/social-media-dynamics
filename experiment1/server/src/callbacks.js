import { ClassicListenersCollector } from "@empirica/core/admin/classic";
export const Empirica = new ClassicListenersCollector();
import _ from "lodash";

Empirica.onGameStart(({ game }) => {
  const trueP = 0.7; //was 'treatment.trueP' in Robert's pseudocode
  const binomial = (p, n) => {
    const flips = _.range(n).map((i) => {
      return Math.random() < p;
    });
    return _.sum(flips);
  };

  const result = game.players.map((player) => {
    const n = Math.floor(Math.random() * 9);
    const nSquirrels = binomial(trueP, n);
    return { nSquirrels, nRabbits: n - nSquirrels };
  });
  const s = _.range(1000).map((i) => binomial(trueP, 3));
  console.log("s", _.countBy(s));

  const nRabbits = result[0].nRabbits;
  const nSquirrels = result[0].nSquirrels;
  console.log("nRabbits:", nRabbits);
  console.log("nSquirrels:", nSquirrels);

  game.players.forEach((player, i) => {
    //convert to emojis
    const rabbits = _.repeat("🐇 ", nRabbits).split(" ");
    const squirrels = _.repeat("🐿️ ", nSquirrels).split(" ");

    // create spaces with roughly 50% probability
    const nSpaces = (1 / 2) * [nRabbits + nSquirrels];
    const spaces = _.repeat("\u00A0 \u00A0 \u00A0 \u00A0", nSpaces);

    // hide some critters for realism
    //const maskCritters=_.compact(_.shuffle(_.concat(rabbits, squirrels)));
    // const numToRemove = _.random(0, maskCritters.length);
    //console.log('hidden critters:', numToRemove);

    // console.log('mask critters:', maskCritters);

    //const hiddenCritters = maskCritters.slice(0, maskCritters.length - numToRemove);
    // console.log('hidden critters:', hiddenCritters);

    //scramble spaces and critters
    //const emojiArray = _.shuffle(_.concat(hiddenCritters, spaces));

    //instead of masking them, just scramble
    const emojiArray = _.shuffle(_.concat(rabbits, squirrels, spaces));

    player.set("name", "player " + i);
    player.set("emojiArray", emojiArray);
  });

  [1, 2, 3, 4, 5, 6].forEach((i) => {
    const round = game.addRound({
      idx: i,
      name: "Round " + i + " / 6",
      task: "Chat",
    });
    round.addStage({ name: "send", duration: 30 });
    round.addStage({ name: "observe", duration: 300000 });
  });
});

Empirica.onRoundStart(({ round }) => {
  const players = round.currentGame.players;
  players.forEach((player, i) => {
    const otherPlayers = players.filter((p) => p.id != player.id);
    console.log(
      "setting player id",
      player.id,
      "recipient to ",
      otherPlayers[(i + round.get("idx")) % otherPlayers.length].id
    );
    player.set(
      "recipient",
      otherPlayers[(i + round.get("idx")) % otherPlayers.length].id
    );
  });
});

Empirica.onStageStart(({ stage }) => {});

Empirica.onStageEnded(({ stage }) => {});

Empirica.onRoundEnded(({ round }) => {});

Empirica.onGameEnded(({ game }) => {});
