import React from "react";
import {InputBox} from "./InputBox";
import {Slider, usePlayer, useRound } from "@empirica/core/player/classic/react";

export function Opinion({toggle, scope, attribute}){
    const round = useRound();
    const player = usePlayer();

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
    
    //return the slider if toggle is 0 else return a an input box component
    return(
        <div>
        {
        toggle == 0 ?( 
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