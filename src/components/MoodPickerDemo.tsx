import { useState } from "react";

function MoodPickerDemo(): JSX.Element {
  const [moodValueFromCurrentRender, queueRerenderWithNewMoodValue] =
    useState("confused");

  const handleMoodChangeToHappy = () => {
    
    queueRerenderWithNewMoodValue("happy");

  };

  const handleMoodChangeToConfused = () => {
    
    queueRerenderWithNewMoodValue("confused");

  };

  const handleMoodChangeToSad = () => {
    
    queueRerenderWithNewMoodValue("sad");

  };

  const handleMoodChangeToWhale = () => {
    queueRerenderWithNewMoodValue("It's whale time")
  }

  const handleMoodChangeToMonkey = () => {
    queueRerenderWithNewMoodValue("It's Monkey TIME!!")
  }

  const handleMoodChangeToMilk = () => {
    queueRerenderWithNewMoodValue("Enjoy a glass of milk...")
  }

  return (
    <>
      <h1>Mood Picker Demo</h1>
      <p>Chosen mood: {moodValueFromCurrentRender.toUpperCase()}</p>
      <button onClick={handleMoodChangeToHappy}>😀</button>
      <button onClick={handleMoodChangeToConfused}>🤔</button>
      <button onClick={handleMoodChangeToSad}>😢</button>
      <button onClick={handleMoodChangeToWhale}>🐋</button>
      <button onClick={handleMoodChangeToMonkey}>🐵</button>
      <button onClick={handleMoodChangeToMilk}>🥛</button>
    </>
  );
}

export default MoodPickerDemo;
