import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  function handleClick() {
    setEnteredPlayerName(
      playerName.current.value.trim() === "" ? null : playerName.current.value
    );
    playerName.current.value = "";
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
// 기존 useState 사용버전 -> 인풋하나 버튼으로 관리하는데 너무 복잡함 이걸 ref로 간단하게 만들 수 있음
// export default function Player() {
//   const [enteredPlayerName, setEnteredPlayerName] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   function handleChange(e) {
//     setSubmitted(false);
//     setEnteredPlayerName(e.target.value);
//   }

//   function handleClick() {
//     setSubmitted(true);
//   }
//   return (
//     <section id="player">
//       <h2>Welcome {submitted ? enteredPlayerName : "unknown entity"}</h2>
//       <p>
//         <input type="text" onChange={handleChange} value={enteredPlayerName} />
//         <button onClick={handleClick}>Set Name</button>
//       </p>
//     </section>
//   );
// }
