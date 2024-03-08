import { useState, useEffect } from "react";

export default function App() {
	const [count, setCount] = useState(0);
	const [seconds, setSeconds] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
  
	useEffect(() => {
		setIsRunning(false); // Ensure 'Start' is enabled by default
	  }, []);
	useEffect(() => {
	  let timer;
  
	  if (isRunning && count < seconds) {
		timer = setInterval(() => {
		  setCount((prevCount) => prevCount + 1);
		}, 1000);
	  }
  
	  return () => {
		clearInterval(timer);
	  };
	}, [isRunning, count, seconds]);
  
	const startHandler = () => {
	  if (!isRunning && seconds > 0) {
		setIsRunning(true);
	  }
	};
  
	const stopHandler = () => {
	  setIsRunning(false);
	};
  
	const handleInputChange = (event) => {
	  const inputSeconds = parseInt(event.target.value, 10);
	  setSeconds(inputSeconds >= 0 ? inputSeconds : 0);
	  setCount(0);
	};
  
	return (
	  <div className="flex flex-col items-center justify-center h-screen">
		<label htmlFor="seconds-input">Enter number of seconds:</label>
		<input
		  id="seconds-input"
		  type="number"
		  value={seconds}
		  onChange={handleInputChange}
		  className="mb-2 p-2 border rounded"
		/>
		<button
		  id="start"
		  onClick={startHandler}
		  disabled={isRunning }
		  className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
		>
		  Start
		</button>
		<div id="timer" className="text-4xl font-bold mb-2">
		  {count}
		</div>
		<button
		  id="stop"
		  onClick={stopHandler}
		  disabled={!isRunning}
		  className="bg-red-500 text-white px-4 py-2 rounded"
		>
		  Stop
		</button>
	  </div>
	);
}
