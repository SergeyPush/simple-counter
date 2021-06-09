import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState();
  const [pause, setPause] = useState(false);

  const startTimer = () => {
    clearInterval(intervalId);
    if (intervalId && pause === false) {
      stopTimer();
      return;
    }
    const id = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    setIntervalId(id);
    setPause(false);
  };

  const pauseTimer = () => {
    clearInterval(intervalId);
    setPause(true);
  };
  const resetTimer = () => {
    setTimer(0);
  };
  const stopTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setTimer(0);
  };

  const getTime = (seconds = 1) => {
    return ('0' + Math.floor((timer / seconds) % 60)).slice(-2);
  };

  return (
    <div className="app">
      <div className="timer">
        <span>{getTime(60 * 60)}:</span>
        <span>{getTime(60)}:</span>
        <span>{getTime()}</span>
      </div>
      <div className="controls">
        <button className="button" onClick={startTimer}>
          Start/Stop
        </button>
        <button className="button" onDoubleClick={pauseTimer}>
          Wait
        </button>
        <button className="button" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
