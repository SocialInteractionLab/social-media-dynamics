import React from "react";
import {InputBox} from "./InputBox";
import {usePlayer, useRound, useGame } from "@empirica/core/player/classic/react";
import { Slider } from '@mui/material';

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

    const handleSlider = (event, value) => {
        player.set("guess", value)
    }
    
    //return opinion input based on treatment
    return(
        <div>
        {
        toggle == 1 ?( 
            <div>
            <h2 className="text-center mb-5">What proportion of the population are rabbits?</h2>
            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" onChangeCommitted={handleSlider} />
          </div>
        ) : (
            <div>
                <h2 className="align-center text-gray-500 text-center" style={{ marginBottom: '20px' }}>What proportion of the population are rabbits? Please enter your opinion and what convinced you to make this choice.</h2>
                <InputBox onNewMessage ={handleNewMessage} buttonPosition="below" buttonText="Submit" buttonStyles='w-auto h-auto py-2 px-4 text-base'/>
            </div>
        )
        }
        </div>
    )
}