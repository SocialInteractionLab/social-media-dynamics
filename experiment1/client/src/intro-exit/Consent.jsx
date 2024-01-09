import React from "react";
import { Button } from "../components/Button";

export function Consent({ next }) {
  return (
    <div className="mt-3 sm:mt-5 p-20">
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        Overview
      </h3>
      <div>
        <div className="instructions">
          <div className="smallimage">
            <center><img width="300px" src="/experiment/stanford.png" /></center>
          </div>
          <p>
            If you agree to take part in the research, you will play a series of communication games with other participants: you will be describing the amount of animals you see, with the goal of all agreeing on how many there are. This study will take approximately twenty minutes.
          </p>
          <p className="block-text" id="legal">
            By answering the following questions, you are participating in a study being performed by cognitive scientists in the University of Wisconsin Madison Psychology Department. If you have questions about this research, please contact us at <a href="mailto://@.com."> @.com</a>.
            You must be at least 18 years old to participate. Your participation in this research is voluntary. You may decline to answer any or all of the following questions. You may decline further participation, at any time, without adverse consequences. Your anonymity is assured; the researchers who have requested your participation will not receive any personal information about you. Note, however, that we have recently been made aware that your public Amazon.com profile can be accessed via your worker ID if you do not choose to opt out. If you would like to opt out of this feature, you may follow instructions available <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=16465241">here</a>.
          </p>
        </div>
      </div>
      <Button handleClick={next} autoFocus>
        <p>Next</p>
      </Button>
    </div>
  );
}
