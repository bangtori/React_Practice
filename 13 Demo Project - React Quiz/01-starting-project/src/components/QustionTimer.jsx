import { useState, useEffect } from "react";

function QustionTimer({ timeout, onTimeout }) {
  const [remainTime, setRemainTime] = useState(timeout);
  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainTime((prevRemainTime) => prevRemainTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return <progress id="question-time" max={timeout} value={remainTime} />;
}

export default QustionTimer;
