import React, { useEffect, useState } from 'react';

const Stopwatch = () => {
	const [time, setTime] = useState(0);
	const [running, setRunning] = useState(false);
	const [count, setCount] = useState(0);

	const handleClick = () => {
		setRunning((prevState) => !prevState);
		setCount((prevState) => prevState + 1);
	};
	useEffect(() => {
		let interval;
		if (running) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime + 10);
			}, 10);
		} else if (!running) {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [running]);

	return (
		<div className='stopwatch flex gap-5'>
			{console.log(count)}
			<div className='numbers'>
				<span>{('0' + Math.floor((time / 360000) % 60)).slice(-2)}:</span>
				<span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
				<span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
				<span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
			</div>
			<div className='buttons '>
				{running ? (
					<button onClick={handleClick}>
						<i className='fa-solid fa-pause'></i>
					</button>
				) : (
					<button onClick={handleClick}>
						<i className='fa-solid fa-play'></i>
					</button>
				)}
			</div>
		</div>
	);
};

export default Stopwatch;
