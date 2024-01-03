import React from "react";

export function Opinion(toggle){
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
                <p>hi</p>
            </div>
        )
        }
        </div>
    )
}