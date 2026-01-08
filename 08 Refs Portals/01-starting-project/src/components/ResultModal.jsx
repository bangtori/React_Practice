import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
export default function ResultModal({
  ref,
  targetTime,
  remainingTime,
  onReset,
}) {
  const dialog = useRef();

  const isUserLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
  // 함수를 외부에서 사용할 수 있게해줌, 따라서 외부컴포넌트와 해당 컴포넌트를 좀 더 독립적으로 다룰 수 있음
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {isUserLost && <h2>You lost</h2>}
      {!isUserLost && <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timmer with{" "}
        <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}
