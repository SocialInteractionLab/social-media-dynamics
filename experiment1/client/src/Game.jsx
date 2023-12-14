import { useGame } from "@empirica/core/player/classic/react";

import React from "react";
import { Chat } from "./components/Chat"
import { Profile } from "./components/Profile"
import { World } from "./components/World";

export function Game() {
  const game = useGame();
  const { playerCount } = game.get("treatment");

  return (
    <div className="h-full w-full flex">
      <div className="world-container" style={{ flex: 1 }}>
        <World />
      </div>
      <div className="h-full w-full flex flex-col">
        <Profile />
        <div className="h-full flex items-center justify-center">
          <Chat scope={game} attribute="chat" />
        </div>
      </div>
    </div>
  );
}
