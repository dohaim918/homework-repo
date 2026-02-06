import { useState, useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString("ko-KR"));
  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    if (!isStart) return;

    const timerId = setInterval(() => setTime(new Date().toLocaleTimeString("ko-KR")), 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [isStart]);

  const handleClick = () => setIsStart((p) => !p);
  return (
    <div className="card">
      <p>CURRENT TIME</p>
      <h2 className={isStart ? "start" : "stop"}>{time}</h2>
      <button className={isStart ? "stop-btn" : "start-btn"} onClick={handleClick}>
        {isStart ? "STOP" : "START"}
      </button>
      <p className={`desc ${isStart ? "start" : "stop"}`}>
        {isStart ? "Timer is running" : "Timer stopped"}
      </p>
    </div>
  );
}
