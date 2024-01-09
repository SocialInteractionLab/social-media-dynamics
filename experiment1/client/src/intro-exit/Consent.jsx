import React from "react";
import { Button } from "../components/Button";

export function Consent({ next }) {
  return ( <div className="flex items-center justify-center w-screen"><div className="w-1/2">
    <div className="mt-3 sm:mt-5 p-20">
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        Consent
      </h3>
      <div>
        <div className="instructions">
          <div className="smallimage">
            <center><img width="300px" src="./madison.png" /></center>
          </div>
          <p>
            If you agree to take part in the research, you will play a series of communication 
            games with other participants: you will be describing the amount of animals you see, 
            with the goal of all agreeing on how many there are. <br/>
            <br/>This study will take approximately twenty minutes.
          </p> <br/>
          <p className="block-text" id="legal">
            You are participating in a study being performed by cognitive scientists in the 
            University of Wisconsin Madison Psychology Department. 
            If you have questions about this research, please contact us 
            at <a href="mailto://@.com."> @.com</a>.
           <br/> <br/> 
           You must be at least 18 years old to participate. 
           Your participation in this research is voluntary. 
           You may decline to answer any or all of the following questions. 
           You may decline further participation, at any time, without adverse consequences. 
           Your anonymity is assured. </p><br/><br/>
        </div>
      </div>
      <Button handleClick={next} autoFocus>
        <p>Next</p>
      </Button>
    </div> </div> </div>
  );
}
