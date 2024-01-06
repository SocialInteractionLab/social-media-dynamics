import React from "react";
import {InputBox} from "./InputBox";
import {Slider, usePlayer, useRound, useGame } from "@empirica/core/player/classic/react";

export function Opinion({ scope, attribute}){
    const round = useRound();
    const player = usePlayer();
    const game = useGame();

    //set component to appropiate opinion input based on treatment
    const toggle = game.get("treatment")["opinion"] === "slider" ? 1 : 0 ;

    //method for input box sends data of user's opinion to Empirica's mongoDB
    const handleNewMessage = (text) => {
        scope.append(attribute, {
            opinion: text,
            round: round.get('idx'),
            sender: {
                id: player.id,
                name: player.get("name") || player.id,
                avatar: player.get("avatar"),
            },
        });
    };

    const handleSlider = (e) => {
        player.set("guess", e.target.valueAsNumber)
    }
    
    //return opinion input based on treatment
    return(
        <div>
        {
        toggle == 1 ?( 
            <div>
            <h2 className="align-center" style={{ marginBottom: '20px' }}>What proportion of the population are rabbits?</h2>
                <div className="flex flex-row justify-between items-center">
                   <b style={{ marginRight: '10px' }}>0</b>
                   <Slider className="flex flex-col" value={player.get("guess")} onChange={handleSlider} max={100} 
                   />
                    <b style={{ marginLeft: '10px' }}>100</b> 
                </div>
            </div>
        ) : (
            <div>
                <h2 className="align-center text-gray-500 text-center" style={{ marginBottom: '20px' }}>What proportion of the population are rabbits? Please enter your opinion and what convinced you to make this choice.</h2>
                <InputBox onNewMessage ={handleNewMessage}/>
            </div>
        )
        }
        </div>
    )
}