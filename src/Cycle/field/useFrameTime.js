import { useState, useEffect } from 'react';

export const useFrameTime = () => {
	const [frameTime, setFrameTime] = useState();
	useEffect(() => {
		let frameId;
		const frame = time => {
			setFrameTime(time);
			frameId = requestAnimationFrame(frame);
		}
		requestAnimationFrame(frame);
		return () => cancelAnimationFrame(frameId)
	}, []);
	return frameTime;
}

